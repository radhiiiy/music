// ============================================================
//  songs.js — DAFTAR LAGU KAMU (hardcode di sini, bukan upload)
// ============================================================
//
// Cara pakai:
// 1. Taruh file musik kamu di dalam folder "assets/" (contoh: assets/lagu1.mp3)
// 2. Taruh foto kamu juga di folder "assets/" (contoh: assets/foto1.jpg)
// 3. Isi/ubah data di bawah ini sesuai lagu & foto kamu.
// 4. Lirik ditulis per baris dengan "time" = detik ke berapa baris itu
//    mulai dinyanyikan. Sesuaikan angkanya sambil dengerin lagunya.
// 5. Mau nambah lagu lain? Tinggal copy satu blok { ... } di bawah,
//    lalu tombol "Ganti Lagu" otomatis akan looping ke semua lagu di sini.
//
// ============================================================

const SONGS = [
  {
    title: "1000X",
    artist: "Ghea Indrawari",
    audioSrc: "assets/lagu1.mp3",   // sudah diisi file yang kamu upload
    photoSrc: "assets/foto1.jpg",   // taruh foto kamu di assets/ lalu ganti nama filenya di sini

    // Catatan: lirik lagu ini punya hak cipta, jadi belum bisa diisi otomatis.
    // Silakan ketik sendiri liriknya di bawah ini (baris demi baris), lalu
    // sesuaikan angka "time" (dalam detik) dengan saat baris itu mulai
    // dinyanyikan di lagunya. Baris di bawah cuma contoh slot kosong.
    lyrics: [
    { time: "00:24", text: "Kadang aku iri melihat mereka" },
    { time: "00:28", text: "Tercipta seperti pasangan yang sempurna" },
    { time: "00:32", text: "Saling mencintai dan begitu bahagia" },
    { time: "00:38", text: "Dan dipuja-puji insan yang memandangnya" },
    { time: "00:42", text: "Lalu aku memandangmu" },
    { time: "00:46", text: "Dan tersadar betapa beruntungnya" },
    { time: "00:51", text: "Ada cinta seperti cintamu kepadaku" },
    { time: "01:00", text: "Cukup aku milikmu dan kamu milikku" },
    { time: "01:05", text: "Tetap di sampingku sampai jadi debu" },
    { time: "01:09", text: "Sampai akhir waktu" },
    { time: "01:11", text: "Sampai maut yang bersaksi cintaku abadi" },
    { time: "01:17", text: "Dan bila aku terlahir seribu kali lagi" },
    { time: "01:23", text: "Di dunia yang lain, aku tak peduli" },
    { time: "01:27", text: "Kau akan kucari" },
    { time: "01:30", text: "Sampai kau tahu betapa kau kucintai" },
    { time: "01:37", text: "Lalu aku memandangmu" },
    { time: "01:41", text: "Dan tersadar betapa beruntungnya" },
    { time: "01:46", text: "Ada cinta seperti cintamu kepadaku" },
    { time: "01:54", text: "Cukup aku milikmu dan kamu milikku" },
    { time: "01:59", text: "Tetap di sampingku sampai jadi debu" },
    { time: "02:04", text: "Sampai akhir waktu" },
    { time: "02:06", text: "Sampai maut yang bersaksi cintaku abadi" },
    { time: "02:13", text: "Dan bila aku terlahir seribu kali lagi" },
    { time: "02:18", text: "Di dunia yang lain, aku tak peduli" },
    { time: "02:22", text: "Kau akan kucari" },
    { time: "02:25", text: "Sampai kau tahu betapa kau kucintai" },
    { time: "02:38", text: "Seribu kali lagi" },
    { time: "02:43", text: "Kau akan kucintai" },
    { time: "02:49", text: "Cukup aku milikmu, kau milikku" },
    { time: "02:54", text: "Tetap di sampingku" },
    { time: "02:57", text: "Sampai jadi debu, sampai akhir waktu" },
    { time: "03:06", text: "Kau tetap milikku, bintang di malamku" },
    { time: "03:15", text: "detak di jantungku" },
    { time: "03:19", text: "Sampai maut yang bersaksi, cintaku abadi" },
    { time: "03:29", text: "Seribu kali lagi" },
    { time: "03:33", text: "Aku tak peduli" },
    { time: "03:38", text: "Sampai kau tahu betapa kau kucintai" },
    { time: "03:51", text: "Kau akan kucari" },
    { time: "03:56", text: "Sampai kau tahu betapa kau kucintai" }
  ]
  }
];
