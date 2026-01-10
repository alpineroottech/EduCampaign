'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { type GalleryItem } from '@/data/galleryData';

interface LightboxProps {
    item: GalleryItem | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    currentIndex: number;
    totalItems: number;
}

export default function Lightbox({
    item,
    onClose,
    onNext,
    onPrev,
    currentIndex,
    totalItems
}: LightboxProps) {
    // Keyboard navigation

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    }, [onClose, onNext, onPrev]);

    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [item, handleKeyDown]);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close lightbox"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Previous button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Previous image"
                disabled={totalItems <= 1}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                aria-label="Next image"
                disabled={totalItems <= 1}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Image container */}
            <div
                className="max-w-6xl max-h-[90vh] w-full h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative flex-1 flex items-center justify-center">
                    <Image
                        src={item.image}
                        alt={item.description || item.title}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Image info */}
                <div className="bg-black/80 text-white p-6 mt-4 rounded-lg">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <span className="text-sm text-gray-400 whitespace-nowrap">
                            {currentIndex + 1} / {totalItems}
                        </span>
                    </div>

                    {item.description && (
                        <p className="text-gray-300 mb-3">{item.description}</p>
                    )}

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {item.date}
                        </span>

                        {item.location && (
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.location}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
