'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Bell } from 'lucide-react';
import { NOTICE_EVENTS, NoticeEvent } from '@/data/eventsData';
import { forwardRef } from 'react';
import { motion } from "motion/react";

export const LearnMoreButton = ({ slug }: { slug: string }) => {
    return (
        <Link
            href={slug}
            className="flex justify-center bg-[#3d1a4d] text-white px-6 py-2.5 font-semibold shadow-sm rounded-sm transition hover:bg-purple-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 "
        >
            Learn More
        </Link>
    )
};

// EventCard - Displays a single notice/event card
const EventCard = ({ event }: { event: NoticeEvent }) => {
    const isEvent = event.type === 'event';

    return (
        <article className="group overflow-hidden flex flex-col rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
            {/* Image with type badge */}
            <div className="relative w-full aspect-[16/10] flex-shrink-0 overflow-hidden">
                <Image
                    src={event.imageSrc}
                    alt={event.title}
                    fill
                    className="object-fill group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded text-sm font-medium ${isEvent ? 'bg-purple-600 text-white' : 'bg-amber-500 text-white'}`}>
                    {isEvent ? 'Event' : 'Notice'}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title - fixed height for 2 lines */}
                <div className="h-14 mb-3">
                    <h5 className="group-hover:text-[#6B4FA1] transition-colors line-clamp-2">
                        {event.title}
                    </h5>
                </div>

                {/* Description - fixed height for 3 lines */}
                <div className="h-[4.5rem] mb-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                        {event.description}
                    </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                    {isEvent ? (
                        <Calendar className="w-4 h-4 flex-shrink-0 text-[#6B4FA1]" />
                    ) : (
                        <Bell className="w-4 h-4 flex-shrink-0 text-amber-500" />
                    )}
                    <span className="text-sm">
                        {isEvent && event.endDate
                            ? `${event.date} to ${event.endDate}`
                            : event.date}
                    </span>
                </div>

                {/* Location - Only for events */}
                {isEvent && event.location && (
                    <div className="flex items-start gap-2 text-gray-600 mb-4 flex-grow">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-[#6B4FA1] mt-0.5" />
                        <span className="text-sm">{event.location}</span>
                    </div>
                )}

                {!isEvent && <div className="flex-grow" />}

                <Link
                    href={event.openingImg || event.imageSrc}
                    target="_blank"
                    className="bg-[#3d1a4d] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#2a1136] transition self-center"
                >
                    Learn More
                </Link>
            </div>
        </article>
    );
};

// NoticeEvents - Main section showcasing notices and events
const NoticeEvents = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section
            ref={ref}
            className="relative px-standard max-w-7xl pt-16 pb-16 mx-auto"
            id="notice-events"
            aria-label="Notice and Events section"
        >
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 mx-auto">
                <h2 className="text-gray-900 mb-4">
                    Notice & Events
                </h2>
                <p className="text-body  mb-6">
                    Stay updated! Check all important announcements and latest notices and official updates for students and staff.
                </p>
            </div>
            {/* Events Grid */}
            <div className=" ">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {NOTICE_EVENTS.map((event) => (
                        <motion.div 
                            key={event.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <EventCard event={event} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className='flex justify-end mt-6 px-2'>
                    <Link
                        href="/events"
                        className="inline-flex items-center border border-gray-300 gap-2  px-6 py-3 rounded-md font-medium hover:shadow-md hover:bg-gray-100 transition duration-200"
                    >
                        View All Events
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
});

NoticeEvents.displayName = 'NoticeEvents';

export default NoticeEvents;
