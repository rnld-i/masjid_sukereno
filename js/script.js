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
    jadwal: "Setiap Kamis, 20:00",
    warna: "#1a6b47"
  },
  {
    icon: "🎓",
    nama: "TPA (Taman Pendidikan Al-Quran)",
    deskripsi: "Belajar membaca Al-Quran dan dasar-dasar Islam untuk anak-anak usia 5–15 tahun.",
    jadwal: "Senin–Jumat, 16:00",
    warna: "#c9973a"
  },
  {
    icon: "🧹",
    nama: "Jumat Bersih",
    deskripsi: "Gotong royong membersihkan masjid dan lingkungan sekitar bersama warga desa.",
    jadwal: "Setiap Jumat, 08:00",
    warna: "#2563eb"
  },
  {
    icon: "🌙",
    nama: "Kegiatan Ramadhan",
    deskripsi: "Tarawih berjamaah, buka bersama, tadarus Al-Quran, dan i'tikaf di 10 malam terakhir.",
    jadwal: "Selama Bulan Ramadhan",
    warna: "#7c3aed"
  },
  {
    icon: "🤲",
    nama: "Pengajian Ibu-Ibu",
    deskripsi: "Majelis taklim khusus ibu-ibu dengan materi fikih wanita, tausiyah, dan keterampilan islami.",
    jadwal: "Setiap Ahad, 09:00",
    warna: "#db2777"
  },
  {
    icon: "⭐",
    nama: "Hari Besar Islam",
    deskripsi: "Peringatan Maulid Nabi, Isra Mi'raj, Tahun Baru Islam, dan hari besar lainnya.",
    jadwal: "Mengikuti Kalender Hijriyah",
    warna: "#d97706"
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
// Untuk menambah foto nyata, isi field "foto" dengan path file:
// Contoh: foto: "assets/images/masjid.jpg"
const galeriData = [
  { emoji: "🕌", label: "Masjid Al-Ikhlas", bg: "linear-gradient(135deg, #0f4a31, #1a6b47)", foto: "assets/images/masjid.jpg" },
  { emoji: "🌙", label: "Sholat Tarawih", bg: "linear-gradient(135deg, #1e3a5f, #2563eb)", foto: "assets/images/kegiatan1.jpg" },
  { emoji: "📖", label: "Pengajian Rutin", bg: "linear-gradient(135deg, #4a1942, #7c3aed)", foto: "assets/images/kegiatan2.jpg" },
  { emoji: "🎓", label: "Santri TPA", bg: "linear-gradient(135deg, #7c2d12, #c9973a)", foto: "assets/images/kegiatan3.jpg" },
  { emoji: "🤲", label: "Buka Bersama", bg: "linear-gradient(135deg, #064e3b, #10b981)", foto: "assets/images/kegiatan4.jpg" },
  { emoji: "⭐", label: "Maulid Nabi", bg: "linear-gradient(135deg, #1a1a2e, #6a5acd)", foto: "assets/images/kegiatan5.jpg" }
];

// ===== INIT FUNCTIONS =====

function initNavbar() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

function getActiveWaktu() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const toMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const waktuList = [
    { key: 'subuh', menit: toMinutes(jadwalSholat.subuh) },
    { key: 'dzuhur', menit: toMinutes(jadwalSholat.dzuhur) },
    { key: 'ashar', menit: toMinutes(jadwalSholat.ashar) },
    { key: 'maghrib', menit: toMinutes(jadwalSholat.maghrib) },
    { key: 'isya', menit: toMinutes(jadwalSholat.isya) },
  ];

  let activeKey = 'isya';
  for (let i = waktuList.length - 1; i >= 0; i--) {
    if (currentMinutes >= waktuList[i].menit) {
      activeKey = waktuList[i].key;
      break;
    }
  }
  return activeKey;
}

function initJadwal() {
  const container = document.getElementById('jadwalGrid');
  if (!container) return;

  const activeKey = getActiveWaktu();

  const items = [
    { key: 'subuh', icon: '🌅', nama: 'Subuh' },
    { key: 'dzuhur', icon: '☀️', nama: 'Dzuhur' },
    { key: 'ashar', icon: '🌤️', nama: 'Ashar' },
    { key: 'maghrib', icon: '🌆', nama: 'Maghrib' },
    { key: 'isya', icon: '🌙', nama: 'Isya' },
  ];

  container.innerHTML = items.map(item => `
    <div class="jadwal-item ${item.key === activeKey ? 'aktif' : ''}">
      <div class="jadwal-icon">${item.icon}</div>
      <div class="jadwal-nama">${item.nama}</div>
      <div class="jadwal-waktu">${jadwalSholat[item.key]}</div>
    </div>
  `).join('');

  // Update tanggal
  const dateEl = document.getElementById('jadwalDate');
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
  }
}

