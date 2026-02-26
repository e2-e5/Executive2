import React from 'react';
import { Layers, Database, BarChart3, Users, Target, CheckCircle2 } from 'lucide-react';

export function Concept() {
  return (
    <section className="w-full bg-[#111a1f] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Концепт продукта</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Две системы внутри <br className="hidden md:block"/>
            <span className="text-primary">одной платформы</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="group flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-white text-2xl font-bold">Система принятия решений</h3>
            </div>
            
            <ul className="flex flex-col gap-5 relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Анализирует данные из разных источников</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Подсвечивает неочевидные зоны роста</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Моделирует сценарии</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Фиксирует управленческие решения</span>
              </li>
            </ul>
          </div>
          
          <div className="group flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-white text-2xl font-bold">Система исполнения решений</h3>
            </div>
            
            <ul className="flex flex-col gap-5 relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Превращает решения в задачи</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Контролирует выполнение</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Отслеживает KPI</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-lg">Доводит до результата</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
