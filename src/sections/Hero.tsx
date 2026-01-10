import {
  MoveRightIcon,
} from "lucide-react";
import Image from "next/image";
import { NOTICE_EVENTS } from '@/data/eventsData';

type HeroProps = {
  onJoinClick?: () => void;
  onNoticeEventsClick?: () => void;
};

const LatestBlogsTable = ({ 
  onTitleClick 
}: { 
  onTitleClick?: () => void;
}) => {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-md shadow-lg overflow-hidden w-[220px]">
      {/* Header */}
      <div className="bg-purple-50 border-b-1 border-purple-400 py-3 px-4">
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Latest Notice and Events:
        </h2>
      </div>

      {/* Blog Links */}
      <div className="divide-y divide-purple-400">
        {NOTICE_EVENTS.slice(0, 3).map((event, index) => (
          <button
            key={event.id}
            onClick={onTitleClick}
            className="w-full block py-2 px-6 text-center hover:bg-purple-100 transition-colors duration-200 cursor-pointer"
          >
            <p className="text-sm font-semibold text-gray-800">{event.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ onJoinClick, onNoticeEventsClick }: HeroProps) => {
  return (
    <section className="relative w-full h-auto bg-white pt-12 md:pt-10 pb-2 md:pb-10 lg:pb-0 overflow-hidden">

      {/* Background Blobs - Absolutely positioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
      </div>

      {/* Main Flex Layout - using px-standard for consistent margins */}
      <div className="relative z-10 px-standard mx-auto flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-between">
        {/* Text Content - Left Column */}
        <div className="w-full lg:w-auto lg:flex-shrink-0 text-center lg:pr-20 lg:text-left relative z-10 order-2 lg:order-1">
          <div className="flex flex-col gap-2 md:gap-4 mb-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-5 md:mb-6">
              A COMPLETE<br />
              SOLUTION FOR<br />
              ABROAD<br />
              STUDIES
            </h1>
          </div>

          <button
            onClick={onJoinClick}
            className="bg-purple-950 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all duration-200 text-sm md:text-base cursor-pointer"
          >
            Join us today <MoveRightIcon className="inline-block ml-2 w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Hero Image - Center Column */}
        <div className="flex-1 flex justify-center lg:-ml-40 mb-6 mt-6 lg:mt-10 lg:z-0 order-1 lg:order-2">
          <div className="relative flex justify-center lg:scale-110">
            <Image
              src="/images/homepage/hero.png"
              alt="homepage"
              width={560}
              height={560}
              className="w-[380px] lg:w-[560px] h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Latest Blogs Table - Right Column */}
        <div className="w-full sm:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end relative z-10 order-3">
          <LatestBlogsTable onTitleClick={onNoticeEventsClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
