'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';

const VocationalLanguagePage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openPD, setOpenPD] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT VOCATIONAL SCHOOL" },
    { id: "features", label: "FEATURES OF VOCATIONAL SCHOOL" },
    { id: "course", label: "COURSE DURATION" },
    { id: "requirements", label: "REQUIREMENTS" },
    { id: "admission", label: "ADMISSION GUIDE" },
    { id: "pathway", label: "CAREER PATH AFTER GRADUATION" },
    { id: "faq", label: "FAQ" },
  ];

  // Section refs for scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);
  const pathwayRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    features: featureRef,
    course: courseRef,
    requirements: requirementsRef,
    admission: admissionRef,
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
      title: "04. Do's and Don'ts at Airport",
      content: (
        <p>
          Students must attend classes regularly, balance part-time work
          (maximum 28 hours per week), respect Japanese culture, and avoid
          actions that could harm others or the school’s reputation.
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
      <div className=" ">
        <Breadcrumbs />
        {/* <div className="relative h-[350px] grid grid-cols-6 grid-rows-1 ">
          <div className="grid col-span-1 row-span-1 h-full bg-gradient-to-br from-[#6B4FA1] via-[#7B5FB1] to-[#8B5FD1] items-center">
            <div className="absolute z-20 ml-8 bg-white/75 p-15 border-l-10 border-l-[#bdbdbd] shadow-[0_2px_24px_rgba(0,0,0,0.04)] ">
              <h3 className=" text-gray-900">Vocational Language</h3>
            </div>
          </div> */}
        <Image
          src="/images/subpages/vocational.jpg"
          width={1220}
          height={1400}
          alt="Vocational Language Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
        {/* </div> */}
      </div>


      <div ref={containerRef} className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative ">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-20  z-30 ">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-purple-300 ${isSticky ? 'fixed top-28' : ''
              } ${isAtBottom ? 'absolute bottom-12 left-0' : ''
              }`}
          >
            <h6 className=" text-gray-900 p-4 bg-purple-300">VOCATIONAL SCHOOL (SENMON GAKKOU)</h6>
            <div className="">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    scrollToCategory(item.id);
                  }}
                  className={`block w-full text-left text-xs font-semibold py-3 px-3 leading-relaxed transition-colors border-b border-purple-300 ${activeSection === item.id
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
        <div className="flex-1 min-w-0 bg-white my-12 px-4 lg:px-0">
          <div ref={aboutRef}>
            <h3 className="bg-gray-200 p-4  ">
              ABOUT VOCATIONAL SCHOOL
            </h3>
            <div className="flex py-4 px-4 text-justify">
              <p>
                Vocational school is career-focused institutions that provide practical and technical education in specialized
                fields such as IT, business, design, animation, hospitality, culinary arts, fashion, nursing, and automobile
                technology. They combine classroom learning with hands-on training, preparing students for direct
                employment or university transfer after graduation.
              </p>
            </div>
          </div>

          <h3 ref={featureRef} className="bg-gray-200 p-4 mt-15  ">
            FEATURES OF VOCATIONAL SCHOOL
          </h3>
          <div className="flex py-4 text-justify px-4">
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Students learn communication and cultural skills essential for living and working in Japan.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Vocational schools emphasize career readiness, industry links, and practical Japanese use.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Graduates gain both technical and intercultural competencies valuable in Japanese workplaces.
                </span>
              </li>
            </ul>

          </div>

          {/* Course Section */}
          <section ref={courseRef} id="course" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4  ">COURSE DURATION</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Most vocational programs last 2 years, starting in April (main intake).
                </span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Some schools offer 1.5– year courses depending on the field.
                </span>
              </li>
            </ul>
          </section>

          {/* Requirements Section */}
          <section ref={requirementsRef} id="requirements" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4  ">REQUIREMENTS</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Completion of 12 years of education (or equivalent).
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Japanese proficiency (JLPT N2 or higher) required; some accept N3.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Financial proof, academic transcripts, passport, and study records.
                </span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Interview and clear career purpose are important for admission.
                </span>
              </li>
            </ul>

            <p className=" mt-2 px-4">
              <span className='font-semibold'>Note:</span> Nepali students can go directly to a Japanese Vocational school if they have JLPT N2/N3, completed 12 years of education, sufficient finances, and school acceptance though most first study Japanese language in Japan.
            </p>
          </section>

          {/* Admission Guide Section */}
          <section ref={admissionRef} id="admission" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4  ">ADMISSION GUIDE</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Attend information session/counseling.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Submit application and screening fee.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  School interviews and internal screening.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  School applies for Certificate of Eligibility (COE).
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Receive COE, pay tuition, and apply for student visa.
                </span>
              </li>

              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Beginning of study.
                </span>
              </li>
            </ul>

          </section>

          <Image src="/images/assets/VocationalPage.png" width={1024} height={1440} alt='Application Process Image' />

          {/* Pathway Section */}
          <section ref={pathwayRef} id="pathway" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">CAREER PATH AFTER GRADUATION</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <span className='font-semibold'>Employment in Japan</span> with a proper work visa (Engineer, Specialist, or Designated Activities).
                </span>
              </li>


              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  <span className='font-semibold'>Transfer to universities</span> for higher education (special recommendation routes available).
                </span>
              </li>
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Opportunity to earn <span className='font-semibold'>professional certifications</span> and build long-term careers.
                </span>
              </li>
              <li className="flex">
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">
                  Graduates may pursue <span className='font-semibold'>residency</span> or <span className='font-semibold'>international career opportunities</span> with Japanese firms.
                </span>
              </li>
            </ul>

          </section>

          {/* FAQ Section */}
          <div ref={faqRef} className="mt-2">
            <h3 className="bg-gray-200 p-4">
              FAQ
            </h3>
            <p className="   text-justify max-w-6xl mx-auto py-4 px-4">
              Find answers to common questions about flights, packing, airport procedures, and more.
            </p>

            <div className="mt-4 max-w-6xl mx-auto space-y-4 px-4">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b pb-4 cursor-pointer"
                  onClick={() => togglePD(idx)}
                >
                  <div className="flex items-center justify-between py-4 hover:scale-105  transition-transform duration-200">
                    <div className="flex items-center space-x-3 ">
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
        </div>
      </div>


    </div>
  );
}

export default VocationalLanguagePage
