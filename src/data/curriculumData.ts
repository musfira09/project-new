import {
  UnitCurriculum,
  PortLesson,
  LiteracyContent,
  NumeracyContent,
  CulturalArticle,
  LKPDItem,
  QuizQuestion,
  Badge
} from '../types.ts';

// 12 Units for 2 Semesters
export const CURRICULUM_UNITS: UnitCurriculum[] = [
  // SEMESTER 1: MENGENAL PHINISI DAN BULUKUMBA
  {
    id: 1,
    semester: 1,
    title: 'Unit 1: Aku dan Lingkunganku',
    subtitle: 'Mengenal Pesisir dan Alam Sekolah Kita di Bulukumba',
    description: 'Mengamati keindahan pantai, angin laut, dan kehidupan masyarakat pesisir Bulukumba dengan rasa syukur.',
    literacyFocus: 'Membaca kosakata lingkungan pesisir dan kalimat sederhana tentang laut Bulukumba.',
    numeracyFocus: 'Menghitung dan membandingkan objek alam pantai (batu karang, perahu, pohon kelapa).',
    cultureFocus: 'Hubungan masyarakat Bulukumba dengan laut sejak usia dini.',
    portId: 1
  },
  {
    id: 2,
    semester: 1,
    title: 'Unit 2: Mengenal Bulukumba',
    subtitle: 'Bumi Butta Panrita Lopi yang Kaya Sejarah',
    description: 'Menjelajahi keunikan geografis Kabupaten Bulukumba dari Tanjung Bira hingga perbukitan perkebunan.',
    literacyFocus: 'Menemukan informasi penting dalam teks narasi perjalanan mengenal Bulukumba.',
    numeracyFocus: 'Mengukur jarak antarkecamatan dan membaca peta sederhana dengan petunjuk arah.',
    cultureFocus: 'Kekayaan kearifan lokal Butta Panrita Lopi dan semboyan kebersamaan.',
    portId: 2
  },
  {
    id: 3,
    semester: 1,
    title: 'Unit 3: Apa Itu Phinisi?',
    subtitle: 'Maha Karya Perahu Layar Legendaris Nusantara',
    description: 'Memahami apa yang membuat perahu Phinisi begitu istimewa di mata dunia dan para penjelajah samudra.',
    literacyFocus: 'Membaca teks informasi tentang 7 helai layar (Sombala) dan 2 tiang agung.',
    numeracyFocus: 'Mengenal bentuk-bentuk bangun datar dan simetri pada lambung serta layar perahu.',
    cultureFocus: 'Sejarah Phinisi sebagai lambang ketangguhan pelaut Bugis-Makassar.',
    portId: 3
  },
  {
    id: 4,
    semester: 1,
    title: 'Unit 4: Panrita Lopi',
    subtitle: 'Sang Maestro Pembuat Perahu Tanpa Sketsa Gambar',
    description: 'Mengenal kearifan Panrita Lopi yang mewariskan ilmu pembuatan kapal dari kepekaan rasa dan pengalaman turun-temurun.',
    literacyFocus: 'Menemukan ide pokok dalam teks biografi kisah ketekunan Panrita Lopi.',
    numeracyFocus: 'Operasi hitung perkalian dan pembagian pasak kayu yang digunakan perahu.',
    cultureFocus: 'Etos kerja, kejujuran, dan penghormatan kepada alam oleh para Panrita Lopi.',
    portId: 4
  },
  {
    id: 5,
    semester: 1,
    title: 'Unit 5: Bagian-Bagian Phinisi',
    subtitle: 'Anatomi Lengkap Perahu Layar Tradisional',
    description: 'Mempelajari nama dan fungsi setiap komponen: Anjong, Kalibise, Posisi, Sombala, dan Kemudi Ganda.',
    literacyFocus: 'Menjodohkan istilah maritim lokal dengan fungsinya dalam bahasa Indonesia.',
    numeracyFocus: 'Menghitung perbandingan rasio panjang lunas (Kalibise) terhadap lebar kapal.',
    cultureFocus: 'Filosofi perlindungan dan keselamatan di balik setiap bagian perahu Phinisi.',
    portId: 5
  },
  {
    id: 6,
    semester: 1,
    title: 'Unit 6: Nilai dan Kehidupan di Balik Phinisi',
    subtitle: 'Karakter Gotong Royong dan Ketekunan Luhur',
    description: 'Meneladani nilai kebersamaan saat warga bersama-sama menarik perahu ke laut (Tradisi Annyorong Lopi).',
    literacyFocus: 'Menceritakan kembali nilai-nilai moral gotong royong dan kesantunan dalam cerita rakyat.',
    numeracyFocus: 'Menyajikan dan membaca data jumlah warga yang bergotong royong dalam tabel.',
    cultureFocus: 'Tradisi Annyorong Lopi sebagai puncak perayaan kebersamaan warga Tanah Beru.',
    portId: 6
  },

  // SEMESTER 2: MEMAHAMI DAN MELESTARIKAN
  {
    id: 7,
    semester: 2,
    title: 'Unit 7: Proses Pembuatan Phinisi',
    subtitle: 'Dari Pemilihan Kayu Hutan Hingga Peluncuran ke Laut',
    description: 'Menelusuri tahapan sakral memilih kayu Bitti dan Ulin, meletakkan lunas, menyusun papan, hingga mendempul.',
    literacyFocus: 'Menyusun urutan proses pembuatan kapal secara kronologis dan logis.',
    numeracyFocus: 'Perhitungan waktu kerja, durasi bulan pengerjaan, dan estimasi kebutuhan balok kayu.',
    cultureFocus: 'Ritual Ansompo Lopi dan kearifan menjaga kelestarian pohon di hutan.',
    portId: 6
  },
  {
    id: 8,
    semester: 2,
    title: 'Unit 8: Matematika di Balik Phinisi',
    subtitle: 'Ketelitian Geometri dan Keseimbangan Hidrodinamika',
    description: 'Menemukan bagaimana prinsip matematika dan fisika digunakan para perajin tradisional secara alamiah.',
    literacyFocus: 'Membaca artikel sains populer tentang daya apung kapal dan arah hembusan angin.',
    numeracyFocus: 'Pecahan, luas permukaan layar segitiga, volume muatan palka, dan rumus kesetimbangan.',
    cultureFocus: 'Kecerdasan matematika intuitif leluhur Bulukumba tanpa bantuan kalkulator.',
    portId: 7
  },
  {
    id: 9,
    semester: 2,
    title: 'Unit 9: Phinisi dan Kehidupan Masyarakat',
    subtitle: 'Roda Ekonomi, Perdagangan Maritim, dan Identitas Pesisir',
    description: 'Memahami bagaimana perahu Phinisi menghubungkan pulau-pulau di Nusantara untuk berdagang hasil bumi.',
    literacyFocus: 'Membedakan fakta dan pendapat mengenai peran ekonomi pelabuhan rakyat Bulukumba.',
    numeracyFocus: 'Menghitung muatan komoditas (tonase beras, rempah, kelapa) dan keuntungan transaksi.',
    cultureFocus: 'Jejak pelayaran Phinisi Nusantara hingga mengarungi samudra ke Madagaskar dan Australia.',
    portId: 8
  },
  {
    id: 10,
    semester: 2,
    title: 'Unit 10: Phinisi sebagai Warisan Budaya Takbenda',
    subtitle: 'Pengakuan Dunia oleh UNESCO Sejak 7 Desember 2017',
    description: 'Mempelajari mengapa seni pembuatan perahu Phinisi ditetapkan sebagai Warisan Kemanusiaan Dunia oleh UNESCO.',
    literacyFocus: 'Menulis teks tanggapan bangga menjadi putra-putri Bulukumba pelindung budaya dunia.',
    numeracyFocus: 'Menghitung rentang tahun sejarah, persentase pelestarian, dan data arsip kebudayaan.',
    cultureFocus: 'Tanggung jawab moral generasi penerus menjaga marwah Phinisi di kancah internasional.',
    portId: 9
  },
  {
    id: 11,
    semester: 2,
    title: 'Unit 11: Data dan Informasi tentang Phinisi',
    subtitle: 'Membaca Fakta, Diagram, dan Statistik Maritim',
    description: 'Menganalisis perkembangan industri galangan kapal rakyat Tanah Beru melalui data grafik dan infografis modern.',
    literacyFocus: 'Merangkum informasi dari berbagai sumber bacaan dan menyusun laporan ringkas.',
    numeracyFocus: 'Membaca diagram batang, diagram lingkaran, mean, median, dan interpretasi grafik.',
    cultureFocus: 'Pemanfaatan teknologi informasi untuk mendokumentasikan kearifan lokal Bulukumba.',
    portId: 9
  },
  {
    id: 12,
    semester: 2,
    title: 'Unit 12: Generasi Pelestari Phinisi',
    subtitle: 'Aksi Nyata Pelajar SD Menjaga Warisan Butta Panrita Lopi',
    description: 'Merancang proyek sederhana: menanam bibit pohon Bitti, menjaga kebersihan pantai, dan menyebarkan cerita Phinisi.',
    literacyFocus: 'Menulis teks pidato atau ajakan persuasif: Mari Lestarikan Budaya Phinisi!',
    numeracyFocus: 'Merancang anggaran biaya proyek pelestarian dan mengukur pertumbuhan bibit tanaman.',
    cultureFocus: 'Janji Generasi Cendekia Bulukumba untuk masa depan maritim Indonesia.',
    portId: 10
  }
];

