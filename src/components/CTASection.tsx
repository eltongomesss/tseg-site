"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[#0a0f1c]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2d2e6b]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4f8bff]/10 rounded-full blur-[100px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2d2e6b]/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12"
        >
          <img
            src="/logosemfundo.png"
            alt="T-SEG"
            className="h-24 md:h-32 mx-auto object-contain drop-shadow-[0_0_40px_rgba(79,139,255,0.3)] mix-blend-lighten"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none mb-6"
        >
          Pronto para
          <br />
          <span className="text-[#a1a5a9]">dormir tranquilo?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[#a1a5a9] text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          Entre em contato agora e receba uma análise gratuita de segurança
          para o seu imóvel. Sem compromisso.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20um%20orçamento%20de%20segurança."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-[#25D366] text-white font-semibold text-sm px-8 py-4 rounded-full 
              hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>

          {/* Phone Button */}
          <a
            href="tel:+5500000000000"
            className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.1] text-white font-medium text-sm px-8 py-4 rounded-full 
              hover:bg-white/[0.1] hover:border-[#4f8bff]/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Phone className="w-5 h-5 text-[#4f8bff]" />
            Ligar Agora
          </a>
        </motion.div>

        {/* Location hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-[#a1a5a9]/60 text-xs tracking-wide"
        >
          <MapPin className="w-3 h-3" />
          <span>Atendemos toda a região</span>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.04] bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/logosemfundo.png"
            alt="T-SEG"
            className="h-8 object-contain opacity-60 mix-blend-lighten"
          />
        </div>
        <p className="text-[#a1a5a9]/40 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} T-SEG Sistemas de Segurança. Todos
          os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[#a1a5a9]/40 text-xs hover:text-[#4f8bff] transition-colors"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-[#a1a5a9]/40 text-xs hover:text-[#4f8bff] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
