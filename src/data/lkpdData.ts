import { LKPDItem } from '../types.ts';

export interface ExtendedLKPDItem extends LKPDItem {
  semester: 1 | 2;
  domain: 'literasi' | 'numerasi';
  sourceId: string;
}

export const LKPD_CATALOG: ExtendedLKPDItem[] = [
  // ==========================================
  // UNIT 1: AKU DAN LINGKUNGANKU (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-1a',
    unitId: 1,
    semester: 1,
    domain: 'literasi',
    gradeTier: '1-2',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 1A: Mengenal Pantai Sekolah Kita',
    tujuan: 'Siswa dapat membaca dan mengidentifikasi kosakata lingkungan pesisir pantai di Bulukumba.',
    bacalah: 'Pantai di dekat sekolah kita sangat indah. Air lautnya biru jernih dan pasirnya putih bersih. Angin berhembus sepoi-sepoi menggerakkan daun kelapa. Di tepi pantai, tampak perahu nelayan bersandar rapi.',
    amati: 'Amati gambar suasana pesisir pantai. Perhatikan ombak kecil yang menyapu pasir pantai dan deretan perahu nelayan.',
    pikirkan: 'Mengapa kita harus menjaga kebersihan pantai dan laut di sekitar sekolah kita?',
    kerjakanTugas: {
      instruksi: 'Jawablah pertanyaan-pertanyaan berikut dengan teliti:',
      pertanyaan: [
        'Sebutkan 3 benda atau makhluk hidup yang ada di pantai dalam bacaan!',
        'Apa warna air laut dan pasir pantai yang diceritakan?',
        'Tuliskan satu tindakan baik yang dapat kamu lakukan jika melihat sampah di pantai!'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulan singkatmu tentang keindahan dan kebersihan pantai kita!',
    refleksiPrompt: 'Bagaimana perasaanmu setelah belajar tentang lingkungan pesisir hari ini?'
  },
  {
    id: 'lkpd-1b',
    unitId: 1,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '1-2',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 1B: Berhitung Benda di Tepi Pantai',
    tujuan: 'Siswa dapat menghitung, menjumlahkan, dan membandingkan jumlah benda di pesisir.',
    bacalah: 'Pagi ini di dermaga kecil Bulukumba, Andi melihat 4 perahu kecil bersandar. Tidak lama kemudian, datang lagi 3 perahu nelayan yang baru pulang melaut. Di pohon kelapa tepi pantai, ada 8 butir kelapa muda.',
    amati: 'Amati gambar kumpulan perahu dan buah kelapa di tepi pantai.',
    pikirkan: 'Bagaimana cara kita menghitung benda-benda tersebut dengan cepat dan tepat?',
    kerjakanTugas: {
      instruksi: 'Hitunglah soal penjumlahan dan perbandingan berikut:',
      pertanyaan: [
        'Ada 4 perahu bersandar, lalu datang 3 perahu lagi. Berapa jumlah seluruh perahu sekarang? (4 + 3 = ...)',
        'Jika dari 8 butir kelapa dipetik 2 butir oleh paman, berapa butir kelapa yang tersisa? (8 - 2 = ...)',
        'Manakah yang lebih banyak: 7 perahu atau 6 butir kelapa?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan apa yang kamu pelajari tentang berhitung benda di alam!',
    refleksiPrompt: 'Apakah berhitung benda nyata di pantai terasa menyenangkan? Mengapa?'
  },

  // ==========================================
  // UNIT 2: MENGENAL BULUKUMBA (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-2a',
    unitId: 2,
    semester: 1,
    domain: 'literasi',
    gradeTier: '1-2',
    sourceId: 'pemkab-bulukumba-pinisi',
    title: 'LKPD 2A: Pesona Butta Panrita Lopi',
    tujuan: 'Siswa dapat menemukan gagasan pokok sederhana dari teks pengenalan Kabupaten Bulukumba.',
    bacalah: 'Kabupaten Bulukumba terletak di ujung selatan Provinsi Sulawesi Selatan. Bulukumba dikenal dengan julukan "Butta Panrita Lopi" yang berarti bumi para ahli pembuat perahu. Daerah ini sangat terkenal dengan Pantai Tanjung Bira yang berpasir sangat halus.',
    amati: 'Amati letak Kabupaten Bulukumba pada peta Sulawesi Selatan yang membentang di pesisir teluk.',
    pikirkan: 'Mengapa julukan Butta Panrita Lopi menjadi kebanggaan seluruh masyarakat Bulukumba?',
    kerjakanTugas: {
      instruksi: 'Tuliskan informasi yang kamu temukan pada bacaan:',
      pertanyaan: [
        'Di provinsi manakah Kabupaten Bulukumba berada?',
        'Apa arti dari julukan "Butta Panrita Lopi"?',
        'Pantai apakah di Bulukumba yang terkenal dengan pasir putihnya yang sangat halus?'
      ]
    },
    kesimpulanPrompt: 'Rangkum dalam satu kalimat apa yang membuat Kabupaten Bulukumba istimewa!',
    refleksiPrompt: 'Hal apa yang paling ingin kamu kunjungi di Bulukumba?'
  },
  {
    id: 'lkpd-2b',
    unitId: 2,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '1-2',
    sourceId: 'pemkab-bulukumba-pinisi',
    title: 'LKPD 2B: Jarak dan Pola Bilangan Perjalanan',
    tujuan: 'Siswa dapat menentukan urutan bilangan dan menghitung jarak perjalanan antarkecamatan.',
    bacalah: 'Mobil rombongan sekolah menempuh perjalanan dari pusat kota Ujung Bulu menuju Bonto Bahari sejauh 30 kilometer. Di sepanjang jalan terpasang tiang petunjuk kilometer bernomor loncat 5: KM 5, KM 10, KM 15, KM 20.',
    amati: 'Amati urutan papan petunjuk jarak kilometer di tepi jalan raya Bulukumba.',
    pikirkan: 'Berapakah angka kilometer berikutnya jika polanya selalu bertambah 5?',
    kerjakanTugas: {
      instruksi: 'Lengkapi pola bilangan dan hitung jarak berikut:',
      pertanyaan: [
        'Lanjutkan pola bilangan loncat lima: 5, 10, 15, 20, ..., ...',
        'Jika perjalanan total adalah 30 km dan sudah ditempuh 20 km, berapa km lagi yang harus ditempuh? (30 - 20 = ...)',
        'Di sebuah warung kelapa muda, satu gelas berharga Rp5.000. Jika kapten membeli 2 gelas, berapa total uang yang dibayar?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan bagaimana pola bilangan membantumu memprediksi jarak perjalanan!',
    refleksiPrompt: 'Bagian hitungan mana yang paling mudah kamu selesaikan?'
  },

  // ==========================================
  // UNIT 3: MENGENAL PINISI (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-3a',
    unitId: 3,
    semester: 1,
    domain: 'literasi',
    gradeTier: '3-4',
    sourceId: 'unesco-pinisi-2017',
    title: 'LKPD 3A: Makna 7 Layar Sombala',
    tujuan: 'Siswa dapat menganalisis teks informasi mengenai filosofi 7 layar dan 2 tiang utama perahu Pinisi.',
    bacalah: 'Perahu Pinisi adalah mahakarya pelaut Bugis-Makassar. Ciri khas utama Pinisi adalah memiliki 2 tiang layar agung dan 7 helai layar (Sombala). Angka 7 memiliki makna filosofis luhur, yakni melambangkan bahwa nenek moyang bangsa Indonesia mampu mengarungi tujuh samudra besar di dunia.',
    amati: 'Amati diagram perahu Pinisi: 3 layar cocoro di haluan, 2 layar besar di tiang utama, dan 2 layar di tiang belakang.',
    pikirkan: 'Mengapa keberanian pelaut zaman dahulu mengarungi samudra penting untuk kita pelajari saat ini?',
    kerjakanTugas: {
      instruksi: 'Jawablah pertanyaan berdasarkan teks informasi resmi UNESCO:',
      pertanyaan: [
        'Berapa jumlah tiang layar agung dan helai layar pada perahu Pinisi?',
        'Apa makna simbolis dari 7 helai layar (Sombala) tersebut?',
        'Suku manakah di Sulawesi Selatan yang mewariskan seni pembuatan perahu Pinisi?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan filosofi perahu Pinisi dalam membentuk karakter pantang menyerah!',
    refleksiPrompt: 'Sikap apa dari pelaut Pinisi yang ingin kamu terapkan saat menghadapi pelajaran yang sulit?'
  },
  {
    id: 'lkpd-3b',
    unitId: 3,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '3-4',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 3B: Pecahan Layar dan Geometri Perahu',
    tujuan: 'Siswa dapat menentukan pecahan dan mengenali bangun datar pada layar perahu Pinisi.',
    bacalah: 'Dari total 7 helai layar pada perahu Pinisi, 3 layar di haluan berbentuk segitiga yang disebut cocoro. Dua layar utama berbentuk trapesium dan segi empat. Saat angin bertiup sedang, nakhoda memerintahkan membuka 4 helai layar.',
    amati: 'Amati bentuk geometris setiap helai layar pada ilustrasi perahu Pinisi.',
    pikirkan: 'Bagaimana pecahan dapat menyatakan jumlah layar yang sedang dibuka terhadap seluruh layar?',
    kerjakanTugas: {
      instruksi: 'Kerjakan soal pecahan dan geometri berikut:',
      pertanyaan: [
        'Jika 4 dari 7 layar sedang dibentangkan, tuliskan bentuk pecahannya!',
        'Berapa pecahan layar yang belum dibentangkan?',
        'Sebutkan 2 bentuk bangun datar yang kamu temukan pada layar dan badan perahu Pinisi!'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang hubungan pecahan dengan jumlah bagian layar!',
    refleksiPrompt: 'Apakah membayangkan bentuk layar membantumu memahami pecahan dengan lebih mudah?'
  },

  // ==========================================
  // UNIT 4: PANRITA LOPI DAN PEMBUAT KAPAL (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-4a',
    unitId: 4,
    semester: 1,
    domain: 'literasi',
    gradeTier: '3-4',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 4A: Kearifan Maestro Panrita Lopi',
    tujuan: 'Siswa dapat mengidentifikasi peran Panrita Lopi, Sambalu, dan Sawi dalam galangan kapal rakyat.',
    bacalah: 'Panrita Lopi adalah sebutan kehormatan bagi maestro pembuat perahu di Bulukumba. Kehebatan Panrita Lopi adalah mampu merancang kapal kokoh berbobot ratusan ton tanpa menggunakan gambar cetak biru di atas kertas. Mereka mengandalkan ketajaman rasa, perhitungan mental, dan pengalaman turun-temurun.',
    amati: 'Amati susunan kerja di galangan kapal: Panrita Lopi mengarahkan Sambalu (mandor), dan Sambalu memimpin para Sawi (tukang kayu).',
    pikirkan: 'Nilai karakter apa yang membuat Panrita Lopi sangat dihormati oleh masyarakat dunia?',
    kerjakanTugas: {
      instruksi: 'Analisis struktur kerja tradisional pembuat perahu:',
      pertanyaan: [
        'Mengapa cara kerja Panrita Lopi membuat kagum para arsitek modern dunia?',
        'Apa tugas seorang Sambalu dan apa tugas seorang Sawi?',
        'Sikap teliti dan jujur apa yang harus dimiliki seorang pembuat perahu agar kapal tidak bocor di laut?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan peran kearifan lokal dalam mewariskan keahlian membuat kapal!',
    refleksiPrompt: 'Keterampilan atau kebiasaan baik apa yang ingin kamu latih terus-menerus hingga menjadi ahli?'
  },
  {
    id: 'lkpd-4b',
    unitId: 4,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '3-4',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 4B: Perhitungan Pasak Kayu Tradisional',
    tujuan: 'Siswa dapat menggunakan operasi perkalian dan pembagian dalam pemasangan pasak kayu kapal.',
    bacalah: 'Alih-alih paku besi yang cepat berkarat oleh air laut, Panrita Lopi menggunakan pasak kayu ulin yang sangat kuat. Untuk menyambung satu lembar papan lambung, dibutuhkan 15 pasak kayu. Pada bagian lambung kiri, terdapat 8 baris papan.',
    amati: 'Amati lubang pasak kayu yang dipahat rapi di sepanjang tepi papan lambung perahu.',
    pikirkan: 'Berapakah total pasak kayu yang harus disiapkan untuk seluruh baris papan lambung?',
    kerjakanTugas: {
      instruksi: 'Hitunglah operasi matematika di bawah ini dengan tepat:',
      pertanyaan: [
        'Jika 1 papan membutuhkan 15 pasak dan ada 8 papan, berapa total pasak kayu yang dibutuhkan? (15 × 8 = ...)',
        'Seorang tukang dapat memasang 6 pasak dalam 1 jam. Berapa jam waktu yang dibutuhkan untuk memasang 120 pasak? (120 ÷ 6 = ...)',
        'Jika setiap kantong pasak berisi 30 buah, berapa kantong pasak yang harus disiapkan untuk 120 pasak?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan bagaimana perkalian dan pembagian mempercepat tukang menyiapkan bahan!',
    refleksiPrompt: 'Bagian perhitungan mana yang paling menantang bagimu?'
  },

  // ==========================================
  // UNIT 5: BAGIAN DAN UNSUR PINISI (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-5a',
    unitId: 5,
    semester: 1,
    domain: 'literasi',
    gradeTier: '3-4',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 5A: Anatomi dan Istilah Maritim Bugis',
    tujuan: 'Siswa dapat menjodohkan bagian-bagian perahu Pinisi dengan fungsinya secara tepat.',
    bacalah: 'Setiap bagian perahu Pinisi memiliki nama lokal dan fungsi khusus. "Kalibise" adalah balok lunas dasar yang menjadi tulang punggung kapal. "Anjong" adalah kayu runcing penghias di bagian haluan. "Posisi" adalah pasak pengikat antar balok. Sementara kemudi Pinisi berjumlah dua di sisi kiri dan kanan yang disebut "Guling Sambilang".',
    amati: 'Amati diagram anatomi perahu Pinisi dan letak masing-masing komponen.',
    pikirkan: 'Mengapa perahu Pinisi menggunakan dua bilah kemudi di samping kapal bukan satu di tengah?',
    kerjakanTugas: {
      instruksi: 'Jodohkan istilah Bugis berikut dengan fungsinya:',
      pertanyaan: [
        'Apa fungsi dari "Kalibise" dalam struktur kapal?',
        'Di manakah letak "Anjong" dan apa maknanya bagi kapal?',
        'Apa nama istilah untuk kemudi samping ganda pada perahu Pinisi?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan pentingnya memahami fungsi setiap bagian kapal demi keselamatan berlayar!',
    refleksiPrompt: 'Istilah maritim lokal mana yang paling kamu ingat maknanya?'
  },
  {
    id: 'lkpd-5b',
    unitId: 5,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '3-4',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 5B: Pengukuran Panjang dan Keliling Dek',
    tujuan: 'Siswa dapat mengukur dan menghitung keliling geladak (dek) kapal perahu Pinisi.',
    bacalah: 'Geladak utama perahu Pinisi berbentuk persegi panjang dengan panjang 24 meter dan lebar 6 meter. Para tukang kayu akan memasang pagar pengaman keliling (railing) dari kayu jati di sekeliling geladak tersebut.',
    amati: 'Amati denah persegi panjang geladak kapal beserta ukuran panjang dan lebarnya.',
    pikirkan: 'Bagaimana rumus mencari keliling persegi panjang geladak tersebut?',
    kerjakanTugas: {
      instruksi: 'Hitunglah keliling dan ukuran bahan berikut:',
      pertanyaan: [
        'Hitung keliling geladak perahu dengan rumus Keliling = 2 × (Panjang + Lebar)!',
        'Jika kayu pagar tersedia dalam potongan 2 meter, berapa batang kayu pagar yang dibutuhkan untuk seluruh keliling?',
        'Konversikan panjang kapal 24 meter ke dalam satuan centimeter! (1 meter = 100 cm)'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang cara menghitung keliling geladak kapal!',
    refleksiPrompt: 'Apakah menghitung keliling kapal membuatmu merasa seperti juru ukur kapal sungguhan?'
  },

  // ==========================================
  // UNIT 6: NILAI DAN KEHIDUPAN TRADISI (SEMESTER 1)
  // ==========================================
  {
    id: 'lkpd-6a',
    unitId: 6,
    semester: 1,
    domain: 'literasi',
    gradeTier: '3-4',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 6A: Gotong Royong Tradisi Annyorong Lopi',
    tujuan: 'Siswa dapat menelaah nilai luhur persatuan dalam tradisi menarik perahu ke laut.',
    bacalah: 'Tradisi Annyorong Lopi adalah ritual sakral peluncuran perahu Pinisi yang telah selesai dibuat menuju ke laut. Karena kapal berbobot puluhan hingga ratusan ton, kapal tidak dapat ditarik sendiri. Ratusan warga desa berkumpul bersama, memegang tambang besar, dan bersorak serentak menarik perahu ke arah ombak.',
    amati: 'Amati foto dokumentasi ratusan warga Tanah Beru yang saling bahu-membahu dalam tradisi Annyorong Lopi.',
    pikirkan: 'Mengapa pekerjaan yang sangat berat menjadi terasa ringan jika dilakukan bersama-sama?',
    kerjakanTugas: {
      instruksi: 'Tuliskan analisis nilaimu berdasarkan tradisi Annyorong Lopi:',
      pertanyaan: [
        'Apa yang dimaksud dengan tradisi "Annyorong Lopi"?',
        'Sebutkan 2 nilai Pancasila yang tercermin dalam tradisi Annyorong Lopi!',
        'Berikan satu contoh kegiatan gotong royong yang pernah kamu ikuti di sekolah!'
      ]
    },
    kesimpulanPrompt: 'Simpulkan mengapa nilai gotong royong harus terus kita jaga sampai dewasa!',
    refleksiPrompt: 'Bagaimana kamu dapat membantu teman sekelasmu yang sedang menghadapi kesulitan?'
  },
  {
    id: 'lkpd-6b',
    unitId: 6,
    semester: 1,
    domain: 'numerasi',
    gradeTier: '3-4',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 6B: Tabel Data Warga Gotong Royong',
    tujuan: 'Siswa dapat menyajikan dan membaca data jumlah peserta gotong royong dalam tabel.',
    bacalah: 'Pada upacara Annyorong Lopi, hadir warga dari 4 kampung: Kampung A sebanyak 45 orang, Kampung B sebanyak 60 orang, Kampung C sebanyak 55 orang, dan Kampung D sebanyak 40 orang.',
    amati: 'Amati data jumlah warga dari masing-masing kampung peserta gotong royong.',
    pikirkan: 'Bagaimana cara menyusun data tersebut ke dalam tabel yang rapi dan mudah dibaca?',
    kerjakanTugas: {
      instruksi: 'Jawablah pertanyaan berdasarkan data di atas:',
      pertanyaan: [
        'Berapa jumlah seluruh warga dari keempat kampung yang ikut bergotong royong?',
        'Kampung manakah yang mengirimkan peserta paling banyak dan kampung manakah yang paling sedikit?',
        'Berapa selisih jumlah warga antara Kampung B dan Kampung D?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan manfaat menyajikan data dalam bentuk tabel terurut!',
    refleksiPrompt: 'Apakah membaca data tabel lebih mudah daripada membaca teks panjang?'
  },

  // ==========================================
  // UNIT 7: PROSES PEMBUATAN PINISI (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-7a',
    unitId: 7,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 7A: Tahapan Kronologis Pembuatan Kapal',
    tujuan: 'Siswa dapat mengurutkan teks prosedur pembuatan perahu Pinisi dari penebangan hingga peluncuran.',
    bacalah: 'Pembuatan perahu Pinisi diawali dengan ritual pemilihan kayu Bitti dan Ulin di hutan. Tahap kedua adalah upacara Ansompo Lopi (pemotongan dan peletakan lunas). Tahap ketiga adalah penyusunan papan lambung perahu yang unik karena kulit dipasang lebih dulu sebelum rangka gading. Tahap keempat adalah pendempulan celah papan menggunakan serabut kulit kayu dan minyak kelapa. Tahap terakhir adalah Annyorong Lopi.',
    amati: 'Amati bagan alur proses kronologis pembuatan perahu tradisional dari tahap 1 hingga tahap 5.',
    pikirkan: 'Mengapa urutan pembuatan perahu Pinisi mendahulukan kulit lambung sebelum gading, berbeda dengan kapal Eropa?',
    kerjakanTugas: {
      instruksi: 'Tuliskan urutan dan penjelasan tahapan pembuatan kapal:',
      pertanyaan: [
        'Sebutkan 5 tahapan utama pembuatan perahu Pinisi secara berurutan!',
        'Bahan alami apa yang digunakan untuk mendempul celah papan perahu agar tidak kemasukan air laut?',
        'Mengapa pemilihan hari baik dan ritual doa selalu menyertai setiap tahapan kerja pembuat perahu?'
      ]
    },
    kesimpulanPrompt: 'Buatlah rangkuman ringkas tentang keunikan konstruksi perahu Pinisi Nusantara!',
    refleksiPrompt: 'Pelajaran apa tentang kesabaran dan ketelitian yang dapat kamu petik dari proses panjang ini?'
  },
  {
    id: 'lkpd-7b',
    unitId: 7,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 7B: Estimasi Waktu dan Kebutuhan Kayu',
    tujuan: 'Siswa dapat menghitung durasi pengerjaan kapal dalam bulan, minggu, dan rasio kebutuhan kayu.',
    bacalah: 'Sebuah perahu Pinisi berukuran sedang membutuhkan waktu pengerjaan selama 9 bulan oleh 8 orang tukang. Rata-rata setiap bulan membutuhkan 12 meter kubik kayu pilihan. Diketahui 1 bulan dihitung sama dengan 4 minggu.',
    amati: 'Amati kalender kerja galangan kapal dan catatan logistik kayu bulanan.',
    pikirkan: 'Bagaimana menghitung total kebutuhan kayu dan total minggu kerja selama proyek berlangsung?',
    kerjakanTugas: {
      instruksi: 'Selesaikan tantangan hitungan rasio dan durasi berikut:',
      pertanyaan: [
        'Berapa minggu total durasi pengerjaan kapal selama 9 bulan tersebut? (9 × 4 = ...)',
        'Berapa meter kubik total kayu yang dihabiskan untuk membangun kapal tersebut? (9 × 12 = ...)',
        'Jika setiap tukang bekerja 6 hari dalam seminggu, berapa hari total seorang tukang bekerja selama 36 minggu?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan pentingnya estimasi matematika dalam perencanaan proyek pembangunan kapal!',
    refleksiPrompt: 'Bagian matematika mana yang paling membantumu berpikir logis?'
  },

  // ==========================================
  // UNIT 8: MATEMATIKA DI BALIK PINISI (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-8a',
    unitId: 8,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'bpnb-sulsel-etnografi',
    title: 'LKPD 8A: Sains dan Hidrodinamika Perahu Layar',
    tujuan: 'Siswa dapat membaca dan menganalisis artikel sains populer tentang prinsip gaya apung dan daya dorong angin.',
    bacalah: 'Meskipun para Panrita Lopi tidak belajar teori fisika modern di perguruan tinggi, mereka telah menguasai prinsip hidrodinamika secara intuitif. Lambung perahu Pinisi yang ramping membelah ombak dengan hambatan air minimal. Hukum Archimedes terbukti pada volume lambung yang menampung udara sehingga perahu kayu seberat ratusan ton tetap terapung dengan stabil.',
    amati: 'Amati diagram aliran air di sekitar lambung perahu dan arah angin mendorong permukaan layar segitiga.',
    pikirkan: 'Bagaimana kearifan lokal leluhur dapat sejalan dengan ilmu pengetahuan dan teknologi modern?',
    kerjakanTugas: {
      instruksi: 'Analisis konsep ilmiah dalam teks di atas:',
      pertanyaan: [
        'Prinsip fisika apa yang membuat perahu kayu berbobot ratusan ton dapat terapung di laut?',
        'Mengapa bentuk lambung kapal dibuat ramping melengkung?',
        'Bagaimana hembusan angin dimanfaatkan oleh layar perahu Pinisi untuk menggerakkan kapal maju?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan hubungan antara kecerdasan leluhur Bulukumba dengan ilmu sains modern!',
    refleksiPrompt: 'Hal menakjubkan apa yang baru kamu sadari tentang perahu Pinisi setelah membaca teks ini?'
  },
  {
    id: 'lkpd-8b',
    unitId: 8,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 8B: Luas Permukaan Layar Segitiga & Volume',
    tujuan: 'Siswa dapat menghitung luas segitiga layar dan estimasi volume ruang palka kapal.',
    bacalah: 'Layar haluan (cocoro) berbentuk segitiga siku-siku dengan panjang alas 10 meter dan tinggi 8 meter. Sementara itu, ruang palka muatan berbentuk balok dengan panjang 12 meter, lebar 4 meter, dan tinggi 3 meter.',
    amati: 'Amati rumus luas segitiga (L = 1/2 × a × t) dan rumus volume balok (V = p × l × t).',
    pikirkan: 'Berapa luas kain layar yang dibutuhkan dan berapa kapasitas meter kubik muatan palka?',
    kerjakanTugas: {
      instruksi: 'Hitunglah luas dan volume bangun berikut dengan langkah lengkap:',
      pertanyaan: [
        'Hitung luas layar haluan: Luas = 1/2 × 10 m × 8 m = ... meter persegi!',
        'Hitung volume ruang palka: Volume = 12 m × 4 m × 3 m = ... meter kubik!',
        'Jika setiap meter kubik palka dapat memuat 500 kg rempah, berapa kilogram total rempah yang dapat dimuat?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang penerapan rumus geometri dalam kapal laut!',
    refleksiPrompt: 'Bagaimana perasaanmu setelah mampu memecahkan soal geometri berkonteks nyata ini?'
  },

  // ==========================================
  // UNIT 9: PINISI DAN KEHIDUPAN MASYARAKAT (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-9a',
    unitId: 9,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'pemkab-bulukumba-pinisi',
    title: 'LKPD 9A: Peran Ekonomi Maritim dan Jalur Perdagangan',
    tujuan: 'Siswa dapat membedakan fakta dan opini mengenai kontribusi industri kapal Pinisi terhadap kesejahteraan rakyat.',
    bacalah: 'Industri pembuatan kapal Pinisi di Bulukumba telah menghidupi ribuan keluarga perajin, pandai besi, hingga penyedia kayu. Kapal-kapal ini menjadi tulang punggung perdagangan antarpulau di Indonesia, mengangkut kebutuhan pokok dari Jawa ke pulau-pulau terluar. Beberapa kapal bahkan dipesan oleh wisatawan mancanegara untuk wisata bahari.',
    amati: 'Amati jalur rute pelayaran perahu layar motor dari pelabuhan di Bulukumba menuju Surabaya, Maluku, dan Papua.',
    pikirkan: 'Mengapa keberadaan industri kapal tradisional ini berdampak besar pada perekonomian masyarakat lokal?',
    kerjakanTugas: {
      instruksi: 'Tentukan fakta dan opini serta dampaknya:',
      pertanyaan: [
        'Tuliskan satu kalimat fakta tentang manfaat ekonomi perahu Pinisi dari teks bacaan!',
        'Profesi apa sajakah selain pembuat kapal yang ikut terbantu oleh adanya industri Pinisi?',
        'Mengapa transportasi laut sangat penting bagi negara kepulauan seperti Indonesia?'
      ]
    },
    kesimpulanPrompt: 'Simpulkan bagaimana perahu Pinisi merajut persatuan dan ekonomi kepulauan Indonesia!',
    refleksiPrompt: 'Bagaimana caramu menghargai jerih payah para pelaut yang mendistribusikan kebutuhan pokok kita?'
  },
  {
    id: 'lkpd-9b',
    unitId: 9,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 9B: Hitung Tonase Muatan dan Nilai Ekonomi',
    tujuan: 'Siswa dapat menghitung tonase muatan, persentase kapasitas muat, dan laba perdagangan hasil bumi.',
    bacalah: 'Sebuah kapal Pinisi memiliki kapasitas muatan maksimal 150 ton. Kapal tersebut memuat 60 ton beras, 45 ton kelapa sawit, dan 30 ton rempah-rempah.',
    amati: 'Amati diagram persentase muatan kapal terhadap daya angkut maksimalnya.',
    pikirkan: 'Berapa persen kapasitas kapal yang sudah terisi dan berapa ton sisa muatan yang masih bisa diisi?',
    kerjakanTugas: {
      instruksi: 'Kerjakan soal persentase dan perbandingan muatan:',
      pertanyaan: [
        'Berapa ton total berat muatan yang sudah masuk ke kapal? (60 + 45 + 30 = ...)',
        'Hitung persentase muatan yang terisi terhadap kapasitas 150 ton! ((Total ÷ 150) × 100% = ...)',
        'Berapa ton sisa muatan yang masih dapat diangkut oleh kapal agar mencapai batas maksimal?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang pentingnya mengontrol kapasitas muatan agar kapal tidak kelebihan beban!',
    refleksiPrompt: 'Apakah menghitung persentase muatan kapal menantang pemikiran logismu?'
  },

  // ==========================================
  // UNIT 10: WARISAN BUDAYA TAKBENDA UNESCO (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-10a',
    unitId: 10,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'unesco-pinisi-2017',
    title: 'LKPD 10A: Pengakuan Dunia UNESCO 2017',
    tujuan: 'Siswa dapat menganalisis teks penetapan resmi UNESCO Decision 12.COM 11.b.13 dan menuliskan argumen kebanggaan nasional.',
    bacalah: 'Pada tanggal 7 Desember 2017, dalam sidang ke-12 Komite Warisan Budaya Takbenda UNESCO di Pulau Jeju, Republik Korea, seni pembuatan perahu Pinisi di Sulawesi Selatan resmi ditetapkan masuk ke dalam Representative List of the Intangible Cultural Heritage of Humanity. Pengakuan ini diberikan karena tradisi Pinisi memuat nilai kearifan lokal, teknologi tanpa cetak biru, gotong royong, dan penghormatan sakral kepada alam semesta.',
    amati: 'Amati sertifikat dan dokumentasi sidang UNESCO yang mengesahkan Pinisi sebagai warisan kemanusiaan dunia.',
    pikirkan: 'Mengapa pengakuan dari badan PBB UNESCO ini sangat membanggakan sekaligus menjadi tanggung jawab besar bagi kita?',
    kerjakanTugas: {
      instruksi: 'Jawablah berdasarkan fakta sumber resmi UNESCO:',
      pertanyaan: [
        'Pada tanggal dan tahun berapakah UNESCO menetapkan seni pembuatan perahu Pinisi sebagai Warisan Budaya Takbenda?',
        'Di pulau dan negara manakah sidang pengesahan tersebut berlangsung?',
        'Sebutkan 3 alasan utama mengapa dunia mengakui tradisi pembuatan perahu Pinisi!'
      ]
    },
    kesimpulanPrompt: 'Tuliskan pesan ajakan bangga dan bertanggung jawab sebagai generasi muda pewaris Pinisi!',
    refleksiPrompt: 'Apa yang akan kamu ceritakan kepada teman dari luar daerah tentang perahu Pinisi Bulukumba?'
  },
  {
    id: 'lkpd-10b',
    unitId: 10,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'unesco-decision-12com',
    title: 'LKPD 10B: Analisis Waktu Sejarah & Rasio Reboisasi Kayu Bitti',
    tujuan: 'Siswa dapat menghitung rentang waktu sejarah dan rasio keberhasilan bibit tanaman kayu Bitti.',
    bacalah: 'Dari penetapan Pinisi oleh Kemdikbud RI tahun 2014 hingga pengakuan UNESCO tahun 2017, ada perjuangan riset bertahun-tahun. Untuk menjaga kelestarian bahan kayu, sebuah komunitas menanam 200 bibit pohon Bitti dengan target keberhasilan tumbuh hidup 85%.',
    amati: 'Amati garis waktu (timeline) penetapan warisan budaya dari tingkat nasional ke tingkat internasional.',
    pikirkan: 'Berapa banyak bibit pohon Bitti yang diperkirakan akan berhasil tumbuh besar hingga dewasa?',
    kerjakanTugas: {
      instruksi: 'Hitunglah soal rentang tahun dan persentase berikut:',
      pertanyaan: [
        'Berapa tahun selisih waktu dari penetapan Kemdikbud (2014) hingga pengakuan UNESCO (2017)?',
        'Hitung berapa bibit pohon yang berhasil tumbuh hidup jika keberhasilannya 85% dari 200 bibit! (85/100 × 200 = ...)',
        'Berapa bibit yang mati atau gagal tumbuh?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang pentingnya matematika dalam mendukung program pelestarian lingkungan!',
    refleksiPrompt: 'Apakah kamu siap ikut menanam pohon untuk masa depan bumi dan budaya kita?'
  },

  // ==========================================
  // UNIT 11: MEMBACA DATA TENTANG PINISI (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-11a',
    unitId: 11,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'pemkab-bulukumba-pinisi',
    title: 'LKPD 11A: Menafsirkan Infografis Galangan Kapal',
    tujuan: 'Siswa dapat membaca dan merangkum informasi dari infografis sentra pembuatan kapal Tanah Beru.',
    bacalah: 'Berdasarkan data Dinas Pariwisata Bulukumba, di sepanjang pesisir Tanah Beru terdapat puluhan galangan kapal rakyat. Rata-rata setiap tahun diproduksi sekitar 25 hingga 35 unit kapal dengan berbagai ukuran. Galangan kapal ini menjadi daya tarik wisata edukasi budaya yang dikunjungi ribuan pelajar dan peneliti.',
    amati: 'Amati diagram batang perkembangan jumlah kunjungan wisatawan ke sentra Pinisi dalam 5 tahun terakhir.',
    pikirkan: 'Informasi apa saja yang dapat kita simpulkan dengan cepat melalui tampilan grafik dibanding teks biasa?',
    kerjakanTugas: {
      instruksi: 'Tuliskan analisis datamu dari teks dan grafik:',
      pertanyaan: [
        'Di kelurahan manakah sentra galangan kapal rakyat terbesar di Bulukumba berada?',
        'Berapa kisaran jumlah perahu Pinisi yang diproduksi setiap tahunnya di Tanah Beru?',
        'Apa manfaat keberadaan galangan kapal Pinisi bagi dunia pendidikan dan penelitian?'
      ]
    },
    kesimpulanPrompt: 'Rangkum pentingnya data yang akurat dalam memantau perkembangan kebudayaan lokal!',
    refleksiPrompt: 'Bagian analisis grafik mana yang paling menarik perhatianmu?'
  },
  {
    id: 'lkpd-11b',
    unitId: 11,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'pemkab-bulukumba-pinisi',
    title: 'LKPD 11B: Mean, Median, dan Diagram Batang Produksi',
    tujuan: 'Siswa dapat menghitung rata-rata (mean) produksi kapal selama 5 tahun berturut-turut.',
    bacalah: 'Catatan produksi perahu Pinisi di Kecamatan Bonto Bahari selama 5 tahun berturut-turut adalah sebagai berikut: Tahun 1: 20 kapal, Tahun 2: 25 kapal, Tahun 3: 30 kapal, Tahun 4: 25 kapal, Tahun 5: 35 kapal.',
    amati: 'Amati barisan data produksi perahu: 20, 25, 30, 25, 35.',
    pikirkan: 'Bagaimana rumus mencari nilai rata-rata (mean) dan nilai tengah (median) dari data tersebut?',
    kerjakanTugas: {
      instruksi: 'Hitunglah mean, median, dan modus data tersebut:',
      pertanyaan: [
        'Jumlahkan total produksi perahu selama 5 tahun tersebut! (20 + 25 + 30 + 25 + 35 = ...)',
        'Hitung nilai rata-rata (mean) per tahun! (Total ÷ 5 = ...)',
        'Tentukan nilai modus (angka yang paling sering muncul) pada data produksi tersebut!'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang arti rata-rata produksi kapal tahunan!',
    refleksiPrompt: 'Apakah materi statistik sederhana ini membantumu memahami data di sekitarmu?'
  },

  // ==========================================
  // UNIT 12: GENERASI PELESTARI PINISI (SEMESTER 2)
  // ==========================================
  {
    id: 'lkpd-12a',
    unitId: 12,
    semester: 2,
    domain: 'literasi',
    gradeTier: '5-6',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 12A: Menulis Ikrar dan Surat Aksi Pelestari',
    tujuan: 'Siswa dapat menulis teks persuasi dan surat komitmen menjaga warisan budaya Pinisi.',
    bacalah: 'Sebagai pelajar Sekolah Dasar di Butta Panrita Lopi, masa depan warisan Pinisi berada di pundak kita. Pelestarian bukan hanya tugas pembuat kapal, melainkan tanggung jawab kita semua: menjaga kebersihan laut dari sampah plastik, mencintai sejarah daerah, dan menceritakan kehebatan Pinisi kepada generasi berikutnya.',
    amati: 'Amati poster kampanye "Aku Generasi Bangga Pinisi: Jaga Laut, Rawat Hutan, Lestarikan Budaya".',
    pikirkan: 'Kalimat ajakan seperti apa yang paling kuat menggerakkan hati teman-teman untuk ikut menjaga laut?',
    kerjakanTugas: {
      instruksi: 'Tuliskan karya tulismu dengan penuh semangat:',
      pertanyaan: [
        'Tuliskan satu paragraf (3-4 kalimat) ajakan persuasif kepada teman sekolah untuk menjaga kebersihan pantai!',
        'Sebutkan 2 ancaman nyata terhadap kelestarian tradisi Pinisi jika hutan kayu bitti habis ditebang!',
        'Tuliskan satu janji pribadimu sebagai generasi penerus Butta Panrita Lopi!'
      ]
    },
    kesimpulanPrompt: 'Rumuskan tekadmu dalam satu semboyan pelestarian budaya maritim!',
    refleksiPrompt: 'Apa momen paling berharga yang kamu rasakan selama belajar di Phinisi Cendekia?'
  },
  {
    id: 'lkpd-12b',
    unitId: 12,
    semester: 2,
    domain: 'numerasi',
    gradeTier: '5-6',
    sourceId: 'modul-ajar-musfira',
    title: 'LKPD 12B: Anggaran Proyek Hijau Pelestari Budaya',
    tujuan: 'Siswa dapat menyusun anggaran biaya sederhana untuk kegiatan penanaman pohon sekolah.',
    bacalah: 'Klub Cendekia Sekolah merencanakan proyek "100 Pohon Bitti untuk Masa Depan". Anggaran yang dibutuhkan: Pembelian 100 bibit pohon seharga Rp15.000 per bibit, pupuk kompos seharga Rp200.000, dan peralatan sekop mini seharga Rp150.000.',
    amati: 'Amati rincian pos pengeluaran dalam tabel anggaran proyek pelestarian lingkungan.',
    pikirkan: 'Berapakah total biaya yang harus dikumpulkan dan berapa iuran per siswa jika ada 50 siswa?',
    kerjakanTugas: {
      instruksi: 'Hitunglah anggaran belanja dan pembagian biaya:',
      pertanyaan: [
        'Berapa biaya pembelian 100 bibit pohon? (100 × Rp15.000 = Rp...)',
        'Hitung total seluruh anggaran proyek! (Bibit + Pupuk Rp200.000 + Sekop Rp150.000 = Rp...)',
        'Jika sekolah memberikan bantuan dana sebesar Rp1.000.000, berapa sisa kekurangan biaya yang perlu dicari?'
      ]
    },
    kesimpulanPrompt: 'Tuliskan kesimpulanmu tentang pentingnya mengelola anggaran secara bijak dan teliti!',
    refleksiPrompt: 'Apakah kamu bangga telah menyelesaikan seluruh perjalanan pembelajaran ini?'
  }
];
