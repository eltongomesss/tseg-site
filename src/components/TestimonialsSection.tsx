"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Almeida",
    role: "Condomínio Ilha do Sol",
    text: "A T-SEG transformou a segurança do nosso condomínio. As câmeras com visão noturna e o sistema de alarme funcionam perfeitamente. Dormimos tranquilos.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Residência Alto Padrão",
    text: "Profissionalismo impecável. O projeto foi personalizado para a minha casa e a instalação ficou limpa. O acesso remoto pelo celular é sensacional.",
    stars: 5,
  },
  {
    name: "Marcos Vinicius",
    role: "Empresa MV Logística",
    text: "Controle de acesso por biometria facial e cerca elétrica monitorada. A T-SEG entregou exatamente o que prometeu, no prazo e com qualidade.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-[#0a0f1c] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2d2e6b]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[#4f8bff] text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 block"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tighter leading-none"
          >
            Quem confia,{" "}
            <span className="text-[#a1a5a9]">recomenda.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group rounded-2xl border border-white/[0.06] bg-[#0f1528]/60 p-8 hover:border-[#2d2e6b]/40 transition-all duration-300 animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#4f8bff] fill-[#4f8bff]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2d2e6b]/30 border border-[#2d2e6b]/40 flex items-center justify-center text-[#4f8bff] text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="text-white text-sm font-medium block">
                    {t.name}
                  </span>
                  <span className="text-[#a1a5a9] text-xs">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
