// ============================================================
//  songs.js — DAFTAR LAGU KAMU (hardcode di sini, bukan upload)
// ============================================================
//
// Cara pakai:
// 1. Taruh file musik kamu di dalam folder "assets/" (contoh: assets/lagu1.mp3)
// 2. Taruh foto kamu juga di folder "assets/" (contoh: assets/foto1.jpg)
// 3. Isi/ubah data di bawah ini sesuai lagu & foto kamu.
// 4. Lirik ditulis per baris dengan "time" = kapan baris itu mulai
//    dinyanyikan. Boleh format detik biasa (24) atau "menit:detik" ("00:24").
// 5. MAU NAMBAH LAGU LAIN? Tinggal copy satu blok { ... } di bawah ini,
//    kasih koma di antaranya, lalu isi datanya. Semua lagu yang kamu
//    tambahkan di sini otomatis akan muncul di tombol "🔍 Cari Lagu",
//    dan ikut diputar bergantian lewat tombol Urut/Acak.
//
//    Contoh nambah lagu kedua (hapus tanda komentar /* */ di bawah
//    kalau sudah siap file musik & fotonya):
//
//    /*

//    */
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
  ,
  {
    title: "Jatuh Suka",
    artist: "Tulus",
    audioSrc: "assets/lagu2.mp3",
    photoSrc: "assets/foto2.jpg",

    lyrics: [
      { time: "00:11", text: "Sungguh ku tidak memiliki daya" },
      { time: "00:20", text: "Di depan harummu" },
      { time: "00:22", text: "Sungguh terkunci kata yang tertata" },
      { time: "00:30", text: "Di depan ragamu" },
      { time: "00:43", text: "Bila kau lihat ku tanpa sengaja" },
      { time: "00:52", text: "Beginikah surga" },
      { time: "00:54", text: "Bayangkan bila kau ajakku bicara" },
      { time: "01:04", text: "Ini semua bukan salahmu" },
      { time: "01:09", text: "Punya magis perekat yang sekuat itu" },
      { time: "01:14", text: "Dari lahir sudah begitu" },
      { time: "01:19", text: "Maafkan, Aku jatuh suka" },
      { time: "01:36", text: "Bila kau lihat ku tanpa sengaja" },
      { time: "01:45", text: "Beginikah surga" },
      { time: "01:47", text: "Bayangkan bila kau ajakku bicara" },
      { time: "01:57", text: "Ini semua bukan salahmu" },
      { time: "02:02", text: "Punya magis perekat yang sekuat itu" },
      { time: "02:08", text: "Dari lahir sudah begitu" },
      { time: "02:13", text: "Maafkan, Aku jatuh suka" },
      { time: "02:29", text: "Bila kau berkenan biarkanku di sampingmu" },
      { time: "02:40", text: "Berkuranglah satu jiwa yang sepi" },
      { time: "02:50", text: "Ini semua bukan salahmu" },
      { time: "02:56", text: "Punya magis perekat yang sekuat itu" },
      { time: "03:01", text: "Dari lahir sudah begitu" },
      { time: "03:06", text: "Maafkan oh uh" },
      { time: "03:12", text: "Ini semua bukan salahmu" },
      { time: "03:17", text: "Punya magis perekat yang sekuat itu" },
      { time: "03:23", text: "Dari lahir sudah begitu" },
      { time: "03:28", text: "Maafkan, Aku jatuh suka" },
      { time: "03:42", text: "Aku jatuh suka" }
    ]
  }
  ,
{
  title: "Mata Ke Hati",
  artist: "HIVI!",
  audioSrc: "assets/lagu3.mp3",
  photoSrc: "assets/foto3.jpg",

  lyrics: [
    { time: "00:08", text: "Tak pernah kurasakan cinta" },
    { time: "00:14", text: "Begitu hebatnya" },
    { time: "00:16", text: "Sebelum ku kenal kamu" },
    { time: "00:20", text: "Duniaku kelabu" },

    { time: "00:22", text: "Dan kau datang membawakan cinta" },
    { time: "00:28", text: "Yang t'lah lama kunanti" },

    { time: "00:30", text: "Oh, kasihku, kau membuat cinta" },
    { time: "00:36", text: "Jatuh dari mata dan turun ke hati" },
    { time: "00:42", text: "Tawamu buat aku tersenyum lagi" },
    { time: "00:45", text: "Oh, kasihku, kau membuat dunia" },
    { time: "00:51", text: "Indah dijalani, oh-oh" },
    { time: "00:57", text: "Kuyakini hati, kau paling berarti" },

    { time: "01:10", text: "Hanya kamu satu-satunya" },
    { time: "01:15", text: "Yang ada di hati" },
    { time: "01:17", text: "Andai saja kita berdua" },
    { time: "01:22", text: "Bersama selamanya" },

    { time: "01:25", text: "Dan kau datang membawakan cinta" },
    { time: "01:30", text: "Yang t'lah lama kunanti" },

    { time: "01:32", text: "Oh, kasihku, kau membuat cinta" },
    { time: "01:38", text: "Jatuh dari mata dan turun ke hati" },
    { time: "01:44", text: "Tawamu buat aku tersenyum lagi" },
    { time: "01:48", text: "Oh, kasihku, kau membuat dunia" },
    { time: "01:53", text: "Indah dijalani, oh-oh" },
    { time: "02:00 ", text: "Kuyakini hati, kau paling berarti" },
    { time: "02:04 ", text: "Angin seakan membawaku menghampirimu" },
    { time: "02:06 ", text: "Dan kau curi, curi hatiku" },
    { time: "02:10 ", text: "Kasih, maaf bila aku jatuh cinta" },

    { time: "02:19", text: "Oh, kasihku, kau membuat cinta" },
    { time: "02:24", text: "Jatuh dari mata dan turun ke hati" },
    { time: "02:31", text: "Tawamu buat aku tersenyum lagi" },
    { time: "02:34", text: "Oh, kasihku, kau membuat dunia" },
    { time: "02:40", text: "Indah dijalani" },
    { time: "02:46", text: "Yakini hati, kau paling berarti" },

    { time: "02:50", text: "(Dari mata turun ke hati)" },

 
  ]
}
,
{
  title: "Aku Milikmu",
  artist: "Dewa 19",
  audioSrc: "assets/lagu4.mp3",
  photoSrc: "assets/foto4.jpg",

  lyrics: [
    { time: "00:15", text: "Terdengar lirih bisikanmu" },
    { time: "00:19", text: "Di antara bayang-bayangmu" },
    { time: "00:23", text: "Terucap kata cinta" },
    { time: "00:26", text: "Yang dulu tersimpan dan tak mau pergi" },

    { time: "00:43", text: "Sekejap cinta yang terjalin" },
    { time: "00:47", text: "Dan menjadi sebuah cerita" },
    { time: "00:51", text: "Yang tak mungkin terlupa" },
    { time: "00:55", text: "Terukir di hati dan tak mau pergi" },

    { time: "01:05", text: "Mungkinkah kumiliki cinta seperti ini lagi?" },
    { time: "01:12", text: "Jangan biarkan aku kehilangan dirimu" },

    { time: "01:21", text: "Coba dengarkanlah sumpahku (janji suci) dari hati" },
    { time: "01:30", text: "Aku cinta kamu" },
    { time: "01:35", text: "Jangan dengar kata mereka yang tak ingin kita satu" },
    { time: "01:42", text: "Yakinkan aku milikmu, aku milikmu" },

    { time: "02:00", text: "Jalinan cinta tulus suci" },
    { time: "02:03", text: "Terpadu, terikat erat" },
    { time: "02:07", text: "Jangan terpisah lagi" },
    { time: "02:11", text: "Waktu 'kan menguji cinta kita berdua" },

    { time: "02:21", text: "Mungkinkah kumiliki cinta seperti ini lagi?" },
    { time: "02:28", text: "Jangan biarkan aku kehilangan dirimu" },

    { time: "02:37", text: "Coba dengarkanlah sumpahku (janji suci) dari hati" },
    { time: "02:46", text: "Aku cinta kamu" },
    { time: "02:51", text: "Jangan dengar kata mereka yang tak ingin kita satu" },
    { time: "03:00", text: "Yakinkan aku milikmu, aku milikmu" },

    { time: "03:30", text: "Mungkinkah kumiliki cinta seperti ini lagi?" },
    { time: "03:37", text: "Jangan biarkan aku kehilangan dirimu" },

    { time: "03:46", text: "Coba dengarkanlah sumpahku (janji suci) dari hati" },
    { time: "03:55", text: "Aku cinta kamu" },
    { time: "04:01", text: "Jangan dengar kata mereka yang tak ingin kita satu" },
    { time: "04:09", text: "Yakinkan aku milikmu, aku milikmu" },
    
    { time: "04:18", text: "(Jangan dengarkan) coba dengarkanlah sumpahku (jangan risaukan)" },
    { time: "04:22", text: "(Janji suci) dari hati (dari lubuk hati)" },
    { time: "04:27", text: "Aku cinta kamu (aku cinta kamu)" },
    { time: "04:33", text: "Jangan dengar kata mereka yang tak ingin kita satu" },

    { time: "04:41", text: "Yakinkan aku milikmu, aku milikmu" }
  ]
}



  

];
