# Toprak Atölye — TR/EN Ürün Kataloğu (Wix Studio + Velo)

**Canlı site:** https://damlaucar89.wixstudio.com/toprak-katalog
**İngilizce doğrudan bağlantı:** https://damlaucar89.wixstudio.com/toprak-katalog?lang=en

Hayali bir seramik markası için hazırlanmış portföy demosu. Gerçek bir marka ya da müşteri işi değildir.

## Ne gösteriyor
- **CMS:** `Products` koleksiyonu (kimlik `Import1`). CSV ile içe aktarılan 8 ürün; alanlar `title/titleEn`, `category/categoryEn`, `price` (sayı), `description/descriptionEn`, `sku`.
- **Velo `wix-data`:** Ürünler SKU sırasıyla çekilip tekrarlayıcıda kart olarak gösteriliyor.
- **Kategori filtresi:** Seçenekler CMS verisinden üretiliyor; seçim değiştikçe liste ve "N ürün listeleniyor" sayacı güncelleniyor.
- **TR/EN dil desteği:** Butonlarla başlık, açıklama, filtre seçenekleri, ürün adları, açıklamalar, fiyat biçimi (`420 TL` / `420 TRY`), sayfa başlığı (SEO) ve alt bilgi değişiyor. Dil `?lang=` parametresine yazıldığından bağlantı paylaşılabiliyor. Dil değişince seçili filtre korunuyor.

> Not: Bu çözüm Velo ile yazılmış hafif bir dil değiştiricidir. Wix'in resmi **Wix Multilingual** uygulaması (ayrı URL'ler, hreflang, çeviri yönetimi) bilinçli olarak kullanılmadı. Gerçek bir müşteri projesinde SEO için Wix Multilingual tercih edilmeli.

## Dosyalar
- `wix/page-code.js`: yayındaki Velo sayfa kodu
- `wix/masterPage.js`: şablon hatası düzeltilmiş ana sayfa kodu
- `wix/products.csv`: CMS'e aktarılan ürün verisi
- `test-notes.md`: canlı test kontrolleri

## Bilinen eksikler
- Ürün başına dinamik sayfa yok (liste görünümü).
- Mobil kesme noktası için ayrı düzen kurulmadı; masaüstü düzeni oransal küçülüyor (Project NEO'daki BUG-01 ile aynı kök neden).
- Ürün görselleri yok (hayali marka; telifli görsel kullanılmadı).
