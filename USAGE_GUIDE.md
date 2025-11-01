# 📖 Panduan Penggunaan Lengkap

## 🎯 Pengenalan

Aplikasi Peta Interaktif ini memungkinkan Anda untuk:
- Menandai lokasi perusahaan dan pencari kerja di peta
- Menyimpan data lokasi secara lokal di browser
- Filter dan kelola lokasi dengan mudah

---

## 🗺️ Interface Utama

### Bagian-bagian Aplikasi

```
┌─────────────────────────────────────────┐
│         HEADER / JUDUL APLIKASI         │
├─────────────────────────────────────────┤
│  [Stats] [Stats] [Stats]                │
│  [Filter Buttons: All | Companies | JS] │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│           PETA INTERAKTIF               │
│          (Leaflet/OSM)                  │
│                                         │
│         🔴 🟢 ← Markers                 │
│                                         │
├─────────────────────────────────────────┤
│        FOOTER / INFO                    │
└─────────────────────────────────────────┘
```

---

## 📋 Langkah-Langkah Penggunaan

### 1️⃣ Menambah Lokasi Baru

#### Langkah 1: Klik Peta
- Arahkan mouse ke posisi yang diinginkan pada peta
- Klik sekali
- Form input akan muncul sebagai popup overlay

#### Langkah 2: Isi Form
Form memiliki 4 field:

**a) Nama** ⚠️ Required
- Label: ✏️ Nama
- Placeholder: "Nama perusahaan atau pencari kerja"
- Validasi: 
  - Tidak boleh kosong
  - Minimal 3 karakter
- Contoh: "PT Teknologi Maju" atau "John Doe"

**b) Kontak** ⚠️ Required
- Label: 📞 Kontak
- Placeholder: "Nomor telepon atau email"
- Validasi:
  - Tidak boleh kosong
  - Minimal 8 karakter
- Contoh: "021-1234567" atau "email@example.com"

**c) Kategori** ⚠️ Required
- Label: 🏷️ Kategori
- Dropdown dengan 2 pilihan:
  - 🏢 Perusahaan (marker merah)
  - 👤 Pencari Kerja (marker hijau)
- Default: Perusahaan

**d) Deskripsi** ✅ Opsional
- Label: 📝 Deskripsi (Opsional)
- Placeholder: "Informasi tambahan tentang lokasi ini..."
- Validasi: Tidak ada (bebas)
- Contoh: "Perusahaan startup teknologi, sedang merekrut developer"

#### Langkah 3: Simpan atau Batal
- **Tombol Simpan** (✅ Simpan Lokasi): 
  - Warna: Gradient ungu
  - Action: Validasi form → Simpan ke localStorage → Tutup form → Tampilkan marker
- **Tombol Batal** (❌ Batal):
  - Warna: Abu-abu
  - Action: Tutup form tanpa menyimpan

#### Hasil
- Marker muncul di peta pada koordinat yang diklik
- Warna marker sesuai kategori (🔴 merah atau 🟢 hijau)
- Data tersimpan otomatis di localStorage

---

### 2️⃣ Melihat Detail Lokasi

#### Cara 1: Klik Marker
- Klik marker di peta
- Popup info akan muncul

#### Konten Popup
```
┌─────────────────────────────┐
│  [Badge Kategori]           │  ← Hijau atau Merah
│                             │
│  Nama Lokasi                │  ← Font besar, bold
│                             │
│  📞 Kontak: [info kontak]   │
│  📝 Deskripsi: [jika ada]   │
│  📍 Koordinat: lat, lng     │  ← Font kecil, monospace
│                             │
│  [🗑️ Hapus Lokasi]          │  ← Tombol merah
└─────────────────────────────┘
```

#### Badge Kategori
- **Pencari Kerja**: Background hijau, text "👤 Pencari Kerja"
- **Perusahaan**: Background merah, text "🏢 Perusahaan"

---

### 3️⃣ Filter Lokasi

Di bagian atas peta terdapat 3 tombol filter:

#### Filter: Semua (🌍)
- **Fungsi**: Tampilkan semua marker (perusahaan + pencari kerja)
- **Default**: Active saat aplikasi pertama dibuka
- **Visual**: Background gradient ungu saat active

#### Filter: Perusahaan (🏢)
- **Fungsi**: Hanya tampilkan marker merah (perusahaan)
- **Visual**: Background gradient merah saat active
- **Marker hijau**: Disembunyikan

#### Filter: Pencari Kerja (👤)
- **Fungsi**: Hanya tampilkan marker hijau (pencari kerja)
- **Visual**: Background gradient hijau saat active
- **Marker merah**: Disembunyikan

#### Cara Gunakan
- Klik salah satu tombol filter
- Marker di peta akan otomatis di-filter
- Tombol yang active akan highlight dengan warna

---

### 4️⃣ Melihat Statistik

Di bagian atas, sebelum tombol filter, ada 3 info card:

#### Card 1: Total Lokasi
- Icon: 📍
- Label: "Total Lokasi"
- Value: Jumlah total marker (perusahaan + pencari kerja)
- Background: Gradient biru

#### Card 2: Perusahaan
- Icon: 🏢
- Label: "Perusahaan"
- Value: Jumlah marker merah
- Background: Gradient merah

#### Card 3: Pencari Kerja
- Icon: 👤
- Label: "Pencari Kerja"
- Value: Jumlah marker hijau
- Background: Gradient hijau

**Update Otomatis**: Counter update langsung saat menambah/hapus lokasi

---

### 5️⃣ Menghapus Lokasi

#### Langkah 1: Buka Popup
- Klik marker yang ingin dihapus

#### Langkah 2: Klik Tombol Hapus
- Di bagian bawah popup ada tombol "🗑️ Hapus Lokasi"
- Klik tombol tersebut

#### Hasil
- Marker langsung hilang dari peta
- Data dihapus dari localStorage
- Popup tertutup otomatis
- Counter statistik update otomatis

⚠️ **Perhatian**: 
- Tidak ada konfirmasi "Are you sure?"
- Delete langsung permanent
- Tidak bisa undo

---

### 6️⃣ Navigasi Peta

#### Zoom In/Out
- **Mouse scroll**: Scroll up/down untuk zoom
- **Tombol +/-**: Di pojok kiri atas peta
- **Double click**: Zoom in ke titik yang diklik
- **Shift + drag**: Zoom ke area tertentu

#### Pan (Geser Peta)
- **Click & drag**: Tahan klik kiri, geser mouse
- **Touch**: Swipe di layar sentuh

#### Reset View
- Refresh halaman untuk kembali ke posisi default (Jakarta)

---

## 💾 Data Persistence

### Kapan Data Tersimpan?
- ✅ **Otomatis** setiap kali menambah lokasi
- ✅ **Otomatis** setiap kali menghapus lokasi
- ✅ **Tidak perlu** tombol "Save" atau "Sync"

### Kapan Data Di-load?
- ✅ **Otomatis** saat aplikasi dibuka
- ✅ **Otomatis** saat refresh halaman

### Di Mana Data Disimpan?
- Browser localStorage
- Key: `locations`
- Format: JSON string array

### Kapan Data Hilang?
- ❌ Clear browser cache
- ❌ Clear site data di browser settings
- ❌ Gunakan browser mode private/incognito
- ❌ Uninstall browser (kehilangan semua data browser)

### Cara Backup Data Manual
1. Buka Developer Console (F12)
2. Tab: Application → Storage → Local Storage
3. Klik domain aplikasi
4. Copy value dari key `locations`
5. Simpan di notepad/file

### Cara Restore Data Manual
1. Buka Developer Console (F12)
2. Tab: Application → Storage → Local Storage
3. Klik domain aplikasi
4. Paste value ke key `locations`
5. Refresh halaman

---

## 📱 Tips Penggunaan Mobile

### Tap vs Long Press
- **Single tap**: Buka popup marker
- **Long tap**: (tidak digunakan)

### Tambah Lokasi
- Tap di peta → Form muncul
- Gunakan keyboard on-screen untuk input

### Zoom
- Pinch to zoom (cubit layar)
- Double tap untuk zoom in
- Two-finger tap untuk zoom out

### Pan
- Swipe dengan satu jari

### Form Input
- Scroll form jika keyboard menutupi field
- Tap outside form untuk tutup (cancel)

---

## 🎨 Visual Indicators

### Warna Marker
- 🔴 **Merah**: Perusahaan
- 🟢 **Hijau**: Pencari Kerja

### Active State
- **Filter button active**: Gradient background + shadow
- **Form field focus**: Border biru + shadow
- **Button hover**: Lift up effect (transform)

### Error State
- **Input error**: Border merah
- **Error message**: Text merah di bawah input

---

## ⌨️ Keyboard Shortcuts

Saat ini belum ada keyboard shortcuts, tapi bisa ditambahkan di versi mendatang:
- `Esc` untuk close form/popup (planned)
- `Ctrl+F` untuk search (planned)
- `Ctrl+Z` untuk undo (planned)

---

## ❓ FAQ

### Q: Apakah data saya aman?
**A**: Data hanya disimpan di browser Anda sendiri (localStorage). Tidak ada komunikasi dengan server. Data tidak bisa diakses aplikasi/website lain.

### Q: Berapa banyak lokasi yang bisa disimpan?
**A**: Tergantung browser, biasanya localStorage limit 5-10 MB. Untuk aplikasi ini, bisa ratusan hingga ribuan lokasi.

### Q: Bisakah saya share data dengan orang lain?
**A**: Saat ini belum ada fitur share/export. Tapi bisa manual copy localStorage (lihat bagian backup/restore di atas).

### Q: Kenapa peta tidak muncul?
**A**: 
- Pastikan ada internet connection (untuk load map tiles)
- Check browser console untuk error
- Try refresh halaman

### Q: Kenapa marker saya hilang setelah reload?
**A**: 
- Kemungkinan browser dalam mode private/incognito
- Atau localStorage di-disable di browser settings
- Check browser settings: Allow sites to save data

### Q: Bisakah digunakan offline?
**A**: 
- Aplikasi bisa load jika sudah di-cache
- Marker yang sudah tersimpan akan muncul
- Tapi map tiles butuh internet untuk load

---

## 🆘 Troubleshooting

### Problem: Form tidak muncul saat klik peta
**Solusi**:
1. Pastikan tidak ada popup marker yang terbuka
2. Klik di area kosong (bukan di atas marker)
3. Refresh halaman dan coba lagi

### Problem: Tombol simpan tidak bekerja
**Solusi**:
1. Pastikan semua field required terisi
2. Check validasi (lihat error message merah)
3. Isi nama min 3 karakter, kontak min 8 karakter

### Problem: Marker tidak muncul di peta
**Solusi**:
1. Check filter - mungkin ter-filter
2. Klik "Semua" di tombol filter
3. Zoom out untuk lihat area lebih luas

### Problem: Data hilang setelah close browser
**Solusi**:
1. Jangan gunakan mode private/incognito
2. Check browser settings: Allow localStorage
3. Jangan clear cache setelah gunakan app

---

## 📞 Dukungan

Jika menemui masalah atau butuh bantuan:
1. Check dokumentasi di README.md
2. Check FAQ di atas
3. Check browser console untuk error messages
4. Buat issue di repository GitHub (jika ada)

---

**Selamat menggunakan aplikasi! 🎉**
