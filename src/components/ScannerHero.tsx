"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScannerHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scanner descendo de 0% a 100% nos primeiros 65% do scroll
  const scannerY = useTransform(scrollYProgress, [0, 0.65], ["0%", "100%"]);
  const clipBottom = useTransform(scrollYProgress, [0, 0.65], ["100%", "0%"]);
  const clipPathB = useTransform(
    clipBottom,
    (val) => `inset(0 0 ${val} 0)`
  );

  // Logo aparece dos 65% aos 85%
  const opacityC = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const scaleC = useTransform(scrollYProgress, [0.65, 0.9], [0.8, 1]);
  const scannerOpacity = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);

  // Parallax sutil na imagem A
  const imgAY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0a0f1c]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── Imagem A: Casa Vulnerável ── */}
        <motion.div
          style={{ y: imgAY }}
          className="absolute inset-0 w-full h-[115%]"
        >
          <img
            src="/imagemA.png"
            alt="Casa Vulnerável"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/40" />
        </motion.div>

        {/* ── Imagem B: Segurança Revelada (com clip-path animado) ── */}
        <motion.div
          style={{ clipPath: clipPathB }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <img
            src="/imagemB.png"
            alt="Casa com Segurança"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
          {/* Tech overlay */}
          <div className="absolute inset-0 bg-[#2d2e6b]/10 mix-blend-color" />
        </motion.div>

        {/* ── Linha do Scanner / Raio-X ── */}
        <motion.div
          style={{ top: scannerY, opacity: scannerOpacity }}
          className="absolute left-0 w-full z-20 pointer-events-none"
        >
          {/* Glow superior */}
          <div className="w-full h-24 bg-gradient-to-t from-[#4f8bff]/20 to-transparent" />
          {/* Linha principal */}
          <div className="w-full h-[2px] bg-white shadow-[0_0_15px_4px_rgba(79,139,255,0.9),0_0_40px_12px_rgba(45,46,107,0.6)]" />
          {/* Glow inferior */}
          <div className="w-full h-16 bg-gradient-to-b from-[#4f8bff]/15 to-transparent" />
        </motion.div>

        {/* ── Texto Hero (Assimétrico, Left-aligned — taste-skill) ── */}
        <div className="absolute bottom-24 left-8 md:left-16 z-15 max-w-xl pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#4f8bff] text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-4 block">
              Segurança Inteligente
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none mb-6">
              Proteção que{" "}
              <span className="text-[#a1a5a9]">você controla.</span>
            </h1>
            <p className="text-[#a1a5a9] text-base md:text-lg leading-relaxed max-w-md">
              Role para baixo e veja como a T-SEG transforma sua residência em
              uma fortaleza inteligente.
            </p>
          </motion.div>
        </div>

        {/* ── Camada Final: Logo sem fundo ── */}
        <motion.div
          style={{ opacity: opacityC, scale: scaleC }}
          className="absolute inset-0 w-full h-full z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 bg-[#0a0f1c]/80 backdrop-blur-md" />
          <div className="relative z-40 flex flex-col items-center">
            {/* Logo sem fundo */}
            <div className="w-72 h-36 md:w-[420px] md:h-[210px] relative drop-shadow-[0_0_80px_rgba(79,139,255,0.4)]">
              <img
                src="/logosemfundo.png"
                alt="T-SEG Sistemas de Segurança"
                className="w-full h-full object-contain mix-blend-lighten"
              />
            </div>
            <div className="mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#4f8bff] to-transparent" />
            <span className="mt-6 text-[#a1a5a9] text-sm tracking-[0.3em] uppercase font-light">
              Seu patrimônio, nossa missão
            </span>
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
