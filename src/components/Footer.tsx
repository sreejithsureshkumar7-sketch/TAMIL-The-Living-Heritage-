import React from 'react';
import { CollegeDeptConfig } from '../data/tamilData';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface FooterProps {
  config: CollegeDeptConfig;
  onNavigate: (sectionId: string) => void;
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onNavigate, onReplayIntro }) => {
  const scrollToTop = () => {
    soundEngine.playTempleChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070504] border-t-2 border-[#C9A45C]/40 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#E8D6AD] overflow-hidden">
      {/* Decorative Golden Line with Emblem */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent flex-1" />
        <div className="w-9 h-9 rounded-full bg-[#260B0D] border border-[#C9A45C] flex items-center justify-center text-[#F6D889] font-tamil-serif font-black shadow-[0_0_15px_rgba(201,164,92,0.4)]">
          ❖
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent flex-1" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Left Column: Department Identity */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#260B0D] to-[#090706] border border-[#C9A45C] flex items-center justify-center text-[#F6D889] font-black text-xl font-tamil-serif">
              ழ்
            </div>
            <div>
              <span className="block font-tamil-serif font-bold text-xl text-[#F6D889]">
                {config.deptNameTamil}
              </span>
              <span className="block text-xs font-tamil-serif text-[#C9A45C]">
                {config.collegeNameTamil}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#E8D6AD]/80 font-tamil-serif leading-relaxed max-w-md">
            செம்மொழித் தமிழின் இலக்கியச் செல்வம், வரலாற்றுத் தொன்மை, கல்வெட்டியல் மற்றும் மொழி ஆய்வு நெறிகளை அடுத்த தலைமுறைக்கு முன்னெடுத்துச் செல்லும் கல்வி அரண்.
          </p>

          {/* Majestic Proclamation */}
          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 rounded-sm bg-[#260B0D] border border-[#C9A45C]/50 text-base font-bold font-tamil-serif text-[#F6D889] tracking-wider shadow-inner">
              "தமிழ் வாழ்க! தமிழ் வளர்க!"
            </span>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className="md:col-span-4 space-y-3 font-tamil-serif text-sm">
          <h4 className="text-xs font-bold uppercase font-cinzel text-[#C9A45C] tracking-widest">
            விரைவு இணைப்புகள் (Quick Navigation)
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • முகப்பு (Home)
            </button>
            <button
              onClick={() => onNavigate('literature')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • தமிழ் இலக்கியம்
            </button>
            <button
              onClick={() => onNavigate('history')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • தமிழர் வரலாறு
            </button>
            <button
              onClick={() => onNavigate('letters')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • தமிழ் எழுத்துகள்
            </button>
            <button
              onClick={() => onNavigate('culture')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • கலை & பண்பாடு
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-left text-[#E8D6AD]/80 hover:text-[#F6D889] transition-colors"
            >
              • எங்களைப் பற்றி
            </button>
            <button
              onClick={onReplayIntro}
              className="text-left text-[#C9A45C] hover:text-[#F6D889] transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>அறிமுகக் காட்சி (Intro)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Inscription Motto & Back to Top */}
        <div className="md:col-span-3 space-y-4 text-xs font-tamil-serif flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase font-cinzel text-[#C9A45C] tracking-widest mb-2">
              செம்மொழிப் பொன்மொழி
            </h4>
            <div className="p-3 rounded-sm bg-[#090706] border border-[#C9A45C]/30 text-[#F6D889] italic leading-relaxed">
              "யாதும் ஊரே யாவரும் கேளிர்; தீதும் நன்றும் பிறர்தர வாரா."
              <span className="block text-[10px] text-[#C9A45C] text-right mt-1 not-italic font-cinzel">
                — புறநானூறு (192)
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#C9A45C]/40 bg-[#260B0D]/50 text-xs text-[#E8D6AD] hover:text-[#F6D889] hover:border-[#F6D889] transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>மேலே செல்லவும் (Top)</span>
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77716A] gap-4">
        <div>
          © 2026 {config.collegeNameEnglish} — {config.deptNameEnglish}. All rights reserved.
        </div>
        <div className="flex items-center gap-2 font-tamil-serif text-[#C9A45C]/90">
          <span>தமிழ்ப் பண்பாட்டின் அழியாத பெருமிதத்துடன் படைக்கப்பட்டது</span>
          <Heart className="w-3.5 h-3.5 text-[#F6D889] fill-current" />
        </div>
      </div>
    </footer>
  );
};
