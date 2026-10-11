import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import {
  Sailboat,
  Volume2,
  VolumeX,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileCheck,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export interface CultureTopic {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  fullStory: string[];
  bugisTerms: { term: string; meaning: string }[];
  funFact: string;
  quote?: string;
  source: {
    name: string;
    organization: string;
    year: string;
    sourceId: string;
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

export const CULTURE_TOPICS: CultureTopic[] = [
  {
    id: 'apa-itu',
    number: 1,
    title: 'Apa itu Pinisi?',
    subtitle: 'Kapal Layar Tradisional dari Sulawesi Selatan',
    summary: 'Pinisi merupakan bagian dari tradisi pembuatan dan penggunaan kapal layar di Sulawesi Selatan.',
    fullStory: [
      'Pinisi merupakan bagian dari tradisi pembuatan dan penggunaan kapal layar di Sulawesi Selatan. Pengetahuan dan keterampilan yang berkaitan dengan tradisi ini diwariskan dari generasi ke generasi.',
      'Ciri khas kapal Pinisi terlihat pada susunan dua tiang agung utama serta tujuh helai layar yang membentang gagah. Nama "Pinisi" merujuk pada sistem layar dan tali-temali sekunar tradisional.',
      'Perahu kayu ini digunakan sejak dahulu untuk mengarungi samudra luas, mengangkut barang rempah dagang, serta menghubungkan pulau-pulau di seluruh kepulauan Indonesia.'
    ],
    bugisTerms: [
      { term: 'Lopi', meaning: 'Perahu atau kapal layar kayu tradisional.' },
      { term: 'Sombala', meaning: 'Layar kain untuk menangkap tiupan angin laut.' },
      { term: 'Pallopi', meaning: 'Pelaut tangguh yang mengarungi samudra.' }
    ],
    funFact: 'Pinisi adalah salah satu kapal layar kayu tradisional terbesar di dunia yang masih terus dibuat dengan tangan sampai sekarang!',
    quote: '“Sekali layar terkembang, pantang surut ke pantai.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Apakah yang dimaksud dengan perahu Pinisi?',
      options: [
        'Bagian tradisi pembuatan dan penggunaan kapal layar di Sulawesi Selatan',
        'Kapal mesin cepat berbahan besi dari luar negeri',
        'Perahu karet kecil untuk danau buatan',
        'Mainan plastik yang dijual di toko'
      ],
      correctAnswer: 0,
      explanation: 'Benar! Sesuai catatan resmi UNESCO, Pinisi adalah bagian dari tradisi pembuatan dan penggunaan kapal layar di Sulawesi Selatan.'
    }
  },
  {
    id: 'sulsel',
    number: 2,
    title: 'Pinisi dan Sulawesi Selatan',
    subtitle: 'Jejak Peradaban Bahari Bugis-Makassar',
    summary: 'Masyarakat bahari Sulawesi Selatan dikenal memiliki tradisi melaut yang kuat.',
    fullStory: [
      'Provinsi Sulawesi Selatan memiliki garis pantai yang sangat panjang dan perairan kaya. Sejak berabad-abad lampau, masyarakat suku Bugis, Makassar, dan Konjo telah menguasai ilmu perbintangan dan arah angin.',
      'Pelayaran menggunakan perahu layar kayu menjadi sarana utama para saudagar dan pelaut Sulawesi Selatan untuk berdagang ke Jawa, Maluku, Sumatra, hingga mancanegara seperti Singapura dan pesisir utara Australia.',
      'Budaya bahari ini melahirkan kearifan hidup yang menjunjung tinggi kehormatan, keteguhan hati, dan persaudaraan antarmanusia.'
    ],
    bugisTerms: [
      { term: 'Pabbiring', meaning: 'Masyarakat yang tinggal di kawasan pesisir pantai.' },
      { term: 'Passompe', meaning: 'Perantau bahari yang berlayar mencari rezeki dan ilmu.' }
    ],
    funFact: 'Pelaut Sulawesi Selatan zaman dahulu mampu berlayar ribuan mil hanya dengan mengamati posisi rasi bintang di langit malam!',
    quote: '“Lautan luas bukanlah pemisah pulau, melainkan jalan yang menyatukan kita.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Bagaimanakah peran pelaut Sulawesi Selatan pada masa lampau?',
      options: [
        'Mengarungi samudra untuk berdagang dan menghubungkan pulau-pulau',
        'Hanya berdiam diri di rumah tanpa mengenal laut',
        'Menutup pelabuhan dari pedagang lain',
        'Hanya menangkap ikan di kolam air tawar'
      ],
      correctAnswer: 0,
      explanation: 'Tepat sekali! Pelaut Sulawesi Selatan mengarungi samudra untuk berniaga dan menjalin persahabatan antarpulau.'
    }
  },
  {
    id: 'bulukumba',
    number: 3,
    title: 'Pinisi dan Bulukumba',
    subtitle: 'Butta Panrita Lopi, Bumi Para Maestro',
    summary: 'Kabupaten Bulukumba merupakan tempat kelahiran dan pusat keahlian perahu Pinisi.',
    fullStory: [
      'Kabupaten Bulukumba terletak di ujung selatan semenanjung Sulawesi Selatan. Daerah ini memiliki julukan mulia "Butta Panrita Lopi", yang berarti Tanah Para Ahli Pembuat Perahu.',
      'Kecamatan Bonto Bahari di Bulukumba memiliki desa-desa pesisir yang legendaris, seperti Tana Beru, Bira, dan Batu Licin, di mana suara ketukan palu dan aroma serpihan kayu jati terdengar sepanjang hari.',
      'Di kabupaten inilah tradisi rancang bangun kapal layar kayu dilahirkan dan tetap dihidupkan oleh para keluarga pembuat kapal turun-temurun.'
    ],
    bugisTerms: [
      { term: 'Butta', meaning: 'Tanah atau negeri kelahiran.' },
      { term: 'Panrita Lopi', meaning: 'Ahli atau empu perancang perahu tradisional.' }
    ],
    funFact: 'Bulukumba adalah satu-satunya daerah yang memiliki pantai dengan pasir putih sehalus tepung di Tanjung Bira!',
    quote: '“Di Butta Panrita Lopi, kayu gelondongan dirakit menjadi perahu penakluk samudra.”',
    source: {
      name: 'Profil Kabupaten Bulukumba & Warisan Budaya Pinisi',
      organization: 'Pemerintah Kabupaten Bulukumba',
      year: '2021',
      sourceId: 'pemkab-bulukumba-pinisi'
    },
    quiz: {
      question: 'Apa arti julukan Kabupaten Bulukumba "Butta Panrita Lopi"?',
      options: [
        'Bumi Para Ahli Pembuat Perahu',
        'Tanah Pegunungan Dingin',
        'Kota Perdagangan Modern',
        'Hutan Lindung Bambu'
      ],
      correctAnswer: 0,
      explanation: 'Benar! Butta Panrita Lopi berarti Tanah Para Ahli atau Maestro Pembuat Perahu.'
    }
  },
  {
    id: 'tana-beru',
    number: 4,
    title: 'Tana Beru dan Pembuatan Kapal',
    subtitle: 'Galangan Kapal Tradisional di Tepi Pantai',
    summary: 'Desa Tana Beru adalah pusat galangan perahu terbuka di tepi pesisir Bulukumba.',
    fullStory: [
      'Desa Tana Beru di Kecamatan Bonto Bahari, Bulukumba, dikenal di seluruh dunia sebagai galangan kapal terbuka tradisional paling aktif.',
      'Di sepanjang bibir pantai Tana Beru, kamu dapat melihat perahu-perahu kayu berukuran raksasa sedang dibangun di atas tumpuan kayu tebal di tepi laut.',
      'Siswa dan wisatawan dari berbagai negara datang ke Tana Beru untuk menyaksikan langsung keajaiban para perajin merakit perahu tanpa menggunakan mesin-mesin pabrik modern.'
    ],
    bugisTerms: [
      { term: 'Tana Beru', meaning: 'Nama desa pesisir sentra galangan kapal di Bulukumba.' },
      { term: 'Bira', meaning: 'Kawasan pesisir pelaut tangguh di ujung semenanjung Bulukumba.' }
    ],
    funFact: 'Di tepi pantai Tana Beru, kamu bisa melihat hingga 20 kapal raksasa sedang dibuat bersamaan!',
    quote: '“Pesisir Tana Beru adalah laboratorium hidup ilmu maritim Nusantara.”',
    source: {
      name: 'Inventarisasi Warisan Budaya Takbenda Indonesia',
      organization: 'Kementerian Kebudayaan RI',
      year: '2020',
      sourceId: 'kemdikbud-warisan-budaya'
    },
    quiz: {
      question: 'Di desa manakah pusat galangan kapal terbuka tradisional di Bulukumba berada?',
      options: [
        'Desa Tana Beru',
        'Desa Sukamaju',
        'Kota Jakarta',
        'Desa Melati'
      ],
      correctAnswer: 0,
      explanation: 'Tepat! Desa Tana Beru adalah sentra pembuatan perahu Pinisi yang terkenal di dunia.'
    }
  },
  {
    id: 'panrita-lopi',
    number: 5,
    title: 'Panrita Lopi',
    subtitle: 'Sosok Maestro Perancang Kapal Tradisional',
    summary: 'Panrita Lopi memimpin pembuatan kapal dengan ilmu, pengalaman, dan kepekaan rasa.',
    fullStory: [
      'Panrita Lopi adalah sosok kepala pembuat kapal atau arsitek tradisional. Kata "Panrita" berarti orang yang bijaksana dan berilmu tinggi, sedangkan "Lopi" berarti perahu.',
      'Kehebatan Panrita Lopi adalah mereka tidak pernah menggunakan gambar sketsa kertas atau komputer saat merancang kapal. Semua perhitungan ukuran tersimpan di ingatan dan perasaan yang terlatih puluhan tahun.',
      'Panrita Lopi juga bertindak sebagai pembimbing moral yang mengajarkan kejujuran, ketelitian, dan doa keselamatan kepada seluruh pekerjanya.'
    ],
    bugisTerms: [
      { term: 'Panrita', meaning: 'Pakar, cendekiawan, atau guru yang berilmu tinggi.' },
      { term: 'Pangngissengang', meaning: 'Pengetahuan batiniah dan keterampilan yang mendalam.' }
    ],
    funFact: 'Panrita Lopi dapat mengetahui keseimbangan lunas kapal hanya dengan mengetuk kayu memakai buku jari tangan!',
    quote: '“Ilmu sejati tidak hanya berada di atas kertas, tetapi terpatri kuat di dalam dada.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Siapakah yang disebut sebagai Panrita Lopi?',
      options: [
        'Maestro atau kepala perancang perahu tradisional yang berilmu tinggi',
        'Penumpang yang membeli tiket kapal',
        'Pedagang ikan di pasar pelabuhan',
        'Petugas kebersihan pantai'
      ],
      correctAnswer: 0,
      explanation: 'Benar! Panrita Lopi adalah arsitek tradisional yang memimpin pembuatan perahu.'
    }
  },
  {
    id: 'sawi',
    number: 6,
    title: 'Sawi (Tukang Kayu Terampil)',
    subtitle: 'Pilar Kerja Keras Pembuatan Kapal',
    summary: 'Sawi adalah para tukang kayu terampil yang bekerja sama mewujudkan kapal Pinisi.',
    fullStory: [
      'Dalam proses pembuatan kapal Pinisi, Panrita Lopi dibantu oleh sekelompok tukang kayu terampil yang disebut "Sawi".',
      'Para Sawi memiliki keahlian khusus, seperti memotong balok kayu bitti, menyerut papan lambung agar rata sempurna, mengebor lubang pasak, dan memasang pasak kayu ulin.',
      'Hubungan antara Panrita Lopi dan Sawi sangat akrab layaknya sebuah keluarga besar. Mereka saling menghormati dan bekerja sama dengan disiplin tinggi.'
    ],
    bugisTerms: [
      { term: 'Sawi', meaning: 'Tukang kayu terampil pembantu utama Panrita Lopi.' },
      { term: 'Assitangngaran', meaning: 'Musyawarah untuk mufakat dalam pembagian tugas.' }
    ],
    funFact: 'Banyak Sawi yang belajar bertahun-tahun hingga akhirnya dipercaya menjadi Panrita Lopi generasi baru!',
    quote: '“Setiap ayunan beliung para Sawi adalah sumbangsih berharga bagi kejayaan kapal.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Apakah tugas utama para Sawi dalam pembuatan perahu Pinisi?',
      options: [
        'Membantu memotong, mengetam papan, dan memasang pasak kayu bersama Panrita Lopi',
        'Menjual tiket wisata ke turis asing',
        'Membuat jalan raya beraspal',
        'Mengemudikan pesawat terbang'
      ],
      correctAnswer: 0,
      explanation: 'Hebat! Sawi adalah perajin kayu terampil yang mengerjakan pemotongan dan pemasangan badan kapal.'
    }
  },
  {
    id: 'proses-pembuatan',
    number: 7,
    title: 'Proses Pembuatan Kapal',
    subtitle: 'Tahapan Teliti dari Lunas hingga Lambung',
    summary: 'Pembuatan Pinisi diawali dari lunas perahu dan disatukan memakai pasak kayu.',
    fullStory: [
      'Pembuatan perahu Pinisi memiliki keunikan tersendiri: lambung papan luar dibangun terlebih dahulu, baru kemudian kerangka iga kapal dipasang di dalamnya.',
      'Tahap pertama adalah peletakan balok lunas utama (Kalibise) yang menghadap ke laut. Peletakan lunas ini dilakukan dengan doa agar perahu diberi keselamatan dan rezeki yang berkah.',
      'Papan-papan kayu disambung menggunakan pasak kayu ulin tanpa paku besi. Pasak kayu ini justru akan mengembang dan semakin kedap air saat terkena air laut.'
    ],
    bugisTerms: [
      { term: 'Kalibise', meaning: 'Balok lunas memanjang yang menjadi fondasi dasar kapal.' },
      { term: 'Pasak Ulin', meaning: 'Paku dari kayu ulin (besi) yang kuat dan tidak berkarat.' },
      { term: 'Pakal', meaning: 'Serat kulit pohon atau kapas untuk merapatkan celah papan kayu.' }
    ],
    funFact: 'Pembuatan perahu Pinisi berukuran besar dapat memakan waktu 6 hingga 18 bulan!',
    quote: '“Fondasi lunas yang lurus dan kuat akan menjaga kapal dari amukan badai.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Apakah bahan penyambung papan lambung kapal Pinisi agar tidak berkarat?',
      options: [
        'Pasak dari kayu ulin (kayu besi)',
        'Paku besi biasa yang mudah berkarat',
        'Lem kertas sekolah',
        'Karet gelang'
      ],
      correctAnswer: 0,
      explanation: 'Tepat! Pinisi disatukan dengan pasak kayu ulin yang mengembang kedap air saat terkena air laut.'
    }
  },
  {
    id: 'layar-bagian',
    number: 8,
    title: 'Layar dan Bagian Kapal',
    subtitle: 'Dua Tiang Agung dan Tujuh Helai Sombala',
    summary: 'Konstruksi layar sekunar dengan kemudi ganda di kiri dan kanan buritan.',
    fullStory: [
      'Ciri khas utama kapal Pinisi adalah keberadaan dua tiang layar agung serta tujuh helai layar Sombala.',
      'Tiga helai layar segitiga (Cocoro) dipasang di haluan depan, dua layar utama berada di tiang depan dan tiang belakang, serta dua layar puncak di bagian atas.',
      'Untuk mengarahkan haluan kapal, Pinisi menggunakan sepasang kemudi ganda (Guling Sambilang) yang dipasang di sisi kiri dan kanan buritan belakang, bukan di bawah lunas seperti kapal biasa.'
    ],
    bugisTerms: [
      { term: 'Cocoro', meaning: 'Layar segitiga yang dipasang di bagian haluan depan perahu.' },
      { term: 'Guling Sambilang', meaning: 'Dua bilah kemudi kembar di sisi kiri dan kanan buritan.' },
      { term: 'Anjong', meaning: 'Ujung runcing di haluan depan pemecah ombak laut.' }
    ],
    funFact: 'Kemudi ganda di samping kapal membuat Pinisi sangat lincah menghindari karang di perairan dangkal!',
    quote: '“Tujuh helai layar Sombala menangkap angin persatuan Nusantara.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Berapa jumlah helai layar Sombala pada kapal Pinisi tradisional?',
      options: [
        '7 helai layar',
        '2 helai layar',
        '10 helai layar',
        '20 helai layar'
      ],
      correctAnswer: 0,
      explanation: 'Benar! Kapal Pinisi memiliki ciri khas 7 helai layar yang membentang di 2 tiang agung.'
    }
  },
  {
    id: 'pengetahuan',
    number: 9,
    title: 'Pengetahuan yang Diwariskan',
    subtitle: 'Tradisi Lisan dan Praktik Langsung',
    summary: 'Keahlian membuat perahu diwariskan dari orang tua ke anak secara turun-temurun.',
    fullStory: [
      'Pengetahuan seni pembuatan perahu Pinisi tidak diajarkan melalui bangku sekolah formal pada masa lampau, melainkan melalui pendampingan langsung sejak masa kanak-kanak.',
      'Anak-anak pembuat kapal sejak kecil bermain di dekat galangan kapal, membantu tugas-tugas ringan, dan mendengarkan nasihat Panrita Lopi.',
      'Melalui pengamatan dan praktik bertahun-tahun, mereka menyerap ilmu geometri alami, teknik memilih kayu, dan kearifan menjaga etika pelaut.'
    ],
    bugisTerms: [
      { term: 'Pappaseng', meaning: 'Pesan bijak atau amanah leluhur yang wajib dijaga.' },
      { term: 'Paguru', meaning: 'Proses belajar mengasah ilmu dan budi pekerti.' }
    ],
    funFact: 'Para penerus Panrita Lopi diajarkan menghafal nama puluhan jenis kayu dan serat pohon hutan hanya dari bau dan getahnya!',
    quote: '“Warisan yang paling abadi bukanlah harta benda, melainkan ilmu dan keteladanan.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Bagaimanakah pengetahuan membuat perahu Pinisi diwariskan?',
      options: [
        'Diwariskan secara lisan, praktik langsung, dan keteladanan antargenerasi',
        'Dipesan lewat aplikasi belanja online',
        'Dibeli dari toko peralatan sekolah',
        'Diciptakan secara instan tanpa proses belajar'
      ],
      correctAnswer: 0,
      explanation: 'Tepat! Keterampilan ini diwariskan melalui praktik nyata dan pendampingan antargenerasi.'
    }
  },
  {
    id: 'unesco',
    number: 10,
    title: 'Pinisi sebagai Warisan Budaya Takbenda UNESCO',
    subtitle: 'Pengakuan Dunia Internasional Tahun 2017',
    summary: 'UNESCO menetapkan seni pembuatan Pinisi sebagai Warisan Budaya Takbenda Dunia.',
    fullStory: [
      'Pada tanggal 7 Desember 2017 di Pulau Jeju, Republik Korea, sidang ke-12 UNESCO resmi menetapkan seni pembuatan kapal di Sulawesi Selatan ke dalam daftar bergengsi.',
      'Judul resmi penetapannya adalah "Pinisi, art of boatbuilding in South Sulawesi" di bawah kategori Representative List of the Intangible Cultural Heritage of Humanity.',
      'Pengakuan ini menjadi kebanggaan besar bagi masyarakat Bulukumba dan seluruh rakyat Indonesia, sekaligus menjadi amanah untuk terus melestarikannya.'
    ],
    bugisTerms: [
      { term: 'UNESCO', meaning: 'Badan Perserikatan Bangsa-Bangsa untuk Pendidikan, Sains, dan Kebudayaan.' },
      { term: 'Warisan Takbenda', meaning: 'Pengetahuan, keterampilan luhur, dan tradisi hidup komunitas dunia.' }
    ],
    funFact: 'Gambar perahu Pinisi diabadikan dengan hormat pada uang kertas resmi Rupiah Indonesia pecahan Rp100.000!',
    quote: '“Pengakuan UNESCO adalah pengingat bahwa kebudayaan kita bernilai agung bagi kemanusiaan.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Pada tahun berapakah UNESCO menetapkan Pinisi sebagai Warisan Budaya Takbenda Dunia?',
      options: [
        'Tahun 2017',
        'Tahun 1945',
        'Tahun 2000',
        'Tahun 2024'
      ],
      correctAnswer: 0,
      explanation: 'Benar sekali! Sidang UNESCO menetapkan Pinisi pada tanggal 7 Desember 2017 di Pulau Jeju.'
    }
  },
  {
    id: 'kerjasama',
    number: 11,
    title: 'Nilai Kerja Sama dalam Tradisi Pembuatan Kapal',
    subtitle: 'Gotong Royong Annyorong Lopi',
    summary: 'Karya besar perahu lahir dari semangat tolong-menolong dan persatuan warga.',
    fullStory: [
      'Nilai kerja sama paling nyata terlihat saat upacara "Annyorong Lopi", yaitu prosesi meluncurkan kapal baru yang telah selesai dari pesisir pantai ke laut lepas.',
      'Kapal berbobot puluhan hingga ratusan ton tidak didorong menggunakan mesin, melainkan ditarik bersama-sama oleh ratusan warga dari berbagai desa dengan tambang besar.',
      'Sambil menarik tali tambang, warga bersorak menyanyikan lagu penyemangat. Peristiwa ini menunjukkan bahwa kesulitan apa pun dapat diatasi jika kita bersatu padu.'
    ],
    bugisTerms: [
      { term: 'Annyorong Lopi', meaning: 'Upacara gotong royong mendorong dan menarik kapal ke air laut.' },
      { term: 'Siri’ na Pacce', meaning: 'Falsafah harga diri yang disertai kepedulian dan empati kepada sesama.' }
    ],
    funFact: 'Untuk melicinkan jalur gesekan lunas di atas pasir, warga menggunakan batang pohon pisang yang dipotong-potong!',
    quote: '“Berat sama dipikul, ringan sama dijinjing. Kapal megah berlayar berkat persatuan hati.”',
    source: {
      name: 'Pinisi, art of boatbuilding in South Sulawesi',
      organization: 'UNESCO Intangible Cultural Heritage',
      year: '2017',
      sourceId: 'unesco-pinisi-2017'
    },
    quiz: {
      question: 'Apakah nilai utama yang terkandung dalam tradisi Annyorong Lopi?',
      options: [
        'Gotong royong, kerja sama erat, dan persatuan warga',
        'Persaingan tidak sehat antartetangga',
        'Bekerja sendiri tanpa memedulikan orang lain',
        'Membuang sampah ke laut'
      ],
      correctAnswer: 0,
      explanation: 'Tepat sekali! Annyorong Lopi menanamkan nilai gotong royong dan tolong-menolong.'
    }
  },
  {
    id: 'generasi-muda',
    number: 12,
    title: 'Menjaga dan Mengenalkan Budaya kepada Generasi Muda',
    subtitle: 'Peran Kita sebagai Generasi Cendekia',
    summary: 'Masa depan Pinisi berada di tangan anak-anak bangsa yang bangga pada budayanya.',
    fullStory: [
      'Melestarikan Pinisi bukan hanya tugas orang dewasa, melainkan tugas kita bersama, para siswa generasi penerus bangsa.',
      'Kita dapat menjaga budaya ini dengan cara rajin belajar, membaca buku sejarah lokal, mengenal istilah maritim Bugis-Makassar, serta ikut menjaga kebersihan pantai dan menanam bibit pohon kayu bitti.',
      'Dengan memahami nilai ketekunan dan kerja keras pembuat kapal, siswa sekolah dasar dapat menjadi generasi cendekia yang mandiri, berkarakter, dan berdaya saing global.'
    ],
    bugisTerms: [
      { term: 'Pohon Bitti', meaning: 'Pohon kayu khas Sulawesi (Vitex cofassus) yang perlu terus direboisasi.' },
      { term: 'Cendekia', meaning: 'Pribadi yang cerdas, berbudi pekerti luhur, dan berwawasan luas.' }
    ],
    funFact: 'Siswa sekolah di Bulukumba kini diajarkan membuat miniatur perahu Pinisi dari serpihan kayu ramah lingkungan!',
    quote: '“Cintailah kebudayaan bangsamu, karena dari sanalah jati dirimu terbentuk.”',
    source: {
      name: 'Profil Kabupaten Bulukumba & Warisan Budaya Pinisi',
      organization: 'Pemerintah Kabupaten Bulukumba',
      year: '2021',
      sourceId: 'pemkab-bulukumba-pinisi'
    },
    quiz: {
      question: 'Bagaimanakah cara siswa sekolah dasar ikut menjaga kelestarian budaya perahu Pinisi?',
      options: [
        'Mempelajari materi budaya, menjaga kebersihan lingkungan pantai, dan bangga pada tradisi bahari',
        'Merusak galangan kapal dan membuang sampah sembarangan',
        'Melupakan bahasa daerah dan sejarah nenek moyang',
        'Menolak belajar membaca dan berhitung'
      ],
      correctAnswer: 0,
      explanation: 'Luar biasa! Siswa menjaga budaya dengan giat belajar, mencintai lingkungan bahari, dan menghormati sejarah bangsa.'
    }
  }
];