// 10 Interactive Learning Ports for Jelajah Phinisi
export const PORTS_DATA: PortLesson[] = [
  {
    id: 1,
    name: 'Pelabuhan 1: Pelabuhan Sekolahku',
    locationTitle: 'Titik Awal Penjelajahan - SDN Pesisir Bulukumba',
    description: 'Membuka peta pelayaran ilmu, berkenalan dengan teman pelaut, dan mempersiapkan bekal literasi-numerasi.',
    culturalContext: 'Sebelum berlayar, pelaut Bulukumba selalu berdoa dan meminta restu orang tua serta guru.',
    semester: 1,
    requiredPoints: 0,
    isUnlockedByDefault: true,
    literacyActivity: {
      title: 'Membaca Catatan Buku Harian Anak Pantai',
      objective: 'Mengidentifikasi kosakata baru seputar lingkungan pesisir dan sekolah.',
      story: 'Pagi ini di pantai Tanjung Bira, angin laut berhembus sejuk. Rahmat bersiap berangkat ke sekolah bersama teman-temannya. Dari kejauhan, tampak layar perahu nelayan mulai merapat ke dermaga.',
      questions: [
        { question: 'Di pantai mana Rahmat dan teman-temannya tinggal?', answer: 'Pantai Tanjung Bira' },
        { question: 'Apa yang tampak merapat ke dermaga dari kejauhan?', answer: 'Layar perahu nelayan' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Perahu di Dermaga',
      concept: 'Penjumlahan dan perbandingan benda di sekitar sekolah pesisir.',
      problem: 'Di dermaga sekolah terdapat 4 perahu katir warna biru dan 5 perahu jolloro warna kuning. Berapa total seluruh perahu?',
      hint: 'Jumlahkan 4 perahu biru dengan 5 perahu kuning: 4 + 5.',
      solution: '4 + 5 = 9 perahu di dermaga.'
    },
    funFact: 'Kabupaten Bulukumba memiliki garis pantai lebih dari 128 kilometer dengan pemandangan pasir putih terhalus di dunia!',
    gameId: 'game-1'
  },
  {
    id: 2,
    name: 'Pelabuhan 2: Pelabuhan Bulukumba',
    locationTitle: 'Gerbang Butta Panrita Lopi',
    description: 'Mengenal letak geografis, nama-nama kecamatan di Bulukumba, dan sejarah kejayaan bahari nenek moyang.',
    culturalContext: 'Nama Bulukumba berasal dari kata "Bulu" (gunung) dan "Kumba" (nama tumbuhan rebung atau bukit penanda pelayaran).',
    semester: 1,
    requiredPoints: 50,
    literacyActivity: {
      title: 'Menjelajahi Peta Bumi Panrita Lopi',
      objective: 'Menemukan informasi pokok tentang letak geografis dan batas wilayah Bulukumba.',
      story: 'Bulukumba diapit oleh teluk Bone dan Laut Flores. Angin barat dan angin timur menjadi sahabat setia yang dimanfaatkan para pelaut untuk menentukan musim melaut yang tepat.',
      questions: [
        { question: 'Laut apa yang mengapit perairan selatan Bulukumba?', answer: 'Laut Flores dan Teluk Bone' },
        { question: 'Apa fungsi angin barat dan angin timur bagi nelayan?', answer: 'Menentukan musim berlayar' }
      ]
    },
    numeracyActivity: {
      title: 'Jarak Tempuh Pelayaran Antardermaga',
      concept: 'Mengukur satuan panjang kilometer dan waktu tempuh sederhana.',
      problem: 'Sebuah perahu menempuh jarak 12 km dalam waktu 2 jam. Berapa kilometer yang ditempuh perahu tersebut setiap 1 jam jika kecepatannya tetap?',
      hint: 'Gunakan pembagian: 12 km dibagi 2 jam.',
      solution: '12 : 2 = 6 km per jam.'
    },
    funFact: 'Tanjung Bira di Bulukumba terkenal karena kamu bisa melihat matahari terbit (sunrise) dan matahari terbenam (sunset) di tempat yang sama!',
    gameId: 'game-3'
  },
  {
    id: 3,
    name: 'Pelabuhan 3: Pelabuhan Mengenal Phinisi',
    locationTitle: 'Galangan Kapal Tradisional Tanah Beru',
    description: 'Melihat megahnya perahu Phinisi dengan 7 helai layar berkibar gagah membelah ombak samudra.',
    culturalContext: 'Tujuh helai layar Phinisi melambangkan bahwa nenek moyang bangsa Indonesia mampu mengarungi tujuh samudra besar di dunia.',
    semester: 1,
    requiredPoints: 120,
    literacyActivity: {
      title: 'Makna Rahasia Tujuh Helai Layar',
      objective: 'Memahami teks eksposisi tentang filosofi layar Sombala.',
      story: 'Perahu Phinisi memiliki dua tiang agung utama dan tujuh helai layar. Tiga layar kecil terpasang di haluan depan (Cocoro), dua layar besar di tiang depan, dan dua layar di tiang belakang.',
      questions: [
        { question: 'Berapa tiang agung utama pada perahu Phinisi?', answer: 'Dua tiang agung' },
        { question: 'Apa nama layar kecil yang terpasang di haluan depan?', answer: 'Cocoro' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Pecahan Layar Terbentang',
      concept: 'Pecahan sederhana dalam kehidupan nyata.',
      problem: 'Dari 7 helai layar Phinisi, nahkoda telah membentangkan 4 helai layar karena tiupan angin cukup kencang. Berapa pecahan layar yang sudah terbentang?',
      hint: 'Bagian terbentang dibanding total seluruh layar.',
      solution: 'Pecahannya adalah 4/7 (empat per tujuh bagian).'
    },
    funFact: 'Perahu Phinisi pertama kali berlayar mengelilingi dunia menyeberangi Samudra Pasifik pada ekspedisi Phinisi Nusantara tahun 1986 hingga ke Vancouver, Kanada!',
    gameId: 'game-2'
  },
  {
    id: 4,
    name: 'Pelabuhan 4: Pelabuhan Panrita Lopi',
    locationTitle: 'Pusat Keahlian Turun-Temurun Bonto Bahari',
    description: 'Bertemu para maestro pembuat kapal yang mampu merakit perahu raksasa hanya dengan mengandalkan rasa, ketelitian, dan doa.',
    culturalContext: 'Gelar "Panrita Lopi" berarti Ahli/Pakar Pembuat Perahu. Mereka dihormati bukan hanya karena keahliannya, tapi juga kejujuran dan ketekunannya.',
    semester: 1,
    requiredPoints: 200,
    literacyActivity: {
      title: 'Wawancara dengan Sang Maestro Panrita Lopi',
      objective: 'Menganalisis ide pokok dan pesan keteladanan dari tokoh lokal.',
      story: 'Pak Baso adalah seorang Panrita Lopi generasi kelima. "Kami tidak memakai gambar cetak biru di kertas, nak," kata beliau tersenyum. "Ukuran kapal ada di dalam rasa dan ketajaman mata batin kami, diwariskan dari ayah dan kakek kami."',
      questions: [
        { question: 'Mengapa Panrita Lopi tidak memakai gambar cetak biru?', answer: 'Karena ukurannya tersimpan dalam kepekaan rasa dan ingatan tradisi turun-temurun' },
        { question: 'Nilai karakter apa yang bisa kita teladani dari Panrita Lopi?', answer: 'Ketekunan, ketelitian, dan kejujuran' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Pasak Kayu Tradisional',
      concept: 'Perkalian bilangan ratusan.',
      problem: 'Untuk menyambung sepasang papan kapal, Panrita Lopi memerlukan 8 buah pasak kayu besi. Jika ada 25 pasang papan yang akan disambung hari ini, berapa banyak pasak kayu yang harus disiapkan?',
      hint: 'Kalikan jumlah pasang papan dengan pasak per pasang: 25 x 8.',
      solution: '25 x 8 = 200 buah pasak kayu.'
    },
    funFact: 'Perahu Phinisi dibuat TANPA menggunakan satu pun paku besi! Semua papan disambung dengan pasak kayu ulin yang justru semakin mengembang dan rapat saat terkena air laut!',
    gameId: 'game-7'
  },
  {
    id: 5,
    name: 'Pelabuhan 5: Pelabuhan Bagian-Bagian Phinisi',
    locationTitle: 'Laboratorium Anatomi Maritim Tradisional',
    description: 'Membongkar rahasia setiap lekuk perahu: Anjong di haluan, Kalibise lunas penegak, Posisi tiang, dan Guling kemudi ganda.',
    culturalContext: 'Setiap bagian kapal memiliki simbol doa agar perahu selamat menghadapi badai gelombang.',
    semester: 1,
    requiredPoints: 300,
    literacyActivity: {
      title: 'Mengenal Istilah Bahasa Bugis-Makassar pada Phinisi',
      objective: 'Memperkaya kosakata daerah dan padanannya dalam bahasa Indonesia.',
      story: 'Bagian lunas kapal disebut Kalibise. Kayu lunas ini adalah tulang punggung kapal. Bagian haluan kapal yang menjulang runcing disebut Anjong. Di bagian buritan belakang, terdapat dua kemudi kayu besar bernama Guling Sambilang.',
      questions: [
        { question: 'Apa sebutan untuk lunas kapal dalam bahasa perahu Phinisi?', answer: 'Kalibise' },
        { question: 'Di mana letak Guling Sambilang pada perahu Phinisi?', answer: 'Di bagian buritan belakang (kemudi ganda)' }
      ]
    },
    numeracyActivity: {
      title: 'Rasio Panjang dan Lebar Lambung Phinisi',
      concept: 'Perbandingan rasio matematika sederhana.',
      problem: 'Sebuah perahu Phinisi dirancang dengan panjang lunas 24 meter dan lebar lambung 6 meter. Berapakah bentuk perbandingan paling sederhana antara panjang dan lebar perahu tersebut?',
      hint: 'Bagi kedua angka dengan faktor persekutuan terbesar (FPB = 6): 24:6 dan 6:6.',
      solution: '24 : 6 = 4 : 1 (panjang perahu empat kali lebarnya).'
    },
    funFact: 'Dua kemudi ganda di sisi kiri dan kanan (bukan di tengah seperti kapal modern) dirancang khusus agar perahu tetap stabil saat melewati perairan karang dangkal!',
    gameId: 'game-1'
  },
  {
    id: 6,
    name: 'Pelabuhan 6: Pelabuhan Proses Pembuatan Phinisi',
    locationTitle: 'Pantai Pesisir Desa Ara dan Tanah Beru',
    description: 'Menyaksikan proses sakral pemilihan kayu di hutan, upacara Ansompo Lopi, hingga penarikan akbar ke laut.',
    culturalContext: 'Kayu pohon Bitti dan Ulin dicari pada hari baik, tidak boleh menebang pohon muda agar hutan tetap lestari.',
    semester: 2,
    requiredPoints: 400,
    literacyActivity: {
      title: 'Urutan Tahapan Pembuatan Perahu Phinisi',
      objective: 'Menyusun urutan kejadian dalam teks prosedur secara runut.',
      story: 'Proses pembuatan Phinisi dimulai dari Ammuntuli (mencari kayu di hutan), dilanjutkan Ansompo Lopi (meletakkan lunas kapal), lalu menyusun papan lambung, memasang tiang layar, mendempul dengan kulit kayu, dan diakhiri tradisi Annyorong Lopi.',
      questions: [
        { question: 'Apa nama upacara adat saat meletakkan lunas pertama kapal?', answer: 'Ansompo Lopi' },
        { question: 'Bahan alami apa yang digunakan untuk mendempul celah papan perahu?', answer: 'Kulit pohon dan sabut kelapa yang dipadatkan' }
      ]
    },
    numeracyActivity: {
      title: 'Durasi Waktu Pengerjaan Kapal',
      concept: 'Pengukuran satuan waktu (bulan dan minggu).',
      problem: 'Satu unit kapal Phinisi berukuran sedang membutuhkan waktu pengerjaan selama 9 bulan. Jika 1 bulan rata-rata terdiri dari 4 minggu, kira-kira berapa minggu kapal tersebut selesai dibangun?',
      hint: 'Kalikan 9 bulan dengan 4 minggu.',
      solution: '9 x 4 = 36 minggu pengerjaan.'
    },
    funFact: 'Saat upacara Annyorong Lopi, ratusan warga laki-laki dan perempuan bergotong royong menarik kapal ke laut diiringi tabuhan gendang dan sorak semangat!',
    gameId: 'game-8'
  },
  {
    id: 7,
    name: 'Pelabuhan 7: Pelabuhan Matematika di Balik Phinisi',
    locationTitle: 'Pusat Nalar Sains Bahari',
    description: 'Menemukan rumus luas layar segitiga, hitungan muatan tonase, serta keseimbangan hidrodinamika di balik lengkung kapal.',
    culturalContext: 'Nenek moyang kita menerapkan ilmu matematika geometri ruang jauh sebelum buku teks modern dicetak!',
    semester: 2,
    requiredPoints: 520,
    literacyActivity: {
      title: 'Angin, Sudut Layar, dan Kecepatan Kapal',
      objective: 'Menjelaskan hubungan sebab-akibat fenomena ilmiah pelayaran.',
      story: 'Ketika sudut kemiringan layar diatur dengan tepat terhadap datangnya angin laut, tercipta gaya dorong aerodinamis yang menggerakkan perahu maju ke depan tanpa memerlukan bahan bakar mesin.',
      questions: [
        { question: 'Apa yang menggerakkan perahu Phinisi tanpa bahan bakar mesin?', answer: 'Tiupan angin yang ditangkap oleh sudut kemiringan layar' },
        { question: 'Mengapa pengaturan sudut layar sangat penting?', answer: 'Untuk menciptakan gaya dorong maju yang maksimal dan stabil' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Luas Layar Segitiga Sombala',
      concept: 'Luas bangun datar segitiga (1/2 x alas x tinggi).',
      problem: 'Sebuah layar haluan berbentuk segitiga memiliki panjang alas 6 meter dan tinggi 8 meter. Berapakah luas kain layar yang dibutuhkan untuk membuat layar tersebut?',
      hint: 'Rumus luas segitiga = (alas x tinggi) : 2 -> (6 x 8) : 2.',
      solution: 'Luas = (6 x 8) / 2 = 48 / 2 = 24 meter persegi.'
    },
    funFact: 'Bentuk lambung Phinisi yang cembung menyerupai tubuh ikan paus menjadikannya sangat lincah membelah ombak badai di laut lepas.',
    gameId: 'game-6'
  },
  {
    id: 8,
    name: 'Pelabuhan 8: Pelabuhan Phinisi dan Masyarakat',
    locationTitle: 'Dermaga Perdagangan Rakyat Nusantara',
    description: 'Menelusuri rute pelayaran niaga antarpulau, perdagangan kayu cendana, kopi Toraja, dan rempah-rempah Maluku.',
    culturalContext: 'Perahu Phinisi merekatkan persaudaraan antarsuku di Nusantara dari Sabang sampai Merauke.',
    semester: 2,
    requiredPoints: 650,
    literacyActivity: {
      title: 'Kisah Nahkoda Mengarungi Jalur Rempah',
      objective: 'Membedakan fakta dan opini dalam teks cerita sejarah.',
      story: 'Dahulu, kapal Phinisi membawa beras dari Sulawesi Selatan ke pulau-pulau di Maluku, lalu pulang membawa cengkih dan pala. Pelaut Bulukumba dikenal sangat jujur dalam menimbang barang dagangan.',
      questions: [
        { question: 'Barang komoditas apa yang dibawa kapal Phinisi dari Sulawesi Selatan ke Maluku?', answer: 'Beras' },
        { question: 'Sikap mulia apa yang dijunjung tinggi para pedagang pelaut Bulukumba?', answer: 'Kejujuran saat menimbang dan berdagang' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Muatan Peti Rempah Kapal',
      concept: 'Operasi hitung perkalian dan penjumlahan bilangan ribuan.',
      problem: 'Sebuah kapal Phinisi memuat 15 peti pala seberat 40 kg per peti dan 10 karung cengkih seberat 50 kg per karung. Berapa total berat muatan kapal tersebut dalam kilogram?',
      hint: 'Hitung berat peti pala (15 x 40) ditambah berat karung cengkih (10 x 50).',
      solution: 'Pala: 15 x 40 = 600 kg. Cengkih: 10 x 50 = 500 kg. Total = 600 + 500 = 1.100 kg.'
    },
    funFact: 'Pelaut Bulukumba sejak berabad-abad lalu sudah memiliki undang-undang hukum laut sendiri yang disebut "Amanna Gappa" untuk menjamin keadilan pelayaran!',
    gameId: 'game-4'
  },
  {
    id: 9,
    name: 'Pelabuhan 9: Pelabuhan Warisan Budaya Takbenda',
    locationTitle: 'Aula Kebanggaan UNESCO Dunia',
    description: 'Menyambut pengakuan dunia bahwa seni pembuatan perahu Phinisi adalah warisan luhur yang harus dijaga seluruh umat manusia.',
    culturalContext: 'UNESCO menetapkan Pinisi: Art of Boatbuilding in South Sulawesi pada tanggal 7 Desember 2017 di Pulau Jeju, Korea Selatan.',
    semester: 2,
    requiredPoints: 780,
    literacyActivity: {
      title: 'Ketika Phinisi Dikagumi Dunia Internasional',
      objective: 'Membuat ringkasan teks berita pengakuan UNESCO.',
      story: 'Dunia kagum karena para pembuat kapal di Bulukumba tidak sekadar merakit kayu, melainkan menanamkan nilai kearifan, spiritualitas, kerja sama, dan kelestarian alam yang sangat berharga bagi kemanusiaan.',
      questions: [
        { question: 'Kapan UNESCO menetapkan seni pembuatan Phinisi sebagai warisan dunia?', answer: '7 Desember 2017' },
        { question: 'Mengapa dunia sangat mengagumi pembuatan Phinisi?', answer: 'Karena memadukan keterampilan tinggi dengan nilai kearifan lokal, kerja sama, dan kelestarian alam' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Usia Pengakuan Warisan Dunia',
      concept: 'Pengurangan tahun untuk menghitung rentang waktu.',
      problem: 'Jika pengakuan UNESCO diberikan pada tahun 2017 dan saat ini adalah tahun ajaran 2026, sudah berapa tahun seni pembuatan Phinisi diakui oleh dunia?',
      hint: 'Kurangkan tahun sekarang dengan tahun pengakuan: 2026 - 2017.',
      solution: '2026 - 2017 = 9 tahun.'
    },
    funFact: 'Gambar perahu Phinisi diabadikan secara resmi pada uang kertas Rupiah Indonesia pecahan Rp100.000 dan lambang daerah Kabupaten Bulukumba!',
    gameId: 'game-5'
  },
  {
    id: 10,
    name: 'Pelabuhan 10: Pelabuhan Generasi Pelestari',
    locationTitle: 'Dermaga Masa Depan Bulukumba Hebat',
    description: 'Puncak pelayaran penjelajah cilik: Mengikrarkan janji menjadi generasi pelestari, cerdas literasi, dan tangguh numerasi.',
    culturalContext: 'Warisan leluhur tidak akan punah selama anak-anak sekolah dasar Bulukumba terus belajar, bangga, dan menjaga budayanya.',
    semester: 2,
    requiredPoints: 900,
    literacyActivity: {
      title: 'Surat Komitmen untuk Butta Panrita Lopi',
      objective: 'Menyusun teks persuasif ajakan melestarikan budaya lokal.',
      story: 'Aku berjanji akan merawat alam Bulukumba, menjaga kebersihan pantai, menghormati para Panrita Lopi, serta tekun belajar matematika dan membaca agar kelak dapat memajukan daerahku.',
      questions: [
        { question: 'Siapa yang memegang kunci masa depan kelestarian budaya Phinisi?', answer: 'Generasi muda dan anak-anak sekolah dasar' },
        { question: 'Aksi nyata apa yang bisa dilakukan pelajar SD?', answer: 'Menjaga kebersihan pantai, merawat tanaman pohon bitti, dan tekun belajar' }
      ]
    },
    numeracyActivity: {
      title: 'Program Menanam 100 Pohon Bitti',
      concept: 'Statistik dan target persentase pencapaian.',
      problem: 'Siswa SD di Bulukumba bergotong royong menanam bibit pohon kayu Bitti. Target awal adalah 100 bibit pohon. Pada bulan pertama telah ditanam 75 pohon. Berapa persen target yang sudah tercapai?',
      hint: 'Bagian yang tercapai dibagi target dikali 100%: (75 / 100) x 100%.',
      solution: '(75 / 100) x 100% = 75% target tercapai.'
    },
    funFact: 'Kayu Bitti (Vitex cofassus) adalah kayu istimewa asli Sulawesi yang memiliki lengkungan alami pohon, sehingga sangat pas digunakan untuk kurva lambung kapal Phinisi tanpa harus dibengkokkan paksa!',
    gameId: 'game-8'
  },
  {
    id: 11,
    name: 'Pelabuhan 11: Pelabuhan Riset & Data Maritim',
    locationTitle: 'Pusat Dokumentasi Galangan Kapal Rakyat',
    description: 'Menganalisis infografis, diagram batang, dan data statistik kemaritiman Butta Panrita Lopi.',
    culturalContext: 'Dokumentasi digital dan riset data membantu perajin lokal memantau ketersediaan kayu dan mempromosikan kapal ke dunia.',
    semester: 2,
    requiredPoints: 1000,
    literacyActivity: {
      title: 'Membaca Laporan Infografis Galangan Kapal',
      objective: 'Menafsirkan teks laporan berbasis data numerik dan grafik.',
      story: 'Berdasarkan catatan dinas, galangan kapal rakyat di Tanah Beru memproduksi puluhan perahu Pinisi setiap tahunnya yang dipesan oleh penjelajah dari berbagai belahan benua.',
      questions: [
        { question: 'Di mana pusat galangan kapal rakyat terbesar Bulukumba berada?', answer: 'Tanah Beru, Bonto Bahari' },
        { question: 'Apa manfaat menyajikan laporan dalam bentuk infografis grafik?', answer: 'Memudahkan pembaca memahami tren angka produksi dengan cepat' }
      ]
    },
    numeracyActivity: {
      title: 'Menghitung Rata-rata Produksi Tahunan',
      concept: 'Menghitung mean (rata-rata) data sederhana.',
      problem: 'Dalam 3 tahun berturut-turut, sebuah galangan memproduksi 24 kapal, 30 kapal, dan 36 kapal. Berapa rata-rata produksi kapal per tahun?',
      hint: 'Jumlahkan 24 + 30 + 36 lalu bagi dengan 3.',
      solution: '(24 + 30 + 36) : 3 = 90 : 3 = 30 kapal per tahun.'
    },
    funFact: 'Setiap perahu Pinisi yang selesai dibuat didaftarkan dengan paspor ukur resmi kapal laut internasional oleh syahbandar pelabuhan!',
    gameId: 'game-17'
  },
  {
    id: 12,
    name: 'Pelabuhan 12: Pelabuhan Generasi Pelestari Cendekia',
    locationTitle: 'Dermaga Akbar Generasi Emas Bulukumba',
    description: 'Puncak pelayaran penjelajah cilik: Mengikrarkan janji menjadi generasi pelestari, cerdas literasi, dan tangguh numerasi.',
    culturalContext: 'Warisan leluhur tidak akan punah selama anak-anak sekolah dasar Bulukumba terus belajar, bangga, dan menjaga budayanya.',
    semester: 2,
    requiredPoints: 1200,
    literacyActivity: {
      title: 'Surat Komitmen untuk Butta Panrita Lopi',
      objective: 'Menyusun teks persuasif ajakan melestarikan budaya lokal.',
      story: 'Aku berjanji akan merawat alam Bulukumba, menjaga kebersihan pantai, menghormati para Panrita Lopi, serta tekun belajar matematika dan membaca agar kelak dapat memajukan daerahku.',
      questions: [
        { question: 'Siapa yang memegang kunci masa depan kelestarian budaya Phinisi?', answer: 'Generasi muda dan anak-anak sekolah dasar' },
        { question: 'Aksi nyata apa yang bisa dilakukan pelajar SD?', answer: 'Menjaga kebersihan pantai, merawat tanaman pohon bitti, dan tekun belajar' }
      ]
    },
    numeracyActivity: {
      title: 'Program Menanam 100 Pohon Bitti',
      concept: 'Statistik dan target persentase pencapaian.',
      problem: 'Siswa SD di Bulukumba bergotong royong menanam bibit pohon kayu Bitti. Target awal adalah 100 bibit pohon. Pada bulan pertama telah ditanam 75 pohon. Berapa persen target yang sudah tercapai?',
      hint: 'Bagian yang tercapai dibagi target dikali 100%: (75 / 100) x 100%.',
      solution: '(75 / 100) x 100% = 75% target tercapai.'
    },
    funFact: 'Semboyan "Berlayar dengan Ilmu, Mengenal Budaya, Membangun Masa Depan" adalah kompas kehidupan generasi Cendekia Indonesia!',
    gameId: 'game-30'
  }
];

// Tiered Literacy Modules (Kelas 1-2, Kelas 3-4, Kelas 5-6)
export const LITERACY_MODULES: LiteracyContent[] = [
  // KELAS 1-2 (Fase A)
  {
    id: 'lit-101',
    gradeTier: '1-2',
    unitId: 1,
    title: 'Mengenal Kata Pesisir Bulukumba',
    category: 'mengenal-kata',
    readingText: 'Pantai Bira sangat indah. Pasir di pantai putih dan halus. Ombak laut bergulung pelan. Di tepi pantai ada perahu nelayan. Perahu itu punya layar putih bersih.',
    vocabulary: [
      { word: 'Pantai', meaning: 'Tepian daratan yang berbatasan dengan air laut' },
      { word: 'Ombak', meaning: 'Gerakan air laut yang bergulung-gulung ditiup angin' },
      { word: 'Layar', meaning: 'Kain tebal pada perahu untuk menangkap angin agar bergerak' },
      { word: 'Nelayan', meaning: 'Orang yang bekerja mencari ikan di laut' }
    ],
    exerciseType: 'matching',
    exerciseQuestion: 'Pasangkan kata dengan benda yang tepat: Benda yang terbuat dari kain tebal untuk menggerakkan perahu ditiup angin disebut...',
    options: ['Dayung', 'Layar', 'Jaring', 'Batu karang'],
    correctAnswer: 1,
    explanation: 'Hebat! Layar adalah kain tebal yang dibentangkan di tiang perahu untuk menangkap angin.'
  },
  {
    id: 'lit-102',
    gradeTier: '1-2',
    unitId: 3,
    title: 'Si Lopi dan Tujuh Layar Putih',
    category: 'cerita-pendek',
    readingText: 'Lopi adalah nama miniatur kapal Phinisi milik Andi. Lopi dibuat oleh kakek Andi di Tanah Beru. Lopi memiliki dua tiang dan tujuh layar putih. Saat ditiup angin, Lopi meluncur lincah di atas air kolam. Andi sangat menyayangi Lopi.',
    vocabulary: [
      { word: 'Miniatur', meaning: 'Tiruan suatu benda dalam ukuran yang jauh lebih kecil' },
      { word: 'Tiang', meaning: 'Kayu panjang tegak lurus tempat memasang layar kapal' }
    ],
    exerciseType: 'multiple-choice',
    exerciseQuestion: 'Berapa banyak layar putih yang dimiliki oleh kapal Lopi?',
    options: ['3 layar', '5 layar', '7 layar', '10 layar'],
    correctAnswer: 2,
    explanation: 'Benar sekali! Kapal Lopi memiliki 7 layar putih yang anggun.'
  },

  // KELAS 3-4 (Fase B)
  {
    id: 'lit-201',
    gradeTier: '3-4',
    unitId: 4,
    title: 'Kearifan Panrita Lopi di Tanah Beru',
    category: 'ide-pokok',
    readingText: 'Di pesisir Tanah Beru, ketukan palu kayu terdengar berirama sepanjang hari. Para Panrita Lopi sedang membangun perahu Phinisi. Uniknya, mereka tidak menggunakan gambar rencana arsitektur di atas kertas. Mereka mengandalkan kepekaan rasa, rumus perhitungan tradisional dalam ingatan, dan kearifan doa. Setiap sambungan papan dipahat dengan sangat presisi dan disatukan memakai pasak kayu ulin tanpa paku besi.',
    vocabulary: [
      { word: 'Panrita Lopi', meaning: 'Gelar kehormatan untuk ahli atau pakar pembuat perahu Bugis-Makassar' },
      { word: 'Presisi', meaning: 'Tepat, teliti, dan memiliki ketepatan ukuran yang tinggi' },
      { word: 'Pasak', meaning: 'Paku bulat dari kayu keras untuk mengunci sambungan papan' }
    ],
    exerciseType: 'multiple-choice',
    exerciseQuestion: 'Apakah ide pokok dari paragraf bacaan di atas?',
    options: [
      'Harga perahu Phinisi di pasar internasional',
      'Keahlian istimewa Panrita Lopi membangun perahu dengan kepekaan rasa dan cara tradisional',
      'Suara palu kayu yang bising di pantai Tanah Beru',
      'Warna kayu ulin yang digunakan nelayan'
    ],
    correctAnswer: 1,
    explanation: 'Luar biasa! Ide pokoknya adalah keahlian istimewa Panrita Lopi dalam membangun perahu secara tradisional tanpa sketsa kertas.'
  },
  {
    id: 'lit-202',
    gradeTier: '3-4',
    unitId: 5,
    title: 'Anatomi Rahasia Kapal Phinisi',
    category: 'kosakata',
    readingText: 'Perahu Phinisi terdiri dari berbagai bagian utama yang memiliki istilah khas. Lunas atau dasar kapal disebut "Kalibise". Tiang layar depan disebut "Paba Tere Depan". Di haluan depan terpasang moncong kayu runcing bernama "Anjong", yang berfungsi memecah ombak sekaligus lambang kehormatan kapal. Sementara kemudi ganda di bagian buritan disebut "Guling Sambilang".',
    vocabulary: [
      { word: 'Kalibise', meaning: 'Lunas atau kayu utama penegak bagian dasar kapal' },
      { word: 'Anjong', meaning: 'Hiasan haluan perahu yang meruncing ke depan' },
      { word: 'Guling Sambilang', meaning: 'Sepasang kemudi di samping kanan dan kiri lambung kapal' }
    ],
    exerciseType: 'matching',
    exerciseQuestion: 'Bagian perahu Phinisi yang berfungsi sebagai tulang punggung di dasar perahu disebut...',
    options: ['Anjong', 'Kalibise', 'Sombala', 'Cocoro'],
    correctAnswer: 1,
    explanation: 'Tepat sekali! Kalibise adalah lunas kapal yang menjadi pondasi dasar seluruh konstruksi Phinisi.'
  },

  // KELAS 5-6 (Fase C)
  {
    id: 'lit-301',
    gradeTier: '5-6',
    unitId: 10,
    title: 'Pengakuan UNESCO: Menjaga Warisan Kemanusiaan Dunia',
    category: 'fakta-opini',
    readingText: 'Pada 7 Desember 2017, UNESCO secara resmi menetapkan seni pembuatan perahu Phinisi di Sulawesi Selatan sebagai Warisan Budaya Takbenda Kemanusiaan (Representative List of the Intangible Cultural Heritage of Humanity). Keputusan ini merupakan pengakuan dunia atas kearifan maritim leluhur Indonesia. Namun, pengakuan dunia tersebut bukan sekadar piagam kebanggaan di dinding. Bagi masyarakat Bulukumba, pengakuan ini merupakan tanggung jawab moral yang besar untuk memastikan regenerasi Panrita Lopi dan ketersediaan kayu Bitti tetap lestari bagi generasi masa depan.',
    vocabulary: [
      { word: 'Warisan Budaya Takbenda', meaning: 'Praktik, representasi, ekspresi, pengetahuan, atau keterampilan yang diakui masyarakat sebagai bagian dari warisan budaya mereka' },
      { word: 'Regenerasi', meaning: 'Pewarisan pengetahuan dan keahlian kepada generasi penerus yang lebih muda' },
      { word: 'Tanggung Jawab Moral', meaning: 'Kewajiban etis dari hati nurani untuk menjaga kebaikan bersama' }
    ],
    exerciseType: 'multiple-choice',
    exerciseQuestion: 'Manakah dari kalimat berikut yang merupakan pernyataan FAKTA berdasarkan bacaan?',
    options: [
      'Membuat perahu Phinisi adalah pekerjaan paling menyenangkan di dunia.',
      'Seni pembuatan perahu Phinisi ditetapkan oleh UNESCO sebagai Warisan Budaya Takbenda pada 7 Desember 2017.',
      'Kayu Bitti di masa depan pasti akan habis ditebang tanpa sisa.',
      'Semua anak di Bulukumba harus bekerja menjadi pembuat perahu.'
    ],
    correctAnswer: 1,
    explanation: 'Tepat sekali! Penetapan UNESCO pada 7 Desember 2017 adalah fakta historis yang dapat diverifikasi secara resmi.'
  },
  {
    id: 'lit-302',
    gradeTier: '5-6',
    unitId: 12,
    title: 'Analisis Sebab-Akibat: Pelestarian Pohon Bitti dan Ulin',
    category: 'analisis-sebab-akibat',
    readingText: 'Kayu Bitti (Vitex cofassus) dan kayu Ulin (Eusideroxylon zwageri) adalah bahan baku utama pembuatan perahu Phinisi karena sifatnya yang sangat padat, tahan lapuk, dan tahan serangan cacing laut. Apabila penebangan pohon di hutan tidak diimbangi dengan penanaman kembali (reboisasi), pasokan kayu pilihan akan menipis. Akibatnya, biaya pembuatan kapal akan melonjak tinggi dan tradisi pembuatan Phinisi terancam punah. Oleh karena itu, gerakan menanam pohon Bitti di Bulukumba menjadi langkah krusial untuk menyelamatkan kebudayaan maritim kita.',
    vocabulary: [
      { word: 'Reboisasi', meaning: 'Penanaman kembali hutan yang telah ditebang atau gundul' },
      { word: 'Krusial', meaning: 'Sangat penting, menentukan, atau gawat' },
      { word: 'Hidrodinamika', meaning: 'Karakteristik aliran air terhadap benda yang bergerak di dalamnya' }
    ],
    exerciseType: 'multiple-choice',
    exerciseQuestion: 'Berdasarkan teks di atas, apa akibat yang terjadi jika penebangan pohon kayu bitti tidak diimbangi dengan penanaman kembali?',
    options: [
      'Perahu Phinisi akan berlayar lebih cepat di laut.',
      'Pasokan kayu menipis, biaya kapal melonjak, dan tradisi pembuatan Phinisi terancam punah.',
      'Jumlah ikan di laut Bulukumba akan bertambah banyak.',
      'Layar perahu Phinisi akan berubah menjadi warna merah.'
    ],
    correctAnswer: 1,
    explanation: 'Tepat! Ketiadaan reboisasi menyebabkan kelangkaan kayu, kenaikan biaya, dan ancaman kepunahan tradisi Phinisi.'
  }
];

// Tiered Numeracy Modules (Kelas 1-2, Kelas 3-4, Kelas 5-6)
export const NUMERACY_MODULES: NumeracyContent[] = [
  // KELAS 1-2 (Fase A)
  {
    id: 'num-101',
    gradeTier: '1-2',
    unitId: 1,
    title: 'Menghitung Ikan Segar Hasil Tangkapan Nelayan',
    topic: 'bilangan-dasar',
    realLifeContext: 'Pak Amir baru saja merapat di pantai Bira membawa dua ember berisi ikan cakalang segar.',
    problemStatement: 'Ember pertama berisi 6 ekor ikan cakalang. Ember kedua berisi 8 ekor ikan cakalang. Berapa jumlah seluruh ikan yang berhasil ditangkap Pak Amir?',
    visualData: [
      { label: 'Ember Pertama', value: 6, unit: 'ekor ikan' },
      { label: 'Ember Kedua', value: 8, unit: 'ekor ikan' }
    ],
    question: 'Berapakah total 6 + 8 ekor ikan?',
    options: ['12 ekor', '13 ekor', '14 ekor', '16 ekor'],
    correctAnswerIndex: 2,
    stepByStepSolution: 'Langkah hitung: 6 + 8 = 14 ekor ikan cakalang.'
  },
  {
    id: 'num-102',
    gradeTier: '1-2',
    unitId: 3,
    title: 'Mengenal Bangun Datar pada Layar Kapal',
    topic: 'pengukuran-geometri',
    realLifeContext: 'Layar pada tiang haluan perahu Phinisi memiliki bentuk bersudut tiga.',
    problemStatement: 'Layar kapal yang memiliki 3 buah sisi lurus dan 3 buah sudut lancip disebut bangun datar...',
    question: 'Bentuk bangun datar apakah layar tersebut?',
    options: ['Lingkaran', 'Persegi', 'Segitiga', 'Persegi Panjang'],
    correctAnswerIndex: 2,
    stepByStepSolution: 'Bangun datar yang dibatasi oleh 3 sisi dan memiliki 3 sudut dinamakan segitiga.'
  },

  // KELAS 3-4 (Fase B)
  {
    id: 'num-201',
    gradeTier: '3-4',
    unitId: 4,
    title: 'Operasi Perkalian Pasak Kayu Phinisi',
    topic: 'operasi-hitung',
    realLifeContext: 'Panrita Lopi memasang pasak kayu ulin pada 12 baris papan lambung kapal.',
    problemStatement: 'Jika setiap baris papan dipasangi 15 buah pasak kayu, berapa total seluruh pasak kayu yang dipasang?',
    visualData: [
      { label: 'Baris Papan', value: 12, unit: 'baris' },
      { label: 'Pasak per Baris', value: 15, unit: 'buah pasak' }
    ],
    question: 'Berapakah hasil dari 12 x 15 pasak kayu?',
    options: ['150 buah', '180 buah', '200 buah', '210 buah'],
    correctAnswerIndex: 1,
    stepByStepSolution: 'Langkah hitung: 12 x 15 = 12 x 10 (120) + 12 x 5 (60) = 180 buah pasak.'
  },
  {
    id: 'num-202',
    gradeTier: '3-4',
    unitId: 5,
    title: 'Menghitung Keliling Geladak Kapal',
    topic: 'pengukuran-geometri',
    realLifeContext: 'Geladak utama perahu Phinisi berbentuk persegi panjang yang luas untuk lalu lintas awak kapal.',
    problemStatement: 'Geladak kapal memiliki panjang 20 meter dan lebar 5 meter. Awak kapal ingin memasang tali pengaman di sekeliling geladak tersebut. Berapa panjang total tali pengaman (keliling) yang dibutuhkan?',
    visualData: [
      { label: 'Panjang Geladak', value: 20, unit: 'meter' },
      { label: 'Lebar Geladak', value: 5, unit: 'meter' }
    ],
    question: 'Berapakah keliling geladak tersebut?',
    options: ['25 meter', '50 meter', '100 meter', '40 meter'],
    correctAnswerIndex: 1,
    stepByStepSolution: 'Rumus keliling persegi panjang = 2 x (panjang + lebar) = 2 x (20 + 5) = 2 x 25 = 50 meter.'
  },

  // KELAS 5-6 (Fase C)
  {
    id: 'num-301',
    gradeTier: '5-6',
    unitId: 8,
    title: 'Perhitungan Skala Maket Phinisi dan Dimensi Nyata',
    topic: 'penalaran-skala',
    realLifeContext: 'Seorang perajin di Bonto Bahari membuat miniatur maket kapal Phinisi untuk pameran museum.',
    problemStatement: 'Maket dibuat dengan skala 1 : 50. Jika panjang lunas kapal asli adalah 25 meter (2.500 cm), berapakah panjang lunas kapal pada maket miniatur?',
    visualData: [
      { label: 'Skala Maket', value: 50, unit: '1:50' },
      { label: 'Panjang Nyata', value: 2500, unit: 'cm' }
    ],
    question: 'Berapakah panjang lunas pada maket?',
    options: ['25 cm', '50 cm', '75 cm', '100 cm'],
    correctAnswerIndex: 1,
    stepByStepSolution: 'Panjang pada maket = Ukuran sebenarnya : Faktor skala = 2.500 cm : 50 = 50 cm.'
  },
  {
    id: 'num-302',
    gradeTier: '5-6',
    unitId: 11,
    title: 'Analisis Data Kunjungan Kapal Tradisional di Bulukumba',
    topic: 'data-tabel',
    realLifeContext: 'Dinas Pariwisata dan Kebudayaan mendata jumlah kunjungan wisatawan ke galangan kapal Tanah Beru selama 4 bulan.',
    problemStatement: 'Data pengunjung: Januari = 400 orang, Februari = 550 orang, Maret = 650 orang, April = 800 orang. Berapakah rata-rata (mean) jumlah pengunjung per bulan?',
    visualData: [
      { label: 'Januari', value: 400, unit: 'orang' },
      { label: 'Februari', value: 550, unit: 'orang' },
      { label: 'Maret', value: 650, unit: 'orang' },
      { label: 'April', value: 800, unit: 'orang' }
    ],
    question: 'Berapakah rata-rata pengunjung per bulan?',
    options: ['500 orang', '600 orang', '650 orang', '700 orang'],
    correctAnswerIndex: 1,
    stepByStepSolution: 'Total pengunjung = 400 + 550 + 650 + 800 = 2.400 orang. Rata-rata = 2.400 : 4 bulan = 600 orang per bulan.'
  }
];

// Cultural Encyclopedia Articles
export const CULTURAL_ARTICLES: CulturalArticle[] = [
  {
    id: 'cult-01',
    title: 'Sejarah dan Hakikat Perahu Phinisi Bulukumba',
    subtitle: 'Mahakarya Kebudayaan Maritim Nusantara yang Menembus Samudra Dunia',
    category: 'sejarah',
    content: [
      'Perahu Phinisi adalah mahakarya perahu layar tradisional khas suku Bugis dan Makassar yang berasal dari pesisir Kabupaten Bulukumba, Sulawesi Selatan, terutama wilayah Tanah Beru, Bira, dan Batu Licin di Kecamatan Bonto Bahari.',
      'Keistimewaan perahu Phinisi terletak pada konstruksi layar bertipe sekunar (schooner-ketch) dengan dua tiang agung utama dan tujuh helai layar. Filosofi tujuh helai layar ini melambangkan kemampuan dan keberanian para pelaut Nusantara dalam menaklukkan tujuh samudra besar di dunia.',
      'Secara historis, perahu Phinisi bukan sekadar alat transportasi melainkan perwujudan martabat, ketahanan mental, dan kepiawaian teknologi maritim leluhur yang telah mengarungi lautan Nusantara hingga ke Madagaskar, Tiongkok, dan benua Australia berabad-abad lalu.'
    ],
    bugisTerms: [
      { term: 'Lopi', meaning: 'Perahu atau kapal' },
      { term: 'Sombala', meaning: 'Layar kapal' },
      { term: 'Butta Panrita Lopi', meaning: 'Tanah para pakar atau empu pembuat perahu (julukan sakral Bulukumba)' }
    ],
    quote: 'Sekali layar terkembang, pantang surut ke pantai. Lebih baik tenggelam di lautan daripada kembali tanpa membawa kehormatan.',
    significance: 'Lambang keberanian, kejujuran, dan ketangguhan karakter maritim bangsa Indonesia.'
  },
  {
    id: 'cult-02',
    title: 'Panrita Lopi: Maestro Arsitektur Tanpa Gambar',
    subtitle: 'Kecerdasan Intuitif, Kepekaan Rasa, dan Kearifan Generasi Pembuat Kapal',
    category: 'panrita-lopi',
    content: [
      'Sosok sentral di balik kokohnya perahu Phinisi adalah "Panrita Lopi". Kata "Panrita" berarti orang berilmu tinggi, pakar, atau guru spiritual, sedangkan "Lopi" berarti perahu.',
      'Berbeda dengan insinyur perkapalan modern yang menggantungkan rancangannya pada cetak biru digital (blueprint) di layar komputer, Panrita Lopi merancang seluruh lengkungan, ketebalan lunas, dan titik keseimbangan kapal hanya berbekal kepekaan rasa, ingatan leluhur, serta rumus patokan tradisi.',
      'Seorang Panrita Lopi dibantu oleh puluhan tukang kayu yang disebut "Sawi". Dalam kepemimpinannya, Panrita Lopi tidak sekadar memerintah, melainkan mencontohkan ketelitian, ketenangan batin, serta keselarasan dengan alam semesta.'
    ],
    bugisTerms: [
      { term: 'Panrita', meaning: 'Cendekiawan, empu, atau pakar yang memiliki ilmu mendalam' },
      { term: 'Sawi', meaning: 'Pekerja atau pengrajin tukang kayu pembuat kapal' },
      { term: 'Sambung Papan', meaning: 'Teknik menyatukan bilah papan kapal dengan pasak kayu' }
    ],
    quote: 'Ilmu membuat perahu tidak tertulis di lembaran kertas yang bisa basah dan sobek, melainkan terpahat di lubuk jiwa dan terasah oleh pengalaman.',
    significance: 'Bukti tingginya kecerdasan kognitif dan kearifan lokal bangsa Indonesia yang mandiri.'
  },
  {
    id: 'cult-03',
    title: 'Anatomi dan Filosofi Bagian-Bagian Phinisi',
    subtitle: 'Setiap Bilah Kayu Mengandung Doa, Simbol, dan Fungsi Hidrodinamika',
    category: 'anatomi-kapal',
    content: [
      'Setiap komponen pada perahu Phinisi dirancang dengan perpaduan fungsi hidrodinamika yang sangat cerdas serta makna simbolik yang mendalam:',
      '1. Kalibise (Lunas): Kayu lunas yang membujur di bagian paling dasar kapal. Kalibise diibaratkan sebagai tulang punggung kehidupan perahu. Bila lunasnya kokoh dan lurus, perahu akan melaju stabil menghadapi gelombang.',
      '2. Anjong: Kayu runcing yang menjorok di haluan depan kapal. Anjong berfungsi membelah ombak besar agar tidak langsung menghantam dinding lambung perahu.',
      '3. Sombala (Layar Utama): Terdiri dari Sombala Tanpasere (layar agung) dan Cocoro (layar pengarah depan). Layar ini diatur sudutnya untuk menangkap angin dari berbagai arah mata angin.',
      '4. Guling Sambilang (Kemudi Ganda): Sepasang daun kemudi di sisi kiri dan kanan buritan yang dikendalikan dengan tali kendali tradisional untuk manuver lincah.'
    ],
    bugisTerms: [
      { term: 'Kalibise', meaning: 'Lunas atau balok dasar utama kapal' },
      { term: 'Anjong', meaning: 'Moncong haluan depan perahu' },
      { term: 'Posisi', meaning: 'Tiang penopang layar' },
      { term: 'Guling Sambilang', meaning: 'Sepasang kemudi di kanan dan kiri buritan' }
    ],
    quote: 'Jika lunas lurus dan kuat, badai sebesar apa pun tak akan mampu mematahkan bahtera kita.',
    significance: 'Kombinasi harmonis antara estetika budaya dan prinsip fisika hidrodinamika laut.'
  },
  {
    id: 'cult-04',
    title: 'Upacara Adat dan Tradisi Luhur Pembuatan Phinisi',
    subtitle: 'Ammuntuli, Ansompo Lopi, hingga Annyorong Lopi yang Spektakuler',
    category: 'ritual-adat',
    content: [
      'Pembangunan perahu Phinisi adalah prosesi kultural-religius yang sarat penghormatan kepada Sang Pencipta dan alam semesta:',
      'Tahap pertama adalah "Ammuntuli Kayu", yaitu ritual pencarian kayu di hutan pada hari baik. Penebang memohon izin kepada alam dan memastikan hanya pohon yang matang yang ditebang.',
      'Tahap kedua adalah "Ansompo Lopi", yaitu upacara peletakan lunas pertama. Ujung lunas dipotong dengan doa keselamatan bagi nahkoda dan awak kapal di kemudian hari.',
      'Puncak yang paling dinantikan adalah "Annyorong Lopi", yaitu prosesi menarik kapal yang sudah jadi dari tepi pantai masuk ke dalam laut. Ratusan warga laki-laki, perempuan, dan anak-anak bergotong royong menarik tali tambang diiringi tabuhan gendang dan seruan semangat.',
      'Nilai gotong royong dalam Annyorong Lopi membuktikan bahwa karya besar tidak pernah bisa lahir dari kesombongan individu, melainkan dari persatuan seluruh warga.'
    ],
    bugisTerms: [
      { term: 'Ammuntuli', meaning: 'Mencari kayu berkualitas di hutan dengan perhitungan hari baik' },
      { term: 'Ansompo Lopi', meaning: 'Upacara peletakan lunas pertama kapal' },
      { term: 'Annyorong Lopi', meaning: 'Upacara adat penarikan kapal secara bergotong royong ke laut' }
    ],
    quote: 'Berat sama dipikul, ringan sama dijinjing. Kapal seberat ratusan ton pun akan meluncur ke laut jika ditarik dengan hati yang bersatu.',
    significance: 'Pendidikan karakter gotong royong, solidaritas sosial, dan rasa syukur kepada Tuhan Yang Maha Esa.'
  },
  {
    id: 'cult-05',
    title: 'Pengakuan UNESCO: Warisan Budaya Takbenda Dunia',
    subtitle: 'Tonggak Sejarah 7 Desember 2017 di Pulau Jeju, Korea Selatan',
    category: 'unesco',
    content: [
      'Pada Sidang ke-12 Komite Antarpemerintah untuk Perlindungan Warisan Budaya Takbenda UNESCO tanggal 7 Desember 2017 di Pulau Jeju, Korea Selatan, dunia secara resmi menetapkan:',
      '"Pinisi, Art of Boatbuilding in South Sulawesi" ke dalam Representative List of the Intangible Cultural Heritage of Humanity.',
      'UNESCO menilai bahwa tradisi pembuatan Phinisi tidak hanya menyangkut kecakapan teknologi pertukangan kayu, tetapi juga memuat sistem kosmologi, pengetahuan kelautan, pelestarian lingkungan hidup, dan kohesi sosial yang patut dijaga kelangsungannya oleh peradaban manusia modern.'
    ],
    bugisTerms: [
      { term: 'Warisan Kemanusiaan', meaning: 'Karya cipta bernilai luhur yang diakui dunia sebagai milik bersama seluruh umat manusia' }
    ],
    quote: 'Phinisi adalah hadiah dari tanah Bulukumba untuk peradaban samudra dunia.',
    significance: 'Pengukuhan martabat kebudayaan bangsa Indonesia di kancah internasional.'
  }
];

// LKPD (Lembar Kerja Peserta Didik Digital)
export const LKPD_LIST: LKPDItem[] = [
  // LKPD Kelas 1-2
  {
    id: 'lkpd-01',
    unitId: 1,
    gradeTier: '1-2',
    title: 'LKPD 1: Menjelajah Sahabat Pesisir Bulukumba',
    tujuan: 'Siswa dapat mengidentifikasi 3 benda di lingkungan pantai Bulukumba dan menghitung jumlah perahu nelayan.',
    bacalah: 'Pantai Tanjung Bira sangat indah. Pasirnya putih dan air lautnya jernih. Nelayan di sana memakai perahu kayu dengan layar yang indah. Mereka mencari ikan dengan gembira.',
    amati: 'Amati gambar perahu nelayan di pesisir pantai. Perhatikan bagian layar, lambung perahu, dan air laut di sekitarnya.',
    pikirkan: 'Apa yang terjadi jika perahu tidak memiliki layar saat angin laut bertiup?',
    kerjakanTugas: {
      instruksi: 'Jawablah pertanyaan berikut dengan singkat dan jelas:',
      pertanyaan: [
        'Sebutkan warna pasir di pantai Tanjung Bira yang kamu baca!',
        'Benda apa yang digunakan nelayan untuk menangkap angin pada perahu?',
        'Jika ada 3 perahu di kiri dan 4 perahu di kanan, berapa jumlah seluruh perahu?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu: Pantai Bulukumba sangat indah karena...',
    refleksiPrompt: 'Bagaimana perasaanmu setelah belajar tentang pantai dan perahu nelayan hari ini? (Sangat Senang / Senang / Cukup)'
  },
  // LKPD Kelas 3-4
  {
    id: 'lkpd-02',
    unitId: 4,
    gradeTier: '3-4',
    title: 'LKPD 4: Ketelitian dan Kearifan Panrita Lopi',
    tujuan: 'Siswa dapat menganalisis keistimewaan cara kerja Panrita Lopi dan menghitung kebutuhan pasak kayu dengan operasi perkalian.',
    bacalah: 'Panrita Lopi adalah arsitek tradisional perahu Phinisi di Bulukumba. Mereka bekerja tanpa menggunakan sketsa gambar di atas kertas. Keahlian ini diwariskan dari kakek ke ayah, lalu ke anak. Mereka menggunakan pasak kayu ulin sebagai pengganti paku besi agar kapal tidak berkarat di air laut.',
    amati: 'Amati proses penyambungan dua bilah papan kayu pada lambung perahu. Perhatikan lubang-lubang tempat pasak kayu ulin dimasukkan.',
    pikirkan: 'Mengapa Panrita Lopi memilih pasak kayu daripada paku besi untuk menyatukan papan perahu?',
    kerjakanTugas: {
      instruksi: 'Jawablah pertanyaan pemahaman dan numerasi berikut:',
      pertanyaan: [
        'Mengapa Panrita Lopi disebut arsitek tradisional yang istimewa?',
        'Apa keunggulan menggunakan pasak kayu ulin dibanding paku besi di air laut?',
        'Jika dalam 1 meter papan dibutuhkan 6 pasak kayu, berapa pasak kayu yang dibutuhkan untuk papan sepanjang 8 meter? (Tuliskan cara hitungnya)'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang sikap kerja Panrita Lopi yang patut kita contoh!',
    refleksiPrompt: 'Sikap teliti dan pantang menyerah seperti apa yang akan kamu terapkan dalam belajar di sekolah?'
  },
  // LKPD Kelas 5-6
  {
    id: 'lkpd-03',
    unitId: 10,
    gradeTier: '5-6',
    title: 'LKPD 10: Advokasi Warisan Budaya Takbenda UNESCO',
    tujuan: 'Siswa dapat mengevaluasi nilai-nilai di balik penetapan Phinisi oleh UNESCO serta menghitung rasio matematis pelestarian hutan kayu Bitti.',
    bacalah: 'Penetapan seni pembuatan perahu Phinisi sebagai Warisan Budaya Takbenda oleh UNESCO pada tahun 2017 merupakan tonggak sejarah. Namun, pelestarian ini menghadapi tantangan nyata: keterbatasan bahan baku kayu Bitti dan Ulin. Dibutuhkan waktu 20 hingga 30 tahun agar pohon Bitti siap tebang. Oleh sebab itu, program reboisasi dan penanaman pohon berkelanjutan harus digalakkan bersamaan dengan pelatihan generasi muda Panrita Lopi.',
    amati: 'Amati infografis rentang waktu pertumbuhan pohon Bitti dan tahapan regenerasi pembuat perahu di Bonto Bahari.',
    pikirkan: 'Bagaimana keterkaitan antara kelestarian hutan di daratan dengan keberlanjutan tradisi perahu layar di lautan?',
    kerjakanTugas: {
      instruksi: 'Selesaikan analisis kritis dan tantangan numerasi berikut:',
      pertanyaan: [
        'Jelaskan 2 alasan utama mengapa UNESCO menetapkan pembuatan perahu Phinisi sebagai warisan dunia!',
        'Mengapa kelestarian hutan kayu Bitti sangat menentukan masa depan perahu Phinisi?',
        'Jika sebuah galangan kapal membutuhkan 40 batang pohon per tahun dan tingkat keberhasilan bibit tumbuh adalah 80%, berapa bibit pohon minimal yang harus ditanam per tahun? (Tunjukkan langkah perhitungannya)'
      ]
    },
    kesimpulanPrompt: 'Rumuskan kesimpulanmu mengenai peran generasi muda dalam menjaga warisan Phinisi!',
    refleksiPrompt: 'Apa aksi nyata paling sederhana yang dapat kamu lakukan mulai hari ini untuk menjaga kearifan lokal Bulukumba?'
  }
];

import { LKPD_CATALOG } from './lkpdData.ts';
import { COMPREHENSIVE_QUIZ_QUESTIONS } from './quizData.ts';

// Comprehensive LKPD Data (24 interactive items for 12 units)
export const LKPD_DATA: LKPDItem[] = LKPD_CATALOG;

// Formative Quiz Assessments (120 verified questions for 12 units)
export const QUIZ_QUESTIONS: QuizQuestion[] = COMPREHENSIVE_QUIZ_QUESTIONS;

// Official Badges for Paspor Belajarku (7 Lencana Kehormatan)
export const OFFICIAL_BADGES: Badge[] = [
  {
    id: 'badge-1',
    title: 'Penjelajah Ilmu',
    icon: '🌊',
    description: 'Memulai penjelajahan bahari dan membuka gerbang ilmu pengetahuan maritim Bulukumba.',
    criteria: 'Menyelesaikan materi pengantar Topik 1 & 2',
    unlocked: true,
    unlockedAt: 'Hari Pertama Berlayar'
  },
  {
    id: 'badge-2',
    title: 'Sahabat Literasi',
    icon: '📖',
    description: 'Rajin menelaah teks literasi kearifan lokal, menemukan ide pokok, dan memperkaya kosakata.',
    criteria: 'Membaca 5 modul literasi dan menjawab pertanyaan teks dengan benar',
    unlocked: true,
    unlockedAt: 'Hari Ke-3 Berlayar'
  },
  {
    id: 'badge-3',
    title: 'Ahli Numerasi',
    icon: '🔢',
    description: 'Mampu memecahkan soal matematika, hitungan muatan, dan penalaran skala perahu Phinisi.',
    criteria: 'Menyelesaikan 5 tantangan numerasi kontekstual bahari',
    unlocked: false
  },
  {
    id: 'badge-4',
    title: 'Sahabat Pinisi',
    icon: '⛵',
    description: 'Memahami keistimewaan 7 helai layar Sombala dan keahlian luhur Panrita Lopi.',
    criteria: 'Mempelajari materi anatomi dan filosofi kapal Pinisi',
    unlocked: false
  },
  {
    id: 'badge-5',
    title: 'Pemikir Kritis',
    icon: '🧠',
    description: 'Mampu membedakan fakta dan opini serta menganalisis sebab akibat dalam pelestarian budaya.',
    criteria: 'Menyelesaikan LKPD digital dan asesmen penalaran',
    unlocked: false
  },
  {
    id: 'badge-6',
    title: 'Penjaga Budaya',
    icon: '🌱',
    description: 'Mengenal tradisi Annyorong Lopi, hutan kayu Bitti, dan status Warisan Budaya Takbenda UNESCO.',
    criteria: 'Menuntaskan materi Warisan Budaya UNESCO',
    unlocked: false
  },
  {
    id: 'badge-7',
    title: 'Generasi Pelestari',
    icon: '⭐',
    description: 'Gelar tertinggi penjelajah cilik Butta Panrita Lopi yang siap menjaga kejayaan maritim masa depan.',
    criteria: 'Menyelesaikan seluruh 12 Topik Belajar',
    unlocked: false
  }
];
