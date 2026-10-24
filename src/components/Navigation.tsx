import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Eye, Sparkles, Settings2 } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onReplayIntro: () => void;
  onOpenDeptModal: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

interface NavItem {
  id: string;
  tamil: string;
  english: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', tamil: 'முகப்பு', english: 'Home' },
  { id: 'literature', tamil: 'தமிழ் இலக்கியம்', english: 'Literature' },
  { id: 'history', tamil: 'தமிழ் வரலாறு', english: 'History' },
  { id: 'letters', tamil: 'தமிழ் எழுத்துகள்', english: 'Letters' },
  { id: 'culture', tamil: 'கலை & பண்பாடு', english: 'Culture' },
  { id: 'about', tamil: 'எங்களைப் பற்றி', english: 'About' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onReplayIntro,
  onOpenDeptModal,
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = soundEngine.toggleMute();
    setIsAudioOn(active);
  };

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    soundEngine.playTempleChime();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#090706]/92 backdrop-blur-md border-b border-[#C9A45C]/25 shadow-[0_10px_30px_rgba(0,0,0,0.85)] py-3'
          : 'bg-gradient-to-b from-[#090706]/90 via-[#090706]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Temple Emblem */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#F6D889] rounded-sm p-1"
          aria-label="தமிழ் — முகப்பு முகவரி"
        >
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#260B0D] to-[#090706] border border-[#C9A45C]/50 flex items-center justify-center text-[#F6D889] font-tamil-serif font-black text-xl shadow-[0_0_15px_rgba(201,164,92,0.3)] group-hover:border-[#F6D889] group-hover:scale-105 transition-all">
            ழ்
          </div>
          <div>
            <span className="block font-tamil-serif font-bold text-lg md:text-xl text-[#F6D889] tracking-wide leading-tight group-hover:text-[#FFF5DB] transition-colors">
              தமிழ்
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-cinzel text-[#C9A45C]/80">
              The Living Heritage
            </span>
          </div>
        </button>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-3 py-2 rounded-sm text-sm font-medium transition-all group focus:outline-none focus:ring-1 focus:ring-[#F6D889] ${
                  isActive
                    ? 'text-[#F6D889] font-bold'
                    : 'text-[#E8D6AD]/80 hover:text-[#F6D889]'
                }`}
              >
                <span className="block font-tamil-serif">{item.tamil}</span>
                <span className="block text-[9px] uppercase font-cinzel tracking-wider text-[#77716A] group-hover:text-[#C9A45C]">
                  {item.english}
                </span>

                {/* Animated Gold Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#F6D889] to-transparent shadow-[0_0_8px_#F6D889]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Utility Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Audio Ambiance Toggle */}
          <button
            onClick={handleAudioToggle}
            title={isAudioOn ? 'ஒலியை அணைக்க (Mute)' : 'கோயில் மணி & தம்புரா ஒலியை இயக்க (Play Ambient Sound)'}
            aria-label={isAudioOn ? 'Mute ambient audio' : 'Play ambient audio'}
            className="p-2 rounded-sm border border-[#C9A45C]/30 bg-[#260B0D]/50 text-[#C9A45C] hover:text-[#F6D889] hover:border-[#F6D889] transition-all"
          >
            {isAudioOn ? (
              <Volume2 className="w-4 h-4 text-[#F6D889] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={onToggleReducedMotion}
            title={reducedMotion ? 'இயக்கத்தை மீட்டமைக்க (Full 3D Motion)' : 'இயக்கத்தைக் குறைக்க (Reduce 3D Motion)'}
            aria-label={reducedMotion ? 'Enable full motion' : 'Reduce motion'}
            className={`p-2 rounded-sm border transition-all ${
              reducedMotion
                ? 'border-[#F6D889] bg-[#C9A45C]/20 text-[#F6D889]'
                : 'border-[#C9A45C]/30 bg-[#260B0D]/50 text-[#C9A45C] hover:text-[#F6D889]'
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Replay Intro */}
          <button
            onClick={onReplayIntro}
            title="அறிமுகக் காட்சியை மீண்டும் காண்க (Replay Intro Animation)"
            aria-label="Replay intro animation"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-[#C9A45C]/30 bg-[#260B0D]/50 text-xs text-[#E8D6AD] hover:text-[#F6D889] hover:border-[#F6D889] transition-all font-cinzel"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F6D889]" />
            <span className="hidden xl:inline">Intro</span>
          </button>

          {/* Edit College Info button */}
          <button
            onClick={onOpenDeptModal}
            title="துறை விவரங்களை மாற்றியமைக்க (Configure College Info)"
            aria-label="Configure college and department information"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#C9A45C]/60 bg-gradient-to-r from-[#260B0D] to-[#3b1215] text-xs font-tamil-serif text-[#F6D889] hover:border-[#F6D889] shadow-sm transition-all"
          >
            <Settings2 className="w-3.5 h-3.5 text-[#F6D889]" />
            <span>துறை தகவல்</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleAudioToggle}
            aria-label="Toggle sound"
            className="p-2 border border-[#C9A45C]/30 text-[#C9A45C] rounded-sm"
          >
            {isAudioOn ? <Volume2 className="w-4 h-4 text-[#F6D889]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-sm border border-[#C9A45C]/40 bg-[#260B0D]/80 text-[#F6D889]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090706]/98 border-b border-[#C9A45C]/30 px-6 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#260B0D] text-[#F6D889] font-bold border-l-4 border-[#F6D889]'
                      : 'text-[#E8D6AD] hover:bg-[#1a080a] hover:text-[#F6D889]'
                  }`}
                >
                  <span className="font-tamil-serif text-base">{item.tamil}</span>
                  <span className="font-cinzel text-xs text-[#77716A]">{item.english}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#C9A45C]/20 flex flex-wrap gap-2 justify-between">
            <button
              onClick={onReplayIntro}
              className="flex-1 py-2 px-3 border border-[#C9A45C]/30 bg-[#260B0D]/60 text-xs text-center text-[#F6D889] font-tamil-serif rounded-sm"
            >
              Intro மீளக்காண்க
            </button>
            <button
              onClick={onOpenDeptModal}
              className="flex-1 py-2 px-3 border border-[#F6D889]/60 bg-[#C9A45C]/20 text-xs text-center text-[#F6D889] font-tamil-serif font-bold rounded-sm"
            >
              துறை தகவல்களை மாற்று
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
