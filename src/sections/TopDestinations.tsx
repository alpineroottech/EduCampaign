'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { countryCardProps, CountryCardProps } from '@/data/topDestinations';
import Link from 'next/link';

const CountryCard = ({ imageSrc, title, description, href }: CountryCardProps) => {
  return (
    <div className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-3">
      <div className="rounded-b-2xl overflow-hidden shadow-md bg-white flex flex-col h-full border">
        {/* Image with consistent aspect ratio */}
        <div className="relative w-full aspect-[16/9] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Content area */}
        <div className="p-6 text-center flex flex-col flex-grow">
          <h4 className="mb-3">{title}</h4>
          <p className=" leading-relaxed mb-5 flex-grow line-clamp-3">
            {description}
          </p>
          <Link
            href={href || '/studyabroad'}
            className="bg-[#3d1a4d] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#2a1136] transition self-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

const TopDestinations = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative pt-16 pb-2 bg-gradient-to-b from-purple-50/50" id="top-destinations">
      {/* Header */}
      <div className='px-standard text-center mb-8 md:mb-12 max-w-4xl mx-auto'>
        <h2 className=" mb-4">
          Top Study Destinations
        </h2>
        <p className="">
          In today’s fast-evolving world of global knowledge exchange, students seek diverse destinations for higher education. Among them, Japan, Australia, and the UK lead with excellence and innovation, while Canada and New Zealand attract learners through safety, scenic beauty, and quality education in welcoming environments.
        </p>
      </div>

      {/* Carousel Container */}
      <div className='relative px-standard mx-auto w-full'>
        {/* Embla Carousel Wrapper */}

        <div ref={emblaRef} className='overflow-hidden rounded-lg' >
          {/* CRITICAL: items-stretch makes all cards equal height */}
          <div className='flex items-stretch -mx-3'>
            {countryCardProps.map((country) => (
              <CountryCard key={country.slug} {...country} />
            ))}
          </div>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className='hidden lg:block '>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-purple-600 rounded-full p-3 shadow-xl transition-all duration-200 group border border-purple-100"
            aria-label="Previous country"
          >
            <ChevronLeft className="w-6 h-6 text-purple-700 group-hover:text-white transition-colors" />
          </button>


          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm hover:bg-purple-600 rounded-full p-3 shadow-xl transition-all duration-200 group border border-purple-100"
            aria-label="Next country"
          >
            <ChevronRight className="w-6 h-6 text-purple-700 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>


    </section>
  );
};

export default TopDestinations;