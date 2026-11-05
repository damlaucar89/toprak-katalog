# Toprak Atölye — Canlı Test Notları

**Tarih:** 5 Kasım 2026 · **Ortam:** Chromium (Claude masaüstü tarayıcı paneli), canlı site

| # | Kontrol | Sonuç |
|---|---|---|
| K-01 | Sayfa açılışında 8 ürün listelenir, sayaç "8 ürün listeleniyor" | Geçti |
| K-02 | SEO başlığı TR: "Toprak Atölye — Ürün Kataloğu" | Geçti |
| K-03 | Kategori "Kupalar/Mugs" seçilince 2 ürün kalır, sayaç güncellenir | Geçti (gerçek klavye girişiyle) |
| K-04 | EN butonu: başlık, açıklama, ürün adları, kategori adları, fiyat biçimi, sayfa başlığı İngilizce olur, URL `?lang=en` | Geçti |
| K-05 | Dil değişince seçili kategori korunur | Geçti |
| K-06 | `?lang=en` doğrudan bağlantısı İngilizce açılır | Geçti |
| K-07 | Masaüstünde yatay taşma yok | Geçti |
| K-08 | Alt bilgide "hayali marka / demo" uyarısı | Geçti |

## Bulunan hatalar
| ID | Hata | Durum |
|---|---|---|
| CAT-01 | Filtre açılır menüsünde varsayılan İngilizce yer tutucu "Select a size" kalmış (TR sayfada da) | Düzeltildi (Velo `placeholder`), tekrar test edildi |
| CAT-02 | `masterPage.js` varsayılan şablonunda tanımsız `Write` ifadesi (NEO BUG-05 ile aynı) | Düzeltildi |

## Gözlem
- Programatik `select.value` ataması Wix `onChange` olayını tetiklemiyor. Otomasyonda gerçek kullanıcı etkileşimi (Playwright `selectOption`/klavye) kullanılmalı.
