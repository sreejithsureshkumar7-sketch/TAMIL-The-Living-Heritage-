import React, { useState, useMemo } from 'react';
import {
  UYIR_EZHUTHUKAL,
  MEI_EZHUTHUKAL,
  AYTHAM_EZHUTHU,
  generateUyirmeiEzhuthukal,
  TamilLetter,
} from '../data/tamilData';
import { Volume2, Sparkles, Search, Layers, BookA, Info } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

type FilterType = 'all' | 'uyir' | 'mei' | 'uyirmei' | 'aytham';

export const LetterExplorer: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('uyir');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Default selected character: 'ழ' (The iconic Tamil unique retroflex approximant)
  const defaultLetter = useMemo(() => {
    return MEI_EZHUTHUKAL.find(m => m.char === 'ழ்') || UYIR_EZHUTHUKAL[0];
  }, []);

  const [selectedLetter, setSelectedLetter] = useState<TamilLetter>(defaultLetter);

  // Cached Uyirmei letters (216 items)
  const uyirmeiList = useMemo(() => generateUyirmeiEzhuthukal(), []);

  // Filter list based on selected tab and search
  const currentLetters = useMemo(() => {
    let list: TamilLetter[] = [];
    if (activeFilter === 'all') {
      list = [...UYIR_EZHUTHUKAL, ...MEI_EZHUTHUKAL, AYTHAM_EZHUTHU, ...uyirmeiList];
    } else if (activeFilter === 'uyir') {
      list = UYIR_EZHUTHUKAL;
    } else if (activeFilter === 'mei') {
      list = MEI_EZHUTHUKAL;
    } else if (activeFilter === 'uyirmei') {
      list = uyirmeiList;
    } else if (activeFilter === 'aytham') {
      list = [AYTHAM_EZHUTHU];
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.trim().toLowerCase();
    return list.filter(
      (item) =>
        item.char.includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.transliteration.toLowerCase().includes(query) ||
        item.exampleWord.toLowerCase().includes(query)
    );
  }, [activeFilter, searchQuery, uyirmeiList]);

  const handleSelectLetter = (item: TamilLetter) => {
    setSelectedLetter(item);
    soundEngine.speakTamil(item.char);
  };

  const handlePlayVoice = (char: string) => {
    soundEngine.speakTamil(char);
  };

  return (
    <section id="letters" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/60 text-xs text-[#F6D889] font-cinzel mb-4">
          <BookA className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>அகர முதல எழுத்தெல்லாம்</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-tamil-serif text-[#F6D889] tracking-tight drop-shadow-[0_2px_20px_rgba(201,164,92,0.3)]">
          தமிழ் எழுத்துகளின் உலகம்
        </h2>
        <p className="mt-4 text-base sm:text-xl text-[#E8D6AD]/90 font-tamil-serif leading-relaxed">
          மொத்தம் 247 எழுத்துகள்: உயிரெழுத்துகள் (12), மெய்யெழுத்துகள் (18), உயிர்மெய் (216), ஆய்தம் (1).
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6" />
      </div>

      {/* Main Letter Explorer Layout: Side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Focused Showcase Card for Selected Letter */}
        <div className="lg:col-span-5 stone-panel p-6 sm:p-10 rounded-sm border-2 border-[#C9A45C]/50 relative overflow-hidden sticky top-28 shadow-2xl">
          {/* Subtle glowing halo */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#F6D889]/15 blur-3xl pointer-events-none rounded-full" />

          {/* Letter Category Pill */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-tamil-serif text-[#F6D889] font-medium">
              {selectedLetter.category === 'vowel' && 'உயிரெழுத்து'}
              {selectedLetter.category === 'consonant' && 'மெய்யெழுத்து'}
              {selectedLetter.category === 'combined' && 'உயிர்மெய் எழுத்து'}
              {selectedLetter.category === 'aytham' && 'ஆய்த எழுத்து'}
              {selectedLetter.subCategory && ` • ${selectedLetter.subCategory}`}
            </span>

            <button
              onClick={() => handlePlayVoice(selectedLetter.char)}
              title="எழுத்து ஒலியைக் கேட்க (Listen to Letter Pronunciation)"
              aria-label={`Pronounce ${selectedLetter.char}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#C9A45C]/20 border border-[#C9A45C]/60 text-xs font-tamil-serif text-[#F6D889] hover:bg-[#C9A45C] hover:text-[#090706] transition-all"
            >
              <Volume2 className="w-4 h-4" />
              <span>உச்சரிப்பு</span>
            </button>
          </div>

          {/* Hero Typography of Selected Letter */}
          <div className="my-6 text-center">
            <div className="inline-block p-4 sm:p-6 rounded-md bg-[#090706]/70 border border-[#C9A45C]/30 shadow-inner">
              <span
                style={{ fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', serif" }}
                className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#F6D889] to-[#C9A45C] drop-shadow-[0_4px_30px_rgba(246,216,137,0.5)]"
              >
                {selectedLetter.char}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold font-tamil-serif text-[#F6D889]">
              {selectedLetter.name}
            </h3>
            <p className="text-sm uppercase font-cinzel tracking-widest text-[#C9A45C]">
              Phonetic: /{selectedLetter.transliteration}/
            </p>
          </div>

          {/* Linguistic Classification & Example */}
          <div className="space-y-4 pt-6 border-t border-[#C9A45C]/30 text-sm font-tamil-serif">
            {selectedLetter.exampleWord && (
              <div className="p-3.5 rounded-sm bg-[#090706]/60 border border-[#C9A45C]/25">
                <span className="block text-xs uppercase font-cinzel text-[#C9A45C] tracking-wider mb-1">
                  எடுத்துக்காட்டுச் சொல் (Example Word):
                </span>
                <span className="text-lg font-bold text-[#F6D889]">
                  {selectedLetter.exampleWord}
                </span>
                <span className="block text-xs text-[#E8D6AD]/80 mt-0.5">
                  பொருள்: {selectedLetter.exampleMeaning}
                </span>
              </div>
            )}

            {selectedLetter.vowelBase && selectedLetter.consonantBase && (
              <div className="p-3 rounded-sm bg-[#260B0D]/50 border border-[#C9A45C]/20 text-xs flex justify-between items-center">
                <span className="text-[#E8D6AD]/80">உயிர் + மெய் சேர்க்கை:</span>
                <span className="font-bold text-[#F6D889] text-sm">
                  {selectedLetter.consonantBase} + {selectedLetter.vowelBase} = {selectedLetter.char}
                </span>
              </div>
            )}

            <div className="flex items-start gap-2 text-xs text-[#E8D6AD]/75 pt-2">
              <Info className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
              <span>
                வலப்புறம் உள்ள பட்டியலிலிருந்து பிற எழுத்துகளைத் தேர்ந்தெடுத்து அவற்றின் வடிவம், ஒலி மற்றும் பயன்பாட்டை அறியலாம்.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Interactive Filter Tabs & Letter Grid */}
        <div className="lg:col-span-7 space-y-6">
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="flex flex-wrap gap-1.5 p-1 rounded-sm bg-[#260B0D]/70 border border-[#C9A45C]/30">
              <button
                onClick={() => setActiveFilter('uyir')}
                className={`px-3 py-1.5 text-xs font-tamil-serif rounded-sm transition-all ${
                  activeFilter === 'uyir'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD] hover:text-[#F6D889]'
                }`}
              >
                உயிரெழுத்துகள் (12)
              </button>
              <button
                onClick={() => setActiveFilter('mei')}
                className={`px-3 py-1.5 text-xs font-tamil-serif rounded-sm transition-all ${
                  activeFilter === 'mei'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD] hover:text-[#F6D889]'
                }`}
              >
                மெய்யெழுத்துகள் (18)
              </button>
              <button
                onClick={() => setActiveFilter('uyirmei')}
                className={`px-3 py-1.5 text-xs font-tamil-serif rounded-sm transition-all ${
                  activeFilter === 'uyirmei'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD] hover:text-[#F6D889]'
                }`}
              >
                உயிர்மெய் (216)
              </button>
              <button
                onClick={() => setActiveFilter('aytham')}
                className={`px-3 py-1.5 text-xs font-tamil-serif rounded-sm transition-all ${
                  activeFilter === 'aytham'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD] hover:text-[#F6D889]'
                }`}
              >
                ஆய்தம்: ஃ (1)
              </button>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-tamil-serif rounded-sm transition-all ${
                  activeFilter === 'all'
                    ? 'bg-[#C9A45C] text-[#090706] font-bold shadow-md'
                    : 'text-[#E8D6AD] hover:text-[#F6D889]'
                }`}
              >
                அனைத்தும் (247)
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A45C]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="எழுத்தைத் தேடுக..."
                aria-label="Search Tamil letter"
                className="w-full sm:w-44 pl-9 pr-3 py-1.5 rounded-sm bg-[#090706]/80 border border-[#C9A45C]/40 text-xs text-[#E8D6AD] placeholder:text-[#77716A] focus:outline-none focus:border-[#F6D889]"
              />
            </div>
          </div>

          {/* Letter Matrix / Grid */}
          <div className="stone-panel p-4 sm:p-6 rounded-sm border border-[#C9A45C]/30 max-h-[520px] overflow-y-auto">
            <div className="flex items-center justify-between text-xs text-[#C9A45C] font-cinzel mb-4 pb-2 border-b border-[#C9A45C]/20">
              <span className="flex items-center gap-1.5 font-tamil-serif">
                <Layers className="w-3.5 h-3.5" />
                <span>காணப்படும் எழுத்துகள்: {currentLetters.length}</span>
              </span>
              <span>CLICK ANY LETTER TO AUDIT & LISTEN</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
              {currentLetters.map((item, idx) => {
                const isSelected = selectedLetter.char === item.char;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectLetter(item)}
                    aria-label={`Select letter ${item.char} (${item.name})`}
                    className={`h-14 sm:h-16 rounded-sm flex flex-col items-center justify-center transition-all duration-200 border relative group focus:outline-none focus:ring-1 focus:ring-[#F6D889] ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#C9A45C] to-[#260B0D] border-[#F6D889] text-[#FFFDF7] shadow-[0_0_15px_rgba(246,216,137,0.5)] scale-105 z-10'
                        : 'bg-[#090706]/70 border-[#C9A45C]/25 text-[#E8D6AD] hover:border-[#C9A45C] hover:bg-[#260B0D]/40 hover:text-[#F6D889]'
                    }`}
                  >
                    <span
                      style={{ fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', serif" }}
                      className="font-bold text-xl sm:text-2xl leading-none"
                    >
                      {item.char}
                    </span>
                    <span className="text-[9px] font-cinzel tracking-tight text-[#C9A45C] group-hover:text-[#F6D889]">
                      {item.transliteration}
                    </span>
                  </button>
                );
              })}
            </div>

            {currentLetters.length === 0 && (
              <div className="text-center py-12 text-[#77716A] font-tamil-serif">
                எழுத்துகள் ஏதும் பொருந்தவில்லை. வேறு எழுத்தைத் தேடவும்.
              </div>
            )}
          </div>

          {/* Consonant Threefold Sub-classification info */}
          {activeFilter === 'mei' && (
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-tamil-serif">
              <div className="p-2.5 rounded-sm bg-[#260B0D]/50 border border-[#C9A45C]/30">
                <span className="block font-bold text-[#F6D889]">வல்லினம் (6)</span>
                <span className="text-[#E8D6AD]/75 text-[11px]">க், ச், ட், த், ப், ற்</span>
              </div>
              <div className="p-2.5 rounded-sm bg-[#260B0D]/50 border border-[#C9A45C]/30">
                <span className="block font-bold text-[#F6D889]">மெல்லினம் (6)</span>
                <span className="text-[#E8D6AD]/75 text-[11px]">ங், ஞ், ண், ந், ம், ன்</span>
              </div>
              <div className="p-2.5 rounded-sm bg-[#260B0D]/50 border border-[#C9A45C]/30">
                <span className="block font-bold text-[#F6D889]">இடையினம் (6)</span>
                <span className="text-[#E8D6AD]/75 text-[11px]">ய், ர், ல், வ், ழ், ள்</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
