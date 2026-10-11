import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { OFFICIAL_SOURCES } from '../data/sourceRegistry.ts';
import { X, ExternalLink, ShieldCheck, BookOpen, Award, CheckCircle } from 'lucide-react';

export const SourceViewerModal: React.FC = () => {
  const { isSourceModalOpen, setIsSourceModalOpen, selectedSourceId } = useApp();

  if (!isSourceModalOpen) return null;

  const currentSource = selectedSourceId ? OFFICIAL_SOURCES[selectedSourceId] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#064B78] to-[#0A649E] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-black shadow-md">
              📚
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 tracking-wider uppercase block">
                SUMBER RESMI & REFERENSI TERVERIFIKASI
              </span>
              <h3 className="text-lg font-black font-display text-white">
                Ensiklopedia & Rujukan Phinisi Cendekia
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsSourceModalOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {currentSource ? (
            <div className="bg-amber-50/70 rounded-2xl p-5 border-2 border-amber-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shadow-xs ${
                    currentSource.sourceType === 'Official'
                      ? 'bg-emerald-600 text-white'
                      : currentSource.sourceType === 'Academic'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentSource.badgeLabel}
                </span>
                <span className="text-xs font-bold text-slate-500">Tahun: {currentSource.sourceYear}</span>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900 leading-snug">{currentSource.sourceTitle}</h4>
                <p className="text-sm font-semibold text-slate-600 mt-1">Lembaga: {currentSource.sourceOrganization}</p>
              </div>

              {currentSource.description && (
                <div className="bg-white p-4 rounded-xl border border-amber-100 text-sm text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">Keterangan Sumber:</span>
                  {currentSource.description}
                </div>
              )}

              {currentSource.sourceUrl && (
                <div className="pt-2">
                  <a
                    href={currentSource.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#064B78] hover:bg-[#085a91] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Kunjungi Laman Sumber Resmi</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ) : null}

          {/* List of All Official Verified Sources */}
          <div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-700" />
              Daftar Rujukan Resmi Pembelajaran
            </h4>
            <div className="space-y-3">
              {Object.values(OFFICIAL_SOURCES).map((src) => (
                <div
                  key={src.sourceId}
                  className={`p-4 rounded-2xl border transition-all ${
                    currentSource?.sourceId === src.sourceId
                      ? 'border-[#064B78] bg-sky-50/50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                            src.sourceType === 'Official'
                              ? 'bg-emerald-100 text-emerald-800'
                              : src.sourceType === 'Academic'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {src.badgeLabel}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">({src.sourceYear})</span>
                      </div>
                      <h5 className="text-sm font-black text-slate-900">{src.sourceTitle}</h5>
                      <p className="text-xs text-slate-600 mt-0.5">{src.sourceOrganization}</p>
                    </div>

                    {src.sourceUrl && (
                      <a
                        href={src.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 shrink-0 p-1.5 rounded-lg hover:bg-sky-100 transition-colors"
                        title="Buka sumber resmi"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Fakta budaya tervalidasi UNESCO & Pemkab Bulukumba</span>
          </div>
          <button
            onClick={() => setIsSourceModalOpen(false)}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
