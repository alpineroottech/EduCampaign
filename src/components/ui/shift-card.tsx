"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ShiftCardProps {
  topContent: React.ReactNode;
  middleContent: React.ReactNode;
  bottomContent: React.ReactNode;
  className?: string;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export function ShiftCard({
  topContent,
  middleContent,
  bottomContent,
  className = "",
}: ShiftCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative aspect-square w-full overflow-hidden rounded-xl bg-[#3d1a4d]/20 dark:bg-[#2a1136]/30 backdrop-blur-md border border-[#3d1a4d]/30 shadow-[0_8px_30px_rgba(59,26,77,0.14)] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Top Content - Always Visible */}
        <div className="z-10">
          {topContent}
        </div>

        {/* Middle Content - Image (Full Space) */}
        <div className="relative flex-1 flex items-center justify-center">
          <motion.div
            className="w-full h-full"
            animate={{
              opacity: isHovered ? 0.2 : 1,
            }}
            transition={springTransition}
          >
            {middleContent}
          </motion.div>
        </div>

        {/* Bottom Content - Slides Up on Hover with Gradient */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={springTransition}
              className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#2a1136]/90 to-transparent"
            >
              {bottomContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
