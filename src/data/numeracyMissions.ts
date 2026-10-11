export interface ShipMission {
  id: string;
  missionNumber: number;
  title: string;
  topicDomain: string;
  storyContext: string;
  problem: string;
  visualType?: 'coins' | 'bar' | 'shape' | 'fraction' | 'ruler';
  visualData?: { label: string; value: number; unit?: string }[];
  options: string[];
  correctAnswer: number;
  stepByStepSolution: string;
  hint: string;
}

export const SHIP_MISSIONS: ShipMission[] = [
  {
    id: 'misi-1',
    missionNumber: 1,
    title: 'Misi 1 — Hitung Perjalanan',
    topicDomain: 'pengukuran',
    storyContext: 'Kapal Phinisi bersiap mengarungi rute dari Pelabuhan Tanjung Bira menuju Kepulauan Liukang Loe dengan kecepatan tetap.',
    problem: 'Sebuah perahu Phinisi menempuh jarak sejauh 18 kilometer dalam waktu 2 jam pelayaran. Berapa kilometer jarak yang ditempuh perahu tersebut setiap 1 jam?',
    visualType: 'bar',
    visualData: [
      { label: 'Jam Ke-1', value: 9, unit: 'km' },
      { label: 'Jam Ke-2', value: 9, unit: 'km' }
    ],
    options: ['6 kilometer', '8 kilometer', '9 kilometer', '12 kilometer'],
    correctAnswer: 2,
    stepByStepSolution: 'Langkah hitung: Jarak total dibagi waktu tempuh = 18 km : 2 jam = 9 km/jam.',
    hint: 'Gunakan operasi pembagian: 18 dibagi 2.'
  },
  {
    id: 'misi-2',
    missionNumber: 2,
    title: 'Misi 2 — Ukur Kapal',
    topicDomain: 'geometri',
    storyContext: 'Panrita Lopi sedang mengukur rasio balok lunas (Kalibise) dan tiang agung perahu agar seimbang saat membelah ombak besar.',
    problem: 'Layar segitiga haluan perahu Phinisi memiliki alas sepanjang 6 meter dan tinggi 8 meter. Berapakah luas kain layar segitiga tersebut? (Rumus: ½ × alas × tinggi)',
    visualType: 'shape',
    visualData: [
      { label: 'Alas Layar', value: 6, unit: 'meter' },
      { label: 'Tinggi Layar', value: 8, unit: 'meter' }
    ],
    options: ['14 meter persegi', '24 meter persegi', '48 meter persegi', '32 meter persegi'],
    correctAnswer: 1,
    stepByStepSolution: 'Langkah hitung: Luas Segitiga = ½ × 6 meter × 8 meter = 3 × 8 = 24 meter persegi.',
    hint: 'Kalikan alas dengan tinggi (6 × 8 = 48), lalu bagi hasilnya dengan 2.'
  },
  {
    id: 'misi-3',
    missionNumber: 3,
    title: 'Misi 3 — Pecahkan Muatan',
    topicDomain: 'pecahan',
    storyContext: 'Sebuah perahu layar mengangkut peti rempah-rempah kelapa dan cengkeh dari perkebunan Bulukumba.',
    problem: 'Dari total 7 helai layar Phinisi, nahkoda membentangkan 4 helai layar karena hembusan angin sedang sedang. Manakah bentuk pecahan yang menyatakan jumlah layar yang terbentang?',
    visualType: 'fraction',
    visualData: [
      { label: 'Layar Terbentang', value: 4, unit: 'helai' },
      { label: 'Layar Tergulung', value: 3, unit: 'helai' }
    ],
    options: ['3/7 bagian', '4/7 bagian', '7/4 bagian', '4/10 bagian'],
    correctAnswer: 1,
    stepByStepSolution: 'Langkah hitung: Bagian yang terbentang (4) dibanding jumlah keseluruhan layar (7) adalah 4/7 bagian.',
    hint: 'Pembilang adalah layar yang terbentang (4), penyebut adalah total seluruh layar (7).'
  },
  {
    id: 'misi-4',
    missionNumber: 4,
    title: 'Misi 4 — Baca Data',
    topicDomain: 'data',
    storyContext: 'Petugas pelabuhan mendata jumlah kapal Phinisi wisata yang berlabuh di Tanjung Bira selama 4 pekan berturut-turut.',
    problem: 'Pekan 1: 12 kapal, Pekan 2: 15 kapal, Pekan 3: 18 kapal, Pekan 4: 15 kapal. Berapakah rata-rata (mean) jumlah kapal yang berlabuh per pekan?',
    visualType: 'bar',
    visualData: [
      { label: 'Pekan 1', value: 12, unit: 'kapal' },
      { label: 'Pekan 2', value: 15, unit: 'kapal' },
      { label: 'Pekan 3', value: 18, unit: 'kapal' },
      { label: 'Pekan 4', value: 15, unit: 'kapal' }
    ],
    options: ['13 kapal', '14 kapal', '15 kapal', '16 kapal'],
    correctAnswer: 2,
    stepByStepSolution: 'Langkah hitung: Jumlahkan seluruh data (12 + 15 + 18 + 15 = 60 kapal). Lalu bagi dengan 4 pekan = 60 : 4 = 15 kapal per pekan.',
    hint: 'Jumlahkan data keempat pekan, kemudian bagi dengan angka 4.'
  },
  {
    id: 'misi-5',
    missionNumber: 5,
    title: 'Misi 5 — Tantangan Kapten',
    topicDomain: 'masalah',
    storyContext: 'Panrita Lopi membutuhkan pasak kayu ulin untuk menyatukan 15 baris papan lambung kapal.',
    problem: 'Jika setiap baris papan membutuhkan 16 pasak kayu ulin, berapa total pasak kayu yang harus disiapkan oleh para sawi pembuat kapal?',
    visualType: 'coins',
    visualData: [
      { label: 'Baris Papan', value: 15, unit: 'baris' },
      { label: 'Pasak per Baris', value: 16, unit: 'pasak' }
    ],
    options: ['210 pasak', '230 pasak', '240 pasak', '260 pasak'],
    correctAnswer: 2,
    stepByStepSolution: 'Langkah hitung: Gunakan perkalian bersusun: 15 × 16 = 240 pasak kayu ulin.',
    hint: 'Hitung (15 × 10) + (15 × 6) = 150 + 90 = 240.'
  }
];
