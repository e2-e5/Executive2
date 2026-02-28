import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Implementation() {
  return (
    <section className="w-full bg-[#0a1114] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Внедрение</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Запуск за 2–4 недели
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
          
          {[
            { step: '01', title: 'Диагностика' },
            { step: '02', title: 'Определение MVP' },
            { step: '03', title: 'Интеграция данных' },
            { step: '04', title: 'Настройка модулей' },
            { step: '05', title: 'Первые управленческие эффекты' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 relative z-10 bg-[#0a1114] p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold font-mono">
                {item.step}
              </div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FinalProps = {
  onCtaClick: () => void;
};

export function Final({onCtaClick}: FinalProps) {
  return (
    <section className="w-full bg-primary py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="text-[#0a1114] text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
          Управленческая мощность <br className="hidden md:block" /> 
          — это выбор
        </h2>
        <div className="text-[#0a1114]/90 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mt-4">
          <p>Можно увеличивать ФОТ. А можно усиливать систему.</p>
          <p className="font-bold text-[#0a1114] mt-2">Запуск за 2–4 недели.</p>
        </div>
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-8 flex items-center justify-center h-16 px-8 text-lg font-bold text-white bg-[#0a1114] hover:bg-[#111a1f] transition-all rounded-xl shadow-xl hover:-translate-y-1 group"
        >
          <span className="mr-3">Протестировать систему</span>
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 text-primary" />
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1114] px-6 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center justify-center w-8 h-8 rounded border border-primary text-primary bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          </div>
          <span className="font-bold tracking-widest text-sm font-display">EXECUTIVE</span>
        </div>
      </div>
    </footer>
  );
}
