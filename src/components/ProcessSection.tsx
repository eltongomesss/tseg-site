"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Wrench, MonitorCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Análise de Risco",
    desc: "Visitamos o local, mapeamos vulnerabilidades e identificamos os pontos críticos de proteção.",
    icon: Search,
  },
  {
    num: "02",
    title: "Projeto Sob Medida",
    desc: "Desenhamos a solução ideal com os equipamentos certos para cada área do seu imóvel.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Instalação Profissional",
    desc: "Técnicos certificados executam a instalação com acabamento limpo e sem improvisos.",
    icon: Wrench,
  },
  {
    num: "04",
    title: "Monitoramento Ativo",
    desc: "Sistema funcionando 24/7 com acesso remoto, alertas em tempo real e suporte dedicado.",
    icon: MonitorCheck,
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-[#0a0f1c] relative overflow-hidden"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2d2e6b]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[#4f8bff] text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 block"
          >
            Como Funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-none"
          >
            Do diagnóstico à{" "}
            <span className="text-[#a1a5a9]">proteção total.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#4f8bff]/40 via-[#2d2e6b]/30 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <span className="text-[#4f8bff]/50 text-xs font-mono tracking-widest">
                      ETAPA {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-2 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#a1a5a9] text-sm md:text-base leading-relaxed max-w-sm inline-block">
                      {step.desc}
                    </p>
                  </div>

                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0f1528] border border-[#2d2e6b]/40 flex items-center justify-center shadow-[0_0_20px_rgba(79,139,255,0.15)]">
                      <step.icon className="w-5 h-5 text-[#4f8bff]" />
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
