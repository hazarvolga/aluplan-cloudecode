// TEST/PREVIEW TOOLING ONLY. With ?source=1 in the page URL, this replaces window.AluplanDesignSystem_84a18c
// with components compiled in the browser from the current components/*.jsx sources (instead of the compiled
// _ds_bundle.js, which is regenerated only at the end of an editing session). Requires React + Babel loaded first.
(function () {
  var cs = document.currentScript;
  if (!/[?&]source=1\b/.test(location.search) && !(cs && cs.dataset.force === '1')) return;
  var root = (document.currentScript && document.currentScript.dataset.root) || '../';
  var files = ['brand/Icon', 'brand/BrandLogo', 'actions/IconButton', 'actions/Button', 'actions/Link', 'typography/Heading', 'typography/Text',
    'layout/Container', 'layout/Stack', 'layout/Grid', 'layout/Divider', 'surfaces/Badge', 'surfaces/Card', 'forms/Input', 'forms/Select', 'forms/Checkbox',
    'feedback/Alert', 'feedback/Dialog', 'disclosure/Tabs', 'disclosure/Accordion', 'navigation/Breadcrumb', 'navigation/SiteHeader', 'navigation/SiteFooter',
    'patterns/engagement/RoleSelector', 'patterns/engagement/ResourceCard', 'patterns/engagement/SupportCard', 'patterns/engagement/CtaGroup',
    'patterns/product/ReleaseTag', 'patterns/product/ReleaseNotes', 'patterns/product/ProductCard', 'patterns/product/PackageComparison'];
  var code = 'var __ns = {};\n';
  files.forEach(function (f) {
    var x = new XMLHttpRequest(); x.open('GET', root + 'components/' + f + '.jsx', false); x.send();
    if (x.status !== 200) throw new Error('source-loader: cannot load ' + f + ' (' + x.status + ')');
    var src = x.responseText.replace(/^'use client';?/m, '');
    var imports = [];
    src = src.replace(/^import\s+\{([^}]+)\}\s+from\s+'[^']+';?\s*$/mg, function (_, names) { imports = imports.concat(names.split(',').map(function (n) { return n.trim(); })); return ''; });
    src = src.replace(/^import .*$/mg, '');
    var exported = [];
    src = src.replace(/export\s+(function|const)\s+(\w+)/g, function (_, kw, name) { exported.push(name); return kw + ' ' + name; });
    code += '(function(){\n' + (imports.length ? 'var ' + imports.map(function (n) { return n + ' = __ns.' + n; }).join(', ') + ';\n' : '') + src + '\nObject.assign(__ns, {' + exported.join(',') + '});\n})();\n';
  });
  var out = Babel.transform(code + 'return __ns;', { presets: ['react'], parserOpts: { allowReturnOutsideFunction: true } }).code;
  window.AluplanDesignSystem_84a18c = new Function('React', out)(React);
  window.__ALU_SOURCE_MODE = true;
})();
