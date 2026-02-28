// ============================================================
// MASJID AL-IKHLAS SUKORENO — script.js
// ============================================================
// CARA PAKAI GIST:
// 1. Buka gist.github.com → buat Gist baru
// 2. Upload file "konten.json" (isi dari gist-template.json)
// 3. Klik tombol "Raw" → salin URL-nya
// 4. Tempel URL tersebut di variabel GIST_RAW_URL di bawah
// ============================================================

const GIST_RAW_URL = 'https://gist.githubusercontent.com/rnld-i/98a3a2349a7898abf6eea076d8b96797/raw/8e16ed8374208faaafe2165b8ff1ab6aa6a95f6d/konten.json';
// Contoh: 'https://gist.githubusercontent.com/namakamu/abc123.../raw/konten.json'

// ── Jadwal Sholat (edit manual di sini) ────────────────────
const jadwalSholat = {
  subuh:   '04:22',
  dzuhur:  '11:52',
  ashar:   '15:14',
  maghrib: '17:43',
  isya:    '18:57'
};

// Warna background placeholder galeri jika foto gagal load
const galeriColors = [
  'linear-gradient(135deg,#0f4a31,#1a6b47)',
  'linear-gradient(135deg,#1e3a5f,#2563eb)',
  'linear-gradient(135deg,#4a1942,#7c3aed)',
  'linear-gradient(135deg,#7c2d12,#c9973a)',
  'linear-gradient(135deg,#064e3b,#10b981)',
  'linear-gradient(135deg,#1a1a2e,#6a5acd)'
];

const galeriEmoji = ['🕌','🌙','📖','🎓','🤲','⭐'];

// ============================================================
// FETCH KONTEN DARI GITHUB GIST
// ============================================================

async function loadGistKonten() {
  // Jika URL belum diisi, tampilkan pesan petunjuk
  // Hanya tampilkan petunjuk jika URL masih placeholder (belum diisi)
  if (!GIST_RAW_URL || GIST_RAW_URL === 'GANTI_DENGAN_RAW_URL_GIST_ANDA') {
    tampilkanPetunjukGist();
    return;
  }

  try {
    showLoading('pengumumanGrid', 'pengumuman');
    showLoading('galeriGrid', 'galeri');

    const res = await fetch(GIST_RAW_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (data.pengumuman) renderPengumuman(data.pengumuman);
    if (data.galeri)     renderGaleri(data.galeri);

  } catch (err) {
    console.error('Gagal load Gist:', err);
    showError('pengumumanGrid', 'pengumuman');
    showError('galeriGrid', 'galeri');
  }
}

// ── Skeleton loading ────────────────────────────────────────
function showLoading(containerId, tipe) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (tipe === 'pengumuman') {
    el.innerHTML = Array(3).fill(`
      <div class="skeleton-card">
        <div class="skeleton-badge"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
        <div class="skeleton-date"></div>
      </div>`).join('');
  } else {
    el.innerHTML = Array(6).fill(`
      <div class="galeri-item skeleton-galeri">
        <div class="skeleton-shine"></div>
      </div>`).join('');
    // Buat yang pertama wide
    el.firstElementChild && el.firstElementChild.classList.add('galeri-wide');
  }
}

// ── Pesan error ─────────────────────────────────────────────
function showError(containerId, tipe) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div class="gist-error">
      <div style="font-size:36px;margin-bottom:12px;">⚠️</div>
      <div style="font-weight:700;margin-bottom:6px;">Gagal memuat konten</div>
      <div style="font-size:13px;opacity:0.7;">Periksa GIST_RAW_URL di script.js atau koneksi internet.</div>
    </div>`;
}

// ── Petunjuk jika URL belum diisi ───────────────────────────
function tampilkanPetunjukGist() {
  const elP = document.getElementById('pengumumanGrid');
  const elG = document.getElementById('galeriGrid');

  const petunjuk = `
    <div class="gist-petunjuk">
      <div style="font-size:32px;margin-bottom:12px;">📋</div>
      <h3>Cara menghubungkan GitHub Gist</h3>
      <ol>
        <li>Buka <a href="https://gist.github.com" target="_blank">gist.github.com</a></li>
        <li>Buat Gist baru → upload file <strong>konten.json</strong></li>
        <li>Klik tombol <strong>Raw</strong> → salin URL-nya</li>
        <li>Tempel di <code>script.js</code> pada variabel <code>GIST_RAW_URL</code></li>
        <li>Deploy ulang ke Vercel</li>
      </ol>
      <p style="margin-top:12px;font-size:13px;opacity:0.7;">File template JSON sudah tersedia: <code>gist-template.json</code></p>
    </div>`;

  if (elP) elP.innerHTML = petunjuk;
  if (elG) elG.innerHTML = petunjuk;
}

// ── Render Pengumuman dari JSON ─────────────────────────────
function renderPengumuman(list) {
  const el = document.getElementById('pengumumanGrid');
  if (!el || !list.length) return;

  el.innerHTML = list.map(item => `
    <div class="pengumuman-card">
      <span class="pengumuman-badge badge-${escHtml(item.badge)}">${escHtml(item.label)}</span>
      <h3>${escHtml(item.icon || '')} ${escHtml(item.judul)}</h3>
      <p>${escHtml(item.isi)}</p>
      <div class="pengumuman-date">📅 ${escHtml(item.tanggal)}</div>
    </div>`).join('');
}

// ── Render Galeri dari JSON ─────────────────────────────────
function renderGaleri(list) {
  const el = document.getElementById('galeriGrid');
  if (!el || !list.length) return;

  el.innerHTML = list.map((item, i) => {
    const bg    = galeriColors[i % galeriColors.length];
    const emoji = galeriEmoji[i % galeriEmoji.length];
    const label = escHtml(item.label || '');
    const url   = escHtml(item.url  || '');
    const wide  = item.wide ? ' galeri-wide' : '';
    const fs    = item.wide ? '60px' : '40px';

    return `
      <div class="galeri-item${wide}" style="background:${bg};padding:0;overflow:hidden;">
        <img
          src="${url}"
          alt="${label}"
          loading="lazy"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          onload="this.nextElementSibling.style.display='none';"
        />
        <div class="galeri-placeholder" style="display:none;position:absolute;inset:0;">
          <span style="font-size:${fs}">${emoji}</span>
          <span>${label}</span>
        </div>
        <div class="galeri-overlay"><span>📷 ${label}</span></div>
      </div>`;
  }).join('');
}

// ── Escape HTML untuk keamanan ──────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ============================================================
// COPY REKENING
// ============================================================

function copyRek(nomor, btnEl) {
  const orig = btnEl.innerHTML;

  function berhasil() {
    btnEl.innerHTML = '✓ Tersalin!';
    btnEl.style.background = '#10b981';
    btnEl.style.color = '#fff';
    setTimeout(() => {
      btnEl.innerHTML = orig;
      btnEl.style.background = '';
      btnEl.style.color = '';
    }, 2500);
  }

  function seleksiManual() {
    // Fallback: seleksi teks nomor agar user bisa Ctrl+C sendiri
    const noEl = btnEl.closest('.rekening-item').querySelector('.rekening-no');
    if (noEl) {
      const r = document.createRange();
      r.selectNodeContents(noEl);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      btnEl.innerHTML = '👆 Diseleksi, tekan Ctrl+C';
      setTimeout(() => {
        btnEl.innerHTML = orig;
        window.getSelection().removeAllRanges();
      }, 3000);
    }
  }

  // Cara 1: Clipboard API modern
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(nomor).then(berhasil).catch(() => execCopy(nomor, berhasil, seleksiManual));
    return;
  }
  execCopy(nomor, berhasil, seleksiManual);
}

function execCopy(teks, onOk, onGagal) {
  try {
    const ta = document.createElement('textarea');
    ta.value = teks;
    ta.style.cssText = 'position:fixed;top:0;left:0;width:2px;height:2px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, 99999);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    ok ? onOk() : onGagal();
  } catch(e) {
    onGagal();
  }
}

// ============================================================
// JADWAL SHOLAT
// ============================================================

function getActiveWaktu() {
  const cur = new Date().getHours() * 60 + new Date().getMinutes();
  const toMin = t => { const [h,m] = t.split(':').map(Number); return h*60+m; };
  const urutan = ['subuh','dzuhur','ashar','maghrib','isya'];
  let active = 'isya';
  for (let i = urutan.length - 1; i >= 0; i--) {
    if (cur >= toMin(jadwalSholat[urutan[i]])) { active = urutan[i]; break; }
  }
  return active;
}

function initJadwal() {
  const grid = document.getElementById('jadwalGrid');
  if (!grid) return;
  const active = getActiveWaktu();
  const urutan = ['subuh','dzuhur','ashar','maghrib','isya'];
  grid.querySelectorAll('.jadwal-item').forEach((el, i) => {
    el.classList.toggle('aktif', urutan[i] === active);
  });
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
    { nama:'Subuh',   key:'subuh'   },
    { nama:'Dzuhur',  key:'dzuhur'  },
    { nama:'Ashar',   key:'ashar'   },
    { nama:'Maghrib', key:'maghrib' }
  ].map(it => `
    <div class="sholat-mini-item">
      <div class="nama">${it.nama}</div>
      <div class="waktu">${jadwalSholat[it.key]}</div>
    </div>`).join('');
}

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
// NAVBAR & UI
// ============================================================

function initNavbar() {
  const nav  = document.getElementById('mainNav');
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!nav) return;

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

  if (ham && menu) {
    ham.addEventListener('click', () => menu.classList.toggle('open'));
    document.querySelectorAll('.mobile-menu a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open')));
  }
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

function initActiveNav() {
  const links   = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  if (!links.length || !sections.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => obs.observe(s));
}

// ============================================================
// MAIN
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initJadwal();
  initMiniJadwal();
  initClock();
  initScrollTop();
  initActiveNav();
  loadGistKonten(); // fetch pengumuman + galeri dari Gist
});
