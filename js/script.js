// ============================================================
// MASJID AL-IKHLAS SUKORENO — script.js
// ============================================================

// ===== DATA JADWAL SHOLAT =====
const jadwalSholat = {
  subuh:   "04:22",
  dzuhur:  "11:52",
  ashar:   "15:14",
  maghrib: "17:43",
  isya:    "18:57"
};

// ===== DATA KEGIATAN =====
const kegiatanData = [
  {
    icon: "📖",
    nama: "Pengajian Rutin",
    deskripsi: "Kajian kitab kuning dan tafsir Al-Quran bersama ustadz dan masyarakat sekitar desa.",
    jadwal: "Setiap Kamis, 20:00"
  },
  {
    icon: "🎓",
    nama: "TPA (Taman Pendidikan Al-Quran)",
    deskripsi: "Belajar membaca Al-Quran dan dasar-dasar Islam untuk anak-anak usia 5–15 tahun.",
    jadwal: "Senin–Jumat, 16:00"
  },
  {
    icon: "🧹",
    nama: "Jumat Bersih",
    deskripsi: "Gotong royong membersihkan masjid dan lingkungan sekitar bersama warga desa.",
    jadwal: "Setiap Jumat, 08:00"
  },
  {
    icon: "🌙",
    nama: "Kegiatan Ramadhan",
    deskripsi: "Tarawih berjamaah, buka bersama, tadarus Al-Quran, dan i'tikaf di 10 malam terakhir.",
    jadwal: "Selama Bulan Ramadhan"
  },
  {
    icon: "🤲",
    nama: "Pengajian Ibu-Ibu",
    deskripsi: "Majelis taklim khusus ibu-ibu dengan materi fikih wanita, tausiyah, dan keterampilan islami.",
    jadwal: "Setiap Ahad, 09:00"
  },
  {
    icon: "⭐",
    nama: "Hari Besar Islam",
    deskripsi: "Peringatan Maulid Nabi, Isra Mi'raj, Tahun Baru Islam, dan hari besar lainnya.",
    jadwal: "Mengikuti Kalender Hijriyah"
  }
];

// ===== DATA PENGUMUMAN =====
const pengumumanData = [
  {
    badge: "penting",
    label: "Penting",
    judul: "Renovasi Lantai 2 Masjid",
    isi: "Renovasi lantai dua masjid akan dimulai pada awal bulan depan. Jamaah tetap dapat beribadah di lantai dasar. Mohon doa dan dukungannya.",
    tanggal: "28 Februari 2026",
    icon: "🔧"
  },
  {
    badge: "kegiatan",
    label: "Kegiatan",
    judul: "Pendaftaran TPA Gelombang Baru",
    isi: "Dibuka pendaftaran peserta TPA baru untuk periode Maret 2026. Usia 5–15 tahun. Daftar langsung ke pengurus masjid.",
    tanggal: "25 Februari 2026",
    icon: "📝"
  },
  {
    badge: "info",
    label: "Info",
    judul: "Jadwal Imam & Khatib Bulan Maret",
    isi: "Jadwal imam sholat Jumat dan khatib untuk bulan Maret 2026 telah tersedia. Silakan hubungi pengurus untuk informasi lengkap.",
    tanggal: "20 Februari 2026",
    icon: "📅"
  },
  {
    badge: "umum",
    label: "Umum",
    judul: "Pengumpulan Zakat Fitrah 2026",
    isi: "Panitia zakat fitrah telah dibentuk. Penyaluran zakat akan dilakukan H-2 Idul Fitri. Bagi yang ingin menjadi muzakki, silakan hubungi panitia.",
    tanggal: "15 Februari 2026",
    icon: "🌿"
  },
  {
    badge: "kegiatan",
    label: "Kegiatan",
    judul: "Lomba Hafalan Quran Anak",
    isi: "Dalam rangka memperingati Hari Anak, masjid menyelenggarakan lomba hafalan quran kategori usia 7–12 tahun. Pendaftaran segera!",
    tanggal: "10 Februari 2026",
    icon: "🏆"
  },
  {
    badge: "info",
    label: "Info",
    judul: "Donasi Alat Ibadah Diterima",
    isi: "Masjid menerima donasi berupa sajadah, mukena, sarung, dan perlengkapan ibadah lainnya dalam kondisi layak pakai.",
    tanggal: "5 Februari 2026",
    icon: "🎁"
  }
];

