import React, { useState } from 'react';
import { TAMIL_HISTORICAL_TIMELINE, HistoricalMilestone } from '../data/tamilData';
import { History, Landmark, Scroll, Castle, Compass, BookOpen, Award, CheckCircle2, X } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

export const HistorySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<HistoricalMilestone | null>(null);

  const getThemeIcon = (name: string) => {
    switch (name) {
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Scroll': return <Scroll className="w-5 h-5" />;
      case 'Castle': return <Castle className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      default: return <History className="w-5 h-5" />;
    }
  };

  const handleMilestoneClick = (item: HistoricalMilestone) => {
    soundEngine.playTempleChime();
    setSelectedMilestone(item);
  };

  return (
    <section id="history" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/60 text-xs text-[#F6D889] font-cinzel mb-4">
          <History className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>வரலாற்றுப் பெருவெளிகள்</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-tamil-serif text-[#F6D889] tracking-tight drop-shadow-[0_2px_20px_rgba(201,164,92,0.3)]">
          தமிழர் வரலாறு — காலத்தை வென்ற பயணம்
        </h2>
        <p className="mt-4 text-base sm:text-xl text-[#E8D6AD]/90 font-tamil-serif leading-relaxed">
          "கீழடி அகழாய்வு முதல் விண்வெளித் தமிழ் வரை அழியாத சுவடுகள்."
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6" />
      </div>

      {/* Interactive Timeline Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Golden Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#C9A45C]/20 via-[#F6D889]/60 to-[#C9A45C]/20 -translate-x-1/2 pointer-events-none" />

        <div className="space-y-12">
          {TAMIL_HISTORICAL_TIMELINE.map((milestone, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Center Node Icon with Golden Pulse */}
                <div
                  onClick={() => handleMilestoneClick(milestone)}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#260B0D] border-2 border-[#C9A45C] flex items-center justify-center text-[#F6D889] shadow-[0_0_15px_rgba(246,216,137,0.4)] group-hover:border-[#F6D889] group-hover:scale-110 cursor-pointer transition-all"
                  role="button"
                  tabIndex={0}
                  aria-label={`Milestone: ${milestone.tamilEraTitle}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleMilestoneClick(milestone);
                  }}
                >
                  {getThemeIcon(milestone.iconName)}
                </div>

                {/* Content Box */}
                <div
                  className={`ml-14 md:ml-0 md:w-[46%] ${
                    isEven ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'
                  }`}
                >
                  <div
                    onClick={() => handleMilestoneClick(milestone)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleMilestoneClick(milestone);
                    }}
                    className="stone-panel p-6 rounded-sm cursor-pointer border border-[#C9A45C]/30 hover:border-[#F6D889] transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#F6D889]"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-cinzel text-[#F6D889] mb-2 font-semibold">
                      {milestone.yearOrEra}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold font-tamil-serif text-[#F6D889] group-hover:text-[#FFF5DB] transition-colors">
                      {milestone.tamilEraTitle}
                    </h3>

                    <h4 className="text-xs uppercase font-cinzel tracking-wider text-[#C9A45C] mt-0.5 mb-3">
                      {milestone.englishTitle}
                    </h4>

                    <p className="text-sm font-tamil-serif text-[#E8D6AD]/85 leading-relaxed">
                      {milestone.summaryTamil}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#C9A45C]/20 flex items-center gap-1.5 text-xs text-[#C9A45C] group-hover:text-[#F6D889]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>தொல்லியல் சான்றுகளைக் காண்க</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Archaeological Fact Modal */}
      {selectedMilestone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#260B0D] to-[#090706] border-2 border-[#C9A45C] rounded-sm p-6 sm:p-8 text-[#E8D6AD] shadow-[0_0_50px_rgba(201,164,92,0.3)]">
            <button
              onClick={() => setSelectedMilestone(null)}
              aria-label="Close historical details"
              className="absolute top-4 right-4 p-2 border border-[#C9A45C]/40 rounded-sm text-[#C9A45C] hover:text-[#F6D889] bg-[#090706]/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-[#090706] border border-[#C9A45C]/50 text-xs font-cinzel text-[#F6D889] mb-3">
              {selectedMilestone.yearOrEra}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold font-tamil-serif text-[#F6D889]">
              {selectedMilestone.tamilEraTitle}
            </h3>
            <p className="text-sm font-cinzel text-[#C9A45C] mt-0.5">
              {selectedMilestone.englishTitle}
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-sm bg-[#090706]/70 border border-[#C9A45C]/30">
                <span className="block text-xs font-bold text-[#F6D889] uppercase font-cinzel tracking-wider mb-1">
                  அறிவியல் மற்றும் வரலாற்றுச் சான்று (Scientific Evidence):
                </span>
                <p className="text-sm sm:text-base font-tamil-serif text-[#E8D6AD] leading-relaxed">
                  {selectedMilestone.archaeologicalFact}
                </p>
              </div>

              <div>
                <span className="block text-xs font-bold text-[#C9A45C] uppercase font-cinzel tracking-wider mb-1">
                  ஆங்கில விவரம் (Historical Summary):
                </span>
                <p className="text-sm text-[#E8D6AD]/80 italic leading-relaxed">
                  "{selectedMilestone.summaryEnglish}"
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C9A45C]/30 flex justify-end">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="px-5 py-2 bg-[#C9A45C] text-[#090706] font-bold font-tamil-serif rounded-sm hover:bg-[#F6D889] transition-colors"
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
