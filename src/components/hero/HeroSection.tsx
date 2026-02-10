"use client";

import { HeroCarousel } from './HeroCarousel';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Notice {
  title: string;
  date: string;
  href: string;
}

type HeroSectionProps =
  | {
      images: {
        src: string;
        alt: string;
      }[];
      onJoinClick?: () => void;
      notices?: Notice[];
      imageSrc?: never;
      title?: never;
    }
  | {
      imageSrc: string;
      title: string;
      images?: never;
      onJoinClick?: never;
      notices?: never;
    };

const defaultNotices: Notice[] = [
  {
    title: "New Scholarship Opportunities Available",
    date: "Feb 8, 2026",
    href: "/blog/scholarship-opportunities"
  },
  {
    title: "Study Abroad Seminar - Register Now",
    date: "Feb 5, 2026",
    href: "/events"
  },
  {
    title: "IELTS Test Preparation Starting Soon",
    date: "Feb 1, 2026",
    href: "/testpreparation/ielts"
  }
];

const HeroSection = (props: HeroSectionProps) => {
  if ("imageSrc" in props && props.imageSrc) {
    return (
      <div className="relative h-[250px] sm:h-[300px] md:h-[350px] mb-8 sm:mb-12">
        <Image
          src={props.imageSrc}
          width={1220}
          height={400}
          alt={props.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="px-standard">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {props.title}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  const { images, onJoinClick, notices = defaultNotices } = props;

  if (!images) return null;

  return (
    <div className="py-8 lg:py-12 px-standard">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          
          {/* LEFT COLUMN - Text & CTA */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            {/* Symmetrical Heading - All lines same size and spacing */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-gray-900">A COMPLETE</span>
              <span className="block text-gray-900">SOLUTION FOR</span>
              <span className="block text-[#6B4FA1]">ABROAD</span>
              <span className="block text-[#6B4FA1]">STUDIES</span>
            </h1>
            
            {/* CTA Button with Slide-in Animation from Left */}
            <motion.button
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              onClick={onJoinClick}
              className="group relative inline-flex items-center gap-2 bg-[#3d1a4d] hover:bg-[#2a1136] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10">Join us today</span>
              <MoveRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* CENTER COLUMN - Carousel (Wider & Bigger) */}
          <div className="lg:col-span-5 relative lg:-my-4 lg:scale-110">
            <HeroCarousel images={images} />
          </div>

          {/* RIGHT COLUMN - Latest Notices Card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <h3 className="text-lg font-bold text-[#3d1a4d]">Latest Notices</h3>
                <Link 
                  href="/blog" 
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  View All
                </Link>
              </div>
              
              {/* Notices List */}
              <ul className="space-y-3">
                {notices.map((notice, index) => (
                  <li key={index}>
                    <Link 
                      href={notice.href}
                      className="group block hover:bg-purple-50 rounded-lg p-2 -mx-2 transition-colors"
                    >
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;