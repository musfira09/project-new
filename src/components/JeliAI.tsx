import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { NavigationHeader } from './NavigationHeader.tsx';
import { ChatMessage } from '../types.ts';
import {
  Bot,
  Send,
  Volume2,
  VolumeX,
  Compass,
  Lightbulb,
  HelpCircle,
  Sailboat,
  RotateCcw,
  Sparkles,
  Star,
  Brain,
  MessageSquare
} from 'lucide-react';

export const JeliAI: React.FC = () => {
  const { currentGrade, studentProfile, goToHome } = useApp();

  const [mode, setMode] = useState<'tanya' | 'pikir' | 'jelajah'>('tanya');
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);

  const initialWelcomeMessages: Record<'tanya' | 'pikir' | 'jelajah', string> = {
    tanya: `Halo Nakhoda Cilik ${studentProfile.name}! Aku Jeli, teman belajarmu di ${currentGrade}. Jeli tidak akan langsung membocorkan jawaban tugas sekolahmu, tapi Jeli akan memberikan petunjuk rahasia agar kamu bisa memecahkannya sendiri! Apa yang ingin kamu diskusikan hari ini?`,
    pikir: `Hai Penjelajah Cerdas! Di mode "JELI PIKIR", Jeli punya teka-teki pemantik nalar. Mengapa menurutmu kapal Phinisi yang dibuat dari balok kayu berat bisa mengapung di lautan luas tanpa tenggelam?`,
    jelajah: `Selamat datang di mode "JELI JELAJAH"! Mari berlayar menelusuri pesisir Tanah Beru dan kearifan Panrita Lopi. Tahukah kamu mengapa tradisi Annyorong Lopi harus ditarik beramai-ramai oleh seluruh warga kampung?`
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'jeli',
      mode: 'tanya',
      text: initialWelcomeMessages.tanya,
      timestamp: 'Baru saja'
    }
  ]);

  const quickChips = [
    'Mengapa kapal Phinisi memiliki 7 helai layar?',
    'Bagaimana cara menghitung luas layar segitiga?',
    'Ceritakan tentang kehebatan Panrita Lopi!',
    'Bantu aku memahami soal tanpa membocorkan jawaban!'
  ];

  const handleToggleSpeech = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;
      utterance.onend = () => setSpeakingMsgId(null);
      utterance.onerror = () => setSpeakingMsgId(null);
      window.speechSynthesis.speak(utterance);
      setSpeakingMsgId(msgId);
    }
  };

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      mode,
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/jeli', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          userQuery: textToSend,
          studentGrade: currentGrade,
          contextTopic: 'Budaya Phinisi & Literasi-Numerasi Bulukumba'
        })
      });

      const data = await response.json();
      const jeliReplyText =
        data.reply ||
        'Hai Nakhoda Cilik! Jeli mendengarmu. Menurutmu, bagian mana yang bisa kita amati dan hitung terlebih dahulu?';

      const jeliMsg: ChatMessage = {
        id: `jeli-${Date.now()}`,
        sender: 'jeli',
        mode,
        text: jeliReplyText,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, jeliMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `jeli-${Date.now()}`,
        sender: 'jeli',
        mode,
        text: `Pertanyaan yang sangat bagus! Di lautan ilmu pengetahuan, perahu Phinisi mengajarkan kita bahwa ketekunan membaca dan berhitung adalah kunci menaklukkan badai. Coba renungkan langkah pertamanya!`,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeMode = (newMode: 'tanya' | 'pikir' | 'jelajah') => {
    setMode(newMode);
    const welcomeMsg: ChatMessage = {
      id: `m-mode-${Date.now()}`,
      sender: 'jeli',
      mode: newMode,
      text: initialWelcomeMessages[newMode],
      timestamp: 'Baru saja'
    };
    setMessages((prev) => [...prev, welcomeMsg]);
  };

  return (
    <div className="min-h-screen bg-[#064B78] text-slate-800 pb-28">
      {/* Top Navigation Header */}
      <NavigationHeader
        title="JELI AI - TEMAN BELAJAR"
        subtitle="Asisten Saintifik Pintar Pendamping Belajar Budaya Maritim"
        badge="ONE ICON = ONE PAGE"
        badgeColor="bg-amber-400 text-slate-950 font-black"
        onBack={() => goToHome()}
        onHome={() => goToHome()}
      />

      {/* 
        ========================================================================
        1. HEADER: JELI AI
        ========================================================================
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2A4A] via-[#104b75] to-[#064B78] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="absolute top-4 left-6 opacity-25 select-none pointer-events-none">
          <Bot className="w-16 h-16 text-amber-300 animate-float-slight" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-25 select-none pointer-events-none">
          <Sparkles className="w-20 h-20 text-yellow-300" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md border border-yellow-200">
            <span>🤖 JELI TEMAN BELAJAR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md font-display">
            Jeli Si Robot Nahkoda
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-xl mx-auto font-medium leading-relaxed italic drop-shadow-xs">
            “Teman berpikir cerdas yang memandu tanpa membocorkan jawaban!”
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-bold text-amber-300 pt-1">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Pendamping {currentGrade} SD</span>
            </span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. TIGA MODE BESAR JELI
        ========================================================================
      */}
      <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <span className="inline-block px-4 py-1 rounded-full bg-white/95 text-sky-950 text-xs sm:text-sm font-extrabold shadow-md border border-sky-200">
            Pilih Mode Belajar Bersama Jeli
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'tanya', label: '💬 JELI TANYA', desc: 'Bimbingan petunjuk tugas & konsep', icon: MessageSquare },
            { id: 'pikir', label: '🧠 JELI PIKIR', desc: 'Teka-teki pemantik nalar kritis', icon: Brain },
            { id: 'jelajah', label: '⛵ JELI JELAJAH', desc: 'Eksplorasi budaya & Panrita Lopi', icon: Sailboat }
          ].map((m) => {
            const isSelected = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => handleChangeMode(m.id as any)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-400 border-amber-500 ring-3 ring-amber-300 text-slate-950 font-black shadow-lg scale-102'
                    : 'bg-white hover:bg-sky-50 border-slate-200 text-slate-700 font-bold shadow-xs'
                }`}
              >
                <h4 className="text-sm font-black font-display">{m.label}</h4>
                <p className="text-[11px] font-semibold text-slate-600 mt-1">{m.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        3. CHAT CANVAS INTERAKTIF
        ========================================================================
      */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden flex flex-col h-[560px]">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#064B78] via-[#0B2A4A] to-[#064B78] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                🤖
              </div>
              <div>
                <h3 className="text-sm font-black text-white font-display">
                  Jeli — Asisten Nakhoda Cendekia
                </h3>
                <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Siap Berpikir Bersama
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    id: 'm-restart',
                    sender: 'jeli',
                    mode,
                    text: initialWelcomeMessages[mode],
                    timestamp: 'Baru saja'
                  }
                ])
              }
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Mulai Percakapan Baru"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#F8FAFC]">
            {messages.map((msg) => {
              const isJeli = msg.sender === 'jeli';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isJeli ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  {isJeli && (
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-sm font-black shrink-0 shadow-xs mt-1">
                      🤖
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-3xl text-xs sm:text-sm leading-relaxed shadow-xs relative ${
                      isJeli
                        ? 'bg-white border-2 border-sky-100 text-slate-800 rounded-tl-xs'
                        : 'bg-[#0B2A4A] text-white rounded-tr-xs font-medium'
                    }`}
                  >
                    <p className="font-serif-story">{msg.text}</p>

                    <div className="flex items-center justify-between gap-3 mt-2 pt-2 border-t border-slate-100/50">
                      <span className="text-[10px] text-slate-400">{msg.timestamp}</span>

                      {isJeli && (
                        <button
                          onClick={() => handleToggleSpeech(msg.id, msg.text)}
                          className="text-amber-600 hover:text-amber-700 flex items-center gap-1 text-[11px] font-bold"
                        >
                          {speakingMsgId === msg.id ? (
                            <VolumeX className="w-3.5 h-3.5 text-rose-500" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                          <span>{speakingMsgId === msg.id ? 'Berhenti' : 'Dengarkan'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-sm font-black shrink-0 shadow-xs">
                  🤖
                </div>
                <div className="bg-white border-2 border-sky-100 p-4 rounded-3xl text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="animate-spin">⚙️</span>
                  <span>Jeli sedang berpikir dan menyusun petunjuk terbaik...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-3 bg-sky-50 border-t border-sky-100 overflow-x-auto flex gap-2 scrollbar-none">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-amber-100 border border-sky-200 text-sky-950 text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Tuliskan pertanyaanmu untuk Jeli di sini..."
              className="flex-1 p-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || loading}
              className={`p-3 rounded-2xl transition-all shadow-md ${
                !inputText.trim() || loading
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#0B2A4A] hover:bg-[#064B78] text-amber-300 hover:scale-105'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
