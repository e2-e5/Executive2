import React from 'react';

export function Problem() {
  return (
    <section className="w-full bg-[#0a1114] border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">Проблема</span>
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            Бизнес растёт быстрее, <br className="hidden md:block"/>
            <span className="text-slate-500">чем управляемость.</span>
          </h2>
          
          <div className="flex flex-col gap-6 mt-6">
            <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed max-w-2xl border-l-4 border-red-500/50 pl-6">
              Собственник принимает десятки решений в день.<br/>
              Команда перегружена.<br/>
              Данные разрознены.<br/>
              Исполнение нестабильно.
            </p>
            
            <p className="text-primary text-lg md:text-xl font-medium max-w-2xl bg-primary/5 p-6 rounded-xl border border-primary/20">
              Ограничение возникает не из-за нехватки идей, а из-за сложности системы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