function initMiniJadwal() {
  const container = document.getElementById('miniJadwal');
  if (!container) return;

  const items = [
    { nama: 'Subuh', key: 'subuh' },
    { nama: 'Dzuhur', key: 'dzuhur' },
    { nama: 'Ashar', key: 'ashar' },
    { nama: 'Maghrib', key: 'maghrib' },
  ];

  container.innerHTML = items.map(item => `
    <div class="sholat-mini-item">
      <div class="nama">${item.nama}</div>
      <div class="waktu">${jadwalSholat[item.key]}</div>
    </div>
  `).join('');
}

function initKegiatan() {
  const container = document.getElementById('kegiatanGrid');
  if (!container) return;

  container.innerHTML = kegiatanData.map((item, i) => `
    <div class="kegiatan-card fade-in-up" style="animation-delay: ${i * 0.1}s">
      <div class="kegiatan-icon">${item.icon}</div>
      <h3>${item.nama}</h3>
      <p>${item.deskripsi}</p>
      <span class="kegiatan-jadwal">🕐 ${item.jadwal}</span>
    </div>
  `).join('');
}

function initPengumuman() {
  const container = document.getElementById('pengumumanGrid');
  if (!container) return;

  container.innerHTML = pengumumanData.map((item, i) => `
    <div class="pengumuman-card fade-in-up" style="animation-delay: ${i * 0.1}s">
      <span class="pengumuman-badge badge-${item.badge}">${item.label}</span>
      <h3>${item.icon} ${item.judul}</h3>
      <p>${item.isi}</p>
      <div class="pengumuman-date">📅 ${item.tanggal}</div>
    </div>
  `).join('');
}

function initGaleri() {
  const container = document.getElementById('galeriGrid');
  if (!container) return;

  container.innerHTML = galeriData.map((item, i) => {
    const fontSize = i === 0 ? '60px' : '40px';
    if (item.foto) {
      // Ada path foto — tampilkan gambar, fallback ke emoji jika gagal load
      return `
        <div class="galeri-item" style="background: ${item.bg}; padding: 0; position: relative;">
          <img
            src="${item.foto}"
            alt="${item.label}"
            loading="lazy"
            style="width:100%; height:100%; object-fit:cover; display:block; border-radius: inherit;"
            onerror="this.style.display='none'; this.parentElement.querySelector('.galeri-placeholder').style.display='flex';"
          />
          <div class="galeri-placeholder" style="display:none; position:absolute; inset:0;">
            <span style="font-size:${fontSize}">${item.emoji}</span>
            <span>${item.label}</span>
          </div>
          <div class="galeri-overlay">
            <span>📷 ${item.label}</span>
          </div>
        </div>
      `;
    } else {
      // Belum ada foto — tampilkan placeholder emoji
      return `
        <div class="galeri-item" style="background: ${item.bg}">
          <div class="galeri-placeholder">
            <span style="font-size:${fontSize}">${item.emoji}</span>
            <span>${item.label}</span>
          </div>
          <div class="galeri-overlay">
            <span>📷 ${item.label}</span>
          </div>
        </div>
      `;
    }
  }).join('');
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function copyToClipboard(text) {
  // Cara 1: Clipboard API modern (butuh HTTPS)
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  // Cara 2: Fallback pakai execCommand (works di semua browser/HTTP)
  return new Promise((resolve, reject) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed; top:-9999px; left:-9999px; opacity:0;';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      resolve();
    } catch (err) {
      document.body.removeChild(textarea);
      reject(err);
    }
  });
}

function initCopyRekening() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const noRek = btn.dataset.rek;
      const original = btn.textContent;

      copyToClipboard(noRek)
        .then(() => {
          btn.textContent = '✓ Tersalin!';
          btn.style.background = '#10b981';
          btn.style.transform = 'scale(1.05)';
        })
        .catch(() => {
          // Jika semua cara gagal, tampilkan nomor di prompt
          prompt('Salin nomor rekening ini:', noRek);
        })
        .finally(() => {
          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.style.transform = '';
          }, 2000);
        });
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
}

// ===== CLOCK =====
function initClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  update();
  setInterval(update, 1000);
}

// ===== MAIN INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initJadwal();
  initMiniJadwal();
  initKegiatan();
  initPengumuman();
  initGaleri();
  initScrollTop();
  initCopyRekening();
  initActiveNav();
  initClock();
});
