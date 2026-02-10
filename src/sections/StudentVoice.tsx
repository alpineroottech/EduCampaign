'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/transitions';

// type definition for video data
type Video = {
    id: string;
    title: string;
    thumbnail: string;
    youtubeId: string;
};

// actual video data
const VIDEOS: Video[] = [
    {
        id: 'uk-classroom',
        title: 'Students sharing their study abroad experience',
        thumbnail: '/images/countries/uk.jpg',
        youtubeId: 'IjY34e7NfaU',
    },
    {
        id: 'australia-testimonial',
        title: 'Student testimonial about studying abroad',
        thumbnail: '/images/countries/Australia.jpg',
        youtubeId: 'IjY34e7NfaU',
    },
    {
        id: 'japan-journey',
        title: 'International student sharing their journey',
        thumbnail: '/images/countries/japan.png',
        youtubeId: 'IjY34e7NfaU',
    },
];

// inline svg components for icons
const PlayIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 ml-1"
        aria-hidden="true"
    >
        <path d="M8 5v14l11-7z" />
    </svg>
);

const CloseIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
        aria-hidden="true"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

// video holder / video card component
type VideoCardProps = {
    video: Video;
    onPlay: (youtubeId: string) => void;
    priority?: boolean;
    index?: number;
};

const VideoCard = ({ video, onPlay, priority = false, index = 0 }: VideoCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
            onClick={() => onPlay(video.youtubeId)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onPlay(video.youtubeId);
                }
            }}
            aria-label={`Play video: ${video.title}`}
        >
            <div className="relative w-full h-full bg-gray-200">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={priority}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl"
                        whileHover={{ scale: 1.1, backgroundColor: '#ef4444' }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <PlayIcon />
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
};

// model component to show video in overlay
type VideoModalProps = {
    youtubeId: string;
    onClose: () => void;
};

const VideoModal = ({ youtubeId, onClose }: VideoModalProps) => {
    useEffect(() => {
        // Close on ESC key
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
        >
            <div
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -top-12 right-0 md:-right-12 md:top-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    <CloseIcon />
                </button>

                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                    title="Student Voice Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};


const StudentVoice = () => {
    const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
    const [featuredVideo, ...otherVideos] = VIDEOS;

    return (
        <section
            className="relative pt-16 pb-2 bg-gray-50"
            id="student-voice"
        >
            <div className="max-w-7xl mx-auto px-standard">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Student Voices
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Here, we share the experiences and reflections of our students from across the globe.
                            Their stories highlight learning, growth, and personal journeys, inspiring others to
                            explore opportunities and pursue their dreams.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-[250px] md:h-[240px]">
                        <VideoCard
                            video={featuredVideo}
                            onPlay={setActiveYoutubeId}
                            priority
                            index={0}
                        />
                    </div>

                    {otherVideos.map((video, idx) => (
                        <div key={video.id} className="h-[250px] md:h-[240px]">
                            <VideoCard
                                video={video}
                                onPlay={setActiveYoutubeId}
                                index={idx + 1}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-6 px-2">
                    <a
                        href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center border border-gray-300 gap-2 px-6 py-3 rounded-md font-medium hover:shadow-md hover:bg-gray-100 transition duration-200"
                    >
                        See all videos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {activeYoutubeId && (
                <VideoModal
                    youtubeId={activeYoutubeId}
                    onClose={() => setActiveYoutubeId(null)}
                />
            )}
        </section>
    );
};


export default StudentVoice;