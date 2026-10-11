export interface GameDefinition {
  id: string;
  number: number;
  category: 'literasi' | 'numerasi' | 'budaya';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  unitId: number;
  gradeTier: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' | 'Semua Kelas' | '1-2' | '3-4' | '5-6' | string;
  objective: string;
  instructions: string;
  pointsReward: number;
  icon: string;
  sourceId?: string;
  hint?: string;
  mechanics?: string;
}

export const GAME_CATALOG: GameDefinition[] = [
  // ==========================================
  // GAME LITERASI (1 - 10)
  // ==========================================
  {
    id: 'game-1',
    number: 1,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Detektif Kata Bahari',
    subtitle: 'Menyusun huruf acak menjadi kosakata perahu Phinisi',
    description: 'Temukan dan susun huruf-huruf pelaut menjadi nama bagian kapal atau istilah Bulukumba.',
    unitId: 1,
    gradeTier: '1-2',
    objective: 'Meningkatkan ketelitian ejaan dan pengenalan kosakata maritim dasar.',
    instructions: 'Klik huruf-huruf berurutan untuk membentuk kata yang sesuai dengan petunjuk petualangan.',
    pointsReward: 100,
    icon: '🔎',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-2',
    number: 2,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Susun Kalimat Pelaut',
    subtitle: 'Menata potongan kata menjadi kalimat berita bermakna',
    description: 'Bantu kapten menyusun kembali perintah pelayaran yang terserak oleh angin laut.',
    unitId: 2,
    gradeTier: '1-2',
    objective: 'Melatih kemampuan sintaksis dan pemahaman struktur kalimat SPOK sederhana.',
    instructions: 'Susun kartu kata acak menjadi satu kalimat utuh yang benar dan logis.',
    pointsReward: 110,
    icon: '📝',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-3',
    number: 3,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Cari Informasi Teks',
    subtitle: 'Menemukan informasi tersurat dari kisah Tanjung Bira',
    description: 'Jadilah pembaca cepat yang jeli menangkap informasi penting dalam paragraf.',
    unitId: 3,
    gradeTier: '3-4',
    objective: 'Mengidentifikasi informasi spesifik siapa, apa, kapan, dan di mana dalam teks.',
    instructions: 'Bacalah teks singkat, lalu pilih jawaban yang tepat sesuai isi bacaan.',
    pointsReward: 120,
    icon: '📖',
    sourceId: 'pemkab-bulukumba-pinisi'
  },
  {
    id: 'game-4',
    number: 4,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Tebak Makna Istilah',
    subtitle: 'Menjodohkan kosakata bahasa Bugis-Makassar maritim',
    description: 'Pelajari arti kata seperti Sombala, Kalibise, Posisi, dan Sambalu.',
    unitId: 4,
    gradeTier: '3-4',
    objective: 'Memperkaya khazanah kosakata bahasa daerah dan padanannya dalam bahasa Indonesia.',
    instructions: 'Pilih arti kata yang paling tepat untuk istilah maritim tradisional yang ditanyakan.',
    pointsReward: 120,
    icon: '🗣️',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-5',
    number: 5,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Pasangkan Kata Sinonim & Antonim',
    subtitle: 'Mencocokkan pasangan kata kelautan yang searti dan berlawanan',
    description: 'Hubungkan kartu kata dengan pasangannya sebelum ombak menyapu pantai!',
    unitId: 5,
    gradeTier: '3-4',
    objective: 'Meningkatkan keluwesan berbahasa melalui relasi makna kata.',
    instructions: 'Klik dua kartu yang memiliki hubungan kata yang sesuai.',
    pointsReward: 130,
    icon: '🔗',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-6',
    number: 6,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Urutkan Alur Cerita',
    subtitle: 'Menyusun alur maju kisah pelayaran dari pelabuhan hingga berlabuh',
    description: 'Rangkai potongan peristiwa menjadi cerita utuh yang runtut dan menarik.',
    unitId: 6,
    gradeTier: '3-4',
    objective: 'Memahami koherensi kronologis dan alur naratif teks bacaan.',
    instructions: 'Seret atau urutkan kejadian 1 hingga 4 secara tepat berdasarkan logika peristiwa.',
    pointsReward: 130,
    icon: '📜',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-7',
    number: 7,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Detektif Fakta vs Opini',
    subtitle: 'Memilah pernyataan bersumber resmi vs penilaian subjektif',
    description: 'Uji kemampuan berpikir kritismu dalam membedakan data resmi dengan opini.',
    unitId: 7,
    gradeTier: '5-6',
    objective: 'Melatih kemampuan literasi kritis siswa sesuai standar internasional.',
    instructions: 'Tentukan apakah kalimat yang muncul merupakan FAKTA atau OPINI.',
    pointsReward: 140,
    icon: '⚖️',
    sourceId: 'unesco-pinisi-2017'
  },
  {
    id: 'game-8',
    number: 8,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Misi Ide Pokok Paragraf',
    subtitle: 'Menemukan gagasan utama dalam laporan sejarah Phinisi',
    description: 'Baca paragraf singkat dan pilih kalimat yang menjadi payung utama informasi.',
    unitId: 8,
    gradeTier: '5-6',
    objective: 'Mampu menyarikan inti pesan dalam teks eksplanasi ilmiah budaya.',
    instructions: 'Baca paragraf dengan saksama, lalu klik ide pokok yang paling mewakili.',
    pointsReward: 140,
    icon: '🎯',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-9',
    number: 9,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Tangkap Informasi Cepat',
    subtitle: 'Kuis pemahaman cepat dengan durasi waktu ramah anak',
    description: 'Jawab pertanyaan cepat seputar catatan logbook pelayaran Samudra Hindia.',
    unitId: 9,
    gradeTier: '5-6',
    objective: 'Meningkatkan ketangkasan membaca dan retensi memori bacaan.',
    instructions: 'Pilih jawaban yang benar sebelum batas waktu peluit nahkoda berbunyi.',
    pointsReward: 150,
    icon: '⏱️',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-10',
    number: 10,
    category: 'literasi',
    categoryLabel: 'Game Literasi',
    title: 'Cerita Berantai Penjelajah',
    subtitle: 'Mengambil keputusan cerdas dalam narasi interaktif bahari',
    description: 'Tentukan langkah kapten kapal saat menghadapi badai atau angin teduh.',
    unitId: 10,
    gradeTier: '5-6',
    objective: 'Mengembangkan penalaran sebab-akibat dan imajinasi naratif.',
    instructions: 'Pilih pilihan tindakan yang paling bijak dan aman untuk perahu Phinisi.',
    pointsReward: 150,
    icon: '🧭',
    sourceId: 'bpnb-sulsel-etnografi'
  },

  // ==========================================
  // GAME NUMERASI (11 - 20)
  // ==========================================
  {
    id: 'game-11',
    number: 11,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Hitung Muatan Kapal',
    subtitle: 'Menyeimbangkan berat peti kelapa dan beras di lambung kapal',
    description: 'Bantu kru kapal membagi beban kanan (starboard) dan kiri (port) agar kapal seimbang.',
    unitId: 1,
    gradeTier: '1-2',
    objective: 'Memahami konsep penjumlahan, pengurangan, dan keseimbangan massa.',
    instructions: 'Tambahkan peti hingga total beban sisi kiri sama dengan sisi kanan.',
    pointsReward: 110,
    icon: '📦',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-12',
    number: 12,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Tantangan Pola Bilangan',
    subtitle: 'Melanjutkan deret loncat perahu dayung di laut',
    description: 'Lompat dari satu pelampung ke pelampung lain dengan pola bilangan yang benar.',
    unitId: 2,
    gradeTier: '1-2',
    objective: 'Mengidentifikasi pola bilangan loncat 2, 5, dan 10.',
    instructions: 'Pilih angka kelanjutan dari pola bilangan yang tampil di atas ombak.',
    pointsReward: 110,
    icon: '🔢',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-13',
    number: 13,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Pecahan Layar Sombala',
    subtitle: 'Menentukan bagian pecahan dari 7 helai layar perahu Phinisi',
    description: 'Jika 3 dari 7 layar dinaikkan, pecahan berapakah yang sedang mengembang?',
    unitId: 3,
    gradeTier: '3-4',
    objective: 'Mengonsepkan pecahan biasa dan pecahan senilai melalui model konkret layar.',
    instructions: 'Pilih lambang pecahan yang tepat untuk bagian layar berwarna.',
    pointsReward: 120,
    icon: '⛵',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-14',
    number: 14,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Ukur Dimensi Kapal',
    subtitle: 'Konversi satuan panjang meter dan centimeter balok kayu',
    description: 'Ukur panjang lunas (Kalibise) dan tinggi tiang agung dengan mistar virtual.',
    unitId: 4,
    gradeTier: '3-4',
    objective: 'Menggunakan alat ukur panjang dan mengonversi satuan m ke cm.',
    instructions: 'Hitung panjang objek kayu yang diukur pada penggaris skala.',
    pointsReward: 130,
    icon: '📏',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-15',
    number: 15,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Keliling Lambung Kapal',
    subtitle: 'Menghitung keliling geladak dan ruang nakhoda',
    description: 'Hitung total panjang pagar pembatas geladak perahu Phinisi.',
    unitId: 5,
    gradeTier: '3-4',
    objective: 'Menghitung keliling bangun datar persegi panjang dan segitiga.',
    instructions: 'Jumlahkan panjang seluruh sisi geladak untuk menemukan kelilingnya.',
    pointsReward: 130,
    icon: '📐',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-16',
    number: 16,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Luas Layar Segitiga',
    subtitle: 'Menghitung luas kain layar cocoro dengan rumus segitiga',
    description: 'Bantu juru layar memesan kain terpal sesuai luas segitiga alas × tinggi : 2.',
    unitId: 6,
    gradeTier: '5-6',
    objective: 'Mengaplikasikan rumus luas bangun datar segitiga dalam konteks maritim.',
    instructions: 'Gunakan data alas dan tinggi yang diberikan untuk menentukan luas layar.',
    pointsReward: 140,
    icon: '🔺',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-17',
    number: 17,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Baca Data Galangan Kapal',
    subtitle: 'Menganalisis diagram batang jumlah produksi perahu di Bulukumba',
    description: 'Baca data produksi kapal rakyat di Tanah Beru dari tahun ke tahun.',
    unitId: 7,
    gradeTier: '5-6',
    objective: 'Membaca dan menafsirkan data dari diagram batang dan tabel frekuensi.',
    instructions: 'Jawab pertanyaan interpretasi grafik: nilai tertinggi, selisih, atau rata-rata.',
    pointsReward: 140,
    icon: '📊',
    sourceId: 'pemkab-bulukumba-pinisi'
  },
  {
    id: 'game-18',
    number: 18,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Tebak Pola Simetri Geometri',
    subtitle: 'Menemukan sumbu simetri pada rancang bangun lambung kapal',
    description: 'Kapal yang seimbang harus simetris sempurna antara lambung kanan dan kiri.',
    unitId: 8,
    gradeTier: '5-6',
    objective: 'Memahami prinsip simetri lipat dan transformasi geometri dasar.',
    instructions: 'Tentukan pasangan koordinat atau bentuk simetri yang tepat.',
    pointsReward: 150,
    icon: '💠',
    sourceId: 'modul-ajar-musfira'
  },
  {
    id: 'game-19',
    number: 19,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Misi Rasio & Perbandingan',
    subtitle: 'Menghitung perbandingan panjang lunas terhadap lebar kapal',
    description: 'Tradisi Panrita Lopi menggunakan perbandingan rasio emas kapal 1 : 4 hingga 1 : 5.',
    unitId: 9,
    gradeTier: '5-6',
    objective: 'Memecahkan masalah perbandingan senilai dalam perakitan konstruksi kapal.',
    instructions: 'Hitung lebar atau panjang kapal berdasarkan rasio yang ditentukan.',
    pointsReward: 150,
    icon: '⚖️',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-20',
    number: 20,
    category: 'numerasi',
    categoryLabel: 'Game Numerasi',
    title: 'Tantangan Logistik Kapten',
    subtitle: 'Pemecahan masalah matematika multi-langkah perbekalan berlayar',
    description: 'Hitung kebutuhan air tawar, bahan bakar minyak kelapa, dan waktu tempuh pelayaran.',
    unitId: 10,
    gradeTier: '5-6',
    objective: 'Menyelesaikan soal cerita matematika berbasis penalaran logis tingkat lanjut.',
    instructions: 'Ikuti langkah-langkah perhitungan secara runtut untuk menyelesaikan tantangan logistik.',
    pointsReward: 160,
    icon: '🧭',
    sourceId: 'modul-ajar-musfira'
  },

  // ==========================================
  // GAME BUDAYA (21 - 30)
  // ==========================================
  {
    id: 'game-21',
    number: 21,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Susun Anatomi Phinisi',
    subtitle: 'Rakit tahapan kapal dari Kalibise (lunas) hingga Sombala (layar)',
    description: 'Pelajari hierarki perakitan kapal tradisional khas Bulukumba yang unik di dunia.',
    unitId: 1,
    gradeTier: '1-2',
    objective: 'Mengenal urutan konstruksi perahu Pinisi yang mendahulukan kulit lambung sebelum gading.',
    instructions: 'Pasang bagian perahu mulai dari nomor 1 (paling dasar) hingga nomor 5 (teratas).',
    pointsReward: 150,
    icon: '⛵',
    sourceId: 'unesco-pinisi-2017'
  },
  {
    id: 'game-22',
    number: 22,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Tebak Bagian Kapal',
    subtitle: 'Mengenali Anjong, Kalibise, Posisi, dan Guling Sambilang',
    description: 'Klik bagian perahu yang disorot dan tebak nama fungsi maritimnya.',
    unitId: 2,
    gradeTier: '1-2',
    objective: 'Menghafal nama-nama komponen fisik kapal Phinisi bersumber dokumentasi resmi.',
    instructions: 'Pilih nama bagian kapal yang ditunjuk panah kuning berkilau.',
    pointsReward: 120,
    icon: '🎯',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-23',
    number: 23,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Kenali Panrita Lopi',
    subtitle: 'Kearifan empu pembuat kapal tanpa sketsa di atas kertas',
    description: 'Uji pengetahuanmu tentang peran Panrita Lopi, Sambalu (kepala kerja), dan Sawi (pekerja).',
    unitId: 3,
    gradeTier: '3-4',
    objective: 'Menghargai struktur sosial dan keahlian luhur masyarakat pembuat kapal di Bonto Bahari.',
    instructions: 'Jawab pertanyaan seputar tugas dan etika kerja seorang Panrita Lopi.',
    pointsReward: 130,
    icon: '👨‍🔧',
    sourceId: 'unesco-decision-12com'
  },
  {
    id: 'game-24',
    number: 24,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Jelajah Peta Bulukumba',
    subtitle: 'Mencari lokasi Tanah Beru, Tanjung Bira, dan Batu Licin',
    description: 'Tunjukkan letak sentra galangan kapal di pesisir Butta Panrita Lopi.',
    unitId: 4,
    gradeTier: '3-4',
    objective: 'Mengenal letak geografis kawasan cagar budaya dan pariwisata bahari Bulukumba.',
    instructions: 'Tebak nama daerah di Bulukumba berdasarkan ciri khas pembuat kapalnya.',
    pointsReward: 130,
    icon: '🗺️',
    sourceId: 'pemkab-bulukumba-pinisi'
  },
  {
    id: 'game-25',
    number: 25,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Benar atau Mitos Bahari',
    subtitle: 'Memeriksa kepercayaan tradisional dan fakta sains maritim',
    description: 'Ketahui kebenaran di balik pasak kayu ulin yang mengembang saat terkena air asin!',
    unitId: 5,
    gradeTier: '3-4',
    objective: 'Mengonfirmasi fakta ilmiah di balik teknologi perkapalan tradisional tanpa paku besi.',
    instructions: 'Pilih BENAR jika itu fakta ilmiah/budaya yang terbukti, atau MITOS jika tidak.',
    pointsReward: 140,
    icon: '✨',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-26',
    number: 26,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Urutkan Proses Sakral',
    subtitle: 'Dari ritual potong lunas (Ansompo Lopi) hingga peluncuran (Annyorong Lopi)',
    description: 'Tradisi Pinisi kaya akan penghormatan kepada alam, doa keselamatan, dan gotong royong.',
    unitId: 6,
    gradeTier: '5-6',
    objective: 'Memahami rangkaian prosesi budaya pembuatan kapal Pinisi dari hulu ke hilir.',
    instructions: 'Susun urutan 4 upacara adat sesuai tahapan pengerjaan kapal yang benar.',
    pointsReward: 140,
    icon: '🌊',
    sourceId: 'kemdikbud-wbtb-pinisi'
  },
  {
    id: 'game-27',
    number: 27,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Kamus Maritim Bugis',
    subtitle: 'Menjodohkan istilah khas pelaut Bugis-Makassar dengan padanannya',
    description: 'Kenali kata Lopi (perahu), Sombala (layar), Anjong (linggi haluan), dan Kalibise (lunas).',
    unitId: 7,
    gradeTier: '5-6',
    objective: 'Melestarikan bahasa daerah dalam konteks warisan budaya bahari Nusantara.',
    instructions: 'Pasangkan 4 istilah daerah dengan penjelasan maknanya yang tepat.',
    pointsReward: 150,
    icon: '📖',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-28',
    number: 28,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Peta Jalur Rempah Phinisi',
    subtitle: 'Menelusuri rute pelayaran niaga pelaut Bulukumba ke Maluku dan Malaka',
    description: 'Pelaut Phinisi adalah pengangkut utama pala, cengkih, dan kayu cendana.',
    unitId: 8,
    gradeTier: '5-6',
    objective: 'Menghubungkan sejarah Phinisi dengan jalur rempah maritim Nusantara.',
    instructions: 'Pilih pelabuhan tujuan yang tepat sesuai komoditas rempah yang diangkut.',
    pointsReward: 150,
    icon: '🌏',
    sourceId: 'bpnb-sulsel-etnografi'
  },
  {
    id: 'game-29',
    number: 29,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Misi Warisan Dunia UNESCO',
    subtitle: 'Kuis pencapaian sejarah pengakuan Pinisi di Korea Selatan 2017',
    description: 'Buktikan pemahamanmu mengenai dokumen resmi penetapan Decision 12.COM 11.b.13.',
    unitId: 9,
    gradeTier: '5-6',
    objective: 'Memahami kriteria Warisan Budaya Takbenda Dunia dan kewajiban pelestariannya.',
    instructions: 'Jawab pertanyaan berdasarkan data resmi UNESCO Intangible Cultural Heritage.',
    pointsReward: 160,
    icon: '🏛️',
    sourceId: 'unesco-pinisi-2017'
  },
  {
    id: 'game-30',
    number: 30,
    category: 'budaya',
    categoryLabel: 'Game Budaya',
    title: 'Generasi Pelestari Pohon Bitti',
    subtitle: 'Simulasi pelestarian hutan kayu bahan kapal dan pantai lestari',
    description: 'Tanam bibit pohon Bitti dan rawat hingga tumbuh untuk menjamin masa depan perahu Pinisi.',
    unitId: 10,
    gradeTier: '5-6',
    objective: 'Menanamkan kesadaran ekologis pelestarian alam demi keberlanjutan budaya.',
    instructions: 'Selesaikan aksi reboisasi dan pembersihan pantai untuk meraih bintang pelestari.',
    pointsReward: 160,
    icon: '🌱',
    sourceId: 'pemkab-bulukumba-pinisi'
  }
];

export type GameItem = Omit<GameDefinition, 'gradeTier'> & {
  gradeTier: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' | 'Semua Kelas';
  hint: string;
  mechanics: string;
};

export const EDUCATIONAL_GAMES: GameItem[] = GAME_CATALOG.map((g) => {
  let mappedGrade: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' = 'Kelas 5';
  const tier = g.gradeTier as string;
  if (tier === '1-2' || tier === 'Kelas 4' || g.unitId <= 4) {
    mappedGrade = 'Kelas 4';
  } else if (tier === '3-4' || tier === 'Kelas 5' || g.unitId <= 8) {
    mappedGrade = 'Kelas 5';
  } else {
    mappedGrade = 'Kelas 6';
  }

  return {
    ...g,
    gradeTier: mappedGrade,
    hint: g.hint || 'Perhatikan instruksi dan baca kembali materi dengan cermat.',
    mechanics:
      g.mechanics ||
      (g.id === 'game-1' || g.id === 'game-21'
        ? 'drag-drop-sequence'
        : g.category === 'budaya'
        ? 'binary-choice'
        : g.category === 'numerasi'
        ? 'balance-weight'
        : 'matching')
  };
});
