import React, {useState} from 'react';
import {Architecture} from './components/Architecture';
import {Cases} from './components/Cases';
import {Comparison} from './components/Comparison';
import {Concept} from './components/Concept';
import {Economics} from './components/Economics';
import {EasyStart} from './components/EasyStart';
import {Final, Footer, Implementation} from './components/Implementation';
import {ForWhom} from './components/ForWhom';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {LeadModal} from './components/LeadModal';
import {Problem} from './components/Problem';

export default function App() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  const handleOpenLead = () => setIsLeadOpen(true);
  const handleCloseLead = () => setIsLeadOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-[#0a1114] selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero onCtaClick={handleOpenLead} />
        <Problem />
        <Concept />
        <Architecture />
        <Cases />
        <Comparison />
        <Economics />
        <ForWhom />
        <EasyStart />
        <Implementation />
        <Final onCtaClick={handleOpenLead} />
      </main>
      <Footer />
      <LeadModal isOpen={isLeadOpen} onClose={handleCloseLead} />
    </div>
  );
}
