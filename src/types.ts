/**
 * Phinisi Cendekia - Data Types & Models
 * Tagline: "Berlayar dengan Ilmu, Mengenal Budaya, Membangun Masa Depan"
 * Guru: Musfira, S.Pd. (SD Negeri 20 Manyampa)
 * Target: Kelas 4, Kelas 5, Kelas 6 (Tanpa Pembagian Semester)
 */

export type UserRole = 'siswa' | 'guru';

export type Semester = 1 | 2;

export type GradeLevel = 'Kelas 4' | 'Kelas 5' | 'Kelas 6';

export interface StudentProfile {
  id: string;
  name: string;
  grade: GradeLevel;
  code: string; // e.g. "PC-5A-09"
  schoolName: string;
  school?: string;
  avatarShip: string;
  avatar?: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  roleTitle?: string; // "Guru Kelas 5"
  schoolName: string; // "SD Negeri 20 Manyampa"
  activeClass: GradeLevel;
  nip?: string;
}

export interface PortLesson {
  id: number;
  name: string;
  locationTitle: string;
  description: string;
  culturalContext: string;
  requiredPoints: number;
  isUnlockedByDefault?: boolean;
  semester?: 1 | 2;
  literacyActivity: {
    title: string;
    objective: string;
    story: string;
    questions: { question: string; answer: string }[];
  };
  numeracyActivity: {
    title: string;
    concept: string;
    problem: string;
    hint: string;
    solution: string;
  };
  funFact: string;
  gameId: string;
}

export interface TopicCurriculum {
  id: number;
  topicNumber?: number;
  title: string;
  subtitle: string;
  description: string;
  literacyFocus: string;
  numeracyFocus: string;
  cultureFocus: string;
  portId?: number;
  semester?: 1 | 2;
}

export type UnitCurriculum = TopicCurriculum;

export interface LiteracyContent {
  id: string;
  gradeTier: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' | '1-2' | '3-4' | '5-6' | string;
  topicId?: number;
  unitId?: number;
  title: string;
  category: 'baca-pahami' | 'detektif-informasi' | 'ide-pokok' | 'kosakata' | 'menulis' | 'game-literasi' | string;
  readingText: string;
  vocabulary: { word: string; meaning: string }[];
  exerciseQuestion: string;
  exerciseType?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  sourceId?: string;
}

export interface NumeracyContent {
  id: string;
  gradeTier: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' | '1-2' | '3-4' | '5-6' | string;
  topicId?: number;
  unitId?: number;
  title: string;
  topicName?: string;
  topic?: string;
  visualData?: any;
  realLifeContext: string;
  problemStatement: string;
  isPracticeDataNote?: boolean; // Label: "Angka berikut adalah data latihan."
  question: string;
  options: string[];
  correctAnswerIndex: number;
  stepByStepSolution: string;
  sourceId?: string;
}

export interface CulturalTopicArticle {
  id: string;
  topicNumber?: number; // 1 to 12
  category?: string;
  title: string;
  subtitle: string;
  summary?: string;
  content?: string | string[];
  contentParagraphs?: string[];
  keyFacts?: string[];
  vocabularyTerms?: { term: string; meaning: string }[];
  bugisTerms?: { term: string; meaning: string }[];
  quote?: { text: string; author?: string } | string | any;
  significance?: string;
  reflectionPrompt?: string;
  sourceId?: string; // e.g. "unesco-pinisi-2017"
}

export type CulturalArticle = CulturalTopicArticle;

export interface LKPDItem {
  id: string;
  unitId: number;
  gradeTier?: string;
  sourceId?: string;
  title: string;
  tujuan: string;
  bacalah: string;
  amati: string;
  pikirkan: string;
  kerjakanTugas: {
    instruksi: string;
    pertanyaan: string[];
  };
  kesimpulanPrompt: string;
  refleksiPrompt: string;
}

export interface LKPDInteractiveItem {
  id: string;
  topicId: number;
  gradeTier: 'Kelas 4' | 'Kelas 5' | 'Kelas 6';
  domain: 'literasi' | 'numerasi' | 'budaya';
  title: string;
  tujuan: string;
  bacalah: string;
  amati: string;
  pikirkan: string;
  kerjakanTugas: {
    instruksi: string;
    pertanyaan: string[];
  };
  kesimpulanPrompt: string;
  refleksiPrompt: string;
  sourceId?: string;
}

export interface LKPDSubmission {
  lkpdId: string;
  topicId?: number;
  unitId?: number;
  studentId: string;
  answers: { [questionIndex: number | string]: string };
  kesimpulan: string;
  refleksi: string;
  submittedAt: string;
  status: 'tersimpan' | 'terkirim';
}

export interface QuizQuestion {
  id: string;
  topicId?: number;
  unitId?: number;
  gradeTier?: 'Kelas 4' | 'Kelas 5' | 'Kelas 6' | '1-2' | '3-4' | '5-6' | string;
  type: 'pilihan-ganda' | 'benar-salah' | 'isian';
  domain: 'literasi' | 'numerasi' | 'budaya';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation: string;
  sourceId?: string;
}

export interface Badge {
  id: string;
  title: string;
  icon: string;
  description: string;
  criteria: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface SourceRegistryItem {
  sourceId: string;
  sourceTitle: string;
  sourceOrganization: string;
  sourceYear: number | string;
  sourceUrl?: string;
  sourceType: 'Official' | 'Academic' | 'LearningActivity';
  badgeLabel: '✓ SUMBER RESMI' | '📚 SUMBER AKADEMIK' | '💡 AKTIVITAS PEMBELAJARAN';
  description?: string;
}

export type ContentUnlockStatus = 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';

export type UnitStage = 'materi' | 'aktivitas' | 'game' | 'lkpd' | 'asesmen' | 'misi' | 'refleksi';

export interface StudentProgress {
  literacyProgress: number; // 0 - 100
  numeracyProgress: number; // 0 - 100
  cultureProgress: number; // 0 - 100
  totalProgress?: number; // 0 - 100
  unlockedPortIds: number[];
  completedTopicIds?: number[];
  completedUnitIds?: number[];
  semesterProgress?: number;
  completedStages: { [topicId: number]: UnitStage[] };
  gamePoints: { [gameId: string]: number };
  gameStars: { [gameId: string]: number }; // 1 - 3 stars
  unlockedGameIds: string[];
  assessmentScores: { [quizId: string]: number };
  lkpdSubmissions: { [lkpdId: string]: LKPDSubmission };
  badges: Badge[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'jeli';
  mode: 'tanya' | 'pikir' | 'jelajah';
  text: string;
  timestamp: string;
}
