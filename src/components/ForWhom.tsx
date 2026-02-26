import React from 'react';
import { Target, TrendingUp, Database, Zap } from 'lucide-react';

export function ForWhom() {
  return (
    <section className="w-full bg-[#111a1f] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Для кого</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Для растущих и <br className="hidden md:block"/>
            <span className="text-primary">амбициозных бизнесов</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            Подходит компаниям, которые:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-lg">Хотят захватывать рынок</h3>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-lg">Работают в конкурентной среде</h3>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-lg">Уже имеют CRM и данные</h3>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-lg">Стремятся ускорить масштабирование</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
