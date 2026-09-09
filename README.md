# 🎀 Lirik Imut

Player lirik lagu dengan tampilan imut — lirik menyala otomatis mengikuti
waktu lagu, dan foto kamu bisa muncul di tengah kartu.

Musik & foto di sini **di-hardcode langsung di kode** (tidak ada tombol
upload), jadi setelah kamu isi sekali, lagunya langsung siap diputar tiap
kali halaman dibuka.

## Cara pasang lagu & foto kamu

1. Buka folder `assets/`.
2. Taruh file musik kamu di situ, misalnya `lagu1.mp3`.
3. Taruh foto kamu di situ juga, misalnya `foto1.jpg`.
4. Buka file **`songs.js`**, lalu sesuaikan bagian ini:

```js
{
  title: "Langit Kertas",          // judul lagu kamu
  artist: "Kelinci Senja",         // nama penyanyi/kamu
  audioSrc: "assets/lagu1.mp3",    // nama file musik yang kamu taruh di assets/
  photoSrc: "assets/foto1.jpg",    // nama file foto yang kamu taruh di assets/
  lyrics: [
    { time: 0,  text: "baris lirik pertama" },
    { time: 8,  text: "baris lirik kedua" },
    // time = detik ke berapa baris ini mulai dinyanyikan
  ]
}
```

5. Untuk nge-pas-in waktu lirik (`time`), putar lagunya sambil lihat di
   detik berapa setiap baris mulai, lalu isi angkanya di situ.
6. Mau nambah lagu lain? Copy satu blok `{ ... }` di dalam `songs.js`,
   isi lagu baru, taruh koma di antaranya. Tombol **"Ganti Lagu"** akan
   otomatis looping ke semua lagu yang kamu daftarkan.

## Cara menjalankan di VS Code

1. Buka folder `lirik-imut` ini di VS Code.
2. Install extension **Live Server**.
3. Klik kanan `index.html` → **Open with Live Server**.

> Kalau dibuka langsung dengan cara klik dua kali file `index.html`
> (tanpa Live Server), beberapa browser akan memblokir pemutaran file
> lokal karena alasan keamanan. Live Server menghindari masalah itu.

## Tombol-tombol di UI

- **🎯 Sinkron** — nyala/matikan sorotan lirik otomatis mengikuti waktu lagu.
- **✏️ Ganti Lagu** — pindah ke lagu berikutnya dari daftar di `songs.js`.
- **🤍 Hati** — tandai lagu favorit (masih visual saja, bisa kamu kembangkan
  misalnya disimpan ke `localStorage`).
- Klik salah satu baris lirik → lagu langsung lompat ke waktu baris itu.

## File dalam project ini

- `index.html` — struktur halaman
- `style.css` — tampilan (gradient, kartu bulat, warna pastel)
- `songs.js` — **di sinilah kamu isi lagu, foto, dan lirik kamu**
- `script.js` — logika player & sinkronisasi lirik
- `assets/` — taruh file musik & foto kamu di sini
