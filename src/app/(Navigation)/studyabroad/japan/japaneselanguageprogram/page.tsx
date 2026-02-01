'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import Link from "next/link";
import { motion } from 'motion/react';
import { Card, CardMedia, CardContent, Stack, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



interface LanguageSchoolCard {
    image: string;
    title: string;
    description: string;
    slug: string;
}

const JapaneseLanguageProgramPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT JAPANESE LANGUAGE PROGRAM" },
    { id: "why", label: "WHY JAPANESE LANGUAGE PROGRAM?" },
    { id: "duration", label: "COURSE DURATION" },
    { id: "requirements", label: "APPLICATION REQUIREMENT" },
    { id: "admission", label: "ADMISSION GUIDE" },
    // { id: "tuition", label: "TUITION FEE" },
    { id: "career", label: "CAREER PATH AFTER GRADUATION" },
    { id: "faq", label: "FAQ" },
  ];

  const languageSchools: LanguageSchoolCard[] = [
        {
            image: "/images/studyabroad/university.png",
            title: "Vocational School (Senmon)",
            description: "Vocational school is career-focused institutions that provide practical and technical education in specialized fields such as IT, business, design, animation, hospitality, culinary arts, fashion, nursing, and automobile technology.",
            slug: "/studyabroad/japan/vocationallanguage"
        },
        {
            image: "/images/studyabroad/university.png",
            title:"Tanki Daigaku (Junior College)",
            description: "Tanki Daigaku, or Junior Colleges, are 2–3-year higher education institutions offering both academic and practical training.",
            slug: "/studyabroad/japan/daigaku"
        },
        {
            image: "/images/studyabroad/university.png",
            title:"University Program",
            description: "In Japan, \"Daigaku\" means university and refers to institutions offering higher education and research opportunities.",
            slug: "/studyabroad/japan/universityprogram"
        },
    ];
  // Section refs for scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);
  // const tuitionRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    why: whyRef,
    duration: durationRef,
    requirements: requirementsRef,
    admission: admissionRef,
    // tuition: tuitionRef,
    career: careerRef,
    faq: faqRef,
  };
  const scrollToOffset = useScrollToOffset(80);

  const scrollToCategory = (section: string) => {
    const target = refs[section as keyof typeof refs]?.current;
    scrollToOffset(target);
  };

  // Measure sidebar initial top position on mount (only once)
  // useEffect(() => {
  //   if (sidebarRef.current && initialTopRef.current === null) {
  //     const rect = sidebarRef.current.getBoundingClientRect();
  //     initialTopRef.current = rect.top + window.scrollY;
  //   }
  // }, []);
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
  // useEffect(() => {
  //   const stickyOffset = 124; // top offset when fixed (top-28 = 7rem = 112px)
  //   const bottomOffset = 109; // extra space above footer
  //   const buffer = 10; // buffer to prevent jitter

  //   const handleScroll = () => {
  //     const initialTop = initialTopRef.current;
  //     if (initialTop === null) return;
      
  //     const scrollTop = window.scrollY;
  //     const sidebarEl = sidebarRef.current;
  //     const containerEl = containerRef.current;
      
  //     if (!sidebarEl || !containerEl) return;
      
  //     const sidebarHeight = sidebarEl.offsetHeight;
  //     const containerRect = containerEl.getBoundingClientRect();
  //     const containerBottom = containerRect.bottom + scrollTop;
      
  //     // Check if sidebar would overflow past container bottom (with bottom offset)
  //     const sidebarBottomWhenFixed = scrollTop + stickyOffset + sidebarHeight + bottomOffset;
  //     const shouldStop = sidebarBottomWhenFixed >= containerBottom;
      
  //     // Check if should be sticky at all (with buffer for smooth transition)
  //     const shouldStick = scrollTop >= initialTop - stickyOffset + buffer;
      
  //     setIsSticky(shouldStick && !shouldStop);
  //     setIsAtBottom(shouldStick && shouldStop);
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   handleScroll(); // Initial call
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const stickyOffset = 124; // top offset when fixed (top-28 = 7rem = 112px)
    const bottomOffset = 36; // extra space above footer
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
      {/* Hero Section - Figma accurate */}
      <div className=" ">
        <Breadcrumbs />
        <Image
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1600&q=80"
          width={1220}
          height={1400}
          alt="Japanese Language Program Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>


      <div ref={containerRef} className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative ">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-20 z-30 ">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-purple-300 ${
              isSticky ? 'fixed top-28' : ''
            } ${
              isAtBottom ? 'absolute bottom-12 left-0' : ''
            }`}
          >
            <h6 className=" text-gray-900 p-4 bg-purple-300">JAPANESE LANGUAGE PROGRAM</h6>
            <div className="">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
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
          {(isMobile || activeSection === "about") && (
          <div ref={aboutRef}>
            <h3 className="bg-gray-200 p-4  ">
              ABOUT JAPANESE LANGUAGE PROGRAM
            </h3>
            <div className="flex py-4 text-justify px-4">
              <p>
                Training for non-native speakers, covering general communication, business Japanese, and advanced academic skills. Programs often prepare students for the Japanese Language Proficiency Test (JLPT), university entrance exams, and short-term cultural experiences. They serve as a foundation for students aiming to continue studies at universities, vocational colleges, or pursue careers in Japan.
              </p>
            </div>
            <div className="flex py-4 text-justify px-4">
              <p>
                Similarly, there is another Japanese Language program run as university-based Japanese programs, often run through international departments, provide a campus-based environment with access to facilities and interaction with Japanese students. These programs focus on academic preparation, may include cultural components, and are typically suited for students planning further study or research in Japan.
              </p>
            </div>
          </div>
          )}

          {(isMobile || activeSection === "why") && (
          <div ref={whyRef}>
          <h3 className="bg-gray-200  p-4 mt-15 ">
            WHY JAPANESE LANGUAGE PROGRAM?
          </h3>
          <div className="flex py-4 text-justify">
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Comprehensive Language Development – Programs focus on improving all aspects of Japanese proficiency, including speaking, listening, reading, and writing.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Preparatory Academic Courses – Programs often include additional subjects like mathematics, social studies, and sciences for students preparing for higher education.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Practical Language Use and Intercultural Skills – Interaction with peers and local communities enhances communication, intercultural understanding, adaptability, and readiness for further studies or professional opportunities in Japan.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Cultural and Social Understanding – Students gain knowledge of Japanese culture and society, which supports academic success and daily life in Japan.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Supportive Campus Environment – Access to libraries, sports facilities, and health services allows students to focus on learning while maintaining overall well-being.</span>
              </li>
            </ul>
          </div>
          </div>
          )}

          {/* Course Duration Section */}
          {(isMobile || activeSection === "duration") && (
          <section ref={durationRef} id="duration" className="bg-white py-12">
            <h3 className="bg-gray-200  p-4  ">COURSE DURATION</h3>
            <p className="py-4 text-justify px-4">
              Japan offers mainly two main intakes for Nepali students: April (Spring) and October (Autumn). The April intake is the primary and most popular admission period, with the majority of universities and language schools opening applications. The subsequent intakes serve as alternative with fewer seats available. January intake is valued by those students equipped with higher level of Japanese language proficiency. Generally, university-based language program has two major intakes (April & October) refraining other two intakes even though some universities are offering in all intakes.
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
                    <td className="p-4">2 years</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">July</td>
                    <td className="p-4">1 year and 9 months</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">October</td>
                    <td className="p-4">1 year and 6 months</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">January</td>
                    <td className="p-4">1 year and 3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-4 italic text-gray-600 px-4">
              *Earlier graduation from a Japanese language school is possible in rare cases if a student demonstrates advanced proficiency, exceptional academic performance, or completes all curriculum and requirements ahead of schedule. It depends on the school&apos;s policies and approval.
            </p>
          </section>
          )}

          {/* Requirements Section */}
          {(isMobile || activeSection === "requirements") && (
          <section ref={requirementsRef} id="requirements" className="bg-white py-12">
            <h3 className="bg-gray-200  p-4  ">Application Requirement</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Completion of at least 12 years of formal education (or equivalent) in your home country.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Proof of Japanese language ability, such as passing Japanese Language Proficiency Test N5 or documenting at least 150 hours of Japanese study. Some schools prefer N4 level of Japanese Language Proficiency for October/January Intakes.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Sufficient financial resources or a guarantor to cover tuition and living expenses.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Good health and adherence to Japanese laws and the school&apos;s regulations.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Submission of required documents such as application form, graduation certificate/transcript, passport copy, photos, and Japanese language study or credentials.</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed">Motivation and clear purpose for studying Japanese, often with the intention of further education in Japan.</span>
              </li>
            </ul>
            <p className="text-sm mt-2 text-gray-600 px-4">
              *As per your interest to the specific school/course, we can check its exact requirements for you.
            </p>
          </section>
          )}

          {/* Admission Guide Section */}
          {(isMobile || activeSection === "admission") && (
          <section ref={admissionRef} id="admission" className="bg-white py-12">
            <h3 className="bg-gray-200  p-4  ">ADMISSION GUIDE</h3>
            <p className="py-6 px-4">The process from application to Enrollment</p>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Recruitment requirements explanation:</strong> We will check and explain the necessary documents.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Interview:</strong> Applicants and guarantors will be interviewed.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Send application:</strong> Please submit your application and pay the screening fee.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Internal screening:</strong> Japanese Language School will submit the documents of those who pass the in-school screening to the Immigration Services Agency.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Certification of residence status:</strong> The Immigration Services Agency will conduct an examination, which takes about three months. Approved applicants will be issued Certificate of Eligibility. Students who are not approved will be issued a statement of reasons for non-issuance.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Tuition Fees billing/Invoice:</strong> Japanese Language School will send you a copy of the Certificate of Eligibility and an invoice.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Transfer of tuition fees:</strong> Tuition fees must be paid by the due date.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Sending Certificate of Eligibility:</strong> After confirming the payment, Japanese Language School will send you the original Certificate of Eligibility.</span>
              </li>

              <li className='flex items-start gap-2'>
                <span className="text-purple-500 text-xl sm:text-2xl leading-6 flex-shrink-0 mt-0.5">▸</span>
                <span className="text-sm sm:text-base leading-relaxed"><strong>Visa issuance procedures:</strong> Please submit your passport, Certificate of Eligibility, Admission permit form, and other supporting documents etc. to the Japanese Embassy or Consulate-General through VFS, Nepal to complete the visa application process.</span>
              </li>
            </ul>

            <p className="text-sm mt-2 text-gray-600 italic px-4">
              *The Certificate of Eligibility is valid for three months.
            </p>
          </section>
          )}

          {/* Tuition Fee Section */}
          {/* <section ref={tuitionRef} id="tuition" className="bg-white py-12">
            <h3 className="bg-gray-200  p-4  ">TUITION FEE</h3>
            
            <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-300 max-w-3xl mx-auto my-8">
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="bg-[#7b5d4c] text-white text-lg">
                    <th className="p-4">Details</th>
                    <th className="p-4">Amount</th>
                  </tr>
                </thead>

                <tbody className="font-light">
                  <tr className="border-t">
                    <td className="p-4">Admission Fee</td>
                    <td className="p-4">50,000 - 100,000 Yen</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Tuition Fee (Annual)</td>
                    <td className="p-4">600,000 - 900,000 Yen</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Facility Fee</td>
                    <td className="p-4">30,000 - 50,000 Yen</td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4">Materials Fee</td>
                    <td className="p-4">20,000 - 40,000 Yen</td>
                  </tr>

                  <tr className="border-t bg-gray-100">
                    <td className="p-4 font-semibold">Total (Estimated Annual)</td>
                    <td className="p-4 font-semibold">700,000 - 1,100,000 Yen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-4 text-gray-600 px-4">
              *Fees may vary depending on the school and location. Additional costs may include health insurance, dormitory fees, and living expenses.
            </p>
          </section> */}

          {/* Career Path Section */}
          {(isMobile || activeSection === "career") && (
          <section ref={careerRef} id="career" className="bg-white pt-12">
            <h3 className="bg-gray-200  p-4">CAREER PATH AFTER GRADUATION</h3>
            <p className="py-4 text-justify px-4">
              Some undergraduate and many graduate programs at Japanese University are offering entrance examinations specially for candidates recommended by Bekka / Intensive course for their high academic performances. With these special admission options, the students are exempted from written examinations and will need to have an interview-based examination only.
            </p>
            <p className="py-4 text-justify px-4"> 
               The following is a list of Vocational College, Tanki Daigakku, undergraduate and graduate (University) Programs which employ the special admission options.
            </p>
            <div className="px-4 py-8">
              <Stack 
                spacing={0} 
                sx={{ 
                  bgcolor: '#faf7fc',
                  border: '2px solid #e9d5ff',
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                {languageSchools.map((school, index) => (
                  <Link href={school.slug} key={index} style={{ textDecoration: 'none' }}>
                    <Button
                      fullWidth
                      endIcon={<ChevronRightIcon />}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        py: 3,
                        px: 3,
                        borderBottom: index < languageSchools.length - 1 ? '1px solid #e9d5ff' : 'none',
                        borderRadius: 0,
                        bgcolor: 'transparent',
                        color: '#2a1136',
                        textTransform: 'none',
                        borderLeft: '4px solid transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: '#f3e8ff',
                          borderLeftColor: '#6B4FA1',
                          pl: 4
                        },
                        '& .MuiButton-endIcon': {
                          position: 'absolute',
                          right: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)'
                        }
                      }}
                    >
                      <span className="font-bold text-lg mb-2">{school.title}</span>
                      <span className="font-normal text-sm text-gray-600">{school.description}</span>
                    </Button>
                  </Link>
                ))}
              </Stack>
            </div>
          </section>
          )}

          {/* FAQ Section */}
          {(isMobile || activeSection === "faq") && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default JapaneseLanguageProgramPage;
