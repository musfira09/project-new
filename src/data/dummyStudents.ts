import { GradeLevel } from '../types.ts';

export interface StudentRecord {
  id: string;
  name: string;
  grade: GradeLevel;
  code: string;
  schoolName: string;
  literacyProgress: number; // 0-100%
  numeracyProgress: number; // 0-100%
  cultureProgress: number; // 0-100%
  semesterProgress: number; // 0-100%
  assessmentAverage: number; // 0-100
  lkpdCompletedCount: number; // e.g. 6 out of 8
  gamesCompletedCount: number; // e.g. 7 out of 8
  badgesCount: number;
  needsReinforcement: boolean;
  reinforcementNote?: string;
}

export const DUMMY_STUDENT_ROSTER: StudentRecord[] = [
  // KELAS 4
  {
    id: 'std-k4-01',
    name: 'Fajar Maulana',
    grade: 'Kelas 4',
    code: 'PC-4A-01',
    schoolName: 'SDN 1 Bonto Bahari',
    literacyProgress: 94,
    numeracyProgress: 91,
    cultureProgress: 96,
    semesterProgress: 93,
    assessmentAverage: 95,
    lkpdCompletedCount: 6,
    gamesCompletedCount: 8,
    badgesCount: 6,
    needsReinforcement: false
  },
  {
    id: 'std-k4-02',
    name: 'Nabila Zahra',
    grade: 'Kelas 4',
    code: 'PC-4A-02',
    schoolName: 'SDN 1 Bonto Bahari',
    literacyProgress: 78,
    numeracyProgress: 74,
    cultureProgress: 85,
    semesterProgress: 78,
    assessmentAverage: 80,
    lkpdCompletedCount: 5,
    gamesCompletedCount: 5,
    badgesCount: 4,
    needsReinforcement: false
  },
  {
    id: 'std-k4-03',
    name: 'Reza Pratama',
    grade: 'Kelas 4',
    code: 'PC-4A-03',
    schoolName: 'SDN 2 Tanjung Bira',
    literacyProgress: 55,
    numeracyProgress: 48,
    cultureProgress: 68,
    semesterProgress: 55,
    assessmentAverage: 58,
    lkpdCompletedCount: 2,
    gamesCompletedCount: 3,
    badgesCount: 1,
    needsReinforcement: true,
    reinforcementNote: 'Kesulitan pada operasi hitung perkalian bersusun dan keliling bangun datar.'
  },
  {
    id: 'std-k4-04',
    name: 'Andi Nurhaliza',
    grade: 'Kelas 4',
    code: 'PC-4A-04',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 88,
    numeracyProgress: 85,
    cultureProgress: 90,
    semesterProgress: 87,
    assessmentAverage: 89,
    lkpdCompletedCount: 6,
    gamesCompletedCount: 7,
    badgesCount: 5,
    needsReinforcement: false
  },

  // KELAS 5
  {
    id: 'std-k5-01',
    name: 'Sultan Daeng Malewa',
    grade: 'Kelas 5',
    code: 'PC-5A-01',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 89,
    numeracyProgress: 85,
    cultureProgress: 94,
    semesterProgress: 89,
    assessmentAverage: 92,
    lkpdCompletedCount: 6,
    gamesCompletedCount: 7,
    badgesCount: 5,
    needsReinforcement: false
  },
  {
    id: 'std-k5-02',
    name: 'Dewi Lestari',
    grade: 'Kelas 5',
    code: 'PC-5A-02',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 82,
    numeracyProgress: 79,
    cultureProgress: 88,
    semesterProgress: 83,
    assessmentAverage: 85,
    lkpdCompletedCount: 5,
    gamesCompletedCount: 6,
    badgesCount: 4,
    needsReinforcement: false
  },
  {
    id: 'std-k5-03',
    name: 'Muh. Haikal',
    grade: 'Kelas 5',
    code: 'PC-5A-03',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 64,
    numeracyProgress: 58,
    cultureProgress: 76,
    semesterProgress: 65,
    assessmentAverage: 66,
    lkpdCompletedCount: 3,
    gamesCompletedCount: 4,
    badgesCount: 2,
    needsReinforcement: true,
    reinforcementNote: 'Perlu pendampingan membaca skala maket perahu dan perbandingan luas.'
  },
  {
    id: 'std-k5-04',
    name: 'Fatimah Az-Zahra',
    grade: 'Kelas 5',
    code: 'PC-5A-04',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 95,
    numeracyProgress: 92,
    cultureProgress: 97,
    semesterProgress: 94,
    assessmentAverage: 96,
    lkpdCompletedCount: 7,
    gamesCompletedCount: 8,
    badgesCount: 6,
    needsReinforcement: false
  },

  // KELAS 6
  {
    id: 'std-k6-01',
    name: 'Arya Panrita',
    grade: 'Kelas 6',
    code: 'PC-6A-01',
    schoolName: 'SDN 1 Bonto Bahari',
    literacyProgress: 98,
    numeracyProgress: 95,
    cultureProgress: 100,
    semesterProgress: 97,
    assessmentAverage: 98,
    lkpdCompletedCount: 7,
    gamesCompletedCount: 8,
    badgesCount: 7,
    needsReinforcement: false
  },
  {
    id: 'std-k6-02',
    name: 'Nurul Fadhilah',
    grade: 'Kelas 6',
    code: 'PC-6A-02',
    schoolName: 'SDN 2 Tanjung Bira',
    literacyProgress: 90,
    numeracyProgress: 88,
    cultureProgress: 93,
    semesterProgress: 90,
    assessmentAverage: 91,
    lkpdCompletedCount: 6,
    gamesCompletedCount: 7,
    badgesCount: 6,
    needsReinforcement: false
  },
  {
    id: 'std-k6-03',
    name: 'Akbar Saputra',
    grade: 'Kelas 6',
    code: 'PC-6A-03',
    schoolName: 'SDN 174 Tanah Beru',
    literacyProgress: 66,
    numeracyProgress: 60,
    cultureProgress: 75,
    semesterProgress: 66,
    assessmentAverage: 68,
    lkpdCompletedCount: 4,
    gamesCompletedCount: 5,
    badgesCount: 3,
    needsReinforcement: true,
    reinforcementNote: 'Memerlukan latihan membedakan fakta vs opini pada teks analitis UNESCO.'
  },
  {
    id: 'std-k6-04',
    name: 'Siti Marwah',
    grade: 'Kelas 6',
    code: 'PC-6A-04',
    schoolName: 'SD Negeri 20 Manyampa',
    literacyProgress: 91,
    numeracyProgress: 89,
    cultureProgress: 95,
    semesterProgress: 92,
    assessmentAverage: 93,
    lkpdCompletedCount: 6,
    gamesCompletedCount: 7,
    badgesCount: 5,
    needsReinforcement: false
  }
];
