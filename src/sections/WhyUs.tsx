"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { ScrollReveal } from "@/components/ui/transitions";

type ServiceProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  size?: "default" | "large" | "wide";
};

const services: ServiceProps[] = [
  {
    title: "Comprehensive Services",
    description: "The consultancy provides complete end-to-end support throughout your entire study abroad journey. From initial test preparation for standardized exams (JLPT, NAT, IELTS, PTE, JFT, and more) to scholarship guidance, meticulous documentation assistance, seamless visa processing, travel arrangements, and comprehensive post-departure services.",
    image: "/images/about-board.png",
    alt: "Visa application form",
  },
  {
    title: "Personalized Counseling",
    description: "Edu. Campaign carefully evaluates each student's unique academic background, career aspirations, financial situation, and personal preferences to create a tailored study abroad plan. Rather than following a generic one-size-fits-all approach, our expert counselors take the time to understand your individual goals and constraints.",
    image: "/images/whyus/Personalized Counselling.png",
    alt: "Counseling session",
    size: "large",
  },
  {
    title: "Wide Destination Options",
    description: "Students can choose from an extensive range of premier study destinations including Australia, Japan, Canada, the United Kingdom, New Zealand, and South Korea. Each destination offers unique educational opportunities, cultural experiences, and career prospects tailored to your aspirations.",
    image: "/images/whyus/wide Destination.png",
    alt: "Official documents",
  },
  {
    title: "Affordability & Accessibility",
    description: "Edu. Campaign is committed to making overseas education accessible to students from all backgrounds. We work diligently to reduce financial and procedural burdens by keeping our service costs reasonable and transparent. Our team simplifies complex application processes and identifies scholarship opportunities.",
    image: "/images/whyus/Affordable.png",
    alt: "Student walking at airport",
    size: "wide",
  },
  {
    title: "Post-Arrival Support",
    description: "The consultancy provides continuous assistance even after you reach your study destination. We ensure smooth adjustment to your new environment through comprehensive pre-departure briefings, airport reception coordination, accommodation guidance, and local orientation support.",
    image: "/images/whyus/podt_arrival.png",
    alt: "Student taking a test",
  },
  {
    title: "Credibility & Trust",
    description: "Edu. Campaign upholds the highest professional standards and has built a solid reputation for ethical practices, transparency, and reliability over years of dedicated service. Our success is measured by the achievements of our students who have successfully enrolled in prestigious institutions worldwide.",
    image: "/images/whyus/Credibility.png",
    alt: "Student accommodation",
  },
  {
    title: "Alumni Success",
    description: "Our alumni network spans across the globe, with graduates thriving in diverse fields and industries. From securing prestigious positions at multinational corporations to pursuing advanced research at top universities, our students' achievements reflect the quality of guidance and support they received throughout their journey with Edu. Campaign.",
    image: "/images/about-board.png",
    alt: "Successful alumni",
    size: "wide",
  }
];

const WhyUs = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50" id="why-us">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          {services.map((service) => (
            <BentoCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
              size={service.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
