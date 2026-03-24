import { Header } from "@/components/Header";
import { ScannerHero } from "@/components/ScannerHero";
import { StatsCounter } from "@/components/StatsCounter";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="bg-[#0a0f1c] min-h-screen selection:bg-[#4f8bff]/30 selection:text-white">
      <Header />

      {/* 1. Scanner Hero — O Raio-X (scroll 400vh) */}
      <ScannerHero />

      {/* 2. Stats Counter — Números animados */}
      <StatsCounter />

      {/* 3. Serviços — Bento Grid com spotlight cards */}
      <div id="servicos">
        <ServicesSection />
      </div>

      {/* 4. Como Funciona — Timeline */}
      <div id="processo">
        <ProcessSection />
      </div>

      {/* 5. Depoimentos — Cards flutuantes */}
      <div id="depoimentos">
        <TestimonialsSection />
      </div>

      {/* 6. CTA — WhatsApp + Contato */}
      <div id="contato">
        <CTASection />
      </div>

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
