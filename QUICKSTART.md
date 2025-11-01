# ⚡ Quick Start Guide

Ingin langsung mulai? Ikuti langkah sederhana ini!

## 🚀 3 Langkah Cepat

### 1. Install Dependencies

```bash
npm install
```

⏱️ Waktu: ~2 menit

### 2. Jalankan Aplikasi

```bash
npm start
```

⏱️ Waktu: ~30 detik

Aplikasi akan terbuka di browser pada `http://localhost:3000`

### 3. Mulai Gunakan!

1. **Klik pada peta** untuk menambah lokasi
2. **Isi form** yang muncul
3. **Klik "Simpan Lokasi"**
4. **Lihat marker** muncul di peta! 🎉

---

## 📝 Contoh Penggunaan Cepat

### Menambah Perusahaan

1. Klik lokasi di peta
2. Isi form:
   - **Nama**: PT Teknologi Maju
   - **Kontak**: 021-1234567
   - **Kategori**: Perusahaan
   - **Deskripsi**: Perusahaan teknologi informasi
3. Klik "Simpan"
4. Marker merah akan muncul! 🔴

### Menambah Pencari Kerja

1. Klik lokasi di peta
2. Isi form:
   - **Nama**: John Doe
   - **Kontak**: 08123456789
   - **Kategori**: Pencari Kerja
   - **Deskripsi**: Fresh graduate IT
3. Klik "Simpan"
4. Marker hijau akan muncul! 🟢

### Filter Lokasi

Gunakan tombol di atas peta:
- **Semua**: Tampilkan semua marker
- **Perusahaan**: Hanya perusahaan (merah)
- **Pencari Kerja**: Hanya job seeker (hijau)

### Lihat Detail

Klik marker di peta → Popup info akan muncul

### Hapus Lokasi

Klik marker → Klik tombol "🗑️ Hapus Lokasi"

---

## 🚀 Deploy ke Internet (Gratis)

### Cara Tercepat (5 Menit)

```bash
# 1. Build
npm run build

# 2. Buka https://app.netlify.com/drop

# 3. Drag folder 'build' ke website

# 4. Selesai! Dapat URL gratis
```

---

## ❓ Troubleshooting Cepat

### Port 3000 sudah digunakan?

```bash
# Gunakan port lain
PORT=3001 npm start
```

### Module not found error?

```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Build error?

```bash
# Update dependencies
npm update
npm run build
```

---

## 📚 Baca Selengkapnya

- **README.md**: Dokumentasi lengkap
- **DEPLOYMENT.md**: Panduan deploy detail
- **FEATURES.md**: Daftar fitur lengkap

---

## 🎯 Fitur Kunci

✅ Peta interaktif (Leaflet.js)  
✅ Marker hijau (pencari kerja) & merah (perusahaan)  
✅ Form tambah lokasi dengan validasi  
✅ Popup info detail  
✅ Data tersimpan di browser (localStorage)  
✅ Filter kategori  
✅ Responsive design  
✅ Deploy mudah ke Netlify  

---

## 💡 Tips

- Data tersimpan otomatis di browser
- Reload halaman → data masih ada
- Clear cache browser → data hilang (expected)
- Klik peta berkali-kali untuk tambah banyak lokasi
- Zoom in/out dengan scroll mouse
- Pan peta dengan drag

---

## 🎉 Selamat!

Anda sudah siap menggunakan aplikasi!

**Happy Mapping! 🗺️**
