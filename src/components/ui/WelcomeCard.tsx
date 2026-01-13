"use client";

import { ScrollReveal } from "@/components/ui/transitions";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  // using ref to update text content specifically avoids react render cycle for every frame
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

interface WelcomeCardProps {
  title?: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
}

export function WelcomeCard({
  title = "Welcome to Edu. Campaign",
  subtitle = "Your Gateway to Global Education",
  description,
  secondaryDescription,
}: WelcomeCardProps) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="relative max-w-4xl mx-auto px-standard text-center">
        <ScrollReveal>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#6B4FA1]/30" />
            <span className="text-sm font-medium text-[#6B4FA1] uppercase tracking-wider">
              Since 2008
            </span>
            <div className="h-px w-12 bg-[#6B4FA1]/30" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#6B4FA1] font-medium mb-8">
            {subtitle}
          </p>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            
            {secondaryDescription && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {secondaryDescription}
              </p>
            )}
          </div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-gray-100"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#6B4FA1]">
                <CountUp to={15} suffix="+" />
              </p>
              <p className="text-sm text-gray-500 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#6B4FA1]">
                <CountUp to={5000} suffix="+" />
              </p>
              <p className="text-sm text-gray-500 mt-1">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#6B4FA1]">
                <CountUp to={50} suffix="+" />
              </p>
              <p className="text-sm text-gray-500 mt-1">Partner Universities</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
