'use client';

import Image from 'next/image';
import { type GalleryItem } from '@/data/galleryData';

interface GalleryItemCardProps {
    item: GalleryItem;
    onClick: () => void;
}

export default function GalleryItemCard({ item, onClick }: GalleryItemCardProps) {
    return (
        <div
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 aspect-[4/3] border border-purple-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
            aria-label={`View ${item.title}`}
        >
            {/* Image */}
            <Image
                src={item.image}
                alt={item.description || item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {item.date}
                        </span>
                        {item.location && (
                            <span className="flex items-center gap-1">
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

            {/* Zoom icon indicator */}
            <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
            </div>
        </div>
    );
}
