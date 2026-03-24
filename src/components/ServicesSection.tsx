"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Shield, Tv, BellRing, Zap, Key, Cog } from "lucide-react";

const services = [
  {
    title: "CFTV & Câmeras",
    desc: "Monitoramento HD 24h com acesso remoto pelo celular. Câmeras inteligentes com detecção de movimento e visão noturna.",
    icon: Tv,
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "Alarmes Inteligentes",
    desc: "Sensores de presença, abertura e vibração com alerta instantâneo no seu smartphone.",
    icon: BellRing,
    span: "",
    featured: false,
  },
  {
    title: "Cerca Elétrica",
    desc: "Proteção perimetral com choque pulsante monitorado e certificação ABNT.",
    icon: Zap,
    span: "",
    featured: false,
  },
  {
    title: "Portão Eletrônico",
    desc: "Automação residencial e industrial com motor de alta performance e controle via app.",
    icon: Key,
    span: "lg:col-span-2",
    featured: false,
  },
  {
    title: "Controle de Acesso",
    desc: "Biometria facial, senha, tag e QR Code para gestão total de entradas.",
    icon: Shield,
    span: "",
    featured: false,
  },
  {
    title: "Automação",
    desc: "Integração de sistemas: iluminação, climatização e segurança em uma única plataforma.",
    icon: Cog,
    span: "",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    },
    []
  );

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-[#0a0f1c] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-[#4f8bff] text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 block"
            >
              Nossos Serviços
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-none"
            >
              Soluções que{" "}
              <span className="text-[#a1a5a9]">blindam</span>
              <br />
              seu patrimônio.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#a1a5a9] text-base md:text-lg leading-relaxed max-w-md"
          >
            Tecnologia de ponta integrada com inteligência. Cada sistema é
            projetado sob medida para a sua necessidade.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              className={`spotlight-card group rounded-2xl border border-white/[0.06] bg-[#0f1528]/80 p-6 md:p-8 
                transition-all duration-300 hover:border-[#4f8bff]/20 hover:-translate-y-1 
                ${s.span} ${s.featured ? "flex flex-col justify-between min-h-[320px]" : ""}`}
            >
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors duration-300
                  ${s.featured
                    ? "bg-[#2d2e6b]/30 border-[#4f8bff]/30 group-hover:bg-[#2d2e6b]/50"
                    : "bg-white/[0.03] border-white/[0.06] group-hover:bg-[#2d2e6b]/20 group-hover:border-[#4f8bff]/20"
                  }`}
                >
                  <s.icon
                    className={`w-5 h-5 ${s.featured ? "text-[#4f8bff]" : "text-[#a1a5a9] group-hover:text-[#4f8bff]"} transition-colors`}
                  />
                </div>
                <h3
                  className={`font-medium tracking-wide mb-3 ${s.featured ? "text-2xl text-white" : "text-lg text-zinc-100"}`}
                >
                  {s.title}
                </h3>
                <p className="text-[#a1a5a9] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {s.featured && (
                <div className="mt-8 relative z-10">
                  <div className="flex items-center gap-3 text-[#4f8bff] text-sm font-medium group-hover:gap-4 transition-all">
                    <span>Saiba mais</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