// ===== DATA GALERI =====
// Letakkan foto di assets/images/ lalu isi field "foto"
// Jika file tidak ada, otomatis tampil emoji placeholder
const galeriData = [
  { emoji: "🕌", label: "Masjid Al-Ikhlas",  bg: "linear-gradient(135deg,#0f4a31,#1a6b47)", foto: "assets/images/masjid.jpg" },
  { emoji: "🌙", label: "Sholat Tarawih",    bg: "linear-gradient(135deg,#1e3a5f,#2563eb)", foto: "assets/images/kegiatan1.jpg" },
  { emoji: "📖", label: "Pengajian Rutin",   bg: "linear-gradient(135deg,#4a1942,#7c3aed)", foto: "assets/images/kegiatan2.jpg" },
  { emoji: "🎓", label: "Santri TPA",        bg: "linear-gradient(135deg,#7c2d12,#c9973a)", foto: "assets/images/kegiatan3.jpg" },
  { emoji: "🤲", label: "Buka Bersama",      bg: "linear-gradient(135deg,#064e3b,#10b981)", foto: "assets/images/kegiatan4.jpg" },
  { emoji: "⭐", label: "Maulid Nabi",       bg: "linear-gradient(135deg,#1a1a2e,#6a5acd)", foto: "assets/images/kegiatan5.jpg" }
];

// ============================================================
// HELPERS
// ============================================================

function getActiveWaktu() {
  const now = new Date();
  const cur = now.getHours() * 60 + now.getMinutes();
  const toMin = t => { const [h,m] = t.split(':').map(Number); return h*60+m; };
  const list = [
    { key:'subuh',   menit: toMin(jadwalSholat.subuh) },
    { key:'dzuhur',  menit: toMin(jadwalSholat.dzuhur) },
    { key:'ashar',   menit: toMin(jadwalSholat.ashar) },
    { key:'maghrib', menit: toMin(jadwalSholat.maghrib) },
    { key:'isya',    menit: toMin(jadwalSholat.isya) }
  ];
  let active = 'isya';
  for (let i = list.length - 1; i >= 0; i--) {
    if (cur >= list[i].menit) { active = list[i].key; break; }
  }
  return active;
}

// Copy teks ke clipboard — 2 metode + fallback prompt
function copyToClipboard(text) {
  // Metode 1: Clipboard API (HTTPS)
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  // Metode 2: execCommand lama (HTTP juga jalan)
  return new Promise((resolve, reject) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999); // mobile
    const ok = document.execCommand('copy');
    document.body.removeChild(el);
    ok ? resolve() : reject(new Error('execCommand gagal'));
  });
}

// ============================================================
// INITS
// ============================================================

function initNavbar() {
  const nav  = document.getElementById('mainNav');
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  ham && ham.addEventListener('click', () => menu.classList.toggle('open'));

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.addEventListener('click', () => menu && menu.classList.remove('open'));
  });
}

