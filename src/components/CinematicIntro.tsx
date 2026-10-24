import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface CinematicIntroProps {
  onEnter: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnter }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Stage-by-stage cinematic choreography
    const timer1 = setTimeout(() => setPhase(1), 500);   // Tiny gold particles appear
    const timer2 = setTimeout(() => setPhase(2), 1400);  // Tamil letters float at depths
    const timer3 = setTimeout(() => setPhase(3), 2400);  // Soft golden light & temple silhouette
    const timer4 = setTimeout(() => setPhase(4), 3400);  // Convergence & Grand "தமிழ்" Title reveal
    const timer5 = setTimeout(() => setPhase(5), 4400);  // Subtitles & Enter Button reveal

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handleEnterWorld = () => {
    setIsExiting(true);
    soundEngine.playTempleChime();
    sessionStorage.setItem('tamil_heritage_intro_seen', 'true');
    setTimeout(() => {
      onEnter();
    }, 900);
  };

  const handleSkip = () => {
    sessionStorage.setItem('tamil_heritage_intro_seen', 'true');
    onEnter();
  };

  const handleToggleSound = () => {
    const isNowOn = soundEngine.toggleMute();
    setIsAudioActive(isNowOn);
  };

  const introLetters = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ழ', 'ற', 'ன'];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#090706] text-[#E8D6AD] transition-all duration-1000 select-none overflow-hidden ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Introduction to Tamil Heritage"
    >
      {/* Volumetric Radial Light behind the temple silhouette */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,164,92,0.18)_0%,rgba(38,11,13,0.3)_45%,transparent_75%)] transition-opacity duration-1500 ${
          phase >= 3 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Floating Letters Depth Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {introLetters.map((char, index) => {
          // Calculate orbital positions
          const angle = (index / introLetters.length) * Math.PI * 2;
          const radius = 220 + (index % 3) * 60;
          const xPos = Math.cos(angle) * radius;
          const yPos = Math.sin(angle) * (radius * 0.55);

          return (
            <div
              key={index}
              style={{
                transform: `translate(${xPos}px, ${yPos}px) scale(${index % 2 === 0 ? 1.2 : 0.85})`,
                transition: 'all 2.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-tamil-serif font-bold transition-all duration-1000 ${
                phase >= 2
                  ? phase >= 4
                    ? 'opacity-20 blur-[2px] scale-75'
                    : 'opacity-70 blur-[0.5px]'
                  : 'opacity-0 scale-50'
              } ${index % 2 === 0 ? 'text-[#F6D889]' : 'text-[#C9A45C]'}`}
            >
              <span className="text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(246,216,137,0.4)]">
                {char}
              </span>
            </div>
          );
        })}
      </div>

      {/* Majestic Ancient Tamil Temple Silhouette (Thanjavur Brihadisvara Inspired) */}
      <div
        className={`absolute bottom-0 w-full flex justify-center pointer-events-none transition-all duration-2000 ${
          phase >= 3 ? 'opacity-85 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <svg
          viewBox="0 0 1200 480"
          className="w-full max-w-5xl h-auto text-[#090706] fill-current drop-shadow-[0_-4px_30px_rgba(201,164,92,0.18)]"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Detailed Dravidian Temple Gopuram and Vimanam Silhouette */}
          <path d="M 600,20 L 592,40 L 608,40 Z" fill="#F6D889" /> {/* Golden Kalasam */}
          <path d="M 590,40 L 610,40 L 614,70 L 586,70 Z" fill="#C9A45C" />
          <path d="M 580,70 L 620,70 L 625,110 L 575,110 Z" fill="#180e0e" />
          <path d="M 570,110 L 630,110 L 638,160 L 562,160 Z" fill="#140a0b" />
          <path d="M 555,160 L 645,160 L 656,220 L 544,220 Z" fill="#110708" />
          <path d="M 535,220 L 665,220 L 680,290 L 520,290 Z" fill="#0d0506" />
          <path d="M 505,290 L 695,290 L 715,370 L 485,370 Z" fill="#0a0404" />
          <rect x="440" y="370" width="320" height="110" fill="#080304" />
          
          {/* Side Mandapa Pillars and Carved Plinths */}
          <rect x="180" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="230" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="280" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="330" y="320" width="16" height="160" fill="#0c0607" />
          <polygon points="160,320 370,320 350,290 180,290" fill="#120809" />
          
          <rect x="850" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="900" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="950" y="320" width="16" height="160" fill="#0c0607" />
          <rect x="1000" y="320" width="16" height="160" fill="#0c0607" />
          <polygon points="830,320 1040,320 1020,290 850,290" fill="#120809" />
          
          {/* Base Platform */}
          <rect x="0" y="440" width="1200" height="40" fill="#070303" />
        </svg>
      </div>

      {/* Atmospheric Mist & Incense Drift Layer */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#090706] via-[#090706]/80 to-transparent pointer-events-none" />

      {/* Controls: Audio Ambience & Skip Intro */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={handleToggleSound}
          aria-label={isAudioActive ? 'Mute ambient sound' : 'Enable ambient sound'}
          className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#C9A45C]/30 bg-[#090706]/80 text-xs font-tamil-serif text-[#E8D6AD] hover:border-[#F6D889] hover:text-[#F6D889] transition-all"
        >
          {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-[#F6D889]" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline font-tamil-serif">{isAudioActive ? 'ஒலி இயக்கத்தில்' : 'ஒலி இயக்குக'}</span>
        </button>

        <button
          onClick={handleSkip}
          aria-label="Skip cinematic introduction"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#C9A45C]/40 bg-[#260B0D]/80 text-xs text-[#F6D889] hover:bg-[#C9A45C] hover:text-[#090706] transition-all font-tamil-serif font-medium shadow-md"
        >
          <span>தவிர்க்க (Skip)</span>
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Step 2: Antique gold spark */}
        <div
          className={`mb-4 flex items-center justify-center transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/30 bg-[#260B0D]/50 text-xs tracking-widest text-[#F6D889] font-tamil-serif">
            <Sparkles className="w-3.5 h-3.5 text-[#F6D889] animate-pulse" />
            <span>செம்மொழித் தமிழ் மரபு</span>
          </div>
        </div>

        {/* Step 7: The Grand 3D Metallic "தமிழ்" Title */}
        <div
          className={`transition-all duration-1500 transform ${
            phase >= 4
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-90'
          }`}
        >
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black font-tamil-serif tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DB] via-[#F6D889] to-[#C9A45C] drop-shadow-[0_10px_35px_rgba(246,216,137,0.35)]"
            style={{
              textShadow: '0 0 60px rgba(246, 216, 137, 0.45), 0 0 120px rgba(201, 164, 92, 0.25)',
            }}
          >
            தமிழ்
          </h1>
        </div>

        {/* Step 8 & 9: Subtitles */}
        <div
          className={`mt-4 space-y-2 transition-all duration-1000 ${
            phase >= 5
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-tamil-serif text-[#F6D889] tracking-wide">
            "மொழியல்ல, நம் அடையாளம்."
          </p>
          <p className="text-sm sm:text-base md:text-lg font-cinzel tracking-[0.25em] text-[#E8D6AD]/85 uppercase">
            A Living Heritage. An Eternal Civilization.
          </p>
        </div>

        {/* Step 10: Enter Button with light sweep effect */}
        <div
          className={`mt-10 transition-all duration-1000 ${
            phase >= 5
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
          }`}
        >
          <button
            onClick={handleEnterWorld}
            aria-label="Enter the world of Tamil heritage"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A45C] via-[#F6D889] to-[#C9A45C] text-[#090706] font-tamil-serif font-bold text-lg md:text-xl rounded-sm shadow-[0_0_35px_rgba(246,216,137,0.45)] hover:shadow-[0_0_50px_rgba(246,216,137,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <span>தமிழ் உலகிற்குள் நுழையுங்கள்</span>
            <ArrowRight className="w-5 h-5 text-[#090706] group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <p className="mt-3 text-xs text-[#77716A] font-tamil-serif">
            கல்லூரி தமிழாய்வுத் துறையின் அதிகாரப்பூர்வ மெய்நிகர் பண்பாட்டு தளம்
          </p>
        </div>
      </div>
    </div>
  );
};
