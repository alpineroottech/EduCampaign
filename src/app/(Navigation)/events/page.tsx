"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NOTICE_EVENTS, NoticeEvent } from "@/data/eventsData";
import { motion } from "motion/react";

const heroImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80" 
];

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
          className="object-cover group-hover:scale-105 transition-transform duration-500"
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
          href={event.imageSrc}
          target="_blank"
          className="bg-[#3d1a4d] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#2a1136] transition self-center"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
};

const Event = () => {
  const [imgIndex, setImgIndex] = useState(0);

  // Background image fade transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mb-20">
      {/* Hero */}
      <div className="relative">
        <Breadcrumbs />
        <div className="relative h-[350px] grid grid-cols-6 grid-rows-1">
          <div className="grid col-span-1 row-span-1 h-full bg-[#ebe9e1] items-center">
            <div className="absolute z-20 ml-8 bg-gradient-to-r from-white/80 to-white/10 p-15 border-l-8 border-l-[#df5252] shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
              <h2 className="">Notice & Events</h2>
            </div>
          </div>

          <div className="grid col-span-5 h-full w-full relative">
            {heroImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                width={1220}
                height={400}
                alt="Events Hero"
                priority={idx === 0}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  imgIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl mx-auto py-8 md:py-12 px-4"
      >
        <p className="">
          Stay informed about our upcoming events, workshops, and important announcements. 
          Join us for educational seminars, test preparation courses, and career guidance sessions 
          designed to help you achieve your academic and professional goals. Mark your calendar and 
          never miss an opportunity to advance your journey toward studying abroad.
        </p>
      </motion.div>

      {/* Events Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto my-6 gap-6 px-4"
      >
        {NOTICE_EVENTS.map((event) => (
          <motion.div 
            key={event.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Event;