// ── Jadwal Sholat ──────────────────────────────────────────
function initJadwal() {
  const grid = document.getElementById('jadwalGrid');
  if (!grid) return;

  const active = getActiveWaktu();
  const items = [
    { key:'subuh',   icon:'🌅', nama:'Subuh' },
    { key:'dzuhur',  icon:'☀️', nama:'Dzuhur' },
    { key:'ashar',   icon:'🌤️', nama:'Ashar' },
    { key:'maghrib', icon:'🌆', nama:'Maghrib' },
    { key:'isya',    icon:'🌙', nama:'Isya' }
  ];

  grid.innerHTML = items.map(it => `
    <div class="jadwal-item${it.key === active ? ' aktif' : ''}">
      <div class="jadwal-icon">${it.icon}</div>
      <div class="jadwal-nama">${it.nama}</div>
      <div class="jadwal-waktu">${jadwalSholat[it.key]}</div>
    </div>`).join('');

  const dateEl = document.getElementById('jadwalDate');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('id-ID',
      { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  }
}

function initMiniJadwal() {
  const el = document.getElementById('miniJadwal');
  if (!el) return;
  el.innerHTML = [
    { nama:'Subuh',   key:'subuh' },
    { nama:'Dzuhur',  key:'dzuhur' },
    { nama:'Ashar',   key:'ashar' },
    { nama:'Maghrib', key:'maghrib' }
  ].map(it => `
    <div class="sholat-mini-item">
      <div class="nama">${it.nama}</div>
      <div class="waktu">${jadwalSholat[it.key]}</div>
    </div>`).join('');
}

// ── Kegiatan ───────────────────────────────────────────────
function initKegiatan() {
  const el = document.getElementById('kegiatanGrid');
  if (!el) return;
  el.innerHTML = kegiatanData.map(it => `
    <div class="kegiatan-card">
      <div class="kegiatan-icon">${it.icon}</div>
      <h3>${it.nama}</h3>
      <p>${it.deskripsi}</p>
      <span class="kegiatan-jadwal">🕐 ${it.jadwal}</span>
    </div>`).join('');
}

// ── Pengumuman ─────────────────────────────────────────────
function initPengumuman() {
  const el = document.getElementById('pengumumanGrid');
  if (!el) return;
  el.innerHTML = pengumumanData.map(it => `
    <div class="pengumuman-card">
      <span class="pengumuman-badge badge-${it.badge}">${it.label}</span>
      <h3>${it.icon} ${it.judul}</h3>
      <p>${it.isi}</p>
      <div class="pengumuman-date">📅 ${it.tanggal}</div>
    </div>`).join('');
}

// ── Galeri ─────────────────────────────────────────────────
function initGaleri() {
  const el = document.getElementById('galeriGrid');
  if (!el) return;

  el.innerHTML = galeriData.map((it, i) => {
    const fs = i === 0 ? '60px' : '40px';
    // Selalu render img tag; onerror akan swap ke placeholder
    return `
      <div class="galeri-item" style="background:${it.bg};padding:0;overflow:hidden;">
        <img
          src="${it.foto || ''}"
          alt="${it.label}"
          loading="lazy"
          style="width:100%;height:100%;object-fit:cover;display:${it.foto ? 'block' : 'none'};"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          onload="this.nextElementSibling.style.display='none';"
        />
        <div class="galeri-placeholder" style="display:${it.foto ? 'none' : 'flex'};position:absolute;inset:0;">
          <span style="font-size:${fs}">${it.emoji}</span>
          <span>${it.label}</span>
        </div>
        <div class="galeri-overlay">
          <span>📷 ${it.label}</span>
        </div>
      </div>`;
  }).join('');
}

// ── Copy Rekening ──────────────────────────────────────────
function initCopyRekening() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Baca nomor dari data-rek attribute
      const noRek = this.getAttribute('data-rek');
      if (!noRek) return;

      const self = this;
      const orig = self.innerHTML;

      copyToClipboard(noRek)
        .then(() => {
          self.innerHTML = '✓ Tersalin!';
          self.style.background = '#10b981';
        })
        .catch(() => {
          // Fallback terakhir: prompt dialog
          window.prompt('Salin nomor rekening ini (Ctrl+C / Cmd+C):', noRek);
        });

      // Reset tombol setelah 2.5 detik
      setTimeout(() => {
        self.innerHTML = orig;
        self.style.background = '';
      }, 2500);
    });
  });
}

// ── Scroll to Top ──────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ── Active Nav ─────────────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

// ── Live Clock ─────────────────────────────────────────────
function initClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString('id-ID',
      { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  };
  tick();
  setInterval(tick, 1000);
}

// ============================================================
// MAIN — jalankan setelah DOM siap
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initJadwal();
  initMiniJadwal();
  initKegiatan();
  initPengumuman();
  initGaleri();
  initCopyRekening();
  initScrollTop();
  initActiveNav();
  initClock();
});
