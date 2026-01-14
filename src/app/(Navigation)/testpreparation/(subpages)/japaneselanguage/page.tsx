"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import HeroSection from '@/components/hero/HeroSection';
import Link from 'next/link';
import { motion } from 'motion/react';

interface JapaneseLanguageCard {
  title: string;
  description1: string;
  description2: string;
  image: string;
  links: LanguageSchoolCard[];

}
interface LanguageSchoolCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}


// interface UniversityCard {
//   image: string;
//   title: string;
//   description: string;
// }


export default function JapaneseLanguage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    JLPTLevel: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      JLPTLevel: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", JLPTLevel: "", message: "" });
    alert("Thank you for your enquiry!");
  };



  const japaneseLanguage: JapaneseLanguageCard[] = [
    {
      title: "N5",
      description1: "The JLPT N5 exam tests you the knowledge of Hiragana, Katakana and easy Kanji. You are required to read simple sentences and understand slow oral conversations about everyday topics. This level ability to understand daily basic Japanese conversation. For those seeking employment in Japan, JLPT scores can be quite useful. Passing the N2 or N1 levels can even qualify individuals for preferential treatment when immigrating to Japan or get you noticed by a potential recruiter.",
      description2: "Furthermore, the N5 Exam can be a valuable goal for beginner Japanese learners. It can serve as a short-term target and help learners discover their strengths and weaknesses. N5 level has recently been necessary in applying for student visas to Japan. Achieving the N5 is the first step in mastering Japanese language  and opens the door to understanding Japanese language and the culture more deeply. And assist to navigate for advanced study and work. For the JLPT N5 exam preparation, it is expected to know around 800 vocabulary words as well as the first around 120 kanji tentatively in around 180 Hrs. of Course",
      image: "/images/subpages/n5.webp",
      links: [
        {
          image: "/images/studyabroad/university.png",
          title: "Japanese Language Program",
          description: "Comprehensive language training covering communication, business Japanese, and academic skills.",
          slug: "/studyabroad/japan/japaneselanguageprogram"
        },
      ]
    },
    {
      title: "N4",
      description1: "N4 indicates the ability to understand basic Japanese and engage in simple daily conversations. The JLPT N4 is the second level from the bottom in the Japanese Language Proficiency Test. It evaluates your ability to understand basic Japanese, especially everyday vocabulary and common sentence structures. This level builds upon N5 basics, helping students enhance their vocabulary, refine grammar structures, and improve listening and reading comprehension for daily communication.",
      description2: "The Japanese N4 Syllabus is an intermediate milestone that builds on foundational knowledge and prepares learners for advanced language skills -N3. Below, Edu. Campaign Pvt. Ltd. develops deeply into the Japanese N4 Syllabus, breaking it down into Grammar, Vocabulary, Kanji, Listening, and Reading components. This level gives the pathway to prepare to Preparatory Japanese language program (Bekka) and equally paves the way to SSW since JLPT N4 and JFT- JFT- Basic demonstrate roughly the same level of skill accepting anyone of them that fulfils the requirement for SSW.  This level`s course is designed for about 400 hours.",
      image: "/images/subpages/n4.webp",
      links: [
        {
          image: "/images/studyabroad/university.png",
          title: "Bekka Program",
          description: "University preparatory course building strong Japanese language foundation.",
          slug: "/studyabroad/japan/bekka"
        },
        {
          image: "/images/studyabroad/university.png",
          title: "SSW Program",
          description: "Work in Japan under Specified Skilled Worker visa with N4/JFT-Basic level.",
          slug: "/testpreparation/sswpreparation"
        },
      ]
    },
    {
      title: "N3",
      description1: "The JLPT N3 level is an intermediate stage of Japanese language proficiency. At this stage, learners can read and comprehend various real-life situations and grasp more complex language structures than those in beginner levels as well as follow conversations spoken at a natural speed in familiar settings. It shows that a learner can understand everyday Japanese used in various real-life situations and grasp more complex language structures than those in beginner levels.  ",
      description2: "Earning the N3 certificate mastering on it requires dedication, consistency, and an understanding of the key concepts outlined in the Japanese-Language Proficiency Test (JLPT) syllabus. It is a valuable qualification for students or SSW workers II aiming to live or study in Japan. This level can bridge to Junior college of Japan or University course of special field.   ",
      image: "/images/subpages/n3.webp",
      links: [
        {
          image: "/images/studyabroad/university.png",
          title: "SSW II",
          description: "Advanced skilled worker program for experienced professionals in Japan.",
          slug: "/testpreparation/sswpreparation?scrollTo=field&tab=ssw2"
        },
        {
          image: "/images/studyabroad/university.png",
          title: "Junior College",
          description: "Two-year specialized education programs in Japan with practical training.",
          slug: "/studyabroad/japan/daigaku"
        },
      ]
    },
  ];
  // const universityCards: UniversityCard[] = [
  //   {
  //     image: "/images/interview.jpg",
  //     title: "Bekka",
  //     description: "To study Japanese language and then enter university or a professional training college,"
  //   },
  // ];

  return (
    <div className="">
      {/* Hero Section - Figma accurate */}
      <div className=" ">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" title="Japanese Language" />
        <div className="text-center max-w-5xl mx-auto py-4 px-4">
          <p className="mt-6">
            To pursue study or employment opportunities in Japan, having strong Japanese language
            skills is essential. Various tests assess this ability, such as the JLPT, NAT, JLCT, J-CERT,
            and JCT. Among these, the Japanese-Language Proficiency Test (JLPT) is the most
            recognized and widely accepted. It evaluates a learner’s comprehensive communication
            skills through three sections: Language Knowledge, Reading, and Listening.
          </p>
          <p className='mt-6'>
            The JLPT offers five levels of certification: N5 being the easiest and N1 the most
            advanced. It is a standardized test designed for non-native speakers to measure their
            proficiency in Japanese language. The exam is held twice annually- in July and December
            in Japan and in also Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:p-10 px-standard">

        {japaneseLanguage.map((card: JapaneseLanguageCard, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white border border-purple-200 shadow-lg rounded-3xl overflow-hidden mb-10"
          >
            {/* LEFT TEXT SECTION */}
            <div className="w-full md:w-2/3 p-6">
              {/* Title Background */}
              <h2 className="  p-4 bg-gray-200">
                {card.title}
              </h2>

              <p className="mt-6 leading-relaxed text-justify">
                {card.description1}
              </p>

              <p className="mt-4  leading-relaxed text-justify">
                {card.description2}
              </p>

              <div className="px-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {card.links.map((school, index) => (
                    <Link href={school.slug} key={index} className="h-full">
                      <div className="border relative w-full h-full min-h-[180px] sm:min-h-[200px] rounded-lg overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${school.image})` }}
                        />
                        <div className="relative h-full p-4 flex flex-col justify-center text-center">
                          <h6 className="mb-2 mt-1 text-center font-semibold text-sm sm:text-base">{school.title}</h6>
                          <p className="text-xs sm:text-sm">{school.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative w-full md:w-1/3 min-h-[300px] md:min-h-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

      </div>
      <div className="relative h-70 w-full mb-12">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          alt="Enquiry Background"
          width={4160}
          height={3240}
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">Enquire More Directly</h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">Enquire About Japanese Language Classes</h3>

        <form onSubmit={handleSubmit}>
          {/* Row 1: Name, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone, JLPT Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+977 98XXXXXXXX"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="JLPTLevel" className="text-sm font-medium text-gray-700">JLPT Level <span className="text-red-500">*</span></label>
              <select
                name="JLPTLevel"
                id="JLPTLevel"
                value={formData.JLPTLevel}
                onChange={handleSelectChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-transparent"
                required
              >
                <option value="">Select JLPT Level</option>
                <option value="N5">N5 (Beginner)</option>
                <option value="N4">N4 (Upper Beginner)</option>
                <option value="N3">N3 (Intermediate)</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          {/* Row 3: Message */}
          <div className="mb-8">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 block mb-1">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your learning goals or any questions you have..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#3D1F4E] text-white px-12 py-3 rounded-md font-semibold hover:bg-[#2a1535] transition-colors"
            >
              Enquiry Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
