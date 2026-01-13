"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface HeroCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function HeroCarousel({ images, className = "" }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: selectedIndex === index ? 1 : 0.5, 
                  scale: selectedIndex === index ? 1 : 0.95 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={560}
                  height={560}
                  className="w-[380px] lg:w-[560px] h-auto drop-shadow-2xl"
                  priority={index === 0}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-[#6B4FA1] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
