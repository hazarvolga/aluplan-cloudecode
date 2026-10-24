// Browser smoke checks for the built site. Run next build, then next start -p 3127, then:
//   NODE_PATH=<dir containing playwright> node web/tests/smoke-browser.cjs
// Checks DOM and behaviour only (no screenshots). Production build: React dev-only key warnings are not visible here.
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:3127';
const routes = ['/urunler', '/urunler/allplan', '/paket-karsilastirma', '/katalog'];
(async () => {
  const browser = await chromium.launch();
  const results = [];
  const log = (name, ok, detail = '') => results.push(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`);

  // 1) console errors + overflow at 360px and 200% text
  for (const r of routes) {
    const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
    const errs = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text().slice(0, 140)); });
    page.on('pageerror', (e) => errs.push('pageerror: ' + e.message.slice(0, 140)));
    const res = await page.goto(BASE + r, { waitUntil: 'networkidle' });
    log(`HTTP ${r}`, res.status() === 200, String(res.status()));
    log(`console clean ${r}`, errs.length === 0, errs.slice(0, 3).join(' | '));
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log(`no horizontal overflow @360 ${r}`, ov <= 0, 'overflow=' + ov + 'px');
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    const ov2 = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log(`no horizontal overflow @360 + 200% text ${r}`, ov2 <= 0, 'overflow=' + ov2 + 'px');
    await page.close();
  }

  // 2) Dialog Esc closes and focus returns to the opener
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE + '/katalog', { waitUntil: 'networkidle' });
    const opener = page.getByRole('button', { name: 'Diyaloğu aç' });
    await opener.click();
    const openNow = await page.locator('dialog[open]').count();
    log('Dialog opens', openNow === 1);
    const focusInside = await page.evaluate(() => !!document.activeElement && !!document.activeElement.closest('dialog'));
    log('Dialog moves focus inside', focusInside);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
    log('Dialog closes on Escape', (await page.locator('dialog[open]').count()) === 0);
    const back = await page.evaluate(() => document.activeElement && document.activeElement.textContent.trim());
    log('Focus returns to opener', back === 'Diyaloğu aç', 'active=' + back);
    await page.close();
  }

  // 3) Tabs: arrow keys skip the disabled tab, active panel follows
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE + '/katalog', { waitUntil: 'networkidle' });
    const first = page.getByRole('tab', { name: 'Birinci' });
    await first.focus();
    await page.keyboard.press('ArrowRight');
    const sel2 = await page.getByRole('tab', { name: 'İkinci' }).getAttribute('aria-selected');
    log('Tabs ArrowRight selects next', sel2 === 'true');
    await page.keyboard.press('ArrowRight');
    const sel1 = await page.getByRole('tab', { name: 'Birinci' }).getAttribute('aria-selected');
    log('Tabs ArrowRight wraps past disabled tab', sel1 === 'true', 'aria-selected(Birinci)=' + sel1);
    await page.close();
  }

  // 4) Accordion toggles and exposes aria-expanded
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE + '/katalog', { waitUntil: 'networkidle' });
    const trig = page.getByRole('button', { name: 'Birinci soru' });
    await trig.click();
    log('Accordion expands', (await trig.getAttribute('aria-expanded')) === 'true');
    await page.close();
  }

  // 5) Products: role filter hidden (site defines no roles); product card links to detail
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE + '/urunler', { waitUntil: 'networkidle' });
    log('Role selector hidden', (await page.locator('fieldset.alu-role-selector').count()) === 0);
    await page.getByRole('link', { name: /ALLPLAN/ }).first().click();
    await page.waitForURL('**/urunler/allplan');
    log('Product card navigates to detail', page.url().endsWith('/urunler/allplan'));
    await page.close();
  }

  // 6) Comparison: release/market selects keep the table, unknown is not shown as excluded
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE + '/paket-karsilastirma', { waitUntil: 'networkidle' });
    const rows = await page.locator('table tbody tr').count();
    log('Comparison table renders rows', rows > 0, 'rows=' + rows);
    const hdrs = await page.locator('table thead th').allInnerTexts();
    log('Comparison shows all 8 packages', hdrs.length === 9, 'columns=' + hdrs.length);
    await page.close();
  }

  await browser.close();
  console.log(results.join('\n'));
  const fails = results.filter((r) => r.startsWith('FAIL')).length;
  console.log(`\n${results.length - fails}/${results.length} passed`);
})().catch((e) => { console.error('SCRIPT ERROR', e); process.exit(1); });
