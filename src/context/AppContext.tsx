import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserRole,
  GradeLevel,
  Semester,
  StudentProfile,
  TeacherProfile,
  StudentProgress,
  LKPDSubmission,
  Badge,
  ContentUnlockStatus,
  UnitStage
} from '../types.ts';
import { OFFICIAL_BADGES } from '../data/curriculumData.ts';

export interface NavigationTarget {
  page: string;
  subId?: string | number;
  meta?: any;
}

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentView: NavigationTarget;
  navigateTo: (page: string, subId?: string | number, meta?: any) => void;
  goBack: () => void;
  goToHome: () => void;
  currentGrade: GradeLevel;
  setCurrentGrade: (grade: GradeLevel) => void;
  currentSemester: Semester;
  setCurrentSemester: (sem: Semester) => void;
  studentProfile: StudentProfile;
  setStudentProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  teacherProfile: TeacherProfile;
  selectedPortId: number;
  setSelectedPortId: (id: number) => void;
  selectedUnitId: number;
  setSelectedUnitId: (id: number) => void;
  studentProgress: StudentProgress;
  addGamePoints: (gameId: string, points: number) => void;
  setGameStars: (gameId: string, stars: number) => void;
  unlockGame: (gameId: string) => void;
  recordQuizScore: (quizId: string, score: number) => void;
  saveLKPD: (submission: LKPDSubmission) => void;
  unlockPort: (portId: number) => void;
  unlockBadge: (badgeId: string) => void;
  completeUnitStage: (unitId: number, stage: UnitStage) => void;
  getStageStatus: (unitId: number, stage: UnitStage) => ContentUnlockStatus;
  getStageLockReason: (unitId: number, stage: UnitStage) => string;
  isUnitUnlocked: (unitId: number) => boolean;
  resetProgress: () => void;
  isUserModalOpen: boolean;
  setIsUserModalOpen: (open: boolean) => void;
  activeGameId: string | null;
  setActiveGameId: (id: string | null) => void;
  selectedSourceId: string | null;
  setSelectedSourceId: (id: string | null) => void;
  isSourceModalOpen: boolean;
  setIsSourceModalOpen: (open: boolean) => void;
  viewSource: (sourceId: string) => void;
  openSourceViewer: (sourceId: string) => void;
  completeGame: (gameId: string, stars: number) => void;
}

const defaultStudentProfile: StudentProfile = {
  id: 'std-current',
  name: 'Andi Fajar',
  grade: 'Kelas 4',
  code: 'PC-4B-09',
  schoolName: 'SDN 1 Bonto Bahari, Bulukumba',
  avatarShip: 'phinisi-berlayar'
};

const defaultTeacherProfile: TeacherProfile = {
  id: 'tch-01',
  name: 'Musfira, S.Pd.',
  roleTitle: 'Guru Kelas 5',
  schoolName: 'SD Negeri 20 Manyampa',
  activeClass: 'Kelas 5'
};

const initialProgress: StudentProgress = {
  literacyProgress: 72,
  numeracyProgress: 68,
  cultureProgress: 85,
  totalProgress: 75,
  semesterProgress: 75,
  unlockedPortIds: [1, 2, 3, 4, 5],
  completedTopicIds: [1, 2, 3],
  completedUnitIds: [1, 2, 3],
  completedStages: {
    1: ['misi', 'materi', 'aktivitas', 'lkpd', 'game', 'asesmen', 'refleksi'],
    2: ['misi', 'materi', 'aktivitas', 'lkpd', 'game', 'asesmen', 'refleksi'],
    3: ['misi', 'materi', 'aktivitas', 'lkpd', 'game', 'asesmen', 'refleksi'],
    4: ['misi', 'materi', 'aktivitas', 'lkpd'],
    5: ['misi', 'materi']
  },
  gamePoints: {
    'game-1': 150,
    'game-2': 120,
    'game-3': 180,
    'game-4': 110,
    'game-5': 90,
    'game-6': 130,
    'game-7': 140,
    'game-8': 160,
    'game-11': 140,
    'game-12': 150,
    'game-21': 200,
    'game-22': 160
  },
  gameStars: {
    'game-1': 3,
    'game-2': 3,
    'game-3': 2,
    'game-4': 2,
    'game-5': 3,
    'game-6': 2,
    'game-7': 3,
    'game-8': 3,
    'game-11': 3,
    'game-12': 2,
    'game-21': 3,
    'game-22': 3
  },
  unlockedGameIds: [
    'game-1', 'game-2', 'game-3', 'game-4', 'game-5',
    'game-6', 'game-7', 'game-8', 'game-9', 'game-10',
    'game-11', 'game-12', 'game-13', 'game-14', 'game-15',
    'game-21', 'game-22', 'game-23', 'game-24', 'game-25'
  ],
  assessmentScores: {
    'q-101': 100,
    'q-102': 100,
    'q-103': 100,
    'q-201': 100,
    'q-202': 100,
    'q-203': 100,
    'q-301': 100
  },
  lkpdSubmissions: {},
  badges: OFFICIAL_BADGES
};