export const BudayaDetailView: React.FC = () => {
  const { currentView, navigateTo, goBack, openSourceViewer, addGamePoints } = useApp();

  const topicId = (currentView.subId as string) || 'apa-itu';
  const topicIndex = CULTURE_TOPICS.findIndex((t) => t.id === topicId);
  const currentTopic: CultureTopic = topicIndex >= 0 ? CULTURE_TOPICS[topicIndex] : CULTURE_TOPICS[0];

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [selectedTerm, setSelectedTerm] = useState<{ term: string; meaning: string } | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizChecked, setIsQuizChecked] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleToggleVoice = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = currentTopic.fullStory.join(' ');
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'id-ID';
      utterance.rate = 0.85;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleCheckQuiz = () => {
    if (selectedQuizOption === null) return;
    setIsQuizChecked(true);

    if (selectedQuizOption === currentTopic.quiz.correctAnswer) {
      setIsCompleted(true);
      addGamePoints(`budaya-${currentTopic.id}`, 30);
    }
  };

  const handleNextTopic = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (topicIndex < CULTURE_TOPICS.length - 1) {
      const nextTopic = CULTURE_TOPICS[topicIndex + 1];
      navigateTo('budaya-detail', nextTopic.id);
      setSelectedQuizOption(null);
      setIsQuizChecked(false);
      setIsCompleted(false);
      setSelectedTerm(null);
    } else {
      navigateTo('budaya');
    }
  };

  const handlePrevTopic = () => {
    if (isSpeaking && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (topicIndex > 0) {
      const prevTopic = CULTURE_TOPICS[topicIndex - 1];
      navigateTo('budaya-detail', prevTopic.id);
      setSelectedQuizOption(null);
      setIsQuizChecked(false);
      setIsCompleted(false);
      setSelectedTerm(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28 animate-fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <NavigationHeader
        title={`Mengenal Pinisi: Topik ${currentTopic.number}`}
        subtitle={currentTopic.title}
        badge="📖 MENGENAL PINISI"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={goBack}
        extraActions={
          <button
            onClick={() => openSourceViewer(currentTopic.source.sourceId)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Rujukan UNESCO</span>
          </button>
        }
      />

      {/* 2. MAIN CULTURE TOPIC VIEW (FULL-PAGE) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-sky-100 space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase shadow-2xs">
                  Topik {currentTopic.number} dari {CULTURE_TOPICS.length}
                </span>
                <span className="text-xs font-bold text-sky-800">
                  {currentTopic.subtitle}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
                {currentTopic.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleVoice}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-black text-xs sm:text-sm transition-all shadow-md cursor-pointer ${
                  isSpeaking
                    ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Hentikan Suara</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>🔊 Dengarkan Penjelasan</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Full Story Paragraphs */}
          <div className="space-y-4">
            {currentTopic.fullStory.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-slate-800 leading-relaxed font-reading font-medium bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* 📌 KOMPONEN SUMBER RESMI TERVERIFIKASI */}
          <div className="bg-emerald-50/90 rounded-2xl p-4 sm:p-5 border-2 border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900 uppercase tracking-wide">
                <span>📌 SUMBER FAKTUAL RESMI</span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-emerald-950">
                {currentTopic.source.name}
              </h4>
              <p className="text-xs font-bold text-emerald-800">
                {currentTopic.source.organization} ({currentTopic.source.year})
              </p>
            </div>
            <button
              onClick={() => openSourceViewer(currentTopic.source.sourceId)}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-105 shrink-0"
            >
              <span>Lihat Sumber</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bugis Glossary Terms */}
          {currentTopic.bugisTerms && currentTopic.bugisTerms.length > 0 && (
            <div className="bg-sky-50 rounded-2xl p-5 border border-sky-200 space-y-3">
              <span className="text-xs font-black text-sky-950 uppercase tracking-wide block">
                🔍 Kosakata Budaya Bahari:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentTopic.bugisTerms.map((termItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTerm(termItem)}
                    className="px-3.5 py-1.5 rounded-xl bg-sky-200/80 hover:bg-sky-300 text-sky-950 font-black text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    💡 {termItem.term}
                  </button>
                ))}
              </div>

              {selectedTerm && (
                <div className="p-3.5 rounded-xl bg-white border border-sky-300 text-xs sm:text-sm text-sky-950 font-bold animate-fade-in flex items-center justify-between">
                  <span><strong>{selectedTerm.term}:</strong> {selectedTerm.meaning}</span>
                  <button onClick={() => setSelectedTerm(null)} className="text-xs text-slate-500 hover:text-slate-900 ml-2 font-black cursor-pointer">✕</button>
                </div>
              )}
            </div>
          )}

          {/* Quote Card */}
          {currentTopic.quote && (
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 text-center italic font-reading font-bold text-sm sm:text-base">
              {currentTopic.quote}
            </div>
          )}

          {/* Fun Fact Card */}
          <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-300 text-yellow-950 text-xs sm:text-sm font-semibold flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-black text-amber-900 mb-0.5">Tahukah Kamu?</strong>
              {currentTopic.funFact}
            </div>
          </div>

          {/* Quick Comprehension Quiz */}
          <div className="bg-sky-50/70 rounded-2xl p-6 sm:p-7 border-2 border-sky-200 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-sky-900 tracking-wide block">
                UJI PEMAHAMAN BUDAYA:
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 font-display">
                {currentTopic.quiz.question}
              </h3>
            </div>

            <div className="space-y-2.5">
              {currentTopic.quiz.options.map((opt, idx) => {
                const isChosen = selectedQuizOption === idx;
                const isCorrect = idx === currentTopic.quiz.correctAnswer;

                let optClass = 'bg-white border-slate-200 hover:border-sky-400 hover:bg-sky-50/50';
                if (isQuizChecked) {
                  if (isCorrect) {
                    optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-400';
                  } else if (isChosen && !isCorrect) {
                    optClass = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                  } else {
                    optClass = 'bg-white border-slate-200 opacity-60';
                  }
                } else if (isChosen) {
                  optClass = 'bg-amber-100 border-amber-500 text-amber-950 font-black ring-2 ring-amber-300';
                }

                return (
                  <button
                    key={idx}
                    disabled={isQuizChecked}
                    onClick={() => setSelectedQuizOption(idx)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between text-xs sm:text-sm font-semibold cursor-pointer ${optClass}`}
                  >
                    <span>{opt}</span>
                    {isQuizChecked && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              {!isQuizChecked ? (
                <button
                  onClick={handleCheckQuiz}
                  disabled={selectedQuizOption === null}
                  className={`px-6 py-2.5 rounded-full font-black text-xs sm:text-sm transition-all ${
                    selectedQuizOption === null
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-[#0B2A4A] hover:bg-[#064B78] text-white cursor-pointer shadow-md'
                  }`}
                >
                  Periksa Pemahaman
                </button>
              ) : (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  {currentTopic.quiz.explanation}
                </div>
              )}
            </div>
          </div>

          {/* Success Banner */}
          {isCompleted && (
            <div className="p-5 rounded-2xl bg-amber-100 border-2 border-amber-400 space-y-3 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-amber-950 font-display">
                    Hebat! Kamu Memahami Topik Budaya Ini!
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-amber-800">
                    Kamu mendapatkan +30 Poin Budaya Phinisi di Paspor Belajarmu!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleNextTopic}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <span>TOPIK BUDAYA BERIKUTNYA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('budaya')}
                  className="px-4 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-all cursor-pointer"
                >
                  Kembali ke Katalog Budaya
                </button>
              </div>
            </div>
          )}

          {/* Bottom Sequential Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-600">
            <button
              onClick={handlePrevTopic}
              disabled={topicIndex === 0}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl ${
                topicIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-100 text-slate-800 cursor-pointer'
              }`}
            >
              <span>← Topik Sebelumnya</span>
            </button>

            <span>
              Topik {topicIndex + 1} dari {CULTURE_TOPICS.length}
            </span>

            <button
              onClick={handleNextTopic}
              disabled={topicIndex === CULTURE_TOPICS.length - 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl ${
                topicIndex === CULTURE_TOPICS.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-slate-100 text-slate-800 cursor-pointer'
              }`}
            >
              <span>Topik Selanjutnya →</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
