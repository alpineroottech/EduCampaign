"use client";

import {
  MoveRightIcon,
} from "lucide-react";
import { NOTICE_EVENTS } from '@/data/eventsData';
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { ScrollReveal, fadeInUp, slideInLeft, slideInRight } from "@/components/ui/transitions";
import { motion } from "motion/react";

// Hero carousel images - add more images here for the carousel
const heroImages = [
  { src: "/images/homepage/hero.png", alt: "Students studying abroad" },
  // Add more images as needed:
  // { src: "/images/homepage/hero2.png", alt: "International education" },
];

type HeroProps = {
  onJoinClick?: () => void;
  onNoticeEventsClick?: () => void;
};

const LatestBlogsTable = ({ 
  onTitleClick 
}: { 
  onTitleClick?: () => void;
}) => {
  const displayCount = Math.min(NOTICE_EVENTS.length, 5);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden w-[240px]"
    >
      {/* Header */}
      <div className="bg-[#6B4FA1] py-3 px-4">
        <h2 className="text-base font-semibold text-white text-center">
          Latest Notice & Events
        </h2>
      </div>

      {/* Blog Links */}
      <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
        {NOTICE_EVENTS.slice(0, displayCount).map((event) => (
          <button
            key={event.id}
            onClick={onTitleClick}
            className="w-full block py-3 px-4 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
          >
            <p className="text-sm font-medium text-gray-800 group-hover:text-[#6B4FA1] transition-colors line-clamp-2">
              {event.title}
            </p>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = ({ onJoinClick, onNoticeEventsClick }: HeroProps) => {
  return (
    <section className="relative w-full h-auto bg-gradient-to-b from-white to-gray-50/50 pt-12 md:pt-16 pb-8 md:pb-6 overflow-hidden">

      {/* Subtle Background Elements - Flat design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(107,79,161,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(107,79,161,0.03),transparent_50%)]" />
      </div>

      {/* Main Flex Layout */}
      <div className="relative z-10 px-standard mx-auto flex flex-col lg:flex-row gap-8 lg:gap-4 items-center justify-between max-w-7xl">
        
        {/* Text Content - Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full lg:w-auto lg:flex-shrink-0 text-center lg:pr-12 lg:text-left relative z-10 order-2 lg:order-1"
        >
          <div className="flex flex-col gap-2 md:gap-4 mb-8">
            <h1 className="text-3.5xl lg:text-4xl font-bold leading-[1.1] tracking-tight text-gray-900">
              A COMPLETE
              <br />
              SOLUTION FOR
              <br />
              ABROAD
              <br />
              STUDIES
            </h1>
          </div>

          <motion.button
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            onClick={onJoinClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#3d1a4d] hover:bg-[#2a1136] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base cursor-pointer active:scale-95"
          >
            Join us today 
            <MoveRightIcon className="inline-block ml-2 w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </motion.div>

        {/* Hero Carousel - Center Column */}
        <div className="flex-1 flex justify-center lg:-ml-20 mb-6 mt-6 lg:mt-0 lg:z-0 order-1 lg:order-2">
          <HeroCarousel images={heroImages} />
        </div>

        {/* Latest Notice Table - Right Column */}
        <div className="w-full sm:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end relative z-10 order-3">
          <LatestBlogsTable onTitleClick={onNoticeEventsClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
