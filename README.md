# 🕌 Masjid Al-Ikhlas Sukoreno

Website resmi Masjid Al-Ikhlas Desa Sukoreno, Kecamatan Sentolo, Kulon Progo, DIY.

## 🌐 Demo
- **Vercel**: [masjid-sukoreno.vercel.app](https://masjid-sukoreno.vercel.app)
- **GitHub Pages**: [username.github.io/masjid-sukoreno](https://github.io)

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|-----------|
| 🏠 **Beranda** | Nama masjid, sambutan pengurus, statistik |
| 🕐 **Jadwal Sholat** | Jadwal harian dengan highlight waktu aktif |
| 📋 **Kegiatan** | Program rutin masjid (Pengajian, TPA, dll) |
| 📢 **Pengumuman** | Card pengumuman terbaru dari array JS |
| 📸 **Galeri** | Grid foto kegiatan responsif |
| 💚 **Donasi** | Rekening bank, QRIS, tombol salin |
| 📍 **Kontak** | Google Maps embed, info pengurus |

---

## 🛠️ Teknologi

- **HTML5** – Struktur semantik
- **CSS3** – Custom properties, Grid, Flexbox, Animations
- **JavaScript Vanilla** – Tanpa framework
- **Google Fonts** – Amiri (Arab/Islami) + Plus Jakarta Sans

---

## 📁 Struktur Folder

```
masjid-sukoreno/
├── index.html          # Halaman utama (all-in-one)
├── css/
│   └── style.css       # Semua styling
├── js/
│   └── script.js       # Data + logika JS
├── assets/
│   ├── images/         # Foto masjid & kegiatan
│   │   └── (tambahkan foto di sini)
│   └── icons/
│       └── favicon.svg
└── README.md
```

---

## 🚀 Cara Deploy

### GitHub Pages
1. Buat repo baru di GitHub: `masjid-sukoreno`
2. Upload semua file ke repo
3. Settings → Pages → Deploy from branch `main`
4. Website live di: `https://username.github.io/masjid-sukoreno`

### Vercel
1. Login ke [vercel.com](https://vercel.com)
2. "Add New Project" → Import dari GitHub
3. Framework: **Other** (Static Site)
4. Deploy → selesai!

---

## ⚙️ Kustomisasi

### Ubah Jadwal Sholat
Edit file `js/script.js`, bagian:
```js
const jadwalSholat = {
  subuh:   "04:22",
  dzuhur:  "11:52",
  ashar:   "15:14",
  maghrib: "17:43",
  isya:    "18:57"
};
```

### Tambah Pengumuman
```js
const pengumumanData = [
  {
    badge: "penting",   // penting | info | kegiatan | umum
    label: "Penting",
    judul: "Judul Pengumuman",
    isi: "Isi pengumuman...",
    tanggal: "1 Januari 2026",
    icon: "📢"
  },
  // ...
];
```

### Tambah Foto Galeri
Letakkan foto di `assets/images/` lalu edit `galeriData` di `script.js`:
```js
// Ganti konten galeri-item dari emoji ke img tag
```

### Ubah Info Rekening
Cari bagian donasi di `index.html` dan ganti nomor rekening.

### Google Maps
Ganti URL embed di bagian `#kontak`:
1. Buka Google Maps → cari masjid
2. Share → Embed a map → Salin kode iframe
3. Tempel di `index.html`

---

## 🎨 Desain

- **Tema**: Islami – Hijau Emerald + Gold
- **Font**: Amiri (Arab) + Plus Jakarta Sans
- **Responsif**: Mobile-first, 3 breakpoint
- **Animasi**: Smooth scroll, hover effects, fade-in

---

## 📞 Kontak Pengembang

Untuk pertanyaan teknis atau pengembangan lanjutan:
- Buka Issue di GitHub repo ini

---

*Semoga website ini bermanfaat untuk kemakmuran Masjid Al-Ikhlas Sukoreno* 🤲
