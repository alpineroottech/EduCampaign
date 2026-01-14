'use client';

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/ui/transitions";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    avatarSrc: string;
    rating: 1 | 2 | 3 | 4 | 5;
    quote: string;
};

const Star = ({ filled }: { filled: boolean }) => (
    <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className={`h-5 w-5 ${filled ? "fill-[#6B4FA1]" : "fill-gray-200"}`}
    >
        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.97 5.06 16.7 6 11.2 2 7.31l5.53-.8L10 1.5z" />
    </svg>
);

const TestimonialCard: React.FC<{ t: Testimonial; index: number }> = ({ t, index }) => {
    const { name, role, avatarSrc, rating, quote } = t;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
        >
            <motion.article
                className="relative flex h-full flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                aria-label={`Testimonial from ${name}`}
                whileHover={{ y: -4, boxShadow: '0 12px 40px -12px rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {/* Top accent line */}
                <motion.div 
                    className="h-1 w-full bg-[#6B4FA1]" 
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: false }}
                    style={{ transformOrigin: 'left' }}
                />

                <div className="px-6 pt-5 pb-4 h-64">
                    {/* Rating */}
                    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} filled={i < rating} />
                        ))}
                        <span className="sr-only">{rating} out of 5 stars</span>
                    </div>

                    {/* Quote */}
                    <div className="mt-4 text-gray-600 leading-relaxed overflow-y-auto h-[calc(100%-2.5rem)] scrollbar-hide">
                        <p>&ldquo;{quote}&rdquo;</p>
                    </div>
                </div>

                {/* Footer bar */}
                <div className="mt-auto flex items-center gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <Image
                        src={avatarSrc}
                        alt={`${name} avatar`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                        <div className="text-sm font-semibold text-gray-900">{name}</div>
                        <div className="text-xs text-gray-500">{role}</div>
                    </div>
                </div>
            </motion.article>
        </motion.div>
    );
};

const testimonials: ReadonlyArray<Testimonial> = [
    {
        id: "1",
        name: "Biraj Tiwari",
        role: "Australia",
        avatarSrc: "/images/people/birajtiwari.png",
        rating: 5,
        quote:
            "Edu. Campaign guided me in choosing the best university in Australia according to my goals. Their assistance with applications, visa, and scholarships made the whole process stress-free.",
    },
    {
        id: "2",
        name: "Manjari Silwal",
        role: "Japan",
        avatarSrc: "/images/people/manjarisilwal.png",
        rating: 4,
        quote:
            "I always dreamt of studying in Japan, but the process seemed complicated. With Edu. Campaign's guidance, I received my COE and admission without stress. Life in Osaka has been amazing so far.",
    },
    {
        id: "3",
        name: "Bhawana Dahal",
        role: "Japan",
        avatarSrc: "/images/about-board.png",
        rating: 5,
        quote:
            "The counseling I received was personalized and practical. The team guided me in choosing the right Japanese language school, and even after my arrival, they kept in touch. I am grateful for their genuine care.",
    },
    {
        id: "4",
        name: "Saurab Bhatta",
        role: "UK",
        avatarSrc: "/images/people/saurabbhatta.png",
        rating: 5,
        quote:
            "Choosing Edu. Campaign was the best decision. They helped me with university selection, visa filing, and even accommodation guidance. Life in the UK has been rewarding, and I owe much of it to their assistance.",
    },
];

const Testimonials = () => {
    return (
        <section
            className="relative pt-16 pb-2 bg-white"
            aria-labelledby="testimonials-heading"
        >
            <div className="max-w-7xl mx-auto px-standard">
                <ScrollReveal>
                    <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our Students Say
                        </h2>
                        <p className="text-gray-600">
                            From challenges to achievements, every student&apos;s story is
                            important. Curious about students&apos; experience here?
                            Don&apos;t just take our word for it—hear it straight from the
                            students themselves!
                        </p>
                    </header>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={index % 2 === 1 ? "lg:mt-8" : ""}
                        >
                            <TestimonialCard t={testimonial} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;