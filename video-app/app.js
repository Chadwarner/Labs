'use strict';

/* ── Catalogue data ──────────────────────────────────────────────────── */
const catalogue = {
  action: [
    { title: 'Iron Ridge',       year: 2023, emoji: '⚔️',  colors: ['#8eb8e2', '#0d1e38'] },
    { title: 'Burning Coast',    year: 2022, emoji: '🔥',  colors: ['#ff6b35', '#6a1000'] },
    { title: 'Steelborn',        year: 2024, emoji: '🛡️',  colors: ['#5b8ab5', '#0a1828'] },
    { title: 'The Meridian War', year: 2021, emoji: '💣',  colors: ['#909090', '#0e0c0a'] },
    { title: 'Blacksite',        year: 2023, emoji: '🚁',  colors: ['#2a8a9a', '#030c0e'] },
    { title: 'Last Strike',      year: 2024, emoji: '🎯',  colors: ['#e83030', '#280000'] },
  ],
  adventure: [
    { title: 'The Last Forest',  year: 2024, emoji: '🌲',  colors: ['#3a9a3a', '#061406'] },
    { title: 'Drift',            year: 2023, emoji: '🌊',  colors: ['#1a9ed4', '#031420'] },
    { title: 'Summit Zero',      year: 2022, emoji: '⛰️',  colors: ['#8ca0b8', '#121820'] },
    { title: 'Into the Canyon',  year: 2024, emoji: '🏜️',  colors: ['#d4845a', '#2a0e04'] },
    { title: 'River Wild',       year: 2021, emoji: '🦅',  colors: ['#5aabe0', '#0a1418'] },
    { title: 'Wanderpath',       year: 2023, emoji: '🗺️',  colors: ['#c4a040', '#160c02'] },
  ],
  drama: [
    { title: 'Ember',            year: 2023, emoji: '🕯️',  colors: ['#e8a020', '#140800'] },
    { title: 'The Quiet Hours',  year: 2022, emoji: '🌙',  colors: ['#6070d0', '#04040e'] },
    { title: 'Harvest',          year: 2024, emoji: '🌾',  colors: ['#d4b038', '#140c00'] },
    { title: 'Saltwater',        year: 2021, emoji: '🐚',  colors: ['#c09080', '#041414'] },
    { title: 'Crooked Pines',    year: 2023, emoji: '🌲',  colors: ['#4a8a50', '#060a06'] },
    { title: 'November Rain',    year: 2024, emoji: '🌧️',  colors: ['#5880b0', '#040810'] },
  ],
  nature: [
    { title: 'Wild Seasons',     year: 2024, emoji: '🌿',  colors: ['#50c860', '#041004'] },
    { title: 'Deep Roots',       year: 2023, emoji: '🌳',  colors: ['#3a8840', '#0a0604'] },
    { title: 'Tidepool',         year: 2022, emoji: '🐠',  colors: ['#ff7a50', '#041520'] },
    { title: 'Arctic Light',     year: 2024, emoji: '🧊',  colors: ['#80d8f8', '#041018'] },
    { title: 'The Migration',    year: 2021, emoji: '🦋',  colors: ['#9860d8', '#08040e'] },
    { title: 'Old Growth',       year: 2023, emoji: '🍄',  colors: ['#c05020', '#080402'] },
  ],
  thriller: [
    { title: 'Hollow Creek',     year: 2023, emoji: '🌫️',  colors: ['#8090a8', '#060810'] },
    { title: 'The Unseen',       year: 2022, emoji: '👁️',  colors: ['#7040b0', '#020006'] },
    { title: 'Deadlock',         year: 2024, emoji: '🔒',  colors: ['#708090', '#050608'] },
    { title: 'Under Glass',      year: 2021, emoji: '🔍',  colors: ['#90b8d8', '#030810'] },
    { title: 'Night Signal',     year: 2023, emoji: '📡',  colors: ['#30e870', '#010602'] },
    { title: 'False Witness',    year: 2024, emoji: '🎭',  colors: ['#a01828', '#060002'] },
  ],
  comedy: [
    { title: 'Backyard Chaos',   year: 2024, emoji: '🌻',  colors: ['#f0c020', '#3a1800'] },
    { title: 'The Long Weekend', year: 2023, emoji: '🍺',  colors: ['#e08828', '#140800'] },
    { title: 'Plot Twist',       year: 2022, emoji: '😂',  colors: ['#f0d030', '#201400'] },
    { title: 'Odd Couple Out',   year: 2021, emoji: '🎪',  colors: ['#d840a8', '#120016'] },
    { title: 'Noodle Town',      year: 2024, emoji: '🍜',  colors: ['#e05030', '#180400'] },
    { title: 'Friendly Fire',    year: 2023, emoji: '🎯',  colors: ['#e83030', '#1e0000'] },
  ],
};

