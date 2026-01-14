"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { ScrollReveal } from "@/components/ui/transitions";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ServiceProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  size?: "default" | "large" | "wide";
};

const services: ServiceProps[] = [
  {
    title: "Personalized Counseling",
    description: "Edu. Campaign carefully evaluates each student's unique academic background, career aspirations, financial situation, and personal preferences to create a tailored study abroad plan. Rather than following a generic one-size-fits-all approach, our expert counselors take the time to understand your individual goals and constraints. We analyze your academic strengths, identify suitable programs that align with your career objectives, and ensure that every recommendation is customized to maximize your chances of success in your chosen destination.",
    image: "/images/whyus/Personalized Counselling.png",
    alt: "Counseling session",
    size: "large",
  },
  {
    title: "Comprehensive Services",
    description: "The consultancy provides complete end-to-end support throughout your entire study abroad journey. From initial test preparation for standardized exams (JLPT, NAT, IELTS, PTE, JFT, and more) to scholarship guidance, meticulous documentation assistance, seamless visa processing, travel arrangements, and comprehensive post-departure services.",
    image: "/images/about-board.png",
    alt: "Visa application form",
    size: "default",
  },
  {
    title: "Wide Destination Options",
    description: "Students can choose from an extensive range of premier study destinations including Australia, Japan, Canada, the United Kingdom, New Zealand, and South Korea. Each destination offers unique educational opportunities, cultural experiences, and career prospects tailored to your aspirations.",
    image: "/images/whyus/wide Destination.png",
    alt: "Official documents",
    size: "default",
  },
  {
    title: "Affordability & Accessibility",
    description: "Edu. Campaign is committed to making overseas education accessible to students from all backgrounds. We work diligently to reduce financial and procedural burdens by keeping our service costs reasonable and transparent. Our team simplifies complex application processes, identifies scholarship opportunities, and provides guidance on cost-effective study options.",
    image: "/images/whyus/Affordable.png",
    alt: "Student walking at airport",
    size: "default",
  },
  {
    title: "Post-Arrival Support",
    description: "The consultancy provides continuous assistance even after you reach your study destination. We ensure smooth adjustment to your new environment through comprehensive pre-departure briefings, airport reception coordination, accommodation guidance, and local orientation support.",
    image: "/images/whyus/podt_arrival.png",
    alt: "Student taking a test",
    size: "default",
  }
];

const WhyUs = () => {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, playOnInit: true })
  ]);

  return (
    <section className="relative pt-16 md:pt-24 bg-gray-50" id="why-us">
      <div className="max-w-7xl mx-auto px-standard">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Edu. Campaign Pvt. Ltd. is a trusted education consultancy chosen by many students for 
              its personalized counseling approach and comprehensive support services.
            </p>
          </div>
        </ScrollReveal>

        <div ref={emblaRef} className="overflow-hidden md:overflow-visible -mx-standard px-standard md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="flex-[0_0_85%] min-w-0 md:contents"
              >
                <BentoCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  alt={service.alt}
                  size={index === 0 ? "hero" : "default"}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
