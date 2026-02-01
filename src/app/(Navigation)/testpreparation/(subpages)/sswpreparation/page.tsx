"use client";
import React, { useEffect, useState } from "react";
import { ssw1Data, ssw2Data } from "@/data/sswData";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import Link from "next/link";
import { motion } from "motion/react";

const SSWPreparationPage = () => {
  const [activeTab, setActiveTab] = useState("ssw1");
  const fieldRef = React.useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const scrollToField = () => {
    fieldRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    const tab = params.get("tab");
    
    if (tab === "ssw2") {
      setActiveTab("ssw2");
    }
    
    if (scrollTo === "field") {
      // Small delay to ensure tab switch happens first
      setTimeout(() => {
        scrollToField();
      }, 100);
    }
  }, []);

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
    <div className="">
      {/* Hero Section - Figma accurate */}
      <div className=" ">
        <div className=" ">

          <Breadcrumbs />
          <HeroSection imageSrc="/images/testpreparation/ssw.webp" title="SSW Preparation" />
          <div className="py-16 md:py-24 px-standard">
            <div className="container-narrow mx-auto px-0 lg:px-8">
              <h2 className="bg-gray-200 p-4 w-full lg:w-[50vw]">
                About Courses In Nepal
              </h2>
              <p className="text-justify mt-8">
                SSW (Specified Skilled Worker) course is a Japanese language and skill-preparation
                program designed for foreign nationals who want to work in Japan legally under the
                Specified Skilled Worker visa. We offer a well-structured <strong>SSW/JFT Type1 preparation
                  course</strong>, equivalent to the <strong>JLPT N4 level</strong>, specifically designed to open the door to
                employment opportunities in Japan. Our program is led by highly experienced teachers
                who have graduated from reputed Japanese institutions, bringing authentic language
                expertise and cultural insight into the classroom. Teaching is conducted in a friendly,
                supportive, and interactive environment, with special attention given to adjusting the
                learning pace according to each student’s ability. The course is strongly exam-oriented,
                covering listening, reading, grammar, vocabulary, and skill-based Japanese required for the
                workplace. In addition, we provide regular mock tests, exam strategies, interview preparation,
                and guidance on Japanese work culture, ensuring students gain both confidence and competence
                to successfully pass the exam and begin their professional journey in Japan.
              </p>
            </div>
          </div>
          <div className="py-4 px-standard">
            <div className="container-narrow mx-auto px-0 lg:px-8">
              <h2 className="bg-gray-200 p-4 w-full lg:w-[50vw]">
                SSW Overview
              </h2>
              <p className="text-justify mt-8">
                The SSW program allows foreign nationals to work in Japan without a university degree.
                This program can be a great opportunity for those who have vocational training or work
                experience in the related field. To qualify, candidates must pass both a <strong>Japanese
                  language test</strong> and a <strong>Skills Proficiency test</strong> relevant to their field, such as nursing,
                construction or food service.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="max-w-7xl py-12 px-standard mx-auto">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 lg:pr-8">
              <h2 className="bg-gray-200 p-4 w-full text-3xl font-bold text-gray-900">
                Features of SSW
              </h2>
              <div className="space-y-4 mt-8">
                <ul className="space-y-3 text-justify">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">SSW visa operates under a government-to-Government (G2G) framework between Japan and Nepal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">It is an employment-based visa allowing direct hiring by Japanese companies in approved industries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">A university degree is not required to apply for the SSW visa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Those who have completed the Technical Intern Training Program (TITP) can transfer to SSW Type 1 without retaking some exams.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">SSW Type 1 allows a stay of up to 5 years, renewable in 1-year increments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">SSW workers receive the same salary and benefits as Japanese employees, including base pay, overtime, bonuses, and allowances.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Holders of SSW Type 2 visas can call family members to Japan under a dependent visa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">SSW Type 2 is renewable indefinitely and provides a pathway to permanent residence.</span>
                  </li>

                </ul>

              </div>
            </div>

            <div className="relative w-full lg:w-1/3 h-[400px] lg:h-[550px]">
              <Image
                src="/images/subpages/features_ssw.jpg"
                alt="Training"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="py-12 max-w-7xl mx-auto px-standard ">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 lg:pr-8">
              <h2 className="bg-gray-200 p-4 w-full">
                Requirements of SSW
              </h2>
              <p className="mt-4">To Qualify for <strong> SSW (I)</strong>, The Students Must:</p>

              <div className="mt-8">
                <ul className="space-y-3 text-justify">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Be 18 years or Older</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Pass a Skills Test in the relevant industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Demonstrate Japanese language proficiency ( {<Link target="_blank" href={`https://www.jitco.or.jp/en`}><strong className="px-1">JLPT N4 </strong></Link>}  or JFT- basic).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Be in Good Health.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                    <span className="flex-1">Have no serious criminal record.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-700 mt-2">
                Applicants who have completed Japan’s Technical Intern Training Program may be
                exempt from some tests when transitioning to SSW (I).
              </p>
              <p className="text-sm text-purple-600 font-semibold mt-4">
                Remarks* Currently, SSW II is only available to workers who already hold SSW Type 1 and then qualify for the upgrade.
              </p>
            </div>

            <div className="relative w-full lg:w-1/3 h-[400px] lg:h-[460px]">
              <Image
                src="/images/subpages/req_ssw.jpg"
                alt="Training"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>



      {/* Field Section */}
      <div ref={fieldRef} className="py-12 px-standard mx-auto max-w-7xl">
        <div className="container-narrow mx-auto">
          <h3 className="bg-gray-200 p-4 w-full lg:w-[50vw]">Industrial fields covered by Specified Skilled Worker
            System</h3>
          <p className=" leading-relaxed mt-10">
            SSW follows a structured framework with specific occupational
            categories. Each field offers unique training, skills development,
            and career advancement opportunities. Professionals in various
            sectors can pursue SSW status depending on industry requirements and
            individual qualifications.
          </p>
        </div>


        {/* Tab Switch */}
        <div className="container-narrow border rounded-2xl border-purple-200 mt-6">
          <div className="flex flex-col sm:flex-row mb-4 gap-2 w-full">
            <button
              onClick={() => setActiveTab("ssw1")}
              className={`mx-auto w-full py-4 font-bold rounded-2xl text-lg transition-all ${activeTab === "ssw1"
                ? "bg-purple-300 text-gray-900 "
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Specified Skilled Worker I
            </button>
            <button
              onClick={() => setActiveTab("ssw2")}
              className={`mx-auto  py-4 w-full font-bold rounded-2xl transition-all ${activeTab === "ssw2"
                ? "bg-purple-300 text-gray-900 "
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Specified Skilled Worker II
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {(activeTab === "ssw1" ? ssw1Data : ssw2Data).map((item) => (
              <div key={item.id} className="group cursor-pointer px-4 sm:px-6 md:px-8 mb-4">
                <div className="relative overflow-hidden rounded-lg mb-1 h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2 mb-2">
                  {activeTab === "ssw1" ? (
                    <h4 className="text-gray-900 font-semibold text-center text-sm">
                      {item.title}
                    </h4>
                  ) : (
                    <div className="text-center">
                      <h4 className="text-gray-900 font-semibold text-sm mb-1.5">
                        {item.title}
                      </h4>
                      {'description' in item && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="py-12 px-standard">
        <div className="container-narrow mx-auto px-0 lg:px-8">
          <h2 className="bg-gray-200 p-4 w-full lg:w-[50vw]">
            Application Process
          </h2>

          <div className="mt-8">
            <ul className="space-y-3 text-justify">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Confirm eligibility and choose an industry.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Pass language and skill tests of respective Field.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Secure a job offer from an approved Japanese employer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Employer applies for a  <strong> Certificate of Eligibility (CoE)</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Submit visa application at a Japanese embassy or consulate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl leading-none flex-shrink-0">▸</span>
                <span className="flex-1">Upon arrival, undergo immigration checks to receive your Status of Residence</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 font-semibold mb-8">
            The following flowchart explains the general procedure for working
            as SSW in Japan.
          </p>

          {/* Flowchart Image */}
          <div className="bg-white p-6 rounded-lg ">
            <Image
              src="/images/assets/SSWImage.png"
              alt="Application Flowchart"
              width={4160}
              height={3240}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="text-right text-gray-400 italic font-medium">Source: www.japeneselanguage.com</p>
        </div>
      </div>

      {/* Enquiry Section */}
      <div className="w-full">
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
};

export default SSWPreparationPage;