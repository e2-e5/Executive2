import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const casesData = [
  {
    title: "Рост заказов без увеличения рекламного бюджета",
    problem: "Клиенты приходят, но повторных покупок мало. Команда считает, что нужно больше лидов.",
    standard: "Увеличить бюджет на рекламу. Добавить новые каналы.",
    aiWork: "Анализирует входные запросы клиентов, путь внутри продукта, финальные отзывы. Выявляет расхождение между ожиданием и полученным результатом.",
    solution: "Скорректирован продукт, обновлены скрипты продаж, добавлен контур возврата клиентов.",
    effect: "Рост заказов за счёт точной работы с системой, а не за счёт расширения трафика."
  },
  {
    title: "Принятие стратегического решения быстрее рынка",
    problem: "Компания рассматривает новый сегмент. Решение откладывается из-за неопределённости.",
    standard: "Месяцы анализа и обсуждений.",
    aiWork: "Анализирует внутренние данные, сопоставляет их с рыночными трендами, моделирует сценарии развития.",
    solution: "Сформирована модель входа в сегмент. Исполнение запущено сразу.",
    effect: "Сокращение времени принятия решения. Повышение уверенности в действиях."
  },
  {
    title: "Исполнение решений без операционного хаоса",
    problem: "Решения принимаются, но «застревают» в команде.",
    standard: "Создать новые регламенты. Усилить контроль.",
    aiWork: "Фиксирует принятое решение, декомпозирует в задачи, отслеживает сроки, сигнализирует о рисках.",
    solution: "Система доводит управленческие решения до финального результата.",
    effect: "Рост предсказуемости и дисциплины исполнения."
  }
];

function CaseContent({ c, index }: { c: any, index: number }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-12 flex justify-between items-end mb-2 lg:mb-8 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Кейс {index + 1}</span>
        </div>
        <div className="text-slate-500 font-mono text-xl">{index + 1} / 3</div>
      </div>
      
      <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
          {c.title}
        </h2>
        <div className="flex flex-col gap-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>
            <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-2">Проблема</h4>
            <p className="text-slate-300 text-base lg:text-lg">{c.problem}</p>
          </div>
          <div className="h-px w-full bg-white/10"></div>
          <div>
            <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-2">Обычный ход</h4>
            <p className="text-slate-400 text-base lg:text-lg">{c.standard}</p>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-6 p-6 lg:p-8 rounded-2xl border border-primary/30 bg-primary/5 shadow-[0_0_30px_rgba(34,211,238,0.05)]">
          <div>
            <h4 className="text-primary text-sm uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Работа AI-системы
            </h4>
            <p className="text-white text-lg lg:text-xl leading-relaxed">{c.aiWork}</p>
          </div>
          <div className="h-px w-full bg-primary/20"></div>
          <div>
            <h4 className="text-primary text-sm uppercase tracking-wider font-bold mb-3">Решение</h4>
            <p className="text-slate-300 text-base lg:text-lg">{c.solution}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5">
          <h4 className="text-slate-500 text-sm uppercase tracking-wider font-bold">Управленческий эффект</h4>
          <p className="text-white text-xl lg:text-2xl font-bold">{c.effect}</p>
        </div>
      </div>
    </div>
  );
}

export function Cases() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666666%"]);

  return (
    <section 
      ref={containerRef} 
      className={`relative w-full bg-[#111a1f] border-t border-white/10 ${isDesktop ? 'h-[300vh]' : 'py-24'}`}
    >
      <div className={`${isDesktop ? 'sticky top-0 h-screen w-full overflow-hidden flex items-center' : 'w-full relative z-10'}`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        {isDesktop ? (
          <motion.div 
            style={{ x }}
            className="flex w-[300vw] h-full items-center"
          >
            {casesData.map((c, index) => (
              <div 
                key={index}
                className="w-screen flex-shrink-0 flex items-center justify-center px-6"
              >
                <CaseContent c={c} index={index} />
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col gap-24 px-6">
            {casesData.map((c, index) => (
              <CaseContent key={index} c={c} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
