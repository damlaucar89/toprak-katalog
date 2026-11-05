// Toprak Atölye (hayali marka) — TR/EN ürün kataloğu (Wix Studio + Velo)
// CMS koleksiyonu: "Products" (kimlik: Import1)
// Alanlar: title, titleEn, category, categoryEn, price, description, descriptionEn, sku

import wixData from "wix-data";
import wixLocationFrontend from "wix-location-frontend";
import wixSeoFrontend from "wix-seo-frontend";

const COLLECTION_ID = "Import1";
const IDS = {
  repeater: "#repeater1",
  card: "#box1",
  cardText: "#text3",
  filter: "#dropdown1",
  btnTr: "#button2",
  btnEn: "#button1",
  heading: "#text6",
  lead: "#text5",
  count: "#text4",
  brand: "#text7",
  footer: "#text2",
};

const T = {
  tr: {
    title: "Toprak Atölye — Ürün Kataloğu",
    heading: "El yapımı seramikler",
    lead: "Kategori seçerek ürünleri filtreleyin. Bu katalog hayali bir marka için hazırlanmış bir demodur.",
    all: "Tüm kategoriler",
    filterLabel: "Kategori",
    count: (n) => `${n} ürün listeleniyor`,
    price: (p) => `${Number(p).toLocaleString("tr-TR")} TL`,
    empty: "Bu kategoride ürün yok.",
    footer: "Toprak Atölye hayali bir markadır. Bu site Wix Studio + Velo portföy demosudur.",
  },
  en: {
    title: "Toprak Atelier — Product Catalog",
    heading: "Handmade ceramics",
    lead: "Filter products by category. This catalog is a demo built for a fictional brand.",
    all: "All categories",
    filterLabel: "Category",
    count: (n) => `${n} products listed`,
    price: (p) => `${Number(p).toLocaleString("en-US")} TRY`,
    empty: "No products in this category.",
    footer: "Toprak Atelier is a fictional brand. This site is a Wix Studio + Velo portfolio demo.",
  },
};

let lang = "tr";
let allItems = [];

$w.onReady(async function () {
  lang = wixLocationFrontend.query.lang === "en" ? "en" : "tr";
  setupRepeater();
  try {
    const res = await wixData.query(COLLECTION_ID).ascending("sku").limit(100).find();
    allItems = res.items;
  } catch (err) {
    console.error("Ürünler okunamadı", err);
  }
  $w(IDS.brand).text = "TOPRAK ATÖLYE";
  $w(IDS.btnTr).label = "TR";
  $w(IDS.btnEn).label = "EN";
  $w(IDS.btnTr).onClick(() => setLang("tr"));
  $w(IDS.btnEn).onClick(() => setLang("en"));
  $w(IDS.filter).onChange(() => render());
  setLang(lang);
});

function setupRepeater() {
  $w(IDS.repeater).onItemReady(($item, item) => {
    $item(IDS.card).style.backgroundColor = "#F4EDE4";
    const name = lang === "en" ? item.titleEn : item.title;
    const cat = lang === "en" ? item.categoryEn : item.category;
    const desc = lang === "en" ? item.descriptionEn : item.description;
    $item(IDS.cardText).text = [name, cat, desc, T[lang].price(item.price)].join("\n");
  });
}

function setLang(next) {
  lang = next;
  const t = T[lang];
  wixSeoFrontend.setTitle(t.title);
  $w(IDS.heading).text = t.heading;
  $w(IDS.lead).text = t.lead;
  $w(IDS.footer).text = t.footer;
  wixLocationFrontend.queryParams.add({ lang });

  // Filtre seçeneklerini aktif dile göre kur, mevcut seçimi koru
  const key = lang === "en" ? "categoryEn" : "category";
  const prevIndex = $w(IDS.filter).selectedIndex;
  const cats = [...new Map(allItems.map((i) => [i.category, i])).values()];
  $w(IDS.filter).label = t.filterLabel;
  $w(IDS.filter).placeholder = t.all; // varsayılan "Select a size" yer tutucusunu kaldırır
  $w(IDS.filter).options = [
    { label: t.all, value: "all" },
    ...cats.map((i) => ({ label: i[key], value: i.category })),
  ];
  $w(IDS.filter).selectedIndex = prevIndex > 0 ? prevIndex : 0;
  render();
}

function render() {
  const selected = $w(IDS.filter).value;
  const items = selected && selected !== "all" ? allItems.filter((i) => i.category === selected) : allItems;
  // Dil değişince kartların yeniden çizilmesi için veriyi yeniden ata
  $w(IDS.repeater).data = [];
  $w(IDS.repeater).data = items;
  $w(IDS.count).text = items.length ? T[lang].count(items.length) : T[lang].empty;
}
