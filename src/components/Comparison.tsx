import React from 'react';
import { User, Briefcase, Users, Calculator, AlertCircle } from 'lucide-react';

export function Comparison() {
  return (
    <section className="w-full bg-[#111a1f] border-t border-white/10 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Сравнение</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Сколько стоит управленческая мощность на рынке?
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl">
            EXECUTIVE усиливает два уровня: <span className="text-white font-medium">принятие решений</span> и <span className="text-white font-medium">исполнение решений</span>. В традиционной модели за это отвечают разные роли.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* CEO */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-bold">Генеральный директор</h3>
            </div>
            <div>
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-3">Функция:</h4>
              <ul className="flex flex-col gap-2 text-slate-300">
                <li>• стратегические решения</li>
                <li>• развитие компании</li>
                <li>• приоритеты</li>
              </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-white/10">
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-2">Средняя зарплата:</h4>
              <div className="text-2xl font-bold text-white">400k – 800k ₽ <span className="text-sm font-normal text-slate-500">/ мес</span></div>
            </div>
          </div>

          {/* COO */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-bold">Операционный директор</h3>
            </div>
            <div>
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-3">Функция:</h4>
              <ul className="flex flex-col gap-2 text-slate-300">
                <li>• организация процессов</li>
                <li>• контроль исполнения</li>
                <li>• синхронизация отделов</li>
              </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-white/10">
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-2">Средняя зарплата:</h4>
              <div className="text-2xl font-bold text-white">200k – 400k ₽ <span className="text-sm font-normal text-slate-500">/ мес</span></div>
            </div>
          </div>

          {/* Analytics / PM */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-bold">Команда аналитики / ПМ</h3>
            </div>
            <div>
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-3">Функция:</h4>
              <ul className="flex flex-col gap-2 text-slate-300">
                <li>• анализ данных</li>
                <li>• декомпозиция задач</li>
                <li>• сопровождение проектов</li>
              </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-white/10">
              <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-2">ФОТ на человека:</h4>
              <div className="text-2xl font-bold text-white">150k – 400k ₽ <span className="text-sm font-normal text-slate-500">/ мес</span></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-10">
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold mb-2">Управленческая связка «Решение + Исполнение»</h3>
            <p className="text-slate-400">В среднем для бизнеса (без учёта налогов и накладных расходов)</p>
          </div>
          <div className="flex items-center gap-4 bg-[#0a1114] px-8 py-6 rounded-xl border border-white/10">
            <Calculator className="w-8 h-8 text-primary" />
            <div className="text-3xl md:text-4xl font-black text-primary">от 600k до 1.5M ₽</div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
          <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
          <p className="text-slate-300 text-lg leading-relaxed">
            <span className="text-white font-bold">EXECUTIVE не заменяет собственника.</span> Платформа усиливает управленческую функцию и снижает зависимость от линейного роста ФОТ.
          </p>
        </div>
      </div>
    </section>
  );
}