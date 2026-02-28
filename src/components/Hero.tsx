import React from 'react';
import {ArrowRight, Dumbbell, Infinity, Zap} from 'lucide-react';

type HeroProps = {
  onCtaClick: () => void;
};

export function Hero({onCtaClick}: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0a1114] min-h-[calc(100vh-80px)] py-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="w-full max-w-[1440px] px-6 lg:px-12 relative z-10 flex flex-col">
        <div className="flex flex-col gap-8 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 w-fit shadow-[0_0_10px_rgba(34,211,238,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-display">EXECUTIVE AI</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white font-display leading-[1.05] tracking-tight">
            Система повышения <br className="hidden md:block" />
            <span className="text-primary">эффективности бизнеса</span> <br className="hidden md:block" />
            на базе AI
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-6">
            Быстрее принимать решения.<br/>
            Точнее их реализовывать.<br/>
            Расти без раздувания команды.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            <button
              type="button"
              onClick={onCtaClick}
              className="flex items-center justify-center h-14 px-8 text-base font-bold text-[#0a1114] bg-primary hover:bg-primary-hover transition-all rounded shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-0.5"
            >
              Получить стратегическую сессию
            </button>
            <button
              type="button"
              onClick={onCtaClick}
              className="flex items-center justify-center h-14 px-8 text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded group shadow-sm"
            >
              <span className="mr-3">Посмотреть как работает</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-primary" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Скорость</h3>
              <p className="text-slate-400 text-sm">Мгновенный анализ данных и генерация решений</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Мощность</h3>
              <p className="text-slate-400 text-sm">Обработка огромных массивов информации без потерь</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Infinity className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Выносливость</h3>
              <p className="text-slate-400 text-sm">Бесперебойная работа 24/7 без выгорания и ошибок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
