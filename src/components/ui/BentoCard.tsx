"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface BentoCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  size?: "default" | "large" | "wide";
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
  const sizeClasses = {
    default: "",
    large: "md:col-span-2 md:row-span-2",
    wide: "md:col-span-2",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`
        group relative overflow-hidden rounded-2xl bg-white border border-gray-100 
        shadow-sm hover:shadow-lg transition-all duration-300
        ${sizeClasses[size]} ${className}
      `}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B4FA1] to-[#b884c9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.article>
  );
}
