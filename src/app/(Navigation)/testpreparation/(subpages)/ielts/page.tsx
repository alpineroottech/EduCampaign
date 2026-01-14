"use client";
import React, { useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import { motion } from "motion/react";

export default function Ielts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your enquiry!");
  };
  return (
    <div className="mb-20">

      {/* ------------------------ HERO SECTION ------------------------ */}
      <div className="">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" title="IELTS Preparation"/>

        <div className="text-center max-w-5xl mx-auto py-8 px-6">
          <p className="t leading-relaxed">
            IELTS is a widely recognized English proficiency test for study, work, and migration, accepted by over 11,000 institutions globally. It assesses listening, reading, writing, and speaking skills.
          </p>
        </div>
      </div>



      <div className="max-w-5xl text-center mx-auto px-4 sm:px-6">

        <h4 className="max-w-5xl mx-auto mt-6 leading-relaxed text-lg sm:text-xl">The test is available in two main types:</h4>
        <ul className="mt-4 space-y-3 text-left max-w-3xl mx-auto">
          <li className="text-sm sm:text-base"><strong>Academic:</strong> For higher education or professional registration, focusing on academic language skills.</li>
          <li className="text-sm sm:text-base"><strong>General Training:</strong> For migration, secondary education, or work experience, focusing on everyday English in social and workplace contexts.</li>
        </ul>
        <h4 className="pt-8 sm:pt-10 text-lg sm:text-xl">The test consists of four sections:</h4>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10 px-4 sm:px-6">
        {[
          {
            title: "Listening (30 min)",
            description: "Tasks include multiple-choice, matching, labeling, and sentence completion using recordings of native speakers.",
            button: "Learn More ",
          },
          {
            title: "Reading (60 min)",
            description: "Academic texts or general passages from everyday sources",
            button: "Learn More ",
          },
          {
            title: "Writing (60 min)",
            description: "Academic tasks involve describing graphs and essays; General tasks include letters and essays.",
            button: "Learn More ",
          },
          {
            title: "Speaking (11–14 min)",
            description: "A face-to-face interview with short questions, a long turn, and discussion.",
            button: "Learn More ",
          },
        ].map((test, index) => (
          <div
            key={index}
            className="bg-gray-100 pt-6 sm:pt-8 px-4 sm:px-8 pb-5 sm:pb-6 rounded-2xl shadow flex flex-col justify-between min-h-[200px]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl">{test.title}</h3>
            <p className="mt-3 text-sm sm:text-base">
              {test.description}
            </p>
            <button className="bg-[#3d1a4d] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#2a1136] transition self-center mt-4 sm:mt-6 w-full sm:w-auto">
              {test.button}
            </button>
          </div>
        ))}
      </div>

      {/* ------------------------ STATS CARDS ------------------------ */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-30 bg-white border border-purple-300 shadow-lg rounded-2xl max-w-4xl mx-4 sm:mx-auto p-6 sm:p-10 my-10 mt-12 sm:mt-16">
        {[
          { number: "12,000", label: "Happy Students" },
          { number: "120", label: "Expert Instructors" },
          { number: "500", label: "Success Stories" },
        ].map((item, index) => (
          <div key={index} className="text-center px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl">{item.number}</h3>
            <p className="text-sm sm:text-base">{item.label}</p>
          </div>
        ))}

      </div>

      <div className="max-w-5xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center gap-2 text-center sm:text-left">
          <p className="text-purple-500 font-semibold">Note:</p>
          <p className="leading-relaxed text-sm sm:text-base">Scores are reported on a 9-band scale, with each section scored individually and averaged for an overall band score. Scores are valid for two years.</p>
        </div>
      </div>

      {/* Enquiry Section */}
      <div className="w-full mt-16 sm:mt-20">
        <div className="relative h-48 sm:h-60 md:h-70 w-full mb-8 sm:mb-12">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt="Enquiry Background"
            width={4160}
            height={3240}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide text-center">Enquire More Directly</h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name:"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email:"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number:"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message:"
                rows={6}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#3D1F4E] text-white px-16 py-3 rounded-md font-semibold hover:bg-[#2a1535] transition-colors"
              >
                Enquiry Now
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
