"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { ScrollReveal } from "@/components/ui/transitions";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
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
    title: "Credibility",
    description: "Edu. Campaign Pvt. Ltd. is officially registered and approved by the Ministry of Education, Government of Nepal, ensuring that we meet all regulatory standards for educational consultancy services. Our credibility is further reinforced by our strong partnerships with globally recognized universities and institutions across Australia, Japan, Canada, the United Kingdom, New Zealand, and South Korea. We maintain transparent operations, ethical practices, and a proven track record of successfully placing thousands of students in their dream institutions worldwide.",
    image: "/images/homepage/Emblem_of_Nepal.svg",
    alt: "Ministry of Education approval",
    size: "default",
  },
  {
    title: "Personalized Counseling",
    description: "Edu. Campaign carefully evaluates each student's unique academic background, career aspirations, financial situation, and personal preferences to create a tailored study abroad plan. Rather than following a generic one-size-fits-all approach, our expert counselors take the time to understand your individual goals and constraints. We analyze your academic strengths, identify suitable programs that align with your career objectives, and ensure that every recommendation is customized to maximize your chances of success in your chosen destination.",
    image: "/images/whyus/Personalized Counselling.png",
    alt: "Counseling session",
    size: "default",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative pt-16 pb-2 bg-gray-50" id="why-us">
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

        <div className="relative">
          {/* Mobile Scroll Arrows */}
          <button
            onClick={scrollPrev}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={emblaRef} className="overflow-hidden md:overflow-visible -mx-standard px-standard md:mx-0 md:px-0">
            <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-6">
              {services.map((service, index) => {
                const getGridClass = () => {
                  if (index === 0 || index === 1) return "md:col-span-6";
                  return "md:col-span-6";
                };
                
                return (
                  <div 
                    key={service.title} 
                    className={cn(
                      "flex-[0_0_85%] min-w-0",
                      getGridClass()
                    )}
                  >
                    <BentoCard
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      alt={service.alt}
                      size="default"
                      className="h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
