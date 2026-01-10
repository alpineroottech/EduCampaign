"use client";

import Image from "next/image";
import { ShiftCard } from "@/components/ui/shift-card";

type ServiceProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};


const services: ServiceProps[] = [
  {
    title: "Personalized Counseling",
    description: "Edu. Campaign carefully evaluates each student’s academic background, career goals, and financial situation to create a tailored plan, rather than following a “one-size-fits-all” approach.",
    image: "/images/whyus/Personalized Counselling.png",
    alt: "Counseling session",
  },
  {
    title: "Comprehensive Services",
    description: "The consultancy provides end-to-end support, including test preparation (JLPT, NAT, IELTS, PTE, JFT etc.), scholarship guidance, documentation, visa processing, travel assistance, and post-departure services.",
    image: "/images/about-board.png",
    alt: "Visa application form",
  },
  {
    title: "Wide Destination Options",
    description: "Students can choose from multiple study destinations such as Australia, Japan, Canada, UK and New Zealand, offering flexibility and global opportunities.",
    image: "/images/whyus/wide Destination.png",
    alt: "Official documents",
  },
  {
    title: "Affordability & Accessibility",
    description: " Edu. Campaign works to reduce financial and procedural burdens, keeping costs reasonable and simplifying complex processes to make overseas education more accessible.",
    image: "/images/whyus/Affordable.png",
    alt: "Student walking at airport",
  },
  {
    title: "Post-Arrival Support",
    description: "The consultancy provides continuous assistance to the students to reach their study destinations, adjust smoothly to a new environment. We ensure students receive post-arrival support abroad smoother and more reliable.",
    image: "/images/whyus/podt_arrival.png",
    alt: "Student taking a test",
  },
  {
    title: "Credibility",
    description: "Edu. Campaign upholds professional standards and enjoys a reputation for ethical practices and reliability.",
    image: "/images/whyus/Credibility.png",
    alt: "Student accommodation",
  }
];

const WhyUs = () => {
  return (
    <section className="relative pb-4 pt-12 md:pt-20" id="why-us">
      <div className="max-w-7xl mx-auto px-standard">
        {/* Section Header */}
        <div className="mb-8 md:mb-8 text-center">
          <h2 className=" ">
            Why Us?
          </h2>
          <p className="mt-4 max-w-7xl px-standard text-center mx-auto ">
            Edu. Campaign Pvt. Ltd. is a trusted education consultancy chosen by many students for
            its personalized counseling approach, where each student’s academic background, career
            goals, and financial circumstances are carefully considered to create the best study plan.
            The company provides comprehensive assistance for career counseling, scholarships,
            documentation, visa guidance, and post-departure support. Edu. Campaign is also
            recognized for making overseas education more affordable and accessible by reducing the
            procedural burden for students.

          </p>
          <h5 className=" my-8">
            Strengths of Edu. Campaign Pvt. Ltd.
          </h5>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <ShiftCard
              key={service.title}
              topContent={
                <h3 className="text-2xl font-semibold tracking-tight p-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              }
              middleContent={
                <div className="h-full w-full p-2">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              }
              bottomContent={
                <p className="text-white text-base md:text-xl px-6 pt-6 pb-8 leading-relaxed font-medium max-h-[50%] overflow-auto break-words">
                  {service.description}
                </p>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
