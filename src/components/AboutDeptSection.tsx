import React from 'react';
import { CollegeDeptConfig } from '../data/tamilData';
import { GraduationCap, Mail, Phone, Globe, MapPin, Award, CheckCircle2, Settings2, UserCheck } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface AboutDeptSectionProps {
  config: CollegeDeptConfig;
  onOpenConfigModal: () => void;
}

export const AboutDeptSection: React.FC<AboutDeptSectionProps> = ({
  config,
  onOpenConfigModal,
}) => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#260B0D]/60 text-xs text-[#F6D889] font-cinzel mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-[#F6D889]" />
          <span>கல்லூரித் தமிழாய்வுத் துறை</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-tamil-serif text-[#F6D889] tracking-tight drop-shadow-[0_2px_20px_rgba(201,164,92,0.3)]">
          தமிழை அறிதல், மரபைக் காத்தல்
        </h2>
        <p className="mt-4 text-base sm:text-xl text-[#E8D6AD]/90 font-tamil-serif leading-relaxed">
          "{config.mottoTamil}"
        </p>
        <p className="text-xs uppercase font-cinzel tracking-widest text-[#C9A45C] mt-1">
          {config.mottoEnglish}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mx-auto mt-6" />
      </div>

      {/* College & Department Overview Card */}
      <div className="stone-panel p-6 sm:p-10 rounded-sm border-2 border-[#C9A45C]/50 relative mb-12 shadow-2xl">
        {/* Floating Customizer Trigger */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => {
              soundEngine.playTempleChime();
              onOpenConfigModal();
            }}
            aria-label="Edit College & Department Configuration"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#260B0D] border border-[#C9A45C]/60 text-xs font-tamil-serif text-[#F6D889] hover:bg-[#C9A45C] hover:text-[#090706] transition-all shadow-md group"
          >
            <Settings2 className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            <span>துறை விவரங்களைத் திருத்து</span>
          </button>
        </div>

        <div className="max-w-4xl">
          <span className="text-xs font-cinzel uppercase tracking-widest text-[#C9A45C] block mb-1">
            ESTABLISHED {config.establishedYear} // HIGHER EDUCATION IN TAMIL HERITAGE
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-tamil-serif text-[#F6D889]">
            {config.deptNameTamil}
          </h3>
          <h4 className="text-sm sm:text-base font-tamil-serif text-[#E8D6AD]/90 mt-1">
            {config.collegeNameTamil} ({config.collegeNameEnglish})
          </h4>

          <div className="w-16 h-0.5 bg-[#C9A45C]/40 my-6" />

          {/* Department Intro */}
          <p className="text-base sm:text-lg text-[#E8D6AD] leading-relaxed font-tamil-serif">
            {config.introTextTamil}
          </p>
          <p className="text-sm text-[#E8D6AD]/75 italic mt-3 leading-relaxed">
            "{config.introTextEnglish}"
          </p>
        </div>

        {/* Head of Department Message Card */}
        <div className="mt-10 p-5 sm:p-6 rounded-sm bg-[#090706]/70 border border-[#C9A45C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#260B0D] to-[#090706] border-2 border-[#C9A45C] flex items-center justify-center text-[#F6D889] shrink-0 shadow-[0_0_15px_rgba(201,164,92,0.3)]">
              <UserCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="block text-xs uppercase font-cinzel tracking-wider text-[#C9A45C]">
                துறைத் தலைவர் (Head of Department)
              </span>
              <span className="block text-lg font-bold font-tamil-serif text-[#F6D889]">
                {config.hodName}
              </span>
              <span className="block text-xs text-[#E8D6AD]/75 font-tamil-serif">
                {config.hodQualification}
              </span>
            </div>
          </div>

          <div className="text-left sm:text-right text-xs text-[#C9A45C] font-cinzel">
            <span>ஆராய்ச்சி வழிகாட்டல் & ஓலைச்சுவடி பாதுகாப்பு</span>
          </div>
        </div>
      </div>

      {/* Two Columns: Educational Objectives & Academic Degree Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Objectives */}
        <div className="stone-panel p-6 sm:p-8 rounded-sm border border-[#C9A45C]/35">
          <div className="flex items-center gap-2 mb-4 text-[#F6D889]">
            <Award className="w-5 h-5 text-[#C9A45C]" />
            <h4 className="text-xl font-bold font-tamil-serif">
              கல்வி நோக்கங்கள் (Educational Objectives)
            </h4>
          </div>

          <ul className="space-y-3.5">
            {config.objectives.map((obj, oIdx) => (
              <li key={oIdx} className="flex items-start gap-3 text-sm font-tamil-serif text-[#E8D6AD]/90">
                <CheckCircle2 className="w-4 h-4 text-[#F6D889] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Degree Programs Offered */}
        <div className="stone-panel p-6 sm:p-8 rounded-sm border border-[#C9A45C]/35">
          <div className="flex items-center gap-2 mb-4 text-[#F6D889]">
            <GraduationCap className="w-5 h-5 text-[#C9A45C]" />
            <h4 className="text-xl font-bold font-tamil-serif">
              வழங்கப்படும் பட்டப்படிப்புகள் (Programmes Offered)
            </h4>
          </div>

          <div className="space-y-3">
            {config.degreesOffered.map((deg, dIdx) => (
              <div
                key={dIdx}
                className="p-3 rounded-xs bg-[#090706]/60 border border-[#C9A45C]/20 flex items-center justify-between"
              >
                <div>
                  <span className="block text-sm font-bold font-tamil-serif text-[#F6D889]">
                    {deg.title}
                  </span>
                  <span className="block text-xs text-[#E8D6AD]/70">
                    நிலை: {deg.level} • கால அளவு: {deg.duration}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-sm bg-[#260B0D] border border-[#C9A45C]/40 text-xs font-cinzel text-[#F6D889]">
                  {deg.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & College Location Information */}
      <div className="stone-panel p-6 sm:p-8 rounded-sm border border-[#C9A45C]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-tamil-serif">
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
          <div>
            <span className="block font-bold text-[#F6D889] uppercase font-cinzel mb-0.5">மின்னஞ்சல் (Email):</span>
            <a href={`mailto:${config.contactEmail}`} className="text-[#E8D6AD] hover:text-[#F6D889] underline">
              {config.contactEmail}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
          <div>
            <span className="block font-bold text-[#F6D889] uppercase font-cinzel mb-0.5">தொலைபேசி (Phone):</span>
            <span className="text-[#E8D6AD]">{config.contactPhone}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
          <div>
            <span className="block font-bold text-[#F6D889] uppercase font-cinzel mb-0.5">கல்லூரி இணையதளம்:</span>
            <a href={config.collegeWebsite} target="_blank" rel="noopener noreferrer" className="text-[#E8D6AD] hover:text-[#F6D889] underline truncate block max-w-[200px]">
              {config.collegeWebsite}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
          <div>
            <span className="block font-bold text-[#F6D889] uppercase font-cinzel mb-0.5">முகவரி (Campus):</span>
            <span className="text-[#E8D6AD]/85 leading-relaxed">{config.addressTamil}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
