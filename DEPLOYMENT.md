# 🚀 Panduan Deployment ke Netlify

Aplikasi ini sudah dikonfigurasi untuk deployment mudah ke Netlify. Ikuti salah satu metode di bawah ini.

## ✅ Persiapan

Pastikan aplikasi sudah di-build dengan sukses:

```bash
npm run build
```

Jika berhasil, folder `build/` akan berisi file production-ready.

## 📦 Metode 1: Drag & Drop (Paling Mudah)

1. **Build aplikasi**:
   ```bash
   npm run build
   ```

2. **Buka Netlify Drop**:
   - Kunjungi https://app.netlify.com/drop
   - Login atau signup (gratis)

3. **Upload folder build**:
   - Drag & drop folder `build/` ke area upload
   - Tunggu hingga deployment selesai (biasanya < 1 menit)

4. **Selesai!**
   - Anda akan mendapat URL seperti: `https://random-name-12345.netlify.app`
   - Aplikasi langsung bisa diakses

### Keuntungan:
- ✅ Sangat cepat dan mudah
- ✅ Tidak perlu Git
- ✅ Cocok untuk testing/demo

### Kekurangan:
- ❌ Tidak auto-deploy saat update code
- ❌ Harus manual upload setiap kali update

---

## 🔗 Metode 2: Git Integration (Recommended)

### A. Push ke Git Repository

1. **Inisialisasi Git** (jika belum):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Interactive map application"
   ```

2. **Push ke GitHub/GitLab/Bitbucket**:
   ```bash
   # GitHub
   git remote add origin https://github.com/username/repo-name.git
   git branch -M main
   git push -u origin main
   ```

### B. Connect ke Netlify

1. **Login ke Netlify**:
   - Kunjungi https://app.netlify.com
   - Login dengan akun GitHub/GitLab/Bitbucket

2. **Import Project**:
   - Klik "Add new site" → "Import an existing project"
   - Pilih Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify untuk akses repository
   - Pilih repository Anda

3. **Configure Build Settings**:
   Netlify akan auto-detect settings dari `netlify.toml`, tapi pastikan:
   - **Branch to deploy**: `main` atau `master`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   
4. **Deploy!**:
   - Klik "Deploy site"
   - Tunggu build process selesai (2-3 menit)
   - Aplikasi live di URL yang diberikan

### Keuntungan:
- ✅ Auto-deploy setiap push ke branch
- ✅ Preview deployment untuk PR
- ✅ Easy rollback ke versi sebelumnya
- ✅ Continuous deployment
- ✅ Free SSL/HTTPS
- ✅ Custom domain support

---

## 💻 Metode 3: Netlify CLI

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Login

```bash
netlify login
```

Browser akan terbuka untuk authentication.

### Deploy

**Deploy pertama kali**:
```bash
netlify deploy
```

Ikuti prompt:
- Create & configure a new site? **Yes**
- Choose team (biasanya personal account)
- Site name: **masukkan nama atau kosongkan untuk random**
- Publish directory: `build`

CLI akan memberikan draft URL untuk preview.

**Deploy ke production**:
```bash
netlify deploy --prod
```

### Keuntungan:
- ✅ Kontrol penuh via command line
- ✅ Draft deploy untuk testing
- ✅ Manual control kapan deploy
- ✅ Cocok untuk CI/CD custom

---

## 🎨 Custom Domain (Opsional)

Setelah deploy, Anda bisa setup custom domain:

1. Buka site settings di Netlify dashboard
2. Klik "Domain management"
3. "Add custom domain"
4. Masukkan domain Anda (contoh: `petaku.com`)
5. Update DNS settings di domain registrar:
   - Tambahkan CNAME record pointing ke Netlify
   - Atau gunakan Netlify DNS

Netlify akan otomatis setup SSL/HTTPS.

---

## 🔄 Update Aplikasi

### Jika menggunakan Git Integration:

```bash
# Buat perubahan di code
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

Netlify akan auto-deploy dalam beberapa menit.

### Jika menggunakan Drag & Drop:

```bash
npm run build
```

Upload ulang folder `build/` ke Netlify.

### Jika menggunakan CLI:

```bash
npm run build
netlify deploy --prod
```

---

## 🐛 Troubleshooting

### Build gagal di Netlify

**Error: Module not found**
```bash
# Di local, install semua dependencies
npm install
npm run build

# Commit package-lock.json
git add package-lock.json
git commit -m "Update dependencies"
git push
```

**Error: Command not found**
- Pastikan `netlify.toml` ada di root project
- Check build settings di Netlify dashboard

### Aplikasi tidak load / blank page

**Penyebab**: Biasanya routing issue untuk SPA

**Solusi**: Pastikan ada file:
1. `netlify.toml` dengan redirect rules
2. `public/_redirects` dengan content:
   ```
   /*    /index.html   200
   ```

### localStorage tidak berfungsi

**Penyebab**: HTTPS vs HTTP issue, atau browser incognito

**Solusi**:
- Netlify auto-enable HTTPS, jadi harusnya tidak ada masalah
- Test di regular browser window (bukan incognito)
- Check browser console untuk errors

---

## 📊 Monitoring & Analytics

Netlify menyediakan analytics gratis:

1. Buka site dashboard
2. Tab "Analytics" untuk melihat:
   - Page views
   - Unique visitors
   - Top pages
   - Bandwidth usage

---

## 💰 Biaya

**Free tier mencakup**:
- 100 GB bandwidth/bulan
- 300 build minutes/bulan
- Unlimited sites
- HTTPS otomatis
- Continuous deployment

Untuk aplikasi sederhana seperti ini, free tier lebih dari cukup!

---

## 📱 Test Setelah Deploy

1. **Buka aplikasi** di URL Netlify
2. **Test fitur**:
   - ✅ Peta loading dengan benar
   - ✅ Klik peta untuk tambah lokasi
   - ✅ Form validation bekerja
   - ✅ Marker muncul dengan warna yang tepat
   - ✅ Popup info detail lengkap
   - ✅ Filter berfungsi
   - ✅ Hapus lokasi works
   - ✅ Data persist setelah reload
3. **Test responsive**:
   - Desktop
   - Tablet
   - Mobile

---

## 🎉 Selesai!

Aplikasi Anda sekarang live dan bisa diakses dari mana saja!

Share URL dengan teman atau tambahkan ke portfolio Anda.

**Contoh URL yang akan Anda dapat**:
- `https://peta-interaktif.netlify.app`
- `https://your-custom-domain.com`

---

## 📚 Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Support](https://answers.netlify.com)
- [Deploy React Apps Guide](https://docs.netlify.com/frameworks/react)
