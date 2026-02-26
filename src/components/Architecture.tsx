import React from 'react';
import { Layers, Database, BarChart3, Users, Target, Briefcase, LineChart } from 'lucide-react';

export function Architecture() {
  return (
    <section className="w-full bg-[#0a1114] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Архитектура</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Модульная платформа
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            Каждый бизнес получает свою конфигурацию.
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {/* Integration */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <h3 className="text-white text-2xl font-bold flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Интеграция в существующую инфраструктуру
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {['CRM', '1С', 'Таблицы', 'BI', 'Внутренние системы'].map((item, i) => (
                <div key={i} className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-slate-300 font-medium hover:bg-white/10 hover:border-primary/50 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Base Module */}
            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-primary/30 bg-primary/5 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)]">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary" />
                Базовый модуль
              </h3>
              <div className="flex flex-col gap-4 mt-4">
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Коммерческий блок</h4>
                    <p className="text-slate-400 text-sm mt-1">Продажи + Маркетинг</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Modules */}
            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Layers className="w-6 h-6 text-slate-400" />
                Дополнительные модули
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">Продукт</h4>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">Финансы</h4>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">Команда</h4>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-3 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">Стратегия</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
