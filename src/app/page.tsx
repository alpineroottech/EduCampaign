'use client';
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Hero from "@/sections/Hero";
import NoticeEvents from "@/sections/NoticeEvents";
import StudentVoice from "@/sections/StudentVoice";
import Testimonials from "@/sections/Testimonials";
import TopDestinations from "@/sections/TopDestinations";
import WhyUs from "@/sections/WhyUs";
import TrustedBy from "@/sections/TrustedBy";
import { useRef } from "react";
import { useScrollToOffset } from "@/utils/useScrollToOffset";
import { Metadata } from "next";

// commentss for vercel deployment
//cannot use in client side
// export const metadata: Metadata = {
//   title: "Edu Campaign | Best Japanese Consultancy Language",
//   description: "Edu Campaign is the best Japanese Language Consultancy located in Kathmandu",
//   robots: "all",
// };
// comments for vercel deployment
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
    <div className=" w-full min-h-screen">
      {/* at least the full height of the view port  */}
      <Hero 
        onJoinClick={handleJoinClick}
        onNoticeEventsClick={handleScrollToNoticeEvents}
      />
      <AboutSection />
      <WhyUs />
      <TopDestinations />
      <ContactSection ref={contactRef} />
      <StudentVoice />
      <Testimonials />
      <NoticeEvents ref={noticeEventsRef} />
      <TrustedBy />

    </div>
  );
}
