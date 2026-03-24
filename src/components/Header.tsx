"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(10, 15, 28, ${bgOpacity})`,
      }}
      className="fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-md border-b border-transparent transition-[border-color] duration-300"
    >
      <div className="flex items-center gap-3">
        <img
          src="/logosemfundo.png"
          alt="T-SEG"
          className="h-8 md:h-10 object-contain mix-blend-lighten"
        />
      </div>

      {/* Nav links - desktop */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#servicos"
          className="text-white/60 text-sm hover:text-white transition-colors duration-200"
        >
          Serviços
        </a>
        <a
          href="#processo"
          className="text-white/60 text-sm hover:text-white transition-colors duration-200"
        >
          Como Funciona
        </a>
        <a
          href="#depoimentos"
          className="text-white/60 text-sm hover:text-white transition-colors duration-200"
        >
          Depoimentos
        </a>
      </nav>

      <a
        href="#contato"
        className="text-xs font-semibold uppercase tracking-wider text-white bg-[#2d2e6b] px-6 py-2.5 rounded-full
          hover:bg-[#3d3e8b] transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,46,107,0.5)] active:scale-[0.97]"
      >
        Orçamento Grátis
      </a>
    </motion.header>
  );
}
