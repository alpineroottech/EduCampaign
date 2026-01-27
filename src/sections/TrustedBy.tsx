"use client";

import Image from 'next/image'
import Link from 'next/link';
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/transitions";
import { motion } from "motion/react";

const EndorsersInfo = [
    {
        image: "/images/homepage/image.svg",
        infoText: "Universities Australia",
        href: "https://www.universitiesaustralia.edu.au/"
    },
    {
        image: "/images/homepage/University_of_Tokyo.svg",
        infoText: "University Of Tokyo",
        href: "https://www.u-tokyo.ac.jp/en/"
    },
    {
        image: "/images/homepage/University_of_Tokyo.svg",
        infoText: "University Of Tokyo",
        href: "https://www.u-tokyo.ac.jp/en/"
    }
]

const TrustedBy = () => {
    return (
        <section className="pt-8 pb-8 bg-gray-50">
            <div className="max-w-6xl mx-auto px-standard">
                <ScrollReveal>
                    <div className="flex flex-col">
                        {/* Trusted By */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Trusted By
                            </h3>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                            >
                                <div className="flex flex-wrap justify-center lg:justify-around items-center gap-8">
                                    {EndorsersInfo.map((endorser, index) => (
                                        <motion.div
                                            key={index}
                                            variants={staggerItem}
                                            className="flex flex-col items-center group"
                                        >
                                            <Link
                                                href={endorser.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center"
                                            >
                                                <div className="h-16 md:h-20 flex items-center justify-center">
                                                    <Image
                                                        src={endorser.image}
                                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                                                        width={100}
                                                        height={100}
                                                        alt={endorser.infoText}
                                                    />
                                                </div>
                                                <p className="mt-2 text-center text-xs md:text-sm text-gray-600 font-medium group-hover:text-[#6B4FA1] transition-colors">
                                                    {endorser.infoText}
                                                </p>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TrustedBy;
