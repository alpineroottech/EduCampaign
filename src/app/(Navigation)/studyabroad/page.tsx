"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { LearnMoreButton } from "@/sections/NoticeEvents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const heroImages = [
  "/images/studyabroad/study-abroad.webp",
  "/images/studyabroad/study-abroad-2.jpg",
  "/images/studyabroad/study-abroad-3.jpg",
];

export interface StudyAbroadCard {
  image: string;
  title: string;
  paragraph: string;
  buttonText: string;
  slug: string;
}

export default function StudyAbroad() {
  const [imgIndex, setImgIndex] = useState(0);

  // Background image fade transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const studyAbroad: StudyAbroadCard[] = [
    {
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80",
      title: "Study In Japan",
      paragraph:
        "Japan has become one of the most popular destinations for international students who wish to combine quality education with cultural immersion.",
      buttonText: "Learn More",
      slug: "studyabroad/japan",
    },

    {
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130",
      title: "Study In Australia",
      paragraph:
        "Discover a world of educational opportunities by studying abroad. Immerse yourself in new cultures, gain international experience, and broaden your horizons.",
      buttonText: "Learn More",
      slug: "studyabroad/australia",
    },
    {
      image: "/images/countries/uk.jpg",
      title: "Study In UK",
      paragraph:
        "Discover a world of educational opportunities by studying abroad. Immerse yourself in new cultures, gain international experience, and broaden your horizons.",
      buttonText: "Learn More",
      slug: "studyabroad/uk",
    },
    {
      image: "/images/countries/canada.jpg",
      title: "Study In Canada",
      paragraph:
        "Discover a world of educational opportunities by studying abroad. Immerse yourself in new cultures, gain international experience, and broaden your horizons.",
      buttonText: "Learn More",
      slug: "studyabroad/canada",
    },
    {
      image: "/images/countries/germany.jpg",
      title: "Study In New Zealand",
      paragraph:
        "Discover a world of educational opportunities by studying abroad. Immerse yourself in new cultures, gain international experience, and broaden your horizons.",
      buttonText: "Learn More",
      slug: "studyabroad/germany",
    },
    {
      image: "/images/countries/southkorea.jpg",
      title: "Study In South Korea",
      paragraph:
        "Discover a world of educational opportunities by studying abroad. Immerse yourself in new cultures, gain international experience, and broaden your horizons.",
      buttonText: "Learn More",
      slug: "studyabroad/korea",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative">
        <Breadcrumbs />
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] grid grid-cols-1 sm:grid-cols-6 grid-rows-1 mb-8 sm:mb-12">
          <div className="hidden sm:grid col-span-1 row-span-1 h-full bg-[#ebe9e1] items-center">
            <div className="absolute z-20 ml-4 sm:ml-8 bg-gradient-to-r from-white/80 to-white/10 py-8 sm:py-15 px-12 sm:px-16 border-l-8 border-l-[#df5252] shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl">Study Abroad</h2>
            </div>
          </div>

          <div className="grid col-span-1 sm:col-span-5 h-full w-full relative">
            {heroImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                width={1220}
                height={400}
                alt="Study Abroad Hero"
                priority={idx === 0}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${imgIndex === idx ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Mobile Title Overlay */}
          <div className="absolute inset-0 sm:hidden bg-gradient-to-r from-black/70 to-black/40 flex items-center">
            <div className="ml-4 p-6 border-l-8 border-l-[#df5252]">
              <h2 className="text-2xl text-white font-bold">Study Abroad</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl mx-auto pt-16 pb-2 px-4"
      >
        <p className=" ">
          Studying abroad offers a chance to explore new cultures, ideas, and perspectives while earning a quality education. It helps students grow personally and professionally by developing independence, communication skills, and global awareness. The experience fosters open-mindedness and prepares learners to succeed in an increasingly connected and competitive world.
        </p>
      </motion.div>
      {/* Cards Grid (Responsive but same UI) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="relative
            grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
            max-w-6xl mx-auto my-6 gap-3
            
        "
      >
        {studyAbroad.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className=" group overflow-hidden flex flex-col items-center rounded-2xl shadow-md m-4 bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full aspect-[5/3] relative overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>


            <div className="w-full py-8 md:py-12 px-4 text-center">
              <h5 className=" mb-4 group-hover:text-[#6B4FA1] transition-colors line-clamp-2">{card.title}</h5>
              <p className=" mb-4">{card.paragraph}</p>
              {/* <LearnMoreButton slug={card.slug} /> */}
              <Link
                href={card.slug}
                className="bg-[#3d1a4d] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#2a1136] transition self-center"
              >
                Learn More
              </Link>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
