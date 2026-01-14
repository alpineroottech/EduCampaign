'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'motion/react';


interface LanguageSchoolCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}

const BekkaPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT BEKKA PROGRAM" },
    { id: "why", label: "WHY BEKKA PROGRAM?" },
    { id: "duration", label: "COURSE DURATION" },
    { id: "requirements", label: "REQUIREMENTS FOR APPLICATION" },
    { id: "admission", label: "ADMISSION GUIDE" },
    { id: "career", label: "CAREER PATH AFTER GRADUATION" },
    { id: "faq", label: "FAQ" },
  ];

  const languageSchools: LanguageSchoolCard[] = [
    {
      image: "/images/studyabroad/university.png",
      title: "Senmon (Vocational School)",
      description: "Vocational school is career-focused institutions that provide practical and technical education in specialized fields such as IT, business, design, animation, hospitality, culinary arts, fashion, nursing, and automobile technology.",
      slug: "/studyabroad/japan/vocationallanguage"
    },
    {
      image: "/images/studyabroad/university.png",
      title: "Tanki Daigaku (Junior College)",
      description: "Tanki Daigaku, or Junior Colleges, are 2–3-year higher education institutions offering both academic and practical training.",
      slug: "/studyabroad/japan/daigaku"
    },
    {
      image: "/images/studyabroad/university.png",
      title: "University Program",
      description: "If you’re planning to study abroad and need expert support to navigate choices, applications, and career planning, Edu. Campaign Pvt. Ltd. is here to guide you.",
      slug: "/studyabroad/japan/universityprogram"
    },
  ];
  // Section refs for scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    why: whyRef,
    duration: durationRef,
    requirements: requirementsRef,
    admission: admissionRef,
    career: careerRef,
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


  return (
    <div className="">
      <div className="">
        <Breadcrumbs />

        {/* Hero Section */}
        <Image
          src="/images/subpages/bekka.webp"
          width={1220}
          height={1400}
          alt="Bekka Program Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>

      <div
        ref={containerRef}
        className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative"
      >
        {/* Sidebar Column - holds space even when sidebar is fixed */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-14 ">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm z-30 bg-white border-2 border-purple-300 transition-[top] duration-300 ease-out ${isSticky ? "fixed top-28" : ""
              } ${isAtBottom ? "absolute bottom-30" : ""}`}
          >
            <h6 className="text-gray-900 p-4 bg-purple-300">
              Preprapatory Japanese Language (Bekka) Program
            </h6>
            <div>
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

        {/* Main Content */}
        <div className="flex-1 lg:gap-12">
          {/* Main Content Sections with refs */}
          <div className="h-full">
            <div className="flex flex-col flex-1 min-w-0 bg-white my-12 px-4 lg:px-0 .scrollable-container ">
              <div ref={aboutRef}>
                <h3 className="bg-gray-200 p-4  ">
                  ABOUT BEKKA PROGRAM
                </h3>
                <div className="flex py-4 text-justify px-4">
                  <p>
                    The Bekka Program in Japan is a preparatory course designed
                    for international students who wish to continue their
                    studies at Japanese universities. Its main objective is to
                    build a strong foundation in the Japanese language.
                    Alongside language development, many institutions include
                    introductory subjects that help students adjust to academic
                    and social life in Japan, such as courses on Japanese
                    society, business, culture, and information. These
                    components not only enhance communication skills but also
                    foster a deeper understanding of Japan&apos;s cultural and
                    academic environment.
                  </p>
                </div>
              </div>

              <h3 ref={whyRef} className="bg-gray-200 p-4 mt-15  ">
                WHY BEKKA PROGRAM?
              </h3>
              <div className="flex py-4 text-justify">
                <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>Comprehensive Japanese Language Training:</strong>{" "}
                      Offers intensive instruction in reading, writing,
                      listening, speaking, and grammar, enabling students to
                      achieve the language proficiency required for further
                      academic study in Japan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>Cultural and Academic Integration:</strong>{" "}
                      Provides courses on Japanese society, culture, and
                      education systems, helping students adapt smoothly to
                      university life and daily interactions in Japan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>Flexible Study Duration:</strong> Program lengths
                      range from six months to two years, allowing students to
                      choose a schedule that matches their language level and
                      academic goals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>Pathway to Higher Education:</strong> Acts as a
                      preparatory stage for entry into undergraduate, graduate,
                      or programs, ensuring students are well-equipped for
                      further study.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>Preferential Admission and Support:</strong> Many
                      universities offer direct or priority admission to
                      successful Bekka graduates and provide academic guidance
                      and counseling throughout the program.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      <strong>
                        Interactive and Supportive Learning Environment:
                      </strong>{" "}
                      Encourages cultural exchange, teamwork, and personal
                      development through participation in academic projects and
                      campus activities with Japanese students.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Course Duration Section */}
              <section
                ref={durationRef}
                id="duration"
                className="bg-white py-12"
              >
                <h3 className="bg-gray-200 p-4  ">COURSE DURATION</h3>
                <p className="py-4 text-justify px-4">
                  This is a one-year program designed to prepare international
                  students for entry into Japanese universities. It includes
                  intensive Japanese language training and cultural studies. The
                  duration of Bekka programs varies depending on the institution
                  and the student&apos;s proficiency level, generally lasting
                  from one year to two years. The most common option is one-year
                  program (April to March) or eighteen-month programs (October
                  to March) while some universities offer shorter or extended
                  courses to suit individual needs.
                </p>

                {/* Duration Table */}
                <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-300 max-w-3xl mx-auto my-8">
                  <table className="w-full text-left text-gray-900">
                    <thead>
                      <tr className="bg-[#7b5d4c] text-white text-lg">
                        <th className="p-4">Intake</th>
                        <th className="p-4">Duration</th>
                      </tr>
                    </thead>

                    <tbody className="font-light">
                      <tr className="border-t">
                        <td className="p-4">April</td>
                        <td className="p-4">1 or 2 year/s</td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">October</td>
                        <td className="p-4">1 year and 6 months</td>
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
                <h3 className="bg-gray-200 p-4  ">
                  REQUIREMENTS FOR APPLICATION
                </h3>
                <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Must have completed 12-year school curriculum in Nepal
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Must be 18 years of age at the time of entrance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Have basic Japanese language proficiency (around JLPT
                      N5-N4 or 150 hours of study)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Must prove the ability to pay tuition fees and the living
                      costs
                    </span>
                  </li>
                </ul>
              </section>

              {/* Admission Guide Section */}
              <section
                ref={admissionRef}
                id="admission"
                className="bg-white py-12"
              >
                <h3 className="bg-gray-200 p-4  ">ADMISSION GUIDE</h3>
                <p className="py-4 px-4">
                  The following are the key parameters as guidance for Bekka
                  Program (Japan):
                </p>
                <div className="flex py-4 text-justify">
                  <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Eligibility:</strong> Applicants must have
                        completed 12 years of formal education; some programs may
                        require basic Japanese or English proficiency.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Application Schedule:</strong> Admissions usually
                        open for April and October intakes, with deadlines set 6–9
                        months in advance.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Required Documents:</strong> Includes application
                        form, academic transcripts, certificates, passport copy,
                        photos, study plan, and proof of financial support.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Entrance Examination:</strong> Some institutions
                        conduct written tests or interviews, while others accept
                        JLPT or EJU scores as alternatives.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Fees and Scholarships:</strong> Admission guides
                        provide details on tuition, living costs, and available
                        scholarships or fee waivers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Visa and Support Services:</strong> Colleges
                        assist with visa applications, accommodation, and
                        orientation through international student support offices.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Career Path Section */}
              <section ref={careerRef} id="career" className="bg-white py-12">
                <h3 className="bg-gray-200 p-4">
                  CAREER PATH AFTER GRADUATION
                </h3>
                <p className="py-4 text-justify px-4">
                  Completing the Bekka Program or an intensive Japanese language
                  course provides international students with the linguistic
                  skills, cultural understanding, and academic readiness needed
                  to pursue further studies in Japan. After graduation, students
                  have several potential pathways:
                </p>
                <div className="flex py-4 text-justify">
                  <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Undergraduate Programs:</strong> Entry into
                        Japanese Universities for Bachelor&apos;s Degrees, often
                        with preferential admission for Bekka graduates.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Graduate Programs:</strong> Eligibility for
                        Master&apos;s or Doctoral studies, or Research Student
                        Programs to prepare for higher degrees.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>
                          Specialized Vocational Colleges (Senmon Gakko):
                        </strong>{" "}
                        Professional or technical training in fields such as
                        business, technology, healthcare, or design.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Career and Internship Opportunities:</strong>{" "}
                        Access to work or internship options in Japan, utilizing
                        language skills and cultural understanding. After
                        completing the Bekka program, students often advance to
                        Vocational Colleges, Tanki Daigaku Undergraduate or
                        Graduate studies (University Programs), or Research
                        programs leading to advanced degrees. In certain cases,
                        universities provide preferential or direct admission.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="px-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {languageSchools.map((school, index) => (
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
      </div>
    </div>
  );
}

export default BekkaPage;
