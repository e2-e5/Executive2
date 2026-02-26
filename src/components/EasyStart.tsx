import React from 'react';
import { Check, X, PlayCircle, Lightbulb } from 'lucide-react';

export function EasyStart() {
  return (
    <section className="w-full bg-[#111a1f] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Лёгкий старт</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Запуск без сложной подготовки
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What is needed */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3">
              <Check className="w-6 h-6 text-primary" />
              Что нужно для старта:
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span className="text-slate-300 text-lg">Доступ к CRM</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span className="text-slate-300 text-lg">Базовая финансовая информация</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span className="text-slate-300 text-lg">Описание продукта</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="text-xs font-bold">4</span>
                </div>
                <span className="text-slate-300 text-lg">2–3 часа времени собственника на стратегическую сессию</span>
              </li>
            </ul>
          </div>

          {/* What is NOT needed */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3">
              <X className="w-6 h-6 text-red-500" />
              Что НЕ нужно:
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5"></div>
                <span className="text-slate-400 text-lg">перестраивать процессы</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5"></div>
                <span className="text-slate-400 text-lg">переносить данные</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5"></div>
                <span className="text-slate-400 text-lg">обучать команду месяцами</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5"></div>
                <span className="text-slate-400 text-lg">разбираться в технологиях</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-xl">Пилот начинается с диагностики</h4>
            </div>
            <p className="text-slate-400 mb-2">Система сама показывает:</p>
            <ul className="flex flex-col gap-2 text-slate-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> качество данных</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> зоны потери управляемости</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> первые точки роста</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-xl">Важный тезис</h4>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Собственнику не нужно становиться экспертом по AI. <br/>
              Его задача — <span className="text-white font-bold">принимать решения</span>. <br/>
              Система усиливает эту способность.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
