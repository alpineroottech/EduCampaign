'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const DaigakuPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openPD, setOpenPD] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const pathwayRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    features: featureRef,
    duration: durationRef,
    requirements: requirementsRef,
    process: processRef,
    pathway: pathwayRef,
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

  // Detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Toggle sticky class based on scroll position and stop before footer
  useEffect(() => {
    const stickyOffset = 124; // top offset when fixed (top-28 = 7rem = 112px)
    const bottomOffset = 40; // extra space above footer
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

  const menuItems = [
    { id: "about", label: "ABOUT JUNIOR COLLEGE", heading: "Features Of Junior College" },
    { id: "features", label: "FEATURES OF JUNIOR COLLEGE", heading: "Course & Goals" },
    { id: "duration", label: "COURSE DURATION", heading: "Requirements" },
    { id: "requirements", label: "APPLICATION REQUIREMENTS", heading: "Admission Guide" },
    { id: "process", label: "ADMISSION PROCESS", heading: "Pathway After Program" },
    { id: "pathway", label: "CAREER PATH AFTER GRADUATION", heading: "Career Path" },
    { id: "faq", label: "FAQ", heading: "Frequently Asked Questions" }
  ];

  const faqData = [
    {
      title: "01. Necessary information regarding flights",
      content: (
        <p>
          Details about flight arrangements and requirements.
        </p>
      ),
    },
    {
      title: "02. Packing Necessities",
      content: (
        <p>
          Yes, you can select a monthly payment plan of $550.00 a month for 10 months
          and $1,400.00 upfront. Note: You will be required to pay the full duration of the
          payment plan even if you finish the program before the payment plan ends.
          Still doesn&apos;t work for you? Book a call with a Career Advisor and see if you are.
        </p>
      ),
    },
    {
      title: "03. Rules and Regulations of Airport and Immigration",
      content: (
        <p>
          Information about visa processes and immigration rules.
        </p>
      ),
    },
    {
      title: "04. Do&apos;s and Don&apos;ts at Airport",
      content: (
        <p>
          Students must attend classes regularly, balance part-time work
          (maximum 28 hours per week), respect Japanese culture, and avoid
          actions that could harm others or the &apos;s reputation.
        </p>
      ),
    },
    {
      title: "05. Briefing regarding pick up at Airport",
      content: (
        <p>
          Guidance on airport pickup procedures and coordination.
        </p>
      ),
    },
  ];

  const togglePD = (index: number) => {
    setOpenPD(openPD === index ? null : index);
  };

  return (
    <div className="">
      {/* Hero Section - Figma accurate */}
      <div className="">
        <Breadcrumbs />

        <Image
          src="/images/subpages/junior_college.jpg"
          width={1220}
          height={400}
          alt="Junior College Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>

      <div ref={containerRef} className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative ">
        <div className="hidden lg:block w-64 flex-shrink-0  -mt-20 z-30 ">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-[#3d1a4d] ${
              isSticky ? 'fixed top-28' : ''
            } ${
              isAtBottom ? 'absolute bottom-12 left-0' : ''
            }`}
          >
            <h6 className="text-white p-4 bg-[#3d1a4d]">JUNIOR COLLEGE (TANKI DAIGAKU)</h6>
            <div className="">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`block w-full text-left text-xs font-semibold py-3 px-3 leading-relaxed transition-colors border-b border-[#3d1a4d] ${activeSection === item.id
                    ? "bg-[#3d1a4d] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div ref={aboutRef} className="flex-1 min-w-0 bg-white my-12 px-4 lg:px-0">
          <div className="">
            {activeSection === "about" && (
              <>
                <h2 className="bg-gray-200 p-4">
                  ABOUT JUNIOR COLLEGE (TANKI DAIGAKU)
                </h2>

                <div className="flex py-4 px-4 text-justify">
                  <p>
                    Tanki Daigaku, or Junior Colleges, are 2–3-year higher education institutions offering both academic and practical training. They grant an Associate Degree and focus on areas like education, childcare, nutrition, business, languages, and design.
                  </p>
                </div>
              </>
            )}

            {(isMobile || activeSection === "features") && (
              <>
                <h2 ref={featureRef} className="bg-gray-200 p-4 mt-15  ">
                  FEATURES OF JUNIOR COLLEGE
                </h2>

                <div className="flex py-4 px-4 text-justify">
                  <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Combines theory and hands-on learning for professional and academic growth.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Offers small class sizes and close teacher-student support.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Emphasizes communication, applied skills, and internships.
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Pathways to employment or transfer to four-year universities.
                    </span>
                  </li>
                    </ul>

                </div>
              </>
            )}

            {/* Course Section */}
            {(isMobile || activeSection === "duration") && (
              <section ref={durationRef} id="course" className="bg-white py-12">
                <h2 className="bg-gray-200 p-4  ">COURSE DURATION</h2>
              <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    Usually <span className='font-semibold'>2 years</span>, with <span className='font-semibold'>April intake.</span>
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    Includes <span className='font-semibold'>general education</span> and <span className='font-semibold'>specialized major courses.</span>
                  </span>
                </li>
                </ul>
              </section>
            )}

            {/* Requirements Section */}
            {(isMobile || activeSection === "requirements") && (
              <section ref={requirementsRef} id="requirements" className="bg-white py-12">
                <h2 className="bg-gray-200 p-4  ">APPLICATION REQUIREMENTS</h2>
              <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">12 years of education (or equivalent).</span>
                </li>

                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">Japanese proficiency (JLPT N2 or N3).</span>
                </li>

                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">Submission of academic records, financial proof, and documents.</span>
                </li>

                <li className='flex items-start gap-2'>
                  <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                  <span className="text-sm sm:text-base leading-relaxed">Interview/entrance exam for admission.</span>
                </li>
                </ul>

              </section>
            )}

            {/* Admission Guide Section */}
            {(isMobile || activeSection === "process") && (
              <>
                <section ref={processRef} id="admission" className="bg-white py-12">
                  <h2 className="bg-gray-200 p-4  ">ADMISSION PROCESS</h2>
              <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                  <li className='flex items-start gap-2'>
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">Submit application and documents.</span>
                  </li>

                  <li className='flex items-start gap-2'>
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">Take entrance exam/interview.</span>
                  </li>

                  <li className='flex items-start gap-2'>
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">School applies for Certificate of Eligibility (COE).</span>
                  </li>

                  <li className='flex items-start gap-2'>
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">Pay tuition fees, apply for student visa, and start studies.</span>
                  </li>
                </ul>

                </section>

                <Image src="/images/assets/VocationalPage.png" width={1024} height={1440} alt='Application Process Image' className="w-full h-auto" />
              </>
            )}

            {/* Pathway Section */}
            {(isMobile || activeSection === "pathway") && (
              <section ref={pathwayRef} id="pathway" className="bg-white py-12">
                <h2 className="bg-gray-200 p-4">CAREER PATH AFTER GRADUATION</h2>
              <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                <li className="flex">
                  <div className="text-purple-500 text-3xl">▸</div>
                  <span className="ml-2 pt-2">
                    Employment in education, business, or service sectors.
                  </span>
                </li>

                <li className="flex">
                  <div className="text-purple-500 text-3xl">▸</div>
                  <span className="ml-2 pt-2">
                    Transfer to university for a Bachelor's Degree (4-Year College).
                  </span>
                </li>

                <li className="flex">
                  <div className="text-purple-500 text-3xl">▸</div>
                  <span className="ml-2 pt-2">
                    Obtain professional certifications (e.g., childcare, nutrition).
                  </span>
                </li>

                <li className="flex">
                  <div className="text-purple-500 text-3xl">▸</div>
                  <span className="ml-2 pt-2">
                    Opportunity for long-term work or residence in Japan.
                  </span>
                </li>
                </ul>

              </section>
            )}

            {/* FAQ Section */}
            {(isMobile || activeSection === "faq") && (
              <div ref={faqRef} className="mt-10">
                <h2 className="bg-gray-200 p-4">
                  FAQ
                </h2>
              <p className="text-gray-600 text-justify max-w-6xl mx-auto py-4 px-5">
                Find answers to common questions about flights, packing, airport procedures, and more.
              </p>

              <div className="mt-4 max-w-6xl mx-auto space-y-4 px-6">
                {faqData.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b pb-4 cursor-pointer"
                    onClick={() => togglePD(idx)}
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
                        {openPD === idx ? "−" : "+"}
                      </div>
                    </div>

                    {openPD === idx && (
                      <div className="pl-14 pr-4 pb-4 text-gray-700 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default DaigakuPage;