const heroData = {
  title: 'The Last Forest',
  year: '2024',
  runtime: '1h 52m',
  genre: 'Adventure',
  desc: 'A lone ranger must navigate a world reclaimed by wilderness, forging unlikely alliances to protect what little of civilization remains.',
  badge: 'Featured',
  emoji: '🌲',
};

/* ── Hero setup ──────────────────────────────────────────────────────── */
function setupHero() {
  document.getElementById('heroTitle').textContent  = heroData.title;
  document.getElementById('heroMeta').innerHTML     =
    `${heroData.year} &nbsp;·&nbsp; ${heroData.runtime} &nbsp;·&nbsp; ${heroData.genre}`;
  document.getElementById('heroDesc').textContent   = heroData.desc;
  document.getElementById('heroBadge').textContent  = heroData.badge;
}

/* ── Render rows ─────────────────────────────────────────────────────── */
function buildCard(item, genre) {
  const card = document.createElement('div');
  card.className = `card card--${genre}`;
  card.style.setProperty('--c1', item.colors[0]);
  card.style.setProperty('--c2', item.colors[1]);
  card.innerHTML = `
    <div class="card__placeholder">
      <span class="card__placeholder-icon">${item.emoji}</span>
    </div>
    <div class="card__gradient"></div>
    <div class="card__info">
      <div class="card__title">${item.title}</div>
      <div class="card__year">${item.year}</div>
    </div>
    <div class="card__play-hint">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    </div>
  `;
  card.addEventListener('click', () => openPlayer(item.title));
  return card;
}

function renderRows() {
  for (const [genre, items] of Object.entries(catalogue)) {
    const track = document.getElementById(`row-${genre}`);
    if (!track) continue;
    items.forEach(item => track.appendChild(buildCard(item, genre)));
  }
}

/* ── Player logic ────────────────────────────────────────────────────── */
let playing  = false;
let progress = 0;
let ticker   = null;
const TOTAL  = 6720; // 1h 52m in seconds

function openPlayer(title) {
  const overlay = document.getElementById('playerOverlay');
  const ptitle  = document.getElementById('playerTitle');

  ptitle.textContent = (title === 'hero') ? heroData.title : title;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  progress = 0;
  updateProgress();
  playing = false;
  togglePlay();
}

function closePlayer(e) {
  if (e && e.target !== document.getElementById('playerOverlay')) return;
  document.getElementById('playerOverlay').classList.remove('open');
  document.body.style.overflow = '';
  if (ticker) { clearInterval(ticker); ticker = null; }
  playing = false;
  updatePlayIcon();
}

function togglePlay() {
  playing = !playing;
  updatePlayIcon();
  if (playing) {
    ticker = setInterval(() => {
      progress = Math.min(progress + 1, TOTAL);
      updateProgress();
      if (progress >= TOTAL) { clearInterval(ticker); playing = false; updatePlayIcon(); }
    }, 1000);
  } else {
    if (ticker) { clearInterval(ticker); ticker = null; }
  }
}

function skipBack()    { progress = Math.max(0, progress - 10);    updateProgress(); }
function skipForward() { progress = Math.min(TOTAL, progress + 30); updateProgress(); }

function updateProgress() {
  const pct  = (progress / TOTAL) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressThumb').style.left = pct + '%';
  document.getElementById('playerTime').textContent   = formatTime(progress);
}

function updatePlayIcon() {
  const btn = document.getElementById('playPauseBtn');
  btn.innerHTML = playing
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
}

function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${m}:${String(sec).padStart(2,'0')}`;
}

/* ── My List ─────────────────────────────────────────────────────────── */
function addToList(btn) {
  btn.classList.toggle('added');
  if (btn.classList.contains('added')) {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Added`;
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> My List`;
  }
}

/* ── Nav scroll transparency ─────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(12,10,8,.97)'
      : 'linear-gradient(to bottom, rgba(12,10,8,.95) 0%, transparent 100%)';
  }, { passive: true });
}

/* ── Progress bar drag ───────────────────────────────────────────────── */
function initProgressDrag() {
  const bar = document.querySelector('.player__progress-bar');
  if (!bar) return;

  const seek = (e) => {
    const rect = bar.getBoundingClientRect();
    const x    = (e.touches ? e.touches[0].clientX : e.clientX);
    const pct  = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    progress   = Math.round(pct * TOTAL);
    updateProgress();
  };

  bar.addEventListener('click',      seek);
  bar.addEventListener('touchstart', seek, { passive: true });
}

/* ── Init ─────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setupHero();
  renderRows();
  initNavScroll();
  initProgressDrag();
});
