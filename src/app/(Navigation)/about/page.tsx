"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import React from "react";

// Interfaces
interface TeamMember {
  name: string;
  position: string;
  image: string;
}
interface AboutUsCard {
  image: string;
  description: string;
}

//random comment



export default function AboutUs() {

  const aboutUsCards: AboutUsCard[] = [
    {
      image: "/images/interview.jpg", // replace
      description: "It is a privilege to welcome you to Edu. Campaign Pvt. Ltd., a trusted education consultancy established in 2008. Since our inception, we have remained committed to guiding students toward academic and professional success through ethical, transparent, and student-focused services. At Edu. Campaign, we believe education is not just about earning qualifications it is a gateway to global opportunities, broader perspectives, and brighter futures.Our philosophy is rooted in integrity and personalized support, helping students make informed decisions about studying abroad. Drawing inspiration from globally renowned universities and best practices in international education consulting, we have built a strong foundation of professionalism, accurate guidance, and ethical counseling.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Tanka Nath Dawadi",
      position: "Managing Director",
      image: "/images/people/team/tankanathdawadi.png", 
    }
  ];

  const socialIcons = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61561121886307&rdid=GPY4zqEK3FPJmPxy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18CEAvqAEo%2F#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/edu.campaign2008/?igsh=eXltZ2E3ODZjNjh3#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/qr/WRRENBMZGHUTJ1",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@edu.campaign2008?_r=1&_t=ZS-923AvV9VHWP",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      ),
    },


    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Viber",
      href: "viber://add?number=818091608830",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="black" d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.971-1.084 1.397-1.58 3.85.323 6.812-.416 7.152-.525.776-.252 5.176-.813 5.89-6.657.733-6.015-.446-9.832-2.048-11.5C19.302.667 15.797.04 11.4 0zm.505 1.945h.054c3.866.011 6.592.502 8.04 1.817 1.334 1.456 2.322 4.667 1.772 9.544-.6 5.04-4.182 5.203-4.818 5.396-.29.09-2.882.737-6.153.477 0 0-2.436 2.94-3.197 3.705-.12.12-.26.167-.352.145-.13-.033-.167-.188-.165-.414l.02-4.016c-.001 0-.001 0 0 0-4.758-1.332-4.46-6.287-4.404-8.82.056-2.535.567-4.656 1.977-6.193C6.6 1.677 10.123 1.96 11.905 1.945z" />
          <path fill="black" d="M7.5 6C7.2 6 7 6.2 7 6.5L7 7C7 7.1 7 7.2 7.1 7.3L10.8 15.3C10.9 15.5 11.1 15.6 11.3 15.7C11.4 15.7 11.5 15.8 11.7 15.8C11.8 15.8 12 15.8 12.1 15.7C12.3 15.6 12.5 15.5 12.6 15.3L16.3 7.3C16.4 7.2 16.4 7.1 16.4 7L16.4 6.5C16.4 6.2 16.2 6 15.9 6C15.7 6 15.5 6.1 15.4 6.3L11.7 14.3L8 6.3C7.9 6.1 7.7 6 7.5 6Z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/EduCampaign2008?t=iy5WkRfku9hWtwD3iFhesw&s=08",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },

  ];



  return (
    <div className="min-h-screen pb-12 sm:pb-16 md:pb-20">

      {/* Hero Section */}
      <div className="relative">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80" title="About Us" />
      </div>


      <div>
        {/* ABOUT US CARDS */}
        {
          aboutUsCards.map((card, index) => (
            <div key={index} className="relative max-w-7xl py-4 mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                <Image
                  src={card.image}
                  alt={`About Us ${index + 1}`}
                  className="w-full md:w-2/5 border h-60 sm:h-72 md:h-80 object-cover"
                  width={1500}
                  height={1300}
                />
                <div className="flex flex-col">
                  <h5 className="mb-2 text-lg sm:text-xl md:text-2xl">Introduction</h5>
                  <p className="text-sm sm:text-base md:text-left">
                    {card.description}
                  </p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
      {/* CONTACT US SECTION */}
      <div className="max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-8 md:p-10 mx-4 sm:mx-auto mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
        <h5 className="text-center mb-8 sm:mb-10 md:mb-12 text-lg sm:text-xl md:text-2xl">Contact Us</h5>
        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          <div className="space-y-6 sm:space-y-8 md:space-y-10">

            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 text-white flex items-center justify-center rounded-lg shadow flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-sm sm:text-base">Address</h6>
                <p className="text-sm sm:text-base">DILLIBAZAR-30, GURJUMARGA, Kathmandu 44605, Nepal</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59L15 15.41a1 1 0 011-.24 11.36 11.36 0 003.53.56 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.28a1 1 0 011 1 11.36 11.36 0 00.56 3.53 1 1 0 01-.24 1z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-sm sm:text-base">Phone</h6>
                <p className="text-sm sm:text-base">01-4500074</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white flex items-center justify-center rounded-lg shadow flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1l-10 6L2 5V4zm0 4.236V20a2 2 0 002 2h16a2 2 0 002-2V8.236l-10 6-10-6z" />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-sm sm:text-base">Mail Us</h6>
                <p className="text-sm sm:text-base break-words">Educampaign2008@gmail.com <br />Info@educampaign.com.np</p>
              </div>
            </div>

          </div>

          <div>
            <div className="mb-4 sm:mb-6 mx-auto w-full flex justify-center items-center">
              <h6 className="font-semibold text-sm sm:text-base">Follow Us</h6>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

              {/* Left Side – First Four */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {socialIcons.slice(0, 4).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </a>
                ))}
              </div>

              {/* Right Side – Last Three */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {socialIcons.slice(4).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </a>
                ))}
              </div>

            </div>
          </div>



        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 md:mt-12">
        {/* MISSION & VISION CARDS */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14">

          {/* Mission */}
          <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 flex flex-col text-center hover:bg-purple-200">
            <h5 className="mb-3 text-lg sm:text-xl md:text-2xl">Our Mission</h5>
            <p className="leading-relaxed text-sm sm:text-base">
              At the heart of our consultancy lies a commitment to illuminate the educational
              journeys of our clients. We dedicate ourselves to offering insightful, customized
              advice that transforms aspirations into achievable pathways. By blending in-depth
              knowledge with compassionate understanding, we navigate the complexities of
              academic choices and global opportunities. Our purpose is to empower every
              learner and institution we serve with clarity, confidence, and access to the
              resources they need to thrive in an ever-evolving educational landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 flex flex-col text-center hover:bg-purple-200">
            <h5 className="mb-3 text-lg sm:text-xl md:text-2xl">Our Vision</h5>
            <p className="leading-relaxed text-sm sm:text-base">
              To be a trusted bridge between aspiring students and top global institutions, always
              upholding honesty, professionalism, and international standards. We strive to
              guide students so that their potential turns into a bright and successful future. By
              helping them navigate the wide world of education, we open doors to
              opportunities and support journeys that shape the leaders, innovators, and change-
              makers of tomorrow.
            </p>
          </div>

        </div>

        {/* TEAM SECTION */}
        <section className="mt-8 sm:mt-10">
          <h5 className="text-center mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl">
            Meet Our Team
          </h5>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 sm:p-6 w-full sm:w-[240px] md:w-[260px] text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1500}
                  height={1500}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-full mx-auto mb-3 sm:mb-4 shadow"
                />
                <h6 className="text-sm sm:text-base">
                  {member.name}
                </h6>
                <p className="text-gray-600 text-xs sm:text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
