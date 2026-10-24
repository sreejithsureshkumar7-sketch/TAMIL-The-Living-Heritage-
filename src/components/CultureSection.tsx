import React, { useState } from 'react';
import { TAMIL_CULTURE_SHOWCASE, CultureShowcase } from '../data/tamilData';
import { Palette, Sparkles, Check, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

export const CultureSection: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<CultureShowcase>(TAMIL_CULTURE_SHOWCASE[0]);

  const handleSelectCulture = (item: CultureShowcase) => {
    soundEngine.playTempleChime();
    setSelectedCulture(item);
  };

  return (
    <section id="culture" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/60 text-xs text-[#F6D889] font-cinzel mb-4">
          <Palette className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>கலை & பண்பாட்டுக் கருவூலம்</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-tamil-serif text-[#F6D889] tracking-tight drop-shadow-[0_2px_20px_rgba(201,164,92,0.3)]">
          பண்பாட்டில் வாழும் தமிழ்
        </h2>
        <p className="mt-4 text-base sm:text-xl text-[#E8D6AD]/90 font-tamil-serif leading-relaxed">
          "வானுயர்ந்த கோபுரங்களும், வழுவாத பண்ணிசையும், ஓலைச்சுவடிகளும் போற்றும் தமிழர் கலை மரபு."
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6" />
      </div>

      {/* Main Culture Showcase Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Culture Navigation List (4 cols) */}
        <div className="lg:col-span-4 space-y-3 flex flex-col justify-between">
          {TAMIL_CULTURE_SHOWCASE.map((item) => {
            const isSelected = selectedCulture.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectCulture(item)}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-300 relative group flex items-center justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#260B0D] to-[#120607] border-[#F6D889] shadow-[0_0_20px_rgba(246,216,137,0.25)]'
                    : 'stone-panel border-[#C9A45C]/30 hover:border-[#C9A45C] text-[#E8D6AD]/80 hover:text-[#F6D889]'
                }`}
              >
                <div>
                  <span className="block text-xs uppercase font-cinzel text-[#C9A45C] tracking-wider mb-1">
                    {item.englishTitle.split('&')[0]}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-tamil-serif text-[#F6D889]">
                    {item.tamilName}
                  </h3>
                  <p className="text-xs text-[#E8D6AD]/70 line-clamp-1 mt-1 font-tamil-serif">
                    {item.tagline}
                  </p>
                </div>

                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-[#F6D889] translate-x-1' : 'text-[#77716A] group-hover:text-[#C9A45C]'
                  }`}
                />

                {isSelected && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#F6D889] rounded-r" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Culture Detail Panel (8 cols) */}
        <div className="lg:col-span-8 stone-panel p-6 sm:p-10 rounded-sm border-2 border-[#C9A45C]/50 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Subtle background temple motif */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
            <span className="text-[160px] font-black font-tamil-serif text-[#C9A45C]">
              கலை
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-cinzel text-[#F6D889]">
                HERITAGE ARCHIVE // {selectedCulture.id.toUpperCase()}
              </span>
              <span className="text-xs text-[#C9A45C] font-tamil-serif">
                {selectedCulture.visualHighlight}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-tamil-serif text-[#F6D889] tracking-tight">
              {selectedCulture.tamilName}
            </h3>
            <h4 className="text-sm font-cinzel uppercase tracking-widest text-[#C9A45C] mt-1">
              {selectedCulture.englishTitle}
            </h4>

            <div className="my-6 p-4 rounded-xs bg-[#260B0D]/50 border-l-4 border-[#F6D889] text-sm sm:text-base font-tamil-serif text-[#FFFDF7] italic">
              "{selectedCulture.tagline}"
            </div>

            <p className="text-base sm:text-lg text-[#E8D6AD] leading-relaxed font-tamil-serif">
              {selectedCulture.description}
            </p>

            {/* Cultural Features Pillars */}
            <div className="mt-8">
              <span className="block text-xs font-bold uppercase font-cinzel text-[#C9A45C] tracking-wider mb-3">
                தனித்துவமான அடையாளங்கள் (Core Pillars):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCulture.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-xs bg-[#090706]/70 border border-[#C9A45C]/25 flex items-center gap-2.5 text-xs sm:text-sm font-tamil-serif text-[#E8D6AD]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#260B0D] border border-[#C9A45C]/40 flex items-center justify-center text-[#F6D889] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 pt-4 border-t border-[#C9A45C]/20 flex items-center justify-between text-xs text-[#77716A]">
            <span>பாரம்பரிய கலைகள் பாதுகாப்பு மையம் • தமிழாய்வுத் துறை</span>
            <span className="flex items-center gap-1 text-[#C9A45C]">
              <Sparkles className="w-3.5 h-3.5 text-[#F6D889]" />
              <span>மங்கா மரபு</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
