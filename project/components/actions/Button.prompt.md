Primary interaction trigger (button or link-styled-as-button). Use for the one main action per region.

```jsx
<Button>Kaydet</Button>
<Button variant="secondary" iconEnd="arrow-right">Paketleri karşılaştır</Button>
<Button href="https://forms.office.com/r/hXhnKAG912" external>Teklif iste</Button>
<Button loading>Gönderiliyor</Button>
```

Labels wrap onto multiple lines instead of truncating. `min-height`, not `height`, so long Turkish labels and font swaps never clip.
