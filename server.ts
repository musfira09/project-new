import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI client if GEMINI_API_KEY is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// JELI AI Endpoint (Teman Belajar Cerdas)
app.post('/api/jeli', async (req, res) => {
  try {
    const { mode, userQuery, studentGrade, contextTopic, chatHistory } = req.body;

    const gradeLevel = studentGrade || 'SD';
    const modeType = mode || 'tanya'; // 'tanya' | 'pikir' | 'jelajah'
    const topic = contextTopic || 'Budaya Phinisi & Literasi-Numerasi Bulukumba';

    const systemInstruction = `Kamu adalah JELI (Teman Belajar Cerdas) di aplikasi pendidikan "PHINISI CENDEKIA" untuk siswa ${gradeLevel} di Kabupaten Bulukumba, Sulawesi Selatan.
Tagline aplikasi: "Berlayar dengan Ilmu, Mengenal Budaya, Membangun Masa Depan". Dibuat oleh Musfira, S.Pd.

PRINSIP WAJIB JELI:
1. JELI TIDAK BOLEH langsung memberikan jawaban akhir dari tugas/soal/LKPD siswa!
2. Gunakan PENDEKATAN SOKRATES (Socratic approach):
   - Berikan petunjuk lembut dan bayangan konsep.
   - Tanyakan langkah berikutnya yang menurut siswa harus diambil.
   - Minta siswa menjelaskan alasan atau apa yang sudah mereka pahami.
   - Bimbing siswa selangkah demi selangkah memperbaiki atau menemukan jawabannya sendiri.
3. Sesuaikan bahasa dengan jenjang siswa:
   - Jika siswa Kelas 1-2: Gunakan kalimat pendek, ramah, periang, sederhana, banyak kata penyemangat.
   - Jika siswa Kelas 3-4: Gunakan penjelasan menarik dengan analogi maritim dan kapal Phinisi.
   - Jika siswa Kelas 5-6: Berikan tantangan nalar kritis, logika sebab-akibat, dan telaah data.
4. Mode saat ini:
   - "JELI TANYA": Membantu siswa memahami materi/konsep tanpa memberi contekan jawaban.
   - "JELI PIKIR": Memberikan pertanyaan pemantik yang merangsang daya nalar dan rasa ingin tahu.
   - "JELI JELAJAH": Mengajak siswa mengeksplorasi budaya maritim Bulukumba, Tanah Beru, Panrita Lopi, layar Phinisi, kayu bitti/ulin, dan kearifan lokal.
5. Gunakan bahasa Indonesia yang baik, santun, hangat, dan ramah anak. Sertakan panggilan ramah seperti "Halo Kapten Cilik!", "Penjelajah Hebat!", atau "Sahabat Bahari!".`;

    if (ai) {
      const prompt = `[Konteks Siswa: ${gradeLevel}, Topik: ${topic}, Mode: ${modeType}]
Pertanyaan atau Pesan Siswa: "${userQuery}"

Berikan respon Sokratik yang ramah anak, edukatif, dan membimbing sesuai mode ${modeType}. JANGAN berikan jawaban langsung jika siswa menanyakan jawaban soal!`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || 'Halo Penjelajah Cilik! Jeli senang sekali belajar bersamamu. Menurutmu, apa langkah pertama yang bisa kita coba bersama?';
      return res.json({ reply });
    } else {
      // Thoughtful pedagogical fallback if API key is not configured
      let fallback = '';
      if (modeType === 'pikir') {
        fallback = `Pertanyaan pemantik dari Jeli untuk Kapten Cilik di ${gradeLevel}: "Tahukah kamu, mengapa kapal Phinisi buatan Panrita Lopi di Bulukumba memiliki 7 helai layar utama? Kira-kira apa hubungannya dengan arah mata angin dan keselamatan pelaut saat mengarungi samudra luas? Coba ceritakan apa dugaanmu!"`;
      } else if (modeType === 'jelajah') {
        fallback = `Wah, asyik sekali menjelajah Bulukumba bersama Jeli! Di pesisir Tanah Beru dan Bonto Bahari, para Panrita Lopi menyusun papan kapal dengan pasak kayu tanpa paku besi, lho! Menurutmu, mengapa kayu pilihan seperti kayu ulin dan bitti sangat kuat di air laut? Yuk kita cari tahu bersama!`;
      } else {
        fallback = `Halo Penjelajah Cilik ${gradeLevel}! Jeli siap mendampingimu. Ingat ya, Jeli tidak akan langsung membocorkan jawaban tugasmu, tapi Jeli akan beri petunjuk rahasia! Coba ceritakan dulu, bagian mana yang sudah kamu baca atau kamu hitung sejauh ini?`;
      }
      return res.json({ reply: fallback });
    }
  } catch (error) {
    console.error('Error in /api/jeli:', error);
    res.status(500).json({
      reply: 'Hai Penjelajah! Angin laut sedang berhembus kencang sejenak. Tapi jangan khawatir, kamu bisa membaca kembali petunjuk di modul pelabuhanmu. Apa yang ingin kamu diskusikan lagi?',
    });
  }
});

// Setup Vite or static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Phinisi Cendekia server running on port ${port}`);
  });
}

startServer();