const STAGE_ORDER: UnitStage[] = ['misi', 'materi', 'aktivitas', 'lkpd', 'game', 'asesmen', 'refleksi'];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem('pc_role');
    return (saved as UserRole) || 'siswa';
  });

  const [activeTab, setActiveTabState] = useState<string>(() => {
    const saved = localStorage.getItem('pc_activeTab');
    return (saved && saved !== 'landing') ? saved : 'beranda';
  });

  const [currentView, setCurrentView] = useState<NavigationTarget>(() => {
    const saved = localStorage.getItem('pc_currentView');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.page) return parsed;
      } catch {
        // fallback
      }
    }
    const savedTab = localStorage.getItem('pc_activeTab');
    return { page: (savedTab && savedTab !== 'landing') ? savedTab : 'beranda' };
  });

  const [navHistory, setNavHistory] = useState<NavigationTarget[]>([]);

  useEffect(() => {
    localStorage.setItem('pc_currentView', JSON.stringify(currentView));
    localStorage.setItem('pc_activeTab', currentView.page);
  }, [currentView]);

  const [currentGrade, setCurrentGradeState] = useState<GradeLevel>(() => {
    const saved = localStorage.getItem('pc_grade');
    return (saved as GradeLevel) || 'Kelas 4';
  });

  const [currentSemester, setCurrentSemesterState] = useState<Semester>(() => {
    const saved = localStorage.getItem('pc_semester');
    return saved ? (parseInt(saved) as Semester) : 1;
  });

  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('pc_studentProfile');
    return saved ? JSON.parse(saved) : defaultStudentProfile;
  });

  const [teacherProfile] = useState<TeacherProfile>(defaultTeacherProfile);
  const [selectedPortId, setSelectedPortId] = useState<number>(1);
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  // Source modal viewer
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);

  const [studentProgress, setStudentProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem('pc_progress');
    if (!saved) return initialProgress;
    try {
      const parsed = JSON.parse(saved);
      // Ensure merged with newer fields
      return {
        ...initialProgress,
        ...parsed,
        completedStages: {
          ...initialProgress.completedStages,
          ...(parsed.completedStages || {})
        },
        gameStars: {
          ...initialProgress.gameStars,
          ...(parsed.gameStars || {})
        },
        unlockedGameIds: Array.from(new Set([...initialProgress.unlockedGameIds, ...(parsed.unlockedGameIds || [])]))
      };
    } catch {
      return initialProgress;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('pc_role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('pc_activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('pc_grade', currentGrade);
  }, [currentGrade]);

  useEffect(() => {
    localStorage.setItem('pc_semester', currentSemester.toString());
  }, [currentSemester]);

  useEffect(() => {
    localStorage.setItem('pc_studentProfile', JSON.stringify(studentProfile));
  }, [studentProfile]);

  useEffect(() => {
    localStorage.setItem('pc_progress', JSON.stringify(studentProgress));
  }, [studentProgress]);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole === 'guru') {
      setActiveTabState('guru');
    } else {
      setActiveTabState('beranda');
    }
  };

  const navigateTo = (page: string, subId?: string | number, meta?: any) => {
    setNavHistory((prev) => [...prev, currentView]);
    const nextTarget: NavigationTarget = { page, subId, meta };
    setCurrentView(nextTarget);
    setActiveTabState(page);
    if (subId && typeof subId === 'number') {
      setSelectedPortId(subId);
      setSelectedUnitId(subId);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goBack = () => {
    if (navHistory.length > 0) {
      const prev = navHistory[navHistory.length - 1];
      setNavHistory((h) => h.slice(0, -1));
      setCurrentView(prev);
      setActiveTabState(prev.page);
    } else {
      setCurrentView({ page: 'beranda' });
      setActiveTabState('beranda');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToHome = () => {
    setNavHistory([]);
    setCurrentView({ page: 'beranda' });
    setActiveTabState('beranda');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const setActiveTab = (tab: string) => {
    navigateTo(tab);
  };

  const setCurrentGrade = (grade: GradeLevel) => {
    setCurrentGradeState(grade);
    setStudentProfile((prev) => ({
      ...prev,
      grade,
      code: `PC-${grade.replace('Kelas ', '')}B-09`
    }));
  };

  const setCurrentSemester = (sem: Semester) => {
    setCurrentSemesterState(sem);
  };

  const addGamePoints = (gameId: string, points: number) => {
    setStudentProgress((prev) => {
      const current = prev.gamePoints[gameId] || 0;
      const updatedPoints = {
        ...prev.gamePoints,
        [gameId]: current + points
      };
      const newNumeracy = Math.min(100, prev.numeracyProgress + 2);
      return {
        ...prev,
        gamePoints: updatedPoints,
        numeracyProgress: newNumeracy
      };
    });
  };

  const setGameStars = (gameId: string, stars: number) => {
    setStudentProgress((prev) => {
      const current = prev.gameStars[gameId] || 0;
      return {
        ...prev,
        gameStars: {
          ...prev.gameStars,
          [gameId]: Math.max(current, stars)
        }
      };
    });
  };

  const completeGame = (gameId: string, stars: number) => {
    setGameStars(gameId, stars);
    addGamePoints(gameId, stars * 50);
  };

  const unlockGame = (gameId: string) => {
    setStudentProgress((prev) => {
      if (prev.unlockedGameIds.includes(gameId)) return prev;
      return {
        ...prev,
        unlockedGameIds: [...prev.unlockedGameIds, gameId]
      };
    });
  };

  const recordQuizScore = (quizId: string, score: number) => {
    setStudentProgress((prev) => {
      const updatedScores = {
        ...prev.assessmentScores,
        [quizId]: score
      };
      const newLit = Math.min(100, prev.literacyProgress + 3);
      const newNum = Math.min(100, prev.numeracyProgress + 3);
      const newSem = Math.round((newLit + newNum + prev.cultureProgress) / 3);
      return {
        ...prev,
        assessmentScores: updatedScores,
        literacyProgress: newLit,
        numeracyProgress: newNum,
        semesterProgress: newSem
      };
    });
  };

  const saveLKPD = (submission: LKPDSubmission) => {
    setStudentProgress((prev) => {
      const updatedLKPD = {
        ...prev.lkpdSubmissions,
        [submission.lkpdId]: submission
      };
      const newCulture = Math.min(100, prev.cultureProgress + 4);
      const newLit = Math.min(100, prev.literacyProgress + 3);
      return {
        ...prev,
        lkpdSubmissions: updatedLKPD,
        cultureProgress: newCulture,
        literacyProgress: newLit
      };
    });
  };

  const unlockPort = (portId: number) => {
    setStudentProgress((prev) => {
      if (prev.unlockedPortIds.includes(portId)) return prev;
      return {
        ...prev,
        unlockedPortIds: [...prev.unlockedPortIds, portId],
        semesterProgress: Math.min(100, (prev.semesterProgress ?? 0) + 5)
      };
    });
  };

  const unlockBadge = (badgeId: string) => {
    setStudentProgress((prev) => {
      const updatedBadges = prev.badges.map((b) =>
        b.id === badgeId ? { ...b, unlocked: true, unlockedAt: 'Baru Diraih!' } : b
      );
      return {
        ...prev,
        badges: updatedBadges
      };
    });
  };

  const isUnitUnlocked = (unitId: number): boolean => {
    if (unitId === 1) return true;
    const completed = studentProgress.completedUnitIds ?? [];
    if (completed.includes(unitId)) return true;
    return completed.includes(unitId - 1);
  };

  const completeUnitStage = (unitId: number, stage: UnitStage) => {
    setStudentProgress((prev) => {
      const currentUnitStages = prev.completedStages[unitId] || [];
      if (currentUnitStages.includes(stage)) return prev;

      const newUnitStages = [...currentUnitStages, stage];
      const updatedCompletedStages = {
        ...prev.completedStages,
        [unitId]: newUnitStages
      };

      // Check if all 7 stages are completed for this unit
      const isAllStagesDone = STAGE_ORDER.every((s) => newUnitStages.includes(s));
      let newCompletedUnits = [...(prev.completedUnitIds ?? [])];
      let newUnlockedPorts = [...prev.unlockedPortIds];

      if (isAllStagesDone && !newCompletedUnits.includes(unitId)) {
        newCompletedUnits.push(unitId);
        // Automatically unlock next unit port
        if (!newUnlockedPorts.includes(unitId + 1) && unitId < 12) {
          newUnlockedPorts.push(unitId + 1);
        }
      }

      // Automatically unlock games corresponding to this unit
      const newlyUnlockedGames = [...prev.unlockedGameIds];
      const unitGameIds = [
        `game-${unitId}`,
        `game-${unitId + 10}`,
        `game-${unitId + 20}`
      ];
      unitGameIds.forEach((gid) => {
        if (!newlyUnlockedGames.includes(gid)) {
          newlyUnlockedGames.push(gid);
        }
      });

      return {
        ...prev,
        completedStages: updatedCompletedStages,
        completedUnitIds: newCompletedUnits,
        unlockedPortIds: newUnlockedPorts,
        unlockedGameIds: newlyUnlockedGames,
        cultureProgress: Math.min(100, prev.cultureProgress + 2),
        semesterProgress: Math.min(100, Math.round((newCompletedUnits.length / 12) * 100))
      };
    });
  };

  const getStageStatus = (unitId: number, stage: UnitStage): ContentUnlockStatus => {
    // Check if unit itself is unlocked
    if (!isUnitUnlocked(unitId)) return 'LOCKED';

    const unitStages = studentProgress.completedStages[unitId] || [];
    if (unitStages.includes(stage)) {
      return 'COMPLETED';
    }

    const stageIndex = STAGE_ORDER.indexOf(stage);
    if (stageIndex === 0) {
      // First stage ('misi') is always AVAILABLE if unit is unlocked
      return 'AVAILABLE';
    }

    // Previous stage must be completed
    const prevStage = STAGE_ORDER[stageIndex - 1];
    if (unitStages.includes(prevStage)) {
      return 'AVAILABLE';
    }

    return 'LOCKED';
  };

  const getStageLockReason = (unitId: number, stage: UnitStage): string => {
    if (!isUnitUnlocked(unitId)) {
      return `🔒 Selesaikan Unit ${unitId - 1} terlebih dahulu untuk membuka unit ini.`;
    }

    const stageNames: Record<UnitStage, string> = {
      misi: 'Misi Pembuka',
      materi: 'Materi Pembelajaran',
      aktivitas: 'Aktivitas Konseptual',
      lkpd: 'Lembar Kerja Peserta Didik (LKPD)',
      game: 'Permainan Edukatif',
      asesmen: 'Asesmen Pemahaman',
      refleksi: 'Refleksi Diri'
    };

    const stageIndex = STAGE_ORDER.indexOf(stage);
    if (stageIndex > 0) {
      const prevStage = STAGE_ORDER[stageIndex - 1];
      return `🔒 Selesaikan ${stageNames[prevStage]} terlebih dahulu untuk membuka ${stageNames[stage]}.`;
    }

    return '🔒 Selesaikan tahap sebelumnya terlebih dahulu.';
  };

  const viewSource = (sourceId: string) => {
    setSelectedSourceId(sourceId);
    setIsSourceModalOpen(true);
  };

  const resetProgress = () => {
    setStudentProgress(initialProgress);
    localStorage.removeItem('pc_progress');
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        activeTab,
        setActiveTab,
        currentView,
        navigateTo,
        goBack,
        goToHome,
        currentGrade,
        setCurrentGrade,
        currentSemester,
        setCurrentSemester,
        studentProfile,
        setStudentProfile,
        teacherProfile,
        selectedPortId,
        setSelectedPortId,
        selectedUnitId,
        setSelectedUnitId,
        studentProgress,
        addGamePoints,
        setGameStars,
        unlockGame,
        recordQuizScore,
        saveLKPD,
        unlockPort,
        unlockBadge,
        completeUnitStage,
        getStageStatus,
        getStageLockReason,
        isUnitUnlocked,
        resetProgress,
        isUserModalOpen,
        setIsUserModalOpen,
        activeGameId,
        setActiveGameId,
        selectedSourceId,
        setSelectedSourceId,
        isSourceModalOpen,
        setIsSourceModalOpen,
        viewSource,
        openSourceViewer: viewSource,
        completeGame
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
