'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import { motion } from 'motion/react';

const UniversityProgramPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT JAPANESE UNIVERSITY" },
    { id: "why", label: "WHY JAPANESE UNIVERSITY?" },
    { id: "course", label: "ABOUT COURSE" },
    { id: "requirements", label: "APPLICATION REQUIREMENTS" },
    { id: "admission", label: "ADMISSION GUIDE" },
    { id: "universities", label: "TOP UNIVERSITIES" },
    { id: "faq", label: "FAQ" },
  ];

  // Section refs for scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);
  const universitiesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    why: whyRef,
    course: courseRef,
    requirements: requirementsRef,
    admission: admissionRef,
    universities: universitiesRef,
    faq: faqRef,
  };
  const scrollToOffset = useScrollToOffset(80);

  const scrollToCategory = (section: string) => {
    const target = refs[section as keyof typeof refs]?.current;
    scrollToOffset(target);
  };

  // Measure sidebar initial top position on mount (only once)
  useEffect(() => {
    if (sidebarRef.current && initialTopRef.current === null) {
      const rect = sidebarRef.current.getBoundingClientRect();
      initialTopRef.current = rect.top + window.scrollY;
    }
  }, []);

  // Toggle sticky class based on scroll position and stop before footer
  useEffect(() => {
    const stickyOffset = 124; // top offset when fixed (top-28 = 7rem = 112px)
    const bottomOffset = 109; // extra space above footer
    const buffer = 10; // buffer to prevent jitter

    const handleScroll = () => {
      const initialTop = initialTopRef.current;
      if (initialTop === null) return;
      
      const scrollTop = window.scrollY;
      const sidebarEl = sidebarRef.current;
      const containerEl = containerRef.current;
      
      if (!sidebarEl || !containerEl) return;
      
      const sidebarHeight = sidebarEl.offsetHeight;
      const containerRect = containerEl.getBoundingClientRect();
      const containerBottom = containerRect.bottom + scrollTop;
      
      // Check if sidebar would overflow past container bottom (with bottom offset)
      const sidebarBottomWhenFixed = scrollTop + stickyOffset + sidebarHeight + bottomOffset;
      const shouldStop = sidebarBottomWhenFixed >= containerBottom;
      
      // Check if should be sticky at all (with buffer for smooth transition)
      const shouldStick = scrollTop >= initialTop - stickyOffset + buffer;
      
      setIsSticky(shouldStick && !shouldStop);
      setIsAtBottom(shouldStick && shouldStop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topUniversities = [
    "University of Tokyo",
    "Kyoto University",
    "Tokyo Institute of Technology",
    "Osaka University",
    "Tohoku University",
    "Nagoya University",
    "Hokkaido University",
    "Kyushu University",
    "Waseda University",
    "Keio University",
    "University of Tsukuba",
    "Hiroshima University",
    "Kobe University",
    "Hitotsubashi University",
    "Ritsumeikan University",
    "Tokyo Medical and Dental University",
    "Chiba University",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className=" ">
        <Breadcrumbs />
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
          width={1220}
          height={1400}
          alt="University Program Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>

      <div
        ref={containerRef}
        className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative "
      >
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-14 z-30 ">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-purple-300 ${
              isSticky ? "fixed top-28" : ""
            } ${isAtBottom ? "absolute bottom-30 left-0" : ""}`}
          >
            <h6 className=" text-gray-900 p-4 bg-purple-300">
              UNIVERSITY PROGRAM
            </h6>
            <div className="">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    scrollToCategory(item.id);
                  }}
                  className={`block w-full text-left text-xs font-semibold py-3 px-3 leading-relaxed transition-colors border-b border-purple-300 ${
                    activeSection === item.id
                      ? "bg-purple-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Sections with refs */}
        <div className="flex-1 min-w-0 bg-white my-10 px-4 lg:px-0">
          <div ref={aboutRef}>
            <h3 className="bg-gray-200 p-4  ">ABOUT JAPANESE UNIVERSITY</h3>
            <div className="flex py-4 px-4 text-justify">
              <p>
                In Japan, &quot;Daigaku&quot; means university and refers to
                institutions offering higher education and research
                opportunities. The system includes universities, junior
                colleges, graduate schools, and technical colleges. Most
                undergraduate programs last four years, while medical fields
                require six years. Graduate schools provide Master&apos;s and
                Doctoral degrees.
              </p>
            </div>
            <div className="flex py-4 px-4 text-justify">
              <p>
                There are three main types of universities: National, Public,
                and Private. National universities, such as the University of
                Tokyo and Kyoto University, are prestigious and government
                funded. Public universities are managed by local authorities,
                while private ones, like Waseda and Keio, form the majority and
                are managed by educational corporation.
              </p>
            </div>
            <div className="flex py-4 px-4 text-justify">
              <p>
                The academic year runs from April to March, with competitive
                entrance exams. Many universities now offer English-taught
                programs to attract international students. University life
                emphasizes academics, clubs or &quot;circles,&quot; and the
                traditional culture. Students also engage in job-hunting
                (shūshoku katsudō) before graduation. Japanese universities
                combine academic rigor, cultural values, and global outlook.
              </p>
            </div>
          </div>

          <h3 ref={whyRef} className="bg-gray-200  p-4 mt-15  ">
            WHY JAPANESE UNIVERSITY?
          </h3>
          <div className="flex py-4  text-justify">
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>High academic standards</strong> – Focus on quality
                  education and research across various fields.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Variations of universities</strong> – Include
                  national, public, and private institutions with different
                  funding and management.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Competitive admissions</strong> – Entrance exams
                  determine student selection.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Undergraduate and postgraduate programs</strong> –
                  Offer Bachelor&apos;s, Master&apos;s, and Doctoral degrees.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Student life and clubs</strong> – Students join
                  cultural, sports, or different student circles/clubs for
                  all-round development.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Job-hunting preparation</strong> – Structured career
                  guidance (shūshoku katsudō) helps students transition to
                  professional life.
                </span>
              </li>
            </ul>
          </div>

          {/* Course Section */}
          <section ref={courseRef} id="course" className="bg-white py-12">
            <h3 className="bg-gray-200  p-4  ">ABOUT COURSE</h3>
            <p className="py-4 text-justify px-4">
              Universities in Japan offer a wide variety of programs designed to
              provide both in-depth knowledge and overall personal development.
              Undergraduate studies usually last four years, except for fields
              like medicine, which take six years, and cover areas such as
              engineering, science, business, humanities, and health. Graduate
              programs, including Master&apos;s and Doctoral Degrees, focus
              heavily on research and advanced learning. While many courses are
              taught in Japanese, an increasing number of programs, especially
              at the graduate level, are available in English, making them
              accessible to international students.
            </p>
            <p className="py-4 text-justify px-4">
              Teaching methods are diverse, including lectures, seminars,
              hands-on projects, and research activities, often complemented by
              Japanese language support for non-native speakers. Leading
              universities offer credit transfer options, though these vary by
              institution.
            </p>

            {/* Course Duration Table */}
            <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-300 max-w-3xl mx-auto my-4">
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="bg-[#7b5d4c] text-white text-lg">
                    <th className="p-4">Course</th>
                    <th className="p-4">Duration</th>
                  </tr>
                </thead>

                <tbody className="font-light">
                  <tr className="border-t">
                    <td className="p-4">Undergraduate</td>
                    <td className="p-4">4 years</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Graduate</td>
                    <td className="p-4">2 years</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Doctoral Degrees</td>
                    <td className="p-4">3/5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Requirements Section */}
          <section
            ref={requirementsRef}
            id="requirements"
            className="bg-white py-12"
          >
            <h3 className="bg-gray-200  p-4  ">APPLICATION REQUIREMENTS</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>For Japanese programs:</strong> sufficient proficiency
                  in Japanese (JLPT N2/N1 or EJU Japanese score).
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>For English programs:</strong> proof of English
                  proficiency (TOEFL, IELTS, or equivalent).
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Required documents:</strong> Application form,
                  passport copy, high school transcripts, Language School
                  graduation certificate, statement of purpose, recommendation
                  letters, proof of finances, language certificate, and
                  application fee.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Screening Process:</strong> May include entrance
                  exams, the EJU (Examination for Japanese University
                  Admission), or interviews.
                </span>
              </li>
            </ul>

            <p className="py-2 text-justify px-4">
              For further career, one can either join to the company for job
              through job hunting process or can pursue Master&apos;s program
              for advanced knowledge and research skills. Admission requires
              transcripts, Bachelor&apos;s degree certificate, research
              proposal, statement of purpose, recommendation letters, language
              proficiency, and financial proof, with selection often including
              an interview. Following Master&apos;s, Doctoral (PhD) Program
              focuses on independent research, requiring a detailed research
              plan, publications, and supervisor discussion. Postdoctoral
              positions are research-focused for PhD holders. Students from
              language schools can also apply if academic and language
              requirements are met.
            </p>
          </section>

          {/* Admission Guide Section */}
          <section ref={admissionRef} id="admission" className="bg-white py-10">
            <h3 className="bg-gray-200  p-4  ">ADMISSION GUIDE</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Choose program</strong> – Undergraduate,
                  Master&apos;s, PhD, or Postdoctoral; Japanese or English.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Check eligibility</strong> – High school for desired
                  course.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Language</strong> – JLPT for Japanese programs;
                  TOEFL/IELTS/TOEIC for English.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Prepare documents</strong> – Academic certificates,
                  statement of purpose/research proposal, recommendation
                  letters, language proof, finances, passport.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Screening</strong> – Entrance exams, interviews, or
                  supervisor approval.
                </span>
              </li>

              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <strong>Apply</strong> – Before deadlines (Spring or Fall
                  intake).
                </span>
              </li>
            </ul>
          </section>

          {/* Top Universities Section */}
          <section
            ref={universitiesRef}
            id="universities"
            className="bg-white py-12"
          >
            <h3 className="bg-gray-200  p-4">
              TOP UNIVERSITY IN JAPAN FOR INTERNATIONAL STUDENT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4">
              {topUniversities.map((university, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-purple-500 text-2xl mr-3">▸</div>
                  <span className="text-gray-800">{university}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section ref={faqRef} id="faq" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">FAQ</h3>
            <p className="text-justify max-w-6xl mx-auto py-4 px-4">
              Find answers to common questions about studying in Japan.
            </p>
            <div className="mt-4 max-w-6xl mx-auto space-y-4 px-4">
              {[
                {
                  title: "01. Is Japanese language mandatory?",
                  content: "Yes, learning Japanese is essential, especially for Japanese-taught programs and everyday life, including part-time work and communication."
                },
                {
                  title: "02. Can I study in English in Japan?",
                  content: "Yes, some universities offer English-taught programs, mainly for higher studies, but the number of available courses is limited."
                },
                {
                  title: "03. Is a gap year acceptable?",
                  content: "Yes, gap years are accepted if the reason is genuine and clearly explained with proper supporting documents."
                },
                {
                  title: "04. How long does the visa process take?",
                  content: "From school application to visa approval, the process generally takes around three to four months."
                },
                {
                  title: "05. Can I work part-time while studying?",
                  content: "Yes, international students are allowed to work part-time after receiving permission from immigration authorities."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-b pb-4 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between py-4 hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-purple-400 font-bold text-lg w-12">
                        {item.title.split(".")[0]}.
                      </span>
                      <h3 className="text-lg font-semibold">
                        {item.title.substring(4)}
                      </h3>
                    </div>
                    <div className="text-3xl text-gray-500">
                      {openFaq === idx ? "−" : "+"}
                    </div>
                  </div>
                  {openFaq === idx && (
                    <div className="pl-14 pr-4 pb-4 text-gray-700 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UniversityProgramPage;
