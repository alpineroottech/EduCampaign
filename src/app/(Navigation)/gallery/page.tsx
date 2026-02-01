'use client';

import { useState, useMemo } from 'react';
import { galleryItems, type GalleryCategory } from '@/data/galleryData';
import FilterTabs from '@/components/gallery/FilterTabs';
import GalleryItemCard from '@/components/gallery/GalleryItemCard';
import Lightbox from '@/components/gallery/Lightbox';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import HeroSection from '@/components/hero/HeroSection';
import { motion } from 'motion/react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items based on category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex === 0 ? filteredItems.length - 1 : selectedItemIndex - 1
      );
    }
  };

  return (
    <div className="min-h-screen mb-10">
      {/* Hero Section */}
      <div className="relative">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80" title="Gallery" />
      </div>

      {/* Filter Tabs */}
      <div className="relative pt-16 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <GalleryItemCard
                  item={item}
                  onClick={() => handleOpenLightbox(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItemIndex !== null && (
        <Lightbox
          item={filteredItems[selectedItemIndex]}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedItemIndex}
          totalItems={filteredItems.length}
        />
      )}
    </div>
  );
}