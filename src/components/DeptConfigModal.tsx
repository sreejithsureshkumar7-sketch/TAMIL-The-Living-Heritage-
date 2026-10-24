import React, { useState } from 'react';
import { CollegeDeptConfig, DEFAULT_COLLEGE_DEPT_CONFIG } from '../data/tamilData';
import { X, Save, RotateCcw, Building2 } from 'lucide-react';
import { soundEngine } from '../utils/audioAmbience';

interface DeptConfigModalProps {
  currentConfig: CollegeDeptConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newConfig: CollegeDeptConfig) => void;
}

export const DeptConfigModal: React.FC<DeptConfigModalProps> = ({
  currentConfig,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<CollegeDeptConfig>({ ...currentConfig });

  if (!isOpen) return null;

  const handleChange = (field: keyof CollegeDeptConfig, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_COLLEGE_DEPT_CONFIG });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playTempleChime();
    onSave(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#260B0D] via-[#120708] to-[#090706] border-2 border-[#C9A45C] rounded-sm p-6 sm:p-8 text-[#E8D6AD] shadow-[0_0_60px_rgba(201,164,92,0.3)]">
        <button
          onClick={onClose}
          aria-label="Close configuration modal"
          className="absolute top-5 right-5 p-2 rounded-sm border border-[#C9A45C]/40 text-[#C9A45C] hover:text-[#F6D889] bg-[#090706]/70 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#C9A45C]">
          <Building2 className="w-5 h-5 text-[#F6D889]" />
          <span className="text-xs font-cinzel uppercase tracking-widest">
            College Customizer
          </span>
        </div>
        <h3 id="config-modal-title" className="text-2xl sm:text-3xl font-black font-tamil-serif text-[#F6D889]">
          கல்லூரி & தமிழ்த்துறை தகவல்கள் தொகுப்பு
        </h3>
        <p className="text-xs text-[#E8D6AD]/80 font-tamil-serif mt-1">
          உங்கள் கல்லூரி மற்றும் தமிழாய்வுத் துறையின் பெயர், தலைவர், தொடர்புகளை இங்கு நேரடியாகத் திருத்தி அமைத்துக் கொள்ளலாம்.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-tamil-serif text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                கல்லூரிப் பெயர் (தமிழ்):
              </label>
              <input
                type="text"
                value={formData.collegeNameTamil}
                onChange={(e) => handleChange('collegeNameTamil', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                College Name (English):
              </label>
              <input
                type="text"
                value={formData.collegeNameEnglish}
                onChange={(e) => handleChange('collegeNameEnglish', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                துறைப் பெயர் (தமிழ்):
              </label>
              <input
                type="text"
                value={formData.deptNameTamil}
                onChange={(e) => handleChange('deptNameTamil', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                Department Name (English):
              </label>
              <input
                type="text"
                value={formData.deptNameEnglish}
                onChange={(e) => handleChange('deptNameEnglish', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                துறைத் தலைவர் பெயர் (HOD Name):
              </label>
              <input
                type="text"
                value={formData.hodName}
                onChange={(e) => handleChange('hodName', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                தகுதி மற்றும் அனுபவம் (Qualifications):
              </label>
              <input
                type="text"
                value={formData.hodQualification}
                onChange={(e) => handleChange('hodQualification', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                மின்னஞ்சல் (Email):
              </label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                தொலைபேசி (Phone):
              </label>
              <input
                type="text"
                value={formData.contactPhone}
                onChange={(e) => handleChange('contactPhone', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#F6D889] mb-1">
                கல்லூரி இணையதளம் (URL):
              </label>
              <input
                type="url"
                value={formData.collegeWebsite}
                onChange={(e) => handleChange('collegeWebsite', e.target.value)}
                className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F6D889] mb-1">
              துறை அறிமுக உரை (Department Introduction):
            </label>
            <textarea
              rows={3}
              value={formData.introTextTamil}
              onChange={(e) => handleChange('introTextTamil', e.target.value)}
              className="w-full px-3 py-2 rounded-sm bg-[#090706] border border-[#C9A45C]/40 text-[#E8D6AD] focus:outline-none focus:border-[#F6D889]"
            />
          </div>

          <div className="pt-4 border-t border-[#C9A45C]/30 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-sm border border-[#77716A] text-xs text-[#E8D6AD] hover:border-[#F6D889]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>இயல்புநிலைக்கு மீட்டமை (Reset)</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-sm border border-[#C9A45C]/40 text-xs text-[#E8D6AD]"
              >
                ரத்து (Cancel)
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 rounded-sm bg-gradient-to-r from-[#C9A45C] to-[#F6D889] text-[#090706] font-bold text-xs hover:shadow-[0_0_20px_rgba(246,216,137,0.5)] transition-all"
              >
                <Save className="w-4 h-4" />
                <span>மாற்றங்களைச் சேமிக்க (Save)</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
