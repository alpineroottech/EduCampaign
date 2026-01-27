'use client';
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Hero from "@/sections/Hero";
import NoticeEvents from "@/sections/NoticeEvents";
import StudentVoice from "@/sections/StudentVoice";
import Testimonials from "@/sections/Testimonials";
import TopDestinations from "@/sections/TopDestinations";
import WhyUs from "@/sections/WhyUs";
import { useRef } from "react";
import { useScrollToOffset } from "@/utils/useScrollToOffset";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const noticeEventsRef = useRef<HTMLDivElement>(null);
  const scrollToOffset = useScrollToOffset(80);

  const handleJoinClick = () => {
    scrollToOffset(contactRef.current);
  };

  const handleScrollToNoticeEvents = () => {
    scrollToOffset(noticeEventsRef.current);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero 
        onJoinClick={handleJoinClick}
        onNoticeEventsClick={handleScrollToNoticeEvents}
      />
      
      {/* Welcome / About Section */}
      <AboutSection />
      
      {/* Why Choose Us */}
      <WhyUs />
      
      {/* Study Destinations */}
      <TopDestinations />
      
      {/* Contact Form */}
      <ContactSection ref={contactRef} />
      
      {/* Student Testimonials */}
      <StudentVoice />
      <Testimonials />
      
      {/* Notice & Events */}
      <NoticeEvents ref={noticeEventsRef} />
    </div>
  );
}
