export interface HighlightWord {
  word: string;
  meaning: string;
}

export interface StoryPage {
  pageNumber: number;
  text: string;
  imagePrompt?: string;
  imageUrl?: string;
  highlightWords?: HighlightWord[];
}

export interface MissionChallenges {
  findInfo: string;
  sequence: string[];
  whatItMeans: string;
  mcQuestion: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  reflectionPrompt: string;
}

export interface LiteracyJourney {
  id: string;
  portId: number;
  portName: string;
  storyTitle: string;
  summary: string;
  status: 'completed' | 'active' | 'locked';
  pages: StoryPage[];
  funFact: string;
  sourceId: string;
  missionChallenges: MissionChallenges;
}

export const LITERACY_JOURNEYS: LiteracyJourney[] = [
  {
    id: 'port-1',
    portId: 1,
    portName: 'Pelabuhan 1: Mengenal Bulukumba',
    storyTitle: 'Pagi Hangat di Pesisir Bira',
    summary: 'Menyusuri pasir putih Tanjung Bira dan melihat kesiapan kapal nelayan berlayar.',
    status: 'completed',
    sourceId: 'pemkab-bulukumba-pinisi',
    pages: [
      {
        pageNumber: 1,
        text: 'Mentari pagi perlahan naik di ufuk timur Bulukumba. Angin laut berhembus lembut menggoyangkan dedaunan pohon kelapa di tepian Pantai Bira.',
        imagePrompt: 'Pesisir pantai Tanjung Bira dengan air laut kristal kebiruan dan perahu nelayan',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Pantai Bira', meaning: 'Destinasi pesisir tersohor di Bulukumba berpasir putih sehalus tepung.' },
          { word: 'Ufuk Timur', meaning: 'Garis cakrawala tempat terbitnya matahari di pagi hari.' }
        ]
      },
      {
        pageNumber: 2,
        text: 'Di dermaga kayu, Rahmat memperhatikan para pelaut menyiapkan bekal air tawar dan memeriksa tali temali layar kapal sebelum mengarungi ombak Laut Flores.',
        imagePrompt: 'Dermaga kayu tradisional dengan pelaut anak dan orang tua yang bersiap berlayar',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Dermaga', meaning: 'Tempat merapat atau menambatkan kapal di pelabuhan.' }
        ]
      }
    ],
    funFact: 'Pasir Pantai Bira Bulukumba memiliki butiran yang sangat halus dan putih bersih, mirip tepung gandum!',
    missionChallenges: {
      findInfo: 'Apa saja yang dipersiapkan para pelaut sebelum mengarungi ombak?',
      sequence: [
        'Mentari pagi terbit di ufuk timur',
        'Angin laut berhembus di tepian pantai',
        'Pelaut menyiapkan bekal air tawar',
        'Kapal siap mengarungi Laut Flores'
      ],
      whatItMeans: 'Persiapan bekal air tawar melambangkan pentingnya perencanaan matang sebelum memulai perjalanan.',
      mcQuestion: {
        question: 'Di pantai manakah Rahmat dan teman-temannya menikmati pagi yang hangat?',
        options: ['Pantai Kuta', 'Pantai Bira Bulukumba', 'Pantai Parangtritis', 'Pantai Losari'],
        correctAnswer: 1,
        explanation: 'Tepat sekali! Pantai Tanjung Bira adalah pantai kebanggaan masyarakat Bulukumba berpasir putih sehalus tepung.'
      },
      reflectionPrompt: 'Tuliskan satu hal yang selalu kamu persiapkan dengan baik sebelum berangkat ke sekolah!'
    }
  },
  {
    id: 'port-2',
    portId: 2,
    portName: 'Pelabuhan 2: Cerita Pinisi',
    storyTitle: 'Tujuh Layar Penakluk Samudra',
    summary: 'Menguak makna filosofis di balik 7 helai layar (Sombala) dan 2 tiang agung Phinisi.',
    status: 'completed',
    sourceId: 'unesco-pinisi-2017',
    pages: [
      {
        pageNumber: 1,
        text: 'Perahu Phinisi berdiri megah dengan dua tiang agung kokoh yang menjulang ke angkasa. Tujuh helai layar Sombala berkibar gagah diterpa angin barat.',
        imagePrompt: 'Kapal Phinisi dengan 7 layar terbentang berkilau terkena sinar matahari',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Sombala', meaning: 'Istilah bahasa Bugis-Makassar untuk kain layar kapal.' },
          { word: 'Tiang Agung', meaning: 'Tiang utama perahu yang menopang seluruh bentangan layar besar.' }
        ]
      },
      {
        pageNumber: 2,
        text: 'Kakek Daeng Masse bercerita bahwa angka tujuh mengingatkan kita bahwa bangsa bahari Indonesia mampu mengarungi tujuh samudra besar di bumi dengan gagah berani.',
        imagePrompt: 'Kakek nahkoda bercerita dengan cucunya di atas geladak kapal Phinisi',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Tujuh Samudra', meaning: 'Tujuh lautan besar di dunia yang dilayari pelaut Nusantara.' }
        ]
      }
    ],
    funFact: 'Ekspedisi Phinisi Nusantara berhasil mengarungi Samudra Pasifik sejauh 10.000 mil laut hingga tiba di Vancouver, Kanada pada tahun 1986!',
    missionChallenges: {
      findInfo: 'Berapa jumlah layar utama yang terpasang pada perahu Phinisi?',
      sequence: [
        'Tiang agung dipasang kokoh',
        'Tujuh helai layar Sombala dibentangkan',
        'Angin barat bertiup kencang',
        'Phinisi mengarungi samudra'
      ],
      whatItMeans: 'Tujuh helai layar melambangkan keberanian dan daya jelajah tak kenal menyerah.',
      mcQuestion: {
        question: 'Berapa jumlah helai layar pada perahu Phinisi tradisional?',
        options: ['3 helai', '5 helai', '7 helai', '9 helai'],
        correctAnswer: 2,
        explanation: 'Benar! Perahu Phinisi memiliki 7 helai layar (tiga di depan, dua di tiang agung depan, dua di tiang agung belakang).'
      },
      reflectionPrompt: 'Jika kamu memiliki perahu impian, nilai keberanian apa yang ingin kamu bawa berlayar?'
    }
  },
  {
    id: 'port-3',
    portId: 3,
    portName: 'Pelabuhan 3: Panrita Lopi',
    storyTitle: 'Rahasia di Balik Layar Phinisi',
    summary: 'Kisah ketekunan sang maestro perakit kapal raksasa tanpa selembar pun kertas cetak biru.',
    status: 'active',
    sourceId: 'bpnb-sulsel-etnografi',
    pages: [
      {
        pageNumber: 1,
        text: 'Di galangan kapal pesisir Tanah Beru, dentang palu dan wangi serpihan kayu Bitti semerbak memenuhi udara laut. Pak Daeng Baso, seorang Panrita Lopi tersohor, berdiri mengamati lengkungan lunas perahu dengan pandangan tajam.',
        imagePrompt: 'Panrita Lopi tua bijaksana sedang mengamati konstruksi kapal kayu raksasa di tepi pantai Tanah Beru',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'PANRITA LOPI', meaning: 'Sebutan kehormatan bagi empu, pakar, atau arsitek tradisional pembuat kapal Phinisi di Bulukumba.' },
          { word: 'Tanah Beru', meaning: 'Sentra galangan perahu Phinisi paling terkenal di dunia, terletak di Kecamatan Bonto Bahari, Bulukumba.' }
        ]
      },
      {
        pageNumber: 2,
        text: '“Pak Guru, mengapa Bapak tidak pernah memakai kertas gambar atau cetak biru seperti insinyur di kota?” tanya Rahmat penasaran. Pak Daeng Baso tersenyum hangat sambil menepuk balok kayu Kalibise yang kokoh.',
        imagePrompt: 'Anak SD mewawancarai Panrita Lopi sambil mengamati pasak kayu ulin',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Kalibise', meaning: 'Balok lunas kayu membujur yang menjadi tulang punggung dasar kapal Phinisi.' }
        ]
      },
      {
        pageNumber: 3,
        text: '“Ilmu Phinisi tersimpan di dalam rasa, ketajaman mata batin, dan doa yang diwariskan kakek moyang kita, nak,” jawab beliau. “Setiap balok kayu punya jiwa. Tugas Panrita Lopi adalah menyatukannya dengan kejujuran dan ketekunan yang pantang goyah.”',
        imagePrompt: 'Suasana gotong royong para sawi tukang kayu merakit bilah papan kapal dengan pasak kayu tanpa paku besi',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg'
      }
    ],
    funFact: 'Perahu Phinisi dibuat tanpa satu pun paku besi karatan! Semua bilah papan disatukan menggunakan pasak kayu ulin yang justru semakin kuat dan mengembang saat terkena air laut!',
    missionChallenges: {
      findInfo: 'Mengapa Panrita Lopi tidak menggunakan gambar rancangan di atas kertas?',
      sequence: [
        'Aroma kayu Bitti memenuhi udara di Tanah Beru',
        'Rahmat bertanya tentang cetak biru kepada Pak Daeng Baso',
        'Panrita Lopi menjelaskan bahwa ukuran tersimpan dalam kepekaan rasa dan doa leluhur',
        'Perahu dirakit dengan kejujuran dan ketelitian tanpa paku besi'
      ],
      whatItMeans: 'Kalimat "Setiap balok kayu punya jiwa" bermakna manusia harus menghargai alam dan bekerja dengan sepenuh hati.',
      mcQuestion: {
        question: 'Menurutmu, mengapa pengetahuan membuat Phinisi oleh Panrita Lopi perlu diwariskan kepada generasi muda?',
        options: [
          'Agar kayu di hutan cepat habis ditebang.',
          'Supaya anak-anak tidak perlu lagi pergi ke sekolah.',
          'Karena seni Phinisi adalah mahakarya budaya luhur yang membuktikan kecerdasan bangsa Indonesia.',
          'Hanya untuk dijual ke luar negeri dengan harga mahal.'
        ],
        correctAnswer: 2,
        explanation: 'Hebat! Kamu menemukan jawabannya! Pengetahuan ini adalah bukti kecerdasan kognitif dan martabat bangsa yang harus dijaga kelestariannya.'
      },
      reflectionPrompt: 'Tuliskan satu sikap keteladanan dari Panrita Lopi yang bisa kamu tiru dalam belajar setiap hari!'
    }
  },
  {
    id: 'port-4',
    portId: 4,
    portName: 'Pelabuhan 4: Annyorong Lopi',
    storyTitle: 'Tarian Ratusan Tangan di Pantai',
    summary: 'Tradisi sakral gotong royong mendorong perahu raksasa dari daratan menuju ke lautan lepas.',
    status: 'locked',
    sourceId: 'bpnb-sulsel-etnografi',
    pages: [
      {
        pageNumber: 1,
        text: 'Hari yang dinanti telah tiba. Seluruh warga kampung berkumpul di tepi pantai untuk tradisi Annyorong Lopi, yaitu upacara mendorong perahu yang baru selesai dibuat ke air laut.',
        imagePrompt: 'Ratusan warga bergotong royong menarik dan mendorong kapal Phinisi ke laut lepas',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'Annyorong Lopi', meaning: 'Tradisi gotong royong sakral masyarakat Bugis-Makassar di Bulukumba untuk mendorong perahu ke laut.' }
        ]
      },
      {
        pageNumber: 2,
        text: 'Dipimpin tetua adat dengan lantunan doa kesyukuran, ratusan warga bahu-membahu menarik tambang dan mendorong lunas kayu di atas landasan batang pisang dan balok peluncur.',
        imagePrompt: 'Tetua adat memimpin doa peluncuran kapal dengan dupa dan sesajen berkah',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg'
      }
    ],
    funFact: 'Tradisi Annyorong Lopi melibatkan ratusan warga tanpa bayaran karena didasari oleh semangat gotong royong (Assitangngaran) yang sangat kuat!',
    missionChallenges: {
      findInfo: 'Apakah nama upacara adat untuk meluncurkan perahu Phinisi ke laut?',
      sequence: [
        'Warga berkumpul di pesisir pantai',
        'Tetua adat melantunkan doa keselamatan',
        'Ratusan warga bahu-membahu menarik tambang',
        'Phinisi meluncur mulus menyentuh air laut'
      ],
      whatItMeans: 'Tradisi ini mengajarkan bahwa perahu sebesar apapun tidak bisa berlayar tanpa kebersamaan masyarakat.',
      mcQuestion: {
        question: 'Nilai luhur apakah yang paling menonjol dalam tradisi Annyorong Lopi?',
        options: ['Persaingan antar warga', 'Gotong royong dan kebersamaan', 'Kemewahan harta', 'Keinginan dipuji'],
        correctAnswer: 1,
        explanation: 'Benar sekali! Semangat gotong royong adalah inti dari tradisi Annyorong Lopi.'
      },
      reflectionPrompt: 'Ceritakan satu kegiatan gotong royong yang pernah kamu lakukan bersama teman di sekolah!'
    }
  },
  {
    id: 'port-5',
    portId: 5,
    portName: 'Pelabuhan 5: Pelaut Dunia',
    storyTitle: 'Warisan Agung untuk Dunia',
    summary: 'Pengakuan resmi UNESCO menetapkan perahu Phinisi sebagai Warisan Budaya Takbenda Dunia.',
    status: 'locked',
    sourceId: 'unesco-decision-12com',
    pages: [
      {
        pageNumber: 1,
        text: 'Pada tanggal 7 Desember 2017 di Pulau Jeju, Korea Selatan, sidang UNESCO resmi menetapkan seni pembuatan perahu Pinisi sebagai Warisan Budaya Takbenda Kemanusiaan.',
        imagePrompt: 'Sidang UNESCO dengan lambang warisan budaya takbenda dan bendera Indonesia',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg',
        highlightWords: [
          { word: 'UNESCO', meaning: 'Badan PBB untuk Pendidikan, Keilmuan, dan Kebudayaan.' },
          { word: 'Warisan Takbenda', meaning: 'Karya budaya berupa keahlian, tradisi, dan pengetahuan yang bernilai luhur bagi kemanusiaan.' }
        ]
      },
      {
        pageNumber: 2,
        text: 'Kini, tugas menjaga kelestarian Phinisi dan hutan pohon kayu Bitti berada di pundak generasi muda Bulukumba. Kita bangga menjadi anak Butta Panrita Lopi!',
        imagePrompt: 'Anak-anak sekolah dasar Bulukumba tersenyum bangga memegang miniatur Phinisi',
        imageUrl: '/src/assets/images/hero_phinisi_bulukumba_sailing_1790127196130.jpg'
      }
    ],
    funFact: 'Pinisi adalah salah satu dari sedikit karya maritim tradisional di dunia yang diakui UNESCO karena kearifan ekologisnya dalam memilih kayu!',
    missionChallenges: {
      findInfo: 'Kapan dan di mana UNESCO menetapkan Pinisi sebagai Warisan Budaya Dunia?',
      sequence: [
        'Kajian mendalam diajukan ke sidang UNESCO',
        'Sidang ke-12 digelar di Pulau Jeju Korea Selatan',
        'Keputusan Decision 12.COM 11.b.13 disahkan',
        'Phinisi resmi diakui sebagai warisan budaya kemanusiaan'
      ],
      whatItMeans: 'Pengakuan dunia adalah amanah bagi kita untuk menjaga hutan kayu Bitti dan memuliakan profesi Panrita Lopi.',
      mcQuestion: {
        question: 'Pada tanggal berapakah UNESCO menetapkan perahu Pinisi sebagai Warisan Budaya Dunia?',
        options: ['17 Agustus 1945', '7 Desember 2017', '2 Mei 2020', '10 November 2015'],
        correctAnswer: 1,
        explanation: 'Tepat sekali! Pada 7 Desember 2017 di Pulau Jeju, Pinisi resmi menjadi Warisan Budaya Dunia.'
      },
      reflectionPrompt: 'Sebagai generasi muda, apa janjimu untuk menjaga budaya maritim Bulukumba?'
    }
  }
];
