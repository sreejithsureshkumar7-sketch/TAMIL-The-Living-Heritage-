import React from 'react';
import { ArrowDown, Compass, BookOpen, Flame, Sparkles, Landmark, Award } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface HeroSectionProps {
  onExploreHeritage: () => void;
  onExploreLiterature: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreHeritage,
  onExploreLiterature,
}) => {
  const handleHeritageClick = () => {
    soundEngine.playTempleChime();
    onExploreHeritage();
  };

  const handleLiteratureClick = () => {
    soundEngine.playTempleChime();
    onExploreLiterature();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden"
    >
      {/* Volumetric Center Halo Light behind the main title */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(246,216,137,0.14)_0%,rgba(201,164,92,0.06)_40%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* Ancient Temple Stone Pillars on the left and right */}
      <div className="hidden lg:block absolute left-4 top-24 bottom-12 w-20 pointer-events-none select-none opacity-40">
        <div className="h-full w-full border-r-2 border-[#C9A45C]/30 bg-gradient-to-r from-transparent to-[#260B0D]/40 relative">
          <div className="absolute top-12 -right-3">
            <Flame className="w-6 h-6 text-[#F6D889] lamp-flame" />
          </div>
          <div className="absolute top-1/2 -right-3">
            <Flame className="w-6 h-6 text-[#F6D889] lamp-flame" />
          </div>
          {/* Tamil-Brahmi script carving motifs */}
          <div className="absolute inset-y-24 right-4 flex flex-col justify-around text-xs font-tamil-serif text-[#C9A45C]/40 select-none">
            <span>𑀢𑀫𑀺𑀵𑀺</span>
            <span>அகழ்</span>
            <span>கீழடி</span>
            <span>தொல்</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-4 top-24 bottom-12 w-20 pointer-events-none select-none opacity-40">
        <div className="h-full w-full border-l-2 border-[#C9A45C]/30 bg-gradient-to-l from-transparent to-[#260B0D]/40 relative">
          <div className="absolute top-12 -left-3">
            <Flame className="w-6 h-6 text-[#F6D889] lamp-flame" />
          </div>
          <div className="absolute top-1/2 -left-3">
            <Flame className="w-6 h-6 text-[#F6D889] lamp-flame" />
          </div>
          <div className="absolute inset-y-24 left-4 flex flex-col justify-around text-xs font-tamil-serif text-[#C9A45C]/40 select-none">
            <span>சோழன்</span>
            <span>பாண்டியன்</span>
            <span>சேரன்</span>
            <span>வள்ளுவம்</span>
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto flex flex-col items-center">
        {/* Heritage Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/70 shadow-[0_0_20px_rgba(201,164,92,0.18)] mb-6 text-xs sm:text-sm tracking-widest text-[#F6D889] uppercase font-cinzel">
          <Sparkles className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>கல்லூரித் தமிழாய்வுத் துறை அரங்கம்</span>
          <span className="text-[#C9A45C]">•</span>
          <span>Since 1968</span>
        </div>

        {/* Grand Headline: செம்மொழித் தமிழின் சிறப்பு */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-tamil-serif tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#F6D889] to-[#C9A45C] drop-shadow-[0_4px_30px_rgba(201,164,92,0.35)]">
          செம்மொழித் தமிழின் சிறப்பு
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[#E8D6AD] max-w-2xl font-tamil-serif leading-relaxed text-shadow-sm font-light">
          "காலத்தை வென்று வாழும் மொழி, பண்பாட்டையும் அறிவையும் உலகிற்கு எடுத்துரைக்கும் நம் தமிழ்."
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <button
            onClick={handleHeritageClick}
            aria-label="Explore Tamil Heritage"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-[#C9A45C] via-[#F6D889] to-[#C9A45C] text-[#090706] font-tamil-serif font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(246,216,137,0.35)] hover:shadow-[0_0_40px_rgba(246,216,137,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
          >
            <Compass className="w-5 h-5 text-[#090706] group-hover:rotate-45 transition-transform" />
            <span>தமிழ் மரபை ஆராயுங்கள்</span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={handleLiteratureClick}
            aria-label="Explore Classical Literature"
            className="w-full sm:w-auto px-8 py-4 rounded-sm border border-[#C9A45C]/60 bg-[#260B0D]/70 text-[#F6D889] font-tamil-serif font-bold text-base sm:text-lg hover:bg-[#C9A45C]/20 hover:border-[#F6D889] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
          >
            <BookOpen className="w-5 h-5 text-[#F6D889] group-hover:scale-110 transition-transform" />
            <span>இலக்கிய உலகிற்குச் செல்லுங்கள்</span>
          </button>
        </div>

        {/* Quick Cultural Dimension Ribbon */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          <div className="stone-panel p-3 rounded-sm border border-[#C9A45C]/30 text-center">
            <span className="block text-xl sm:text-2xl font-black font-cinzel text-[#F6D889]">5000+</span>
            <span className="block text-[11px] font-tamil-serif text-[#E8D6AD]/80">ஆண்டுகள் தொன்மை</span>
          </div>
          <div className="stone-panel p-3 rounded-sm border border-[#C9A45C]/30 text-center">
            <span className="block text-xl sm:text-2xl font-black font-cinzel text-[#F6D889]">247</span>
            <span className="block text-[11px] font-tamil-serif text-[#E8D6AD]/80">தமிழ் எழுத்துகள்</span>
          </div>
          <div className="stone-panel p-3 rounded-sm border border-[#C9A45C]/30 text-center">
            <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-black font-cinzel text-[#F6D889]">
              <Landmark className="w-5 h-5 text-[#C9A45C]" />
              <span>கீழடி</span>
            </div>
            <span className="block text-[11px] font-tamil-serif text-[#E8D6AD]/80">நகர நாகரிகம்</span>
          </div>
          <div className="stone-panel p-3 rounded-sm border border-[#C9A45C]/30 text-center">
            <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-black font-cinzel text-[#F6D889]">
              <Award className="w-5 h-5 text-[#C9A45C]" />
              <span>செம்மொழி</span>
            </div>
            <span className="block text-[11px] font-tamil-serif text-[#E8D6AD]/80">2004 முதன்மை அங்கீகாரம்</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Guidance with subtle animated arrow */}
      <div className="relative z-10 mt-8 flex flex-col items-center">
        <a
          href="#literature"
          aria-label="Scroll to Literature Section"
          className="group flex flex-col items-center gap-1.5 text-xs font-tamil-serif text-[#C9A45C] hover:text-[#F6D889] transition-colors"
        >
          <span className="tracking-wider">கீழே உருளவும்</span>
          <div className="w-8 h-8 rounded-full border border-[#C9A45C]/40 flex items-center justify-center group-hover:border-[#F6D889] group-hover:translate-y-1 transition-all">
            <ArrowDown className="w-4 h-4 text-[#F6D889] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
