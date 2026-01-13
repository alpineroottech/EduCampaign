"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface BentoCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  size?: "default" | "large" | "wide" | "hero";
  className?: string;
}

export function BentoCard({
  title,
  description,
  image,
  alt,
  size = "default",
  className = "",
}: BentoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const sizeClasses = {
    default: "md:col-span-6",
    large: "md:col-span-12 lg:col-span-6", 
    wide: "md:col-span-12",
    hero: "col-span-1 md:col-span-12",
  };

  const isHero = size === 'hero';
  // Use a class-based approach for clamping instead of purely state-based
  // This helps us control it via media queries if needed, although state is cleaner for button logic.
  // We'll update the logic: On mobile (assumed by default CSS or user intent), we might want to avoid truncation if that's the request.
  // However, "description.length > 150" is a JS check. JS doesn't know about mobile unless we check window width.
  // But the prompt says "remove [truncation] and display full text when possible for phones".
  // Since we are now using a carousel on mobile where height is less constrained, we can just opt-out of "read more" logic 
  // via a prop or just relax the constraint check. 
  // But to be strictly responsive without hydration errors, purely CSS line-clamp is better, 
  // but "See More" button implies JS state.
  // Simple pragmatic fix: We'll modify the rendering to ALWAYS show full text on mobile (via CSS) 
  // and hide the "See More" button on mobile via CSS too?
  // Actually, the user asked to remove the truncation.
  
  // Update: We'll keep the JS check for desktop but on mobile we want to "display full text".
  // The easiest way is to use CSS `hidden md:block` for the button and `line-clamp-none` on mobile.
  
  const hasLongText = description.length > 150;
  const shouldShowReadMoreButton = !isHero && hasLongText;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: false }}
      whileHover={{ y: -4 }}
      className={`
        group relative overflow-hidden rounded-2xl bg-white border border-gray-100 
        shadow-sm hover:shadow-lg transition-all duration-300 h-full
        ${isHero ? 'flex flex-col md:flex-row' : 'flex flex-col'}
        ${sizeClasses[size]} ${className}
      `}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden shrink-0 ${
        isHero 
          ? 'w-full md:w-1/2 min-h-[250px] md:min-h-full md:aspect-auto' 
          : 'h-64 aspect-video w-full'
      }`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={isHero ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-6 md:p-8 relative ${isHero ? 'md:w-1/2 justify-center' : ''}`}>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6B4FA1] transition-colors">
            {title}
          </h3>
          <div className="h-1 w-12 bg-[#6B4FA1] rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
        </div>
        
        <div className="flex-1">
          {/* Mobile: Always full text (no line-clamp). Desktop: line-clamp if collapsed. */}
          <p className={`text-gray-600 leading-relaxed ${!isHero && !isExpanded ? 'md:line-clamp-4' : ''}`}>
            {description}
          </p>
          
          {shouldShowReadMoreButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              // Hide button on mobile (hidden), show on desktop (md:inline-flex)
              className="mt-2 text-sm font-semibold text-[#6B4FA1] hover:text-[#3d1a4d] transition-colors hidden md:inline-flex items-center gap-1"
              aria-label={isExpanded ? "Show less" : "Show more"}
            >
              {isExpanded ? "Show less" : "See more"}
              <svg 
                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent opacity-50 rounded-bl-[100px] transition-opacity group-hover:opacity-100 pointer-events-none" />
      </div>
    </motion.article>
  );
}
