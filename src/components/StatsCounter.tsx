"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Users, Clock, Wifi } from "lucide-react";

const stats = [
  { label: "Clientes Protegidos", value: 500, suffix: "+", icon: Users },
  { label: "Anos de Experiência", value: 10, suffix: "+", icon: Shield },
  { label: "Monitoramento", value: 24, suffix: "/7", icon: Clock },
  { label: "Uptime Garantido", value: 99.9, suffix: "%", icon: Wifi },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      <span className="text-[#4f8bff]">{suffix}</span>
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 bg-[#0a0f1c] relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,139,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,139,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2d2e6b]/20 border border-[#2d2e6b]/30 flex items-center justify-center group-hover:bg-[#2d2e6b]/40 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-[#4f8bff]" />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <span className="text-[#a1a5a9] text-sm tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
