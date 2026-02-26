import React from 'react';
import { CheckCircle2, Info, Zap, Layers } from 'lucide-react';

export function Economics() {
  return (
    <section className="w-full bg-[#0a1114] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Экономика подписки</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Сколько управленческой мощности вы получаете?
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            Внутри тарифа — <span className="text-white font-medium">AI-нормочасы</span>. Это сопоставимо с рабочими часами сотрудников.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Base */}
          <div className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-primary/30 transition-all duration-300">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Базовая подписка</h3>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black text-white">60 000 ₽</span>
                <span className="text-slate-500 mb-1">/ месяц</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold">
                <Zap className="w-5 h-5" />
                ≈ 500 нормо-часов в неделю
              </div>
              <p className="text-slate-400 mt-3 text-sm">аналитической и управленческой работы</p>
            </div>
            
            <div className="h-px w-full bg-white/10"></div>
            
            <div>
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-4">Это эквивалент:</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-300">3–5 сотрудников среднего уровня</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-300">или одной сильной проектной команды</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Advanced */}
          <div className="flex flex-col gap-8 rounded-2xl border border-primary/50 bg-primary/5 p-8 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-[#0a1114] text-xs font-bold px-4 py-1 rounded-bl-lg">ПРОДВИНУТАЯ</div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Продвинутая подписка</h3>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black text-primary">120 000 ₽</span>
                <span className="text-slate-500 mb-1">/ месяц</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold">
                <Zap className="w-5 h-5" />
                ≈ 1000 нормо-часов в неделю
              </div>
            </div>
            
            <div className="h-px w-full bg-white/10"></div>
            
            <div>
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-4">Это сопоставимо с:</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-300">полноценным управленческим блоком</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-300">постоянной параллельной аналитикой</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-300">работой сразу в нескольких контурах</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-xl">Что такое нормо-час?</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> анализ данных</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> построение гипотез</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> моделирование сценариев</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> декомпозиция задач</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> сопровождение исполнения</li>
            </ul>
            <p className="text-slate-400 text-sm italic">Разные задачи потребляют разный объём ресурса.</p>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-xl">Платформа работает параллельно</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              <span className="text-white font-bold">500 часов — это не линейная работа одного человека.</span><br/>
              Это распределённая вычислительная и аналитическая мощность, способная решать десятки задач одновременно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
