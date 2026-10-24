import React, { useState } from 'react';
import { CLASSICAL_LITERATURE, LiteratureItem } from '../data/tamilData';
import { BookOpen, X, Volume2, Sparkles, Feather, ChevronRight, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

export const LiteratureSection: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<LiteratureItem | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'verse' | 'themes'>('overview');

  const handleCardClick = (item: LiteratureItem) => {
    soundEngine.playTempleChime();
    setSelectedWork(item);
    setActiveTab('overview');
  };

  const handleReciteVerse = (text: string) => {
    soundEngine.speakTamil(text);
  };

  return (
    <section id="literature" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/60 text-xs text-[#F6D889] font-cinzel mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>செம்மொழிப் படைப்புகள்</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-tamil-serif text-[#F6D889] tracking-tight drop-shadow-[0_2px_20px_rgba(201,164,92,0.3)]">
          தமிழ் இலக்கியத்தின் பொற்காலம்
        </h2>
        <p className="mt-4 text-base sm:text-xl text-[#E8D6AD]/90 font-tamil-serif leading-relaxed">
          "சொற்களில் வாழும் வரலாறு; செய்யுள்களில் மலரும் சிந்தனை."
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6" />
      </div>

      {/* 6 Literature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CLASSICAL_LITERATURE.map((item, idx) => {
          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              className="stone-panel group relative p-6 sm:p-8 rounded-sm cursor-pointer transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#F6D889] flex flex-col justify-between"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 text-[10px] text-[#C9A45C]/40 group-hover:text-[#F6D889] transition-colors">❖</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#C9A45C]/40 group-hover:text-[#F6D889] transition-colors">❖</div>
              <div className="absolute bottom-2 left-2 text-[10px] text-[#C9A45C]/40 group-hover:text-[#F6D889] transition-colors">❖</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-[#C9A45C]/40 group-hover:text-[#F6D889] transition-colors">❖</div>

              <div>
                {/* Era & Index badge */}
                <div className="flex items-center justify-between text-xs text-[#C9A45C] font-cinzel mb-4">
                  <span className="tracking-widest">0{idx + 1} // CLASSICAL</span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#260B0D] border border-[#C9A45C]/30 text-[11px] text-[#E8D6AD]/75">
                    {item.era}
                  </span>
                </div>

                {/* Tamil Title & English Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold font-tamil-serif text-[#F6D889] group-hover:text-[#FFF5DB] transition-colors">
                  {item.tamilTitle}
                </h3>
                <h4 className="text-xs uppercase font-cinzel tracking-wider text-[#C9A45C] mt-1">
                  {item.englishTitle.split('—')[0]}
                </h4>

                {/* Significance teaser */}
                <p className="mt-4 text-sm text-[#E8D6AD]/80 line-clamp-3 leading-relaxed font-tamil-serif">
                  {item.significance}
                </p>

                {/* Key feature callout */}
                <div className="mt-4 p-3 rounded-xs bg-[#090706]/60 border border-[#C9A45C]/20 text-xs font-tamil-serif text-[#F6D889]/90">
                  <span className="text-[#C9A45C] font-bold">சிறப்பு: </span>
                  {item.keyFeature}
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-6 pt-4 border-t border-[#C9A45C]/20 flex items-center justify-between text-xs font-tamil-serif text-[#C9A45C] group-hover:text-[#F6D889] transition-colors">
                <span className="flex items-center gap-1.5 font-medium">
                  <Feather className="w-3.5 h-3.5" />
                  <span>முழுமையாக வாசிக்க & செய்யுள் கேட்க</span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Interactive Literature Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#1b0a0c] via-[#0f0708] to-[#090706] border-2 border-[#C9A45C]/60 rounded-sm shadow-[0_0_60px_rgba(201,164,92,0.25)] p-6 sm:p-10 text-[#E8D6AD]">
            {/* Close button */}
            <button
              onClick={() => setSelectedWork(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 p-2 rounded-sm border border-[#C9A45C]/40 text-[#C9A45C] hover:text-[#F6D889] hover:border-[#F6D889] bg-[#090706]/70 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-[#C9A45C]/30 pb-6 pr-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-cinzel text-[#F6D889]">
                  {selectedWork.era}
                </span>
                <span className="text-xs text-[#C9A45C] font-cinzel">
                  ஆசிரியர் / தொகுப்பு: {selectedWork.authorOrCompilation}
                </span>
              </div>
              <h3 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-black font-tamil-serif text-[#F6D889]">
                {selectedWork.tamilTitle}
              </h3>
              <p className="text-sm sm:text-base font-cinzel tracking-wider text-[#C9A45C] mt-1">
                {selectedWork.englishTitle}
              </p>
            </div>

            {/* Navigation Tabs inside modal */}
            <div className="flex items-center gap-2 mt-6 border-b border-[#C9A45C]/20 pb-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-sm text-sm font-tamil-serif transition-all ${
                  activeTab === 'overview'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD]/80 hover:text-[#F6D889]'
                }`}
              >
                ஆய்வு விளக்கம் (Overview)
              </button>
              <button
                onClick={() => setActiveTab('verse')}
                className={`px-4 py-1.5 rounded-sm text-sm font-tamil-serif transition-all ${
                  activeTab === 'verse'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD]/80 hover:text-[#F6D889]'
                }`}
              >
                மாதிரிச் செய்யுள் (Sample Verse)
              </button>
              <button
                onClick={() => setActiveTab('themes')}
                className={`px-4 py-1.5 rounded-sm text-sm font-tamil-serif transition-all ${
                  activeTab === 'themes'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD]/80 hover:text-[#F6D889]'
                }`}
              >
                தத்துவக் கோட்பாடுகள் (Themes)
              </button>
            </div>

            {/* Tab Contents */}
            <div className="mt-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A45C] font-cinzel mb-2">
                      வரலாற்றுப் பின்னணி & இலக்கியப் பெருமை
                    </h4>
                    <p className="text-base sm:text-lg text-[#E8D6AD] leading-relaxed font-tamil-serif">
                      {selectedWork.detailedAnalysis}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#090706]/70 border border-[#C9A45C]/30 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#F6D889] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-bold text-[#F6D889] font-tamil-serif">
                        வரலாற்று உண்மைச் சான்று (Historical Authenticity)
                      </span>
                      <span className="text-xs text-[#E8D6AD]/80 font-tamil-serif">
                        இக்குறிப்புகள் தமிழகத் தொல்லியல் துறை, தமிழ்நாடு பாடநூல் கழகம் மற்றும் உ.வே.சா நூலக பதிப்புகளின் ஆதாரங்களைக் கொண்டு துல்லியமாக ஆவணப்படுத்தப்பட்டுள்ளன.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'verse' && (
                <div className="space-y-6">
                  {/* Parchment Box for Classical Poetry Verse */}
                  <div className="parchment-card p-6 sm:p-8 rounded-sm text-center relative overflow-hidden">
                    <div className="absolute top-2 right-3">
                      <button
                        onClick={() => handleReciteVerse(selectedWork.sampleVerseTamil)}
                        title="செய்யுளைக் கேட்க (Listen to Verse Audio Recitation)"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#C9A45C]/20 border border-[#C9A45C]/50 text-xs text-[#F6D889] hover:bg-[#C9A45C] hover:text-[#090706] transition-all font-tamil-serif"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>செய்யுள் ஒலி கேட்க</span>
                      </button>
                    </div>

                    <span className="text-xs uppercase font-cinzel tracking-widest text-[#C9A45C] block mb-4">
                      — செம்மொழிச் செய்யுள் வடிவம் —
                    </span>

                    <p
                      style={{ fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', serif" }}
                      className="text-lg sm:text-2xl font-bold text-[#F6D889] whitespace-pre-line leading-relaxed tracking-wide"
                    >
                      {selectedWork.sampleVerseTamil}
                    </p>

                    <div className="w-16 h-0.5 bg-[#C9A45C]/40 mx-auto my-4" />

                    <p className="text-xs sm:text-sm font-serif italic text-[#C9A45C]/90 max-w-xl mx-auto whitespace-pre-line">
                      {selectedWork.sampleVerseTranslit}
                    </p>

                    <div className="mt-6 p-4 rounded-xs bg-[#090706]/70 border border-[#C9A45C]/20 text-left">
                      <span className="block text-xs font-bold text-[#F6D889] font-cinzel uppercase tracking-wider mb-1">
                        English Translation & Universal Meaning:
                      </span>
                      <p className="text-sm text-[#E8D6AD] italic leading-relaxed">
                        {selectedWork.sampleVerseMeaning}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'themes' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A45C] font-cinzel">
                    முதன்மைக் கோட்பாடுகளும் கலைச்சொற்களும்
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWork.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-sm bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-tamil-serif text-[#F6D889] flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#090706]/60 border border-[#C9A45C]/20 rounded-sm">
                    <span className="block text-sm font-bold text-[#F6D889] font-tamil-serif mb-1">
                      வாழ்வியல் நற்பயன்:
                    </span>
                    <p className="text-sm text-[#E8D6AD]/85 font-tamil-serif leading-relaxed">
                      {selectedWork.significance}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-[#C9A45C]/25 flex justify-end">
              <button
                onClick={() => setSelectedWork(null)}
                className="px-6 py-2.5 rounded-sm bg-[#C9A45C] text-[#090706] font-bold font-tamil-serif hover:bg-[#F6D889] transition-colors"
              >
                மூடுக (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
