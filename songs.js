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
,
{
  title: "Bertaut",
  artist: "Nadin Amizah",
  audioSrc: "assets/lagu5.mp3",
  photoSrc: "assets/foto5.jpg",

  lyrics: [
    { time: "00:21", text: "Bun, hidup berjalan seperti bajingan" },
    { time: "00:31", text: "Seperti landak yang tak punya teman" },
    { time: "00:42", text: "Ia menggonggong bak suara hujan" },
    { time: "00:52", text: "Dan kau pangeranku mengambil peran" },

    { time: "01:04", text: "Bun, kalau saat hancur, ku disayang" },
    { time: "01:14", text: "Apalagi saat ku jadi juara" },
    { time: "01:25", text: "Saat tak tahu arah, kau di sana" },
    { time: "01:35", text: "Menjadi gagah saat ku tak bisa" },

    { time: "01:45", text: "Sedikit kujelaskan tentangku dan kamu" },
    { time: "01:51", text: "Agar seisi dunia tahu" },

    { time: "01:57", text: "Keras kepalaku sama denganmu" },
    { time: "02:02", text: "Caraku marah, caraku tersenyum" },
    { time: "02:07", text: "Seperti detak jantung yang bertaut" },
    { time: "02:13", text: "Nyawaku nyala kar'na denganmu" },

    { time: "02:18", text: "Aku masih ada sampai di sini" },
    { time: "02:23", text: "Melihatmu kuat setengah mati" },
    { time: "02:29", text: "Seperti detak jantung yang bertaut" },
    { time: "02:34", text: "Nyawaku nyala kar'na denganmu" },

    { time: "02:50", text: "Bun, aku masih tak mengerti banyak hal" },
    { time: "03:01", text: "Semuanya berenang di kepala" },
    { time: "03:11", text: "Dan kau, dan semua yang kau tahu tentangnya" },
    { time: "03:22", text: "Menjadi jawab saat ku bertanya" },

    { time: "03:32", text: "Sedikit kujelaskan tentangku dan kamu" },
    { time: "03:38", text: "Agar seisi dunia tahu" },

    { time: "03:43", text: "Keras kepalaku sama denganmu" },
    { time: "03:48", text: "Caraku marah, caraku tersenyum" },
    { time: "03:54", text: "Seperti detak jantung yang bertaut" },
    { time: "03:59", text: "Nyawaku nyala kar'na denganmu" },

    { time: "04:05", text: "Aku masih ada sampai di sini" },
    { time: "04:10", text: "Melihatmu kuat setengah mati" },
    { time: "04:15", text: "Seperti detak jantung yang bertaut" },
    { time: "04:21", text: "Nyawaku nyala kar'na denganmu" },

    { time: "04:26", text: "Semoga lama hidupmu di sini" },
    { time: "04:31", text: "Melihatku berjuang sampai akhir" },
    { time: "04:36", text: "Seperti detak jantung yang bertaut" },
    { time: "04:42", text: "Nyawaku nyala kar'na denganmu" },

    { time: "04:48", text: "Hu-oh-oh, hu-uh-ho, hu-oh" }
  ]
}
, 
{
  title: "Tergila-Gila",
  artist: "Tulus",
  audioSrc: "assets/lagu6.mp3",
  photoSrc: "assets/foto6.jpg",

  lyrics: [
    { time: "00:00", text: "hm" },
    { time: "00:03", text: "(Pa-pa-pa-pa-pa-pa-pa-pa) oh, yeah-yeah-yeah" },
    { time: "00:06", text: "(Pa-pa-pa-pa-pa-pa-pa-pa) hm-mm" },
    { time: "00:08", text: "(Pa-pa-pa-pa-pa)" },

    { time: "00:10", text: "Hari ini kau mesra" },
    { time: "00:14", text: "Besok lusa kau dingin, kaubuatku penasaran" },
    { time: "00:22", text: "Bisa hilang seminggu" },
    { time: "00:24", text: "Lalu terus di sisiku, kaubuatku penasaran" },
    { time: "00:33", text: "Tahu hati ini luluh" },
    { time: "00:35", text: "Lihat wajahmu yang sendu, itu yang paling kauandalkan" },

    { time: "00:43", text: "Kau menang, menangkan hatiku" },
    { time: "00:47", text: "Kaubuatku tergila-gila" },
    { time: "00:49", text: "Kau pintar buat aku rindu" },
    { time: "00:52", text: "Kaubuatku tergila-gila, Sayangku" },

    { time: "01:00", text: "Ini bukan yang pertama" },
    { time: "01:03", text: "Tapi ini paling menarik" },
    { time: "01:06", text: "Ini bukan yang pertama" },
    { time: "01:09", text: "Tapi ini paling menarik" },

    { time: "01:12", text: "Aku tahu kau ingin bertemu" },
    { time: "01:15", text: "Tapi berlagak tak mau, kau ahlinya permainan" },
    { time: "01:24", text: "Tahu hati ini luluh" },
    { time: "01:26", text: "Lihat wajahmu yang sendu, itu yang paling kauandalkan" },

    { time: "01:43", text: "Oh, kau menang, menangkan hatiku" },
    { time: "01:38", text: "Kaubuatku tergila-gila" },
    { time: "01:40", text: "Kau pintar buat aku rindu" },
    { time: "01:43", text: "Kaubuatku tergila-gila, Sayangku, yeah-ih" },

    { time: "01:52", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "01:54", text: "Tapi ini paling menarik (hatiku)" },
    { time: "01:57", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "02:00", text: "Tapi ini paling menarik (hatiku)" },

    { time: "02:03", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "02:05", text: "Tapi ini paling menarik (hatiku)" },
    { time: "02:08", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "02:11", text: "Tapi ini paling menarik (hatiku)" },

    { time: "02:37", text: "Kau menang, menangkan hatiku" },
    { time: "02:40", text: "Kaubuatku tergila-gila" },
    { time: "02:42", text: "Kau pintar buat aku rindu" },
    { time: "02:45", text: "(Kaubuatku tergila-gila) Sayangku" },

    { time: "02:54", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "02:56", text: "Tapi ini paling menarik (hatiku)" },
    { time: "02:59", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "03:02", text: "Tapi ini paling menarik (hatiku)" },

    { time: "03:05", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "03:07", text: "Tapi ini paling menarik (hatiku)" },
    { time: "03:10", text: "Ini bukan yang pertama (kau menangkan, kau menangkan)" },
    { time: "03:13", text: "Tapi ini paling menarik (hatiku)" },
    { time: "03:16", text: "(Ini bukan yang pertama)\n(Tapi ini paling menarik)" },



    { time: "03:39", text: "Hari ini kau mesra" },
    { time: "03:42", text: "Besok lusa kau dingin, kaubuatku penasaran" }
  ]
}
,
{
  title: "Remaja",
  artist: "HIVI!",
  audioSrc: "assets/lagu7.mp3",
  photoSrc: "assets/foto7.jpg",

  lyrics: [

    { time: "00:07", text: "Kita remaja yang sedang dimabuk asmara" },
    { time: "00:15", text: "Mengikat janji bersama selamanya" },
    { time: "00:22", text: "Hati telah terikat, sepasang mata memikat" },
    { time: "00:27", text: "Melambungkan asmara" },
    { time: "00:30", text: "Yang selalu meminta" },

    { time: "00:34", text: "Mengulur senja menanti datang" },
    { time: "00:42", text: "Sang pemilik hati" },
    { time: "00:46", text: "Rela menanti sejak terbit mentari" },
    { time: "00:53", text: "Tak sabar 'tuk berbagi" },
    { time: "00:55", text: "Segala isi di hati" },
    { time: "00:58", text: "Jayakan sanubari dan bercumbu di ujung hari" },

    { time: "01:10", text: "Indahnya kisah-kasih kita di masa remaja" },
    { time: "01:18", text: "Di bawah rayu senja kita dimadu bermanja" },
    { time: "01:25", text: "Tiada masa-masa yang lebih indah dari masa remaja" },
    { time: "01:32", text: "Seakan dunia, milik berdua" },

    { time: "01:40", text: "Hati terasa merindu tanpa rasa duka" },
    { time: "01:48", text: "Berkumandang merdu senandung asmara" },
    { time: "01:55", text: "Kepada yang tercinta" },
    { time: "01:58", text: "Nada-nada tercipta" },
    { time: "02:00", text: "Genggam pesona jiwa" },
    { time: "02:04", text: "Kuserahkan dan kau terima" },

    { time: "02:11", text: "Kita dua insan" },
    { time: "02:15", text: "Yang sedang bermadu kasih" },
    { time: "02:19", text: "Tak peduli apa yang 'kan terjadi" },
    { time: "02:26", text: "Yang kuingin saat ini" },
    { time: "02:31", text: "Kau bersamaku disini" },

    { time: "02:37", text: "Indahnya kisah-kasih kita di masa remaja" },
    { time: "02:44", text: "Di bawah rayu senja kita di madu bermanja" },
    { time: "02:51", text: "Tiada masa-masa yang lebih indah dari masa remaja (dari masa remaja)" },
    { time: "02:58", text: "Seakan dunia" },
    { time: "03:02", text: "Seakan dunia" },
    { time: "03:06", text: "Seakan dunia, milik berdua" },
    { time: "03:17", text: "Masa remaja" },
    { time: "03:22", text: "Seakan dunia, milik berdua" }
  ]
}
,
{
  title: "Sorai",
  artist: "Nadin Amizah",
  audioSrc: "assets/lagu8.mp3",
  photoSrc: "assets/foto8.jpg",
  lyrics: [
    { time: "00:00", text: "Hu-uh-uh" },
    { time: "00:41", text: "Langit dan laut saling membantu" },
    { time: "00:47", text: "Mencipta awan hujan pun turun" },
    { time: "00:54", text: "Ketika dunia saling membantu" },
    { time: "01:01", text: "Lihat cinta mana yang tak jadi satu" },

    { time: "01:08", text: "Kau memang manusia sedikit kata" },
    { time: "01:14", text: "Bolehkah aku yang berbicara" },
    { time: "01:21", text: "Kau memang manusia tak kasat rasa" },
    { time: "01:28", text: "Biar aku yang mengemban cinta" },

    { time: "01:54", text: "Awan dan alam saling bersentuh (bersentuh)" },
    { time: "02:01", text: "Mencipta hangat kau pun tersenyum" },
    { time: "02:07", text: "Ketika itu kulihat syahdu" },
    { time: "02:14", text: "Lihat hati mana yang tak akan jatuh" },

    { time: "02:21", text: "Kau memang manusia sedikit kata" },
    { time: "02:28", text: "Bolehkah aku yang berbicara" },
    { time: "02:34", text: "Kau memang manusia tak kasat rasa" },
    { time: "02:41", text: "Biar aku yang mengemban cinta" },

    { time: "03:15", text: "Kau dan aku saling membantu" },
    { time: "03:21", text: "Membasuh hati yang pernah pilu" },
    { time: "03:27", text: "Mungkin akhirnya tak jadi satu" },
    { time: "03:34", text: "Namun bersorai pernah bertemu" }
  ]
}
,
{
  title: "Kangen",
  artist: "Dewa 19",
  audioSrc: "assets/lagu9.mp3",
  photoSrc: "assets/foto9.jpg",
  lyrics: [
    { time: "00:15", text: "Kut'rima suratmu" },
    { time: "00:17", text: "T'lah kubaca dan aku mengerti" },
    { time: "00:22", text: "Betapa merindunya" },
    { time: "00:25", text: "Dirimu akan hadirnya diriku" },
    { time: "00:30", text: "Di dalam hari-harimu" },
    { time: "00:34", text: "Bersama lagi" },

    { time: "00:38", text: "Kautanyakan padaku" },
    { time: "00:41", text: "Kapan aku akan kembali lagi" },
    { time: "00:45", text: "Katamu kau tak kuasa" },
    { time: "00:48", text: "Melawan gejolak di dalam dada" },
    { time: "00:53", text: "Yang membara, menahan rasa" },
    { time: "00:57", text: "Pertemuan kita nanti" },
    { time: "01:02", text: "Saat bersama dirimu" },

    { time: "01:06", text: "Semua kata rindumu semakin membuatku tak berdaya" },
    { time: "01:14", text: "Menahan rasa ingin jumpa" },
    { time: "01:19", text: "Percayalah padaku, aku pun rindu kamu, ku akan pulang" },
    { time: "01:27", text: "Melepas semua kerinduan yang terpendam" },

    { time: "01:53", text: "Kautuliskan padaku" },
    { time: "01:56", text: "Kata cinta yang manis dalam suratmu" },
    { time: "02:00", text: "Kaukatakan padaku" },
    { time: "02:03", text: "\"Saat ini ku ingin hangat pelukmu" },
    { time: "02:08", text: "Dan belai lembut kasihmu\"" },
    { time: "02:12", text: "Takkan kulupa s'lamanya" },
    { time: "02:17", text: "Saat kau ada di sisiku" },

    { time: "02:22", text: "Semua kata rindumu semakin membuatku tak berdaya" },
    { time: "02:29", text: "Menahan rasa ingin jumpa" },
    { time: "02:35", text: "Percayalah padaku, aku pun rindu kamu, ku akan pulang" },
    { time: "02:42", text: "Melepas semua kerinduan yang terpendam" },

    { time: "02:53", text: "Jangan katakan cinta" },
    { time: "02:57", text: "Menambah beban rasa" },
    { time: "03:00", text: "Sudah, simpan saja sedihmu itu" },
    { time: "03:05", text: "Ku akan datang, oh" },

    { time: "03:46", text: "Semua kata rindumu semakin membuatku tak berdaya" },
    { time: "03:54", text: "Menahan rasa ingin jumpa" },
    { time: "03:59", text: "Percayalah padaku, aku pun rindu kamu, ku akan pulang" },
    { time: "04:06", text: "Melepas semua kerinduan yang terpendam" },

    { time: "04:20", text: "Semua kata rindumu (semua kata rindumu) semakin membuatku" },
    { time: "04:25", text: "Tak berdaya (tak berdaya)" },
    { time: "04:28", text: "Menahan rasa ingin jumpa" },
    { time: "04:33", text: "Percayalah padaku (percayalah padaku), aku pun rindu kamu" },
    { time: "04:37", text: "Ku akan pulang" },
    { time: "04:40", text: "Melepas semua kerinduan yang terpendam" }
  ]
}
,
{
  title: "Risalah Hati",
  artist: "Dewa 19",
  audioSrc: "assets/lagu10.mp3",
  photoSrc: "assets/foto10.jpg",
  lyrics: [
    { time: "00:14", text: "Hidupku tanpa cintamu" },
    { time: "00:20", text: "Bagai malam tanpa bintang" },
    { time: "00:27", text: "Cintaku tanpa sambutmu" },
    { time: "00:33", text: "Bagai panas tanpa hujan" },
    { time: "00:40", text: "Jiwaku berbisik lirih" },
    { time: "00:46", text: "Ku harus milikimu" },

    { time: "00:52", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "00:58", text: "Meski kau tak cinta kepadaku" },
    { time: "01:05", text: "Beri sedikit waktu" },
    { time: "01:08", text: "Biar cinta datang karena telah terbiasa" },

    { time: "01:18", text: "Simpan mawar yang kuberi" },
    { time: "01:24", text: "Mungkin wanginya mengilhami" },
    { time: "01:31", text: "Sudikah dirimu untuk" },
    { time: "01:37", text: "Kenali aku dulu" },
    { time: "01:43", text: "Sebelum kau ludahi aku" },
    { time: "01:56", text: "Sebelum kau robek hatiku" },

    { time: "01:56", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "02:02", text: "Meski kau tak cinta kepadaku" },
    { time: "02:08", text: "Beri sedikit waktu" },
    { time: "02:12", text: "Biar cinta datang karena telah terbiasa" },

    { time: "02:52", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "02:58", text: "Meski kau tak cinta kepadaku" },
    { time: "03:04", text: "Beri sedikit waktu" },
    { time: "03:08", text: "Biar cinta datang karena telah terbiasa" },

    { time: "03:17", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "03:23", text: "Meski kau tak cinta kau tak cinta" },

    { time: "03:30", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "03:36", text: "Meski kau tak cinta kepadaku" },

    { time: "03:42", text: "Aku bisa membuatmu jatuh cinta kepadaku" },
    { time: "03:49", text: "Meski kau tak cinta kepadaku" },
    { time: "03:55", text: "Beri sedikit waktu" },
    { time: "03:59", text: "Biar cinta datang karena telah terbiasa" },

    { time: "04:21", text: "Hidupku tanpa cintamu" },
    { time: "04:28", text: "Bagai malam tanpa bintang" },
    { time: "04:34", text: "Cintaku tanpa sambutmu" },
    { time: "04:40", text: "Bagai panas tanpa hujan" }
  ]
}
,
{
  title: "Semua Aku Dirayakan",
  artist: "Nadin Amizah",
  audioSrc: "assets/lagu11.mp3",
  photoSrc: "assets/foto11.jpg",
  lyrics: [
    { time: "00:22", text: "Terima kasih katanya" },
    { time: "00:28", text: "Semua aku dirayakan" },
    { time: "00:34", text: "Jangan menangis ku dibuai" },
    { time: "00:39", text: "Sampai tenang" },

    { time: "00:46", text: "Diciumnya api marahku" },
    { time: "00:51", text: "Ternyata kacau bisa luluh" },
    { time: "00:57", text: "Jangan menangis biar tenang" },
    { time: "01:03", text: "Ku dibuai" },

    { time: "01:10", text: "Jika malam datang" },
    { time: "01:17", text: "Dan takut menyerang" },
    { time: "01:22", text: "Kau genggam apa yang kuragukan" },

    { time: "01:34", text: "Tiada yang bilang" },
    { time: "01:40", text: "Badainya kan reda" },
    { time: "01:48", text: "Berhadapan dengan cahaya yang kerap membutakan" },
    { time: "01:57", text: "Tiada yang bilang" },
    { time: "02:04", text: "Jawaban kan datang" },
    { time: "02:09", text: "Jauh dari seram yang selama ini telah kubayangkan" },
    { time: "02:19", text: "Semua aku dirayakan" },

    { time: "02:59", text: "Hatiku seberat dunia" },
    { time: "03:05", text: "Semua bentuknya kau rayakan" },
    { time: "03:11", text: "Menangis pun kau penuh tenang" },
    { time: "03:16", text: "Ku dibuai" },

    { time: "03:23", text: "Jika malam datang" },
    { time: "03:29", text: "Dan takut menyerang" },
    { time: "03:35", text: "Kau genggam apa yang kuragukan uh oh hu" },

    { time: "04:00", text: "Tiada yang bilang" },
    { time: "04:05", text: "Badainya kan reda" },
    { time: "04:11", text: "Berhadapan dengan cahaya yang kerap membutakan hu" },
    { time: "04:23", text: "Tiada yang bilang" },
    { time: "04:29", text: "Jawaban kan datang" },
    { time: "04:34", text: "Jauh dari seram yang selama ini telah kubayangkan" },
    { time: "04:44", text: "Semua aku dirayakan hu oh" }
  ]
}
,
{
  title: "Kereta Kencan",
  artist: "HIVI!",
  audioSrc: "assets/lagu12.mp3",
  photoSrc: "assets/foto12.jpg",
  lyrics: [
    { time: "00:00", text: "Ha-ah" },
    { time: "00:04", text: "Ha-ah-ah" },
    { time: "00:08", text: "Ha-ah" },
    { time: "00:12", text: "Ha-ah-ah-ah" },

    { time: "00:30", text: "di dalam setiap kisah lembar jalin asmara" },
    { time: "00:38", text: "Yang ada antara diriku dengan cinta" },
    { time: "00:45", text: "Dan jadi teman baikku, kemudikan bahagia" },
    { time: "00:53", text: "Ataupun tempat berlindung bersama air mata" },

    { time: "01:03", text: "Kau temaniku berlari" },
    { time: "01:06", text: "Antarkanku untuk menggapai hati" },
    { time: "01:09", text: "Kau saksi bisu" },
    { time: "01:14", text: "Indah jalan cintaku" },
    { time: "01:18", text: "Kau temaniku kembali" },
    { time: "01:21", text: "Saat ku tak tahu ke mana lagi" },
    { time: "01:24", text: "Kereta kencanku" },
    { time: "01:27", text: "Bersamamu, ku melaju" },

    { time: "01:37", text: "Di saat aku sendiri, menunggu yang tak pasti" },
    { time: "01:44", text: "Kau ada denganku, setia menemani" },
    { time: "01:52", text: "Menunggu waktu terbaik untuk berjalan lagi" },
    { time: "02:00", text: "Mencari (mencari) yang pantas hadir dalam kereta ini (oh-oh-oh)" },

    { time: "02:10", text: "Kau temaniku berlari" },
    { time: "02:12", text: "Antarkanku untuk menggapai hati" },
    { time: "02:16", text: "Kau saksi bisu" },
    { time: "02:19", text: "Indah jalan cintaku" },
    { time: "02:25", text: "Kau temaniku kembali" },
    { time: "02:28", text: "Saat ku tak tahu ke mana lagi" },
    { time: "02:31", text: "Kereta kencanku" },
    { time: "02:34", text: "Bersamamu, ku melaju" },

    { time: "02:44", text: "Ha-ah-ah-ah-ah-ah-ah-ah-ah-ah, ha-ah" },

    { time: "02:51", text: "Dan ku percaya" },
    { time: "02:53", text: "(Ku percaya) kereta kencan 'kan membawaku padamu" },

    { time: "03:07", text: "Kau temaniku berlari" },
    { time: "03:10", text: "Antarkanku untuk (ah-ah-ah-wo-oh) menggapai hati" },
    { time: "03:13", text: "Kau saksi bisu" },
    { time: "03:17", text: "Indah jalan cintaku" },
    { time: "03:21", text: "(Wo-ho) kau temaniku kembali" },
    { time: "03:25", text: "Saat ku tak tahu ke mana lagi" },
    { time: "03:28", text: "Kereta kencanku" },
    { time: "03:31", text: "Bersamamu, ku" },

    { time: "03:33", text: "kau temaniku berlari" },
    { time: "03:37", text: "Antarkanku untuk menggapai hati" },
    { time: "03:40", text: "Kau saksi bisu (kau saksi bisu)" },
    { time: "03:44", text: "Indah jalan cintaku" },
    { time: "03:47", text: "(Ho-oh-wu-uh) kau temaniku kembali" },
    { time: "03:52", text: "Saat ku tak tahu ke mana lagi (kereta)" },
    { time: "03:55", text: "Kereta kencanku" },
    { time: "03:58", text: "Bersamamu, ku melaju" },

    { time: "04:06", text: "Ha-ah-ah-ah" }
  ]
}
,
{
  title: "Labirin",
  artist: "Tulus",
  audioSrc: "assets/lagu13.mp3",
  photoSrc: "assets/foto13.jpg",
  lyrics: [
    { time: "00:09", text: "Kucari tau tentangmu" },
    { time: "00:12", text: "Tanggal dan tahun lahirmu" },
    { time: "00:14", text: "Kupelajari rasi bintang menebak pribadimu" },

    { time: "00:19", text: "Tokoh kartun favoritmu" },
    { time: "00:22", text: "Dan warna kegemaranmu" },
    { time: "00:24", text: "Kutelusuri di titik mana kita kan bertemu (bius aku)" },

    { time: "00:30", text: "Bius aku dengan tatapanmu tatapanmu (mesterimu)" },
    { time: "00:40", text: "Menyiksaku tapi sungguh candu sungguh candu" },

    { time: "00:49", text: "Lika liku labirinmu" },
    { time: "00:52", text: "Tak kan urungkan niatku" },
    { time: "00:55", text: "Betapa kuyakin kita berdua bisa menyatu (labirinmu)" },

    { time: "01:00", text: "Jebak aku dalam labirinmu labirinmu (tersesatku)" },
    { time: "01:10", text: "Tersesatku di adiwarnamu pesonamu (labirinmu)" },
    { time: "01:20", text: "Jebak aku dalam labirinmu labirinmu labirinmu (tersesatku)" },
    { time: "01:30", text: "Tersesatku di adiwarnamu pesonamu" },
    { time: "01:43", text: "Ah" },
    { time: "01:52", text: "Uh" },

    { time: "02:00", text: "Kucari tau tentangmu" },
    { time: "02:02", text: "Tanggal dan tahun lahirmu" },

    { time: "02:04", text: "Kupelajari rasi bintang menebak pribadimu (bius aku)" },
    { time: "02:10", text: "Bius aku dengan tatapanmu tatapanmu (misterimu)" },
    { time: "02:20", text: "Menyiksaku tapi sungguh candu sungguh candu sungguh candu (labirinmu)" },
    { time: "02:30", text: "Jebak aku dalam labirinmu labirinmu labirinmu (tersesatku)" },
    { time: "02:41", text: "Tersesatku di adiwarnamu pesonamu" },

    { time: "02:50", text: "Lika liku labirinmu" },
    { time: "02:52", text: "Tak kan urungkan niatku" },
    { time: "02:55", text: "Betapa kuyakin kita berdua bisa menyatu" }
  ]
}

];
