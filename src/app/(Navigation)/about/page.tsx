"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import React from "react";
import { socialIcons } from "@/data/socialData";

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
