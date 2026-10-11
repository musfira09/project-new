import { SourceRegistryItem } from '../types.ts';

export const OFFICIAL_SOURCES: Record<string, SourceRegistryItem> = {
  'unesco-pinisi-2017': {
    sourceId: 'unesco-pinisi-2017',
    sourceTitle: 'Pinisi, art of boatbuilding in South Sulawesi',
    sourceOrganization: 'UNESCO (United Nations Educational, Scientific and Cultural Organization)',
    sourceYear: 2017,
    sourceUrl: 'https://ich.unesco.org/en/RL/pinisi-art-of-boatbuilding-in-south-sulawesi-01282',
    sourceType: 'Official',
    badgeLabel: '✓ SUMBER RESMI',
    description:
      'Penetapan resmi pembuatan perahu Pinisi di Sulawesi Selatan ke dalam Representative List of the Intangible Cultural Heritage of Humanity pada sidang ke-12 di Pulau Jeju, Republik Korea.'
  },
  'unesco-decision-12com': {
    sourceId: 'unesco-decision-12com',
    sourceTitle: 'Decision of the Intergovernmental Committee: 12.COM 11.b.13',
    sourceOrganization: 'UNESCO Intangible Cultural Heritage Committee',
    sourceYear: 2017,
    sourceUrl: 'https://ich.unesco.org/en/decisions/12.COM/11.B.13',
    sourceType: 'Official',
    badgeLabel: '✓ SUMBER RESMI',
    description:
      'Dokumen keputusan resmi UNESCO yang menguraikan nilai budaya, teknik pembuatan tradisional tanpa cetak biru, transmisi antargenerasi, dan komitmen pelestarian hutan kayu Bitti di Bulukumba.'
  },
  'pemkab-bulukumba-pinisi': {
    sourceId: 'pemkab-bulukumba-pinisi',
    sourceTitle: 'Pinisi Sukses Jadi Warisan Budaya Takbenda UNESCO & Profil Sentra Industri Kapal Rakyat Bonto Bahari',
    sourceOrganization: 'Pemerintah Kabupaten Bulukumba (Dinas Pariwisata, Pemuda dan Olahraga)',
    sourceYear: 2017,
    sourceUrl: 'https://bulukumbakab.go.id',
    sourceType: 'Official',
    badgeLabel: '✓ SUMBER RESMI',
    description:
      'Dokumentasi resmi pemerintah daerah mengenai sentra pembuatan perahu Pinisi di Kelurahan Tanah Beru, Bira, dan Batu Licin, Kecamatan Bonto Bahari, Kabupaten Bulukumba.'
  },
  'kemdikbud-wbtb-pinisi': {
    sourceId: 'kemdikbud-wbtb-pinisi',
    sourceTitle: 'Penetapan Karya Budaya Pembuatan Perahu Pinisi sebagai Warisan Budaya Takbenda Indonesia (No. SK: 270/P/2014)',
    sourceOrganization: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia (Kemdikbudristek)',
    sourceYear: 2014,
    sourceUrl: 'https://warisanbudaya.kemdikbud.go.id',
    sourceType: 'Official',
    badgeLabel: '✓ SUMBER RESMI',
    description:
      'Sertifikasi Warisan Budaya Takbenda Nasional dari Direktorat Jenderal Kebudayaan untuk domain Kemahiran dan Kerajinan Tradisional pembuatan kapal Pinisi di Bulukumba.'
  },
  'bpnb-sulsel-etnografi': {
    sourceId: 'bpnb-sulsel-etnografi',
    sourceTitle: 'Etnografi Teknologi Tradisional Pembuatan Perahu Pinisi di Tana Beru Bulukumba',
    sourceOrganization: 'Balai Pelestarian Nilai Budaya (BPNB) Sulawesi Selatan',
    sourceYear: 2018,
    sourceType: 'Academic',
    badgeLabel: '📚 SUMBER AKADEMIK',
    description:
      'Kajian ilmiah tentang peran Panrita Lopi, penentuan waktu baik (hari baik), ritual Ansompo Lopi, perakitan balok lunas (Kalibise), hingga tradisi gotong royong Annyorong Lopi.'
  },
  'modul-ajar-musfira': {
    sourceId: 'modul-ajar-musfira',
    sourceTitle: 'Panduan Modul Ajar Muatan Lokal Maritim Terintegrasi Literasi-Numerasi SD Bulukumba',
    sourceOrganization: 'Musfira, S.Pd. (SD Negeri 20 Manyampa, Bulukumba)',
    sourceYear: 2024,
    sourceType: 'LearningActivity',
    badgeLabel: '💡 AKTIVITAS PEMBELAJARAN',
    description:
      'Pengembangan lembar kerja peserta didik, soal bernalar kritis, dan latihan kontekstual pelayaran bagi siswa Sekolah Dasar.'
  }
};

export const SOURCE_REGISTRY = Object.values(OFFICIAL_SOURCES).map((s) => ({
  id: s.sourceId,
  title: s.sourceTitle,
  publisher: s.sourceOrganization,
  year: s.sourceYear,
  author: s.sourceOrganization,
  url: s.sourceUrl || '',
  context: s.description,
  type: s.sourceType,
  badgeLabel: s.badgeLabel
}));
