# 🗺️ Aplikasi Peta Interaktif - Perusahaan & Pencari Kerja

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green?logo=leaflet)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)

Aplikasi React yang menampilkan peta interaktif menggunakan Leaflet.js untuk menandai lokasi perusahaan dan pencari kerja. Data disimpan secara lokal menggunakan localStorage tanpa memerlukan backend.

> 🎯 **Perfect for**: Job fairs, recruitment agencies, HR departments, event planning

---

## 📚 Dokumentasi

| Dokumen | Deskripsi |
|---------|-----------|
| [QUICKSTART.md](QUICKSTART.md) | ⚡ Panduan cepat mulai dalam 3 langkah |
| [DEPLOYMENT.md](DEPLOYMENT.md) | 🚀 Panduan lengkap deploy ke Netlify |
| [USAGE_GUIDE.md](USAGE_GUIDE.md) | 📖 Manual pengguna lengkap dengan FAQ |
| [FEATURES.md](FEATURES.md) | 🎯 Daftar lengkap semua fitur |
| [TECHNICAL.md](TECHNICAL.md) | 🛠️ Dokumentasi teknis untuk developer |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 📁 Struktur project dan file |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 🤝 Panduan kontribusi |
| [CHANGELOG.md](CHANGELOG.md) | 📝 Riwayat perubahan versi |

## ✨ Fitur Utama

### 🎯 Fitur Inti
- **Peta Interaktif**: Menggunakan Leaflet.js dengan OpenStreetMap
- **Marker Kategori**:
  - 🟢 **Hijau** untuk Pencari Kerja
  - 🔴 **Merah** untuk Perusahaan
- **Tambah Lokasi**: Klik pada peta untuk menambahkan lokasi baru
- **Form Input**: Form lengkap dengan validasi untuk nama, kontak, kategori, dan deskripsi
- **Popup Info**: Klik marker untuk melihat detail lengkap lokasi
- **localStorage**: Data tersimpan secara persisten di browser
- **Filter Toggle**: Filter untuk menampilkan kategori tertentu atau semua
- **Hapus Lokasi**: Tombol hapus di setiap popup marker
- **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile

### 📊 Dashboard
- Counter total lokasi
- Counter perusahaan
- Counter pencari kerja
- Filter cepat berdasarkan kategori

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js (v14 atau lebih baru)
- npm atau yarn

### Instalasi

```bash
# Clone repository
git clone <repository-url>
cd project

# Install dependencies
npm install

# Jalankan development server
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

File production akan tersedia di folder `build/`

## 🌐 Deploy ke Netlify

### Cara 1: Drag & Drop
1. Jalankan `npm run build`
2. Buka [Netlify Drop](https://app.netlify.com/drop)
3. Drag folder `build` ke area upload
4. Selesai! Aplikasi Anda sudah online

### Cara 2: Git Integration
1. Push repository ke GitHub/GitLab/Bitbucket
2. Login ke [Netlify](https://app.netlify.com)
3. Klik "New site from Git"
4. Pilih repository Anda
5. Build settings otomatis terdeteksi:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Klik "Deploy site"

### Cara 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📱 Cara Menggunakan Aplikasi

### Menambah Lokasi
1. **Klik pada peta** di posisi yang diinginkan
2. Form akan muncul secara otomatis
3. Isi data:
   - **Nama** (minimal 3 karakter) *
   - **Kontak** (minimal 8 karakter) *
   - **Kategori** (Perusahaan/Pencari Kerja) *
   - **Deskripsi** (opsional)
4. Klik "Simpan Lokasi"

### Melihat Detail Lokasi
1. **Klik marker** di peta
2. Popup akan menampilkan:
   - Kategori (badge berwarna)
   - Nama
   - Kontak
   - Deskripsi (jika ada)
   - Koordinat lokasi
   - Tombol hapus

### Filter Lokasi
1. Gunakan tombol filter di bagian atas:
   - **Semua**: Tampilkan semua lokasi
   - **Perusahaan**: Hanya tampilkan perusahaan (marker merah)
   - **Pencari Kerja**: Hanya tampilkan pencari kerja (marker hijau)

### Hapus Lokasi
1. Klik marker yang ingin dihapus
2. Klik tombol "🗑️ Hapus Lokasi" di popup
3. Konfirmasi akan langsung menghapus data

## 🎨 Struktur Project

```
project/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── MapComponent.js       # Komponen peta utama
│   │   ├── MapComponent.css
│   │   ├── FilterPanel.js        # Panel filter & statistik
│   │   ├── FilterPanel.css
│   │   ├── LocationForm.js       # Form tambah lokasi
│   │   └── LocationForm.css
│   ├── App.js                    # Komponen utama
│   ├── App.css                   # Styling global
│   ├── index.js                  # Entry point
│   └── index.css
├── netlify.toml                  # Konfigurasi Netlify
├── package.json
└── README.md
```

## 🛠️ Teknologi yang Digunakan

- **React 19.2.0**: Library UI
- **Leaflet 1.9.4**: Library peta interaktif
- **React-Leaflet 5.0.0**: Integrasi Leaflet dengan React
- **OpenStreetMap**: Tile layer peta
- **localStorage**: Penyimpanan data lokal

## 🔧 Kustomisasi

### Mengubah Posisi Default Peta
Edit file `src/components/MapComponent.js`:

```javascript
const defaultCenter = [-6.2088, 106.8456]; // Jakarta
const defaultZoom = 12;
```

### Mengubah Warna Marker
Edit file `src/components/MapComponent.js` pada bagian `greenIcon` dan `redIcon`.

### Menambah Validasi Form
Edit file `src/components/LocationForm.js` pada fungsi `validateForm()`.

## 📝 Data Format

Data disimpan di localStorage dengan format:

```json
[
  {
    "id": 1234567890,
    "name": "PT Example",
    "contact": "08123456789",
    "category": "perusahaan",
    "description": "Perusahaan teknologi",
    "position": [-6.2088, 106.8456]
  }
]
```

## 🔮 Pengembangan Lebih Lanjut

Aplikasi ini dirancang untuk mudah dikembangkan. Beberapa ide fitur tambahan:

- 📤 Export data ke JSON/CSV
- 📥 Import data dari file
- 🔍 Pencarian lokasi by nama
- 📍 Geolocation untuk mendeteksi posisi user
- 🌙 Dark mode
- 🗂️ Kategori tambahan (kantor cabang, etc)
- 📊 Analytics dan statistik lebih detail
- 🖼️ Upload foto untuk setiap lokasi
- 💬 Catatan/notes untuk setiap lokasi
- 🔗 Share link lokasi tertentu

## 📄 License

MIT License - bebas digunakan dan dimodifikasi

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request.

## 📧 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ menggunakan React dan Leaflet.js**
