/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Tamil3DCanvas } from './components/Tamil3DCanvas';
import { CinematicIntro } from './components/CinematicIntro';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { LiteratureSection } from './components/LiteratureSection';
import { HistorySection } from './components/HistorySection';
import { LetterExplorer } from './components/LetterExplorer';
import { CultureSection } from './components/CultureSection';
import { AboutDeptSection } from './components/AboutDeptSection';
import { DeptConfigModal } from './components/DeptConfigModal';
import { Footer } from './components/Footer';
import { CollegeDeptConfig, DEFAULT_COLLEGE_DEPT_CONFIG } from './data/tamilData';

export default function App() {
  // Check url params for autostart / skipIntro
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1' || params.get('skipIntro') === '1') {
        return false;
      }
      return sessionStorage.getItem('tamil_heritage_intro_seen') !== 'true';
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // College & Department Information State with localStorage persistence
  const [deptConfig, setDeptConfig] = useState<CollegeDeptConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tamil_dept_config');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return DEFAULT_COLLEGE_DEPT_CONFIG;
        }
      }
    }
    return DEFAULT_COLLEGE_DEPT_CONFIG;
  });

  const [isDeptModalOpen, setIsDeptModalOpen] = useState<boolean>(false);

  // IntersectionObserver to sync active section during scroll
  useEffect(() => {
    const sectionIds = ['hero', 'literature', 'history', 'letters', 'culture', 'about'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [showIntro]);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('tamil_heritage_intro_seen');
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveConfig = (newConfig: CollegeDeptConfig) => {
    setDeptConfig(newConfig);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tamil_dept_config', JSON.stringify(newConfig));
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090706] text-[#E8D6AD] selection:bg-[#C9A45C]/30 selection:text-[#F6D889] overflow-x-hidden font-sans">
      {/* 3D WebGL Canvas Layer (Continuous Floating Tamil Letters & Dust Particles) */}
      <Tamil3DCanvas reducedMotion={reducedMotion} />

      {/* Cinematic Intro Modal / Sequence */}
      {showIntro && (
        <CinematicIntro onEnter={() => setShowIntro(false)} />
      )}

      {/* Main Website Experience */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navigation
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onReplayIntro={handleReplayIntro}
          onOpenDeptModal={() => setIsDeptModalOpen(true)}
          reducedMotion={reducedMotion}
          onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <HeroSection
            onExploreHeritage={() => handleNavigate('history')}
            onExploreLiterature={() => handleNavigate('literature')}
          />

          {/* Classical Literature Showcase */}
          <LiteratureSection />

          {/* Historical Timeline & Heritage */}
          <HistorySection />

          {/* Interactive Tamil Letter Explorer (247 letters, voice synthesis) */}
          <LetterExplorer />

          {/* Tamil Art & Culture Showcase */}
          <CultureSection />

          {/* About College Tamil Department */}
          <AboutDeptSection
            config={deptConfig}
            onOpenConfigModal={() => setIsDeptModalOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer
          config={deptConfig}
          onNavigate={handleNavigate}
          onReplayIntro={handleReplayIntro}
        />
      </div>

      {/* Department Customization Modal */}
      <DeptConfigModal
        currentConfig={deptConfig}
        isOpen={isDeptModalOpen}
        onClose={() => setIsDeptModalOpen(false)}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
