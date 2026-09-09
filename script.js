// ===== Lirik Imut — script.js =====
// Membaca daftar lagu hardcode dari songs.js, memutar musik,
// dan menyorot lirik yang sedang dinyanyikan sesuai waktu lagu.

const audio        = document.getElementById('audio');
const artPhoto      = document.getElementById('artPhoto');
const artFallback   = document.getElementById('artFallback');
const songTitleEl   = document.getElementById('songTitle');
const songArtistEl  = document.getElementById('songArtist');
const lyricsCard     = document.getElementById('lyricsCard');

const syncBtn   = document.getElementById('syncBtn');
const changeBtn = document.getElementById('changeBtn');
const heartBtn  = document.getElementById('heartBtn');

const playBtn  = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');

const seekBar = document.getElementById('seekBar');
const curTime = document.getElementById('curTime');
const durTime = document.getElementById('durTime');

let currentIndex = 0;
let isPlaying = false;
let syncOn = true;

// Menerima angka detik (15) ATAU teks "MM:SS" / "HH:MM:SS" (00:15, 1:07:30)
// dan selalu mengembalikan jumlah detik dalam bentuk angka.
function parseTime(t) {
  if (typeof t === 'number') return t;
  if (typeof t !== 'string') return 0;

  const parts = t.split(':').map(Number);
  if (parts.some(isNaN)) return 0;

  if (parts.length === 3) {
    const [h, m, s] = parts;
    return h * 3600 + m * 60 + s;
  }
  if (parts.length === 2) {
    const [m, s] = parts;
    return m * 60 + s;
  }
  return parts[0];
}

// ---------- Load a song from the hardcoded SONGS list ----------
function loadSong(index) {
  currentIndex = (index + SONGS.length) % SONGS.length;
  const song = SONGS[currentIndex];

  audio.src = song.audioSrc;
  songTitleEl.textContent = song.title;
  songArtistEl.textContent = song.artist;

  // Foto di tengah: kalau file foto ada, dia dipakai. Kalau tidak
  // ditemukan, otomatis balik ke ikon bulan bawaan.
  artPhoto.style.display = 'none';
  artFallback.style.display = 'block';
  if (song.photoSrc) {
    const testImg = new Image();
    testImg.onload = () => {
      artPhoto.src = song.photoSrc;
      artPhoto.style.display = 'block';
      artFallback.style.display = 'none';
    };
    testImg.onerror = () => {
      artPhoto.style.display = 'none';
      artFallback.style.display = 'block';
    };
    testImg.src = song.photoSrc;
  }

  renderLyrics(song.lyrics);
  seekBar.value = 0;
  curTime.textContent = '0:00';
  durTime.textContent = '0:00';
}

// ---------- Render lyric lines ----------
function renderLyrics(lyrics) {
  lyricsCard.innerHTML = '';
  lyrics.forEach((line, i) => {
    const div = document.createElement('div');
    div.className = 'lyric-line';
    div.textContent = line.text;
    div.dataset.index = i;
    div.addEventListener('click', () => {
      audio.currentTime = parseTime(line.time);
      if (!isPlaying) playAudio();
    });
    lyricsCard.appendChild(div);
  });
}

// ---------- Sync highlight based on audio time ----------
function updateActiveLyric() {
  if (!syncOn) return;
  const lyrics = SONGS[currentIndex].lyrics;
  const lines = lyricsCard.querySelectorAll('.lyric-line');
  let activeIdx = 0;

  for (let i = 0; i < lyrics.length; i++) {
    if (audio.currentTime >= parseTime(lyrics[i].time)) activeIdx = i;
  }

  lines.forEach((el, i) => {
    el.classList.remove('current', 'near');
    if (i === activeIdx) {
      el.classList.add('current');
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else if (Math.abs(i - activeIdx) === 1) {
      el.classList.add('near');
    }
  });
}

// ---------- Playback controls ----------
function playAudio() {
  audio.play().catch(() => {
    // File musik belum ditemukan / belum diganti dari placeholder
    songArtistEl.textContent = 'Taruh file musiknya di folder assets/ ya ✨';
  });
  isPlaying = true;
  updatePlayIcon();
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  updatePlayIcon();
}

function updatePlayIcon() {
  playIcon.innerHTML = isPlaying
    ? '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>'
    : '<path d="M8 5v14l11-7z"/>';
}

playBtn.addEventListener('click', () => isPlaying ? pauseAudio() : playAudio());
prevBtn.addEventListener('click', () => { loadSong(currentIndex - 1); playAudio(); });
nextBtn.addEventListener('click', () => { loadSong(currentIndex + 1); playAudio(); });
audio.addEventListener('ended', () => { loadSong(currentIndex + 1); playAudio(); });

// ---------- Progress bar ----------
audio.addEventListener('loadedmetadata', () => {
  seekBar.max = audio.duration || 0;
  durTime.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.currentTime;
  curTime.textContent = formatTime(audio.currentTime);
  updateActiveLyric();
});

seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
});

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ---------- Sync toggle ----------
syncBtn.addEventListener('click', () => {
  syncOn = !syncOn;
  syncBtn.classList.toggle('active', syncOn);
  if (!syncOn) {
    lyricsCard.querySelectorAll('.lyric-line').forEach(el => el.classList.remove('current', 'near'));
  }
});

// ---------- Ganti lagu button (loncat ke lagu berikutnya di daftar) ----------
changeBtn.addEventListener('click', () => {
  loadSong(currentIndex + 1);
});

// ---------- Heart / favorit (cuma visual, boleh dikembangkan) ----------
heartBtn.addEventListener('click', () => {
  heartBtn.classList.toggle('active');
});

// ---------- Mulai ----------
syncBtn.classList.add('active');
loadSong(0);
