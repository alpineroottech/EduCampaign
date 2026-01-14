"use client";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import { useScrollToOffset } from "@/utils/useScrollToOffset";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, ReactNode, useRef, useEffect, Suspense } from "react";
import { motion } from "motion/react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

interface ServiceDetail {
  icon: string;
  title: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  image: string;
  seemore?: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface DocumentItem {
  icon: string;
  title: string;
}

const categories = [
  { id: 1, label: "Career Counseling", value: "careerCounseling" },
  { id: 2, label: "Language Preparation", value: "languagePreparation" },
  { id: 3, label: "Interview Assistance", value: "interviewAssistance" },
  { id: 4, label: "Visa Lodgment", value: "visaLodgment" },
  { id: 5, label: "Documentation", value: "documentation" },
  { id: 6, label: "Pre Departure Info", value: "preDeparture" },
  { id: 7, label: "Important Document To Carry", value: "importantDocs" },
];


function AccordionItem({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border p-6 rounded-md hover:scale-105 transition-transform duration-300 bg-white hover:bg-purple-200 hover:border-purple-200">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={onToggle}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-2xl">
          {isOpen ? <span>&#9652;</span> : <span>&#9662;</span>}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 text-gray-600">{children}</div>
      )}
    </div>
  );
}

function ServicesContent() {
  const searchParams = useSearchParams();

  // // This state controls which ROW is open
  const counselingRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const interviewRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);
  const documentationRef = useRef<HTMLDivElement>(null);
  const preDepartureRef = useRef<HTMLDivElement>(null);
  const importantDocsRef = useRef<HTMLDivElement>(null);
  // const ieltsPrepRef = useRef<HTMLDivElement>(null);

  const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
    "careerCounseling": counselingRef,
    "languagePreparation": languageRef,
    "interviewAssistance": interviewRef,
    "visaLodgment": visaRef,
    "documentation": documentationRef,
    "preDeparture": preDepartureRef,
    "importantDocs": importantDocsRef,
  };

  const scrollToOffset = useScrollToOffset(80);

  const [openRow, setOpenRow] = useState<number | null>(null);
  const [openPD, setOpenPD] = useState<number | null>(null); // Pre-Departure accordion state
  const [activeCategory, setActiveCategory] = useState("documentation");
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const scrollToCategory = (category: string) => {

    const target = refMap[category]?.current;
    console.log("Scrolling to category:", category, "Target element:", target);
    // if (target) target.scrollIntoView({ behavior: "smooth" });
    scrollToOffset(target);
  };

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      scrollToCategory(scrollTo);
    }
  }, [searchParams]);



  const toggleRow = (x: number) => setOpenRow(openRow === x ? null : x);
  const togglePD = (x: number) => setOpenPD(openPD === x ? null : x);
  const toggleService = (x: number) => setExpandedService(expandedService === x ? null : x);

  const services: ServiceDetail[] = [
    {
      icon: "/images/career.png",
      title: "Career Counseling",
      paragraph1: "Choosing the right career path and study destination is a crucial step toward a successful future. We ensure from career guidance to course giving you the clarity and confidence to make informed choices. Our expert counselors help you explore comprehensive career counseling, educational and professional guidance to help you to identify your interests, and aspirations.",
      paragraph2: "At Edu. Campaign Pvt. Ltd., we believe that choosing the right path for your education is more than just picking a course or a university—it’s about shaping your future. Our comprehensive counseling services are designed to guide you through every step of this life-changing journey, making the process simple, transparent, and tailored to your goals. From choosing the ideal country to selecting the perfect course, our expert team ensures that your decisions are informed, strategic, and aligned with your aspirations.",
      paragraph3: "We begin by deeply understanding your strengths, interests, and career ambitions—and our experienced counselors carefully assess your academic background, skills, and long-term goals to recommend the best field of study and courses that will help you excel academically and grow professionally. Whether your passion lies in technology, medicine, business, arts, or emerging fields like AI and robotics, we offer personalized guidance tailored to your aspirations.",
      paragraph4: "Choosing the right country for your education is a critical decision. Our experts evaluate various options based on education quality, cultural environment, language, lifestyle, research opportunities, and career prospects. Once your preferred country is selected, we assist you in finding the university that best matches your goals by providing detailed insights into accreditation, faculty expertise, campus facilities, industry partnerships, internship opportunities, and alumni success. Selecting the right course is equally important, and our counselors guide you through understanding program structures, specializations, practical exposure, and global recognition to open doors to meaningful career opportunities.",
      paragraph5: "Beyond academics, we provide career counseling after course completion to help you navigate job markets, internships, professional growth, and further studies ensuring you hassle-free, and fully supportive visa guidance, scholarship searches, and financial planning. With a team of veteran counselors with deep, country-specific expertise, we simplify your journey and deliver reliable, customized advice that empowers you to pursue your dreams confidently.",
      image: "/images/Career Counselling.png",
      seemore: "See More",
      ref: counselingRef,
    },
    {
      icon: "/images/Learning.png",
      title: "Language Preparation",
      paragraph1: "Language preparation focuses on building strong reading, writing, listening, and speaking skills for effective communication. It includes enhancing grammar, vocabulary, and comprehension through consistent practice. For global proficiency, preparing for exams like the Japanese-Language Proficiency Test (JLPT) and English tests such as IELTS or TOEFL ensures readiness for academic and professional success.",
      image: "/images/langyage.png",
      ref: languageRef,

    },
    {
      icon: "/images/Learning.png",
      title: "Interview Assistance",
      paragraph1: "Interview preparation helps candidates showcase their skills and confidence through research, practice, and professionalism. Educational campaigns enhance this process by providing expert guidance and interactive coaching, empowering individuals with polished communication and composure to succeed in competitive interview settings.",
      image: "/images/interview.jpg",
      ref: interviewRef,

    },
    {
      icon: "/images/Learning.png",
      title: "Visa Lodgment",
      paragraph1: "Visa lodgment is the formal process of submitting a visa application to the relevant immigration authority. It involves completing required forms, providing accurate personal and travel details, and attaching supporting documents such as financial proof and identification. Edu. Campaign plays a key role by guiding applicants through documentation, compliance requirements, and procedural updates, ensuring accurate submission and improving the likelihood of visa approval.",
      image: "/images/password.png",
      ref: visaRef,
    },
  ];

  const documentItems: DocumentItem[] = [
    { icon: "/images/documents/password.png", title: "Passport" },
    { icon: "/images/documents/tickets.png", title: "Tickets" },
    { icon: "/images/documents/visadocs.png", title: "Visa Documents" },
    { icon: "/images/documents/offerleter.png", title: "Offer Letter" },
    { icon: "/images/documents/forex.png", title: "FOREX-TC’s, Cash, Draft" },
    { icon: "/images/documents/accommodation.png", title: "Accommodation Details" },
    { icon: "/images/documents/academic.png", title: "Original Academic documents" },
    { icon: "/images/documents/ecoe (2).png", title: "ECOE" },

  ];

  // -------------------------------
  // ACCORDION A 
  // -------------------------------
  const documentsData = [
    {
      title: "Academic Records ",
      content: (
        <>
          Proof of education. Example: Degree certificates, transcripts.
        </>
      ),
    },
    {
      title: " Financial Proof",
      content: (
        <>
          Evidence of funds. Example: Bank statements, scholarship letters.
        </>
      ),
    },
    {
      title: " Government/Municipality Documents",
      content: (
        <>
          Identity and residency verification. Example: Passport, Aadhaar, utility bills.
        </>
      ),
    },
    {
      title: "Statement of Purpose (SOP)",
      content: (
        <>
          Personal motivation and goals. Example: 1–2 page/s essay explaining study or career plans.

        </>
      ),
    },
    {
      title: " Supporting Documents",
      content: <>Additional endorsements. Example: Recommendation letters, work experience certificates.</>,
    },
    {
      title: " Others",
      content: <>Miscellaneous relevant papers. Any additional relevant paperwork. Example: Language proficiency certificates, medical reports.</>,
    },
  ];

  // -------------------------------
  // ACCORDION B (Pre-Departure)
  // -------------------------------
  const preDepartureData = [
    {
      title: "01.  Accommodation & Essentials",
      content: (
        <p>
          We help students arrange accommodation, travel insurance, and other
          essentials to ensure a smooth start. Guidance is provided on preparing
          important items like passports, visas, tickets, academic records,
          clothing, medicines, and personal belongings.
        </p>
      ),
    },
    {
      title: "02. Flight Transit Information",
      content: (
        <p>
          Students receive detailed information on flight schedules, transit
          duration, airport procedures, luggage rules, and prohibited items.
          Tips for layovers, resting, and staying alert during travel are also
          provided.
        </p>
      ),
    },
    {
      title: "03. Airport & Immigration Guidance",
      content: (
        <p>
          Students are advised to arrive 2–3 hours early and follow official
          instructions. Assistance is offered for check-in, boarding, and
          arrival, with reminders to keep boarding passes safe and never leave
          luggage unattended.
        </p>
      ),
    },
    {
      title: "04. Packing & Travel Precautions",
      content: (
        <p>
          A checklist covers all essentials and highlights items that should
          not be packed to avoid airport issues. Students are advised to rest
          during transit and remain vigilant throughout their journey.
        </p>
      ),
    },
    {
      title: "05. School & Hostel Guidelines",
      content: (
        <p>
          Students are briefed on fees, attendance, property care, and
          communication with school staff. They are guided on adapting to
          Japanese cultural norms and behavioral expectations.
        </p>
      ),
    },
    {
      title: "06. Do’s and Don’ts for Students",
      content: (
        <p>
          Students must attend classes regularly, balance part-time work
          (maximum 28 hours per week), respect Japanese culture, and avoid
          actions that could harm others or the school’s reputation. Legal
          compliance is essential, and support from schools is always available
          if needed.
        </p>
      ),
    },
    {
      title: "07.  Financial Preparation",
      content: (
        <p>
          Students should carry at least 2–3 months of living expenses to cover accommodation, food, transport, and daily needs.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <div className="relative">
        <Breadcrumbs />
        <HeroSection imageSrc="/images/service-1.webp" title="Our Services" />

      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto py-10 px-4"
      >
        <p className="">
          If you're planning to study abroad and need expert support to navigate
          choices, applications, and career planning, Edu. Campaign Pvt. Ltd. is here to guide you. We make the visa process straightforward with step-by-step assistance and provide professional help with all documentation. Whether you are
          a student, graduate, or professional, we help you achieve your goals and unlock global opportunities.
        </p>
      </motion.div>

      {/* Category Filter and Go To Category Location*/}

      <div className="flex flex-wrap justify-center gap-3 px-10 ">
        {categories.map((category) => {
          const isActive = activeCategory === category.value;
          return (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.value as string);
                scrollToCategory(category.value as string);
              }
              }
              className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${isActive
                  ? 'bg-[#6B4FA1] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100 shadow-sm'
                }
                  `}
              aria-label={`Filter by ${category.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {category.label}
            </button>
          );
        })}
      </div>


      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-11 mt-15">
        <div className="grid grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              ref={service.ref}
              className="flex flex-col md:flex-row justify-between md:items-start border border-gray-300 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 m-4 gap-6 bg-white"
            >
              {/* TEXT SECTION */}
              <div className="flex-1">
                <h3 className="mb-4 text-left p-4 bg-gray-200 max-w-2xl ">
                  {service.title}
                </h3>

                <ul className=" space-y-2">
                  <li className="text-justify">{service.paragraph1}</li>
                  {expandedService === index && (
                    <>
                      {service.paragraph2 && <li className="text-justify">{service.paragraph2}</li>}
                      {service.paragraph3 && <li className=" text-justify ">{service.paragraph3}</li>}
                      {service.paragraph4 && <li className="text-justify">{service.paragraph4}</li>}
                      {service.paragraph5 && <li className="text-justify">{service.paragraph5}</li>}
                    </>
                  )}
                </ul>

                {service.seemore && (
                  <button
                    onClick={() => toggleService(index)}
                    className="mt-4 font-light text-purple-800 px-4 py-2 rounded-4xl hover:bg-purple-400 transition hover:text-white"
                  >
                    {expandedService === index ? "See Less" : service.seemore}
                  </button>
                )}
              </div>

              {/* IMAGE SECTION */}
              <div className={`w-full sm:w-2/3 md:w-1/3 flex-shrink-0 transition-all duration-300 ${expandedService === index ? 'md:h-160' : 'md:h-56'}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-70 md:h-full object-cover rounded-2xl mx-auto md:mx-0"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- ACCORDION A ---------------- */}

      <div ref={documentationRef} className="mt-20 max-w-[80vw] mx-auto">
        <h3 className="text-left p-4 bg-gray-200 max-w-2xl">
          Documentations
        </h3>

        <p className="text-justify py-6 px-4">
          Documentation organizes essential records, supporting and other relevant papers. Edu. Campaign assists by providing guidance, verifying accuracy, ensuring completeness, and facilitating timely, error-free submissions for successful applications.
          The followings are categories of documentation required for visa or academic applications. Each specifies a type of document, its purpose, and provides examples to clarify what should be submitted.
        </p>


        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {documentsData.map((item, idx) => (
            <div key={idx} className="">
              <AccordionItem
                title={item.title}

                isOpen={openRow === idx}
                onToggle={() => toggleRow(idx)}
              >
                {item.content}
              </AccordionItem>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- ACCORDION B ---------------- */}
      <div ref={preDepartureRef} className="mt-20 max-w-[80vw] mx-auto">
        <h3 className="text-left p-4 bg-gray-200 max-w-2xl">
          Pre Departure Info
        </h3>
        <p className="text-justify py-6 px-4">
          Furthermore, with our warm support and dedication, we make sure every item on the pre-departure checklist is thoroughly completed, giving you confidence and peace of mind for a successful journey abroad.
        </p>

        <div className="mt-6 space-y-4">
          {preDepartureData.map((item, idx) => (
            <div
              key={idx}
              className="border-b pb-4 cursor-pointer"
              onClick={() => togglePD(idx)}
            >
              <div className="flex items-center justify-between py-4 hover:scale-105 transition-transform duration-200">
                <div className="flex items-center space-x-3" >
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

      <div ref={importantDocsRef} className="my-20 max-w-[80vw] mx-auto">
        <h3 className="text-left p-4 bg-gray-200 max-w-2xl">
          Important Documents To Carry
        </h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {documentItems.map((doc, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center gap-3
                   border border-gray-300 rounded-2xl p-4 bg-white
                   transition-all duration-300
                   hover:bg-purple-200 hover:border-purple-200
                   hover:scale-[1.03]"
            >
              <Image
                src={doc.icon}
                alt={doc.title}
                width={64}
                height={64}
                className="object-contain mb-2 sm:mb-0 sm:mr-4"
              />

              <p className="text-center sm:text-left text-sm sm:text-base font-medium">
                {doc.title}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="item-center max-w-4xl  mx-auto p-6 px-4 grid grid-rows-2 grid-cols-4 gap-4  ">
         { documentItems.map((doc, index) => (
          <div key={index} className="flex border border-gray-400 rounded-4xl ">
            <Image
              src={doc.icon}
              alt={doc.title}
              width={80}
              height={80}
              className="object-contain mr-2 border border-gray-400 rounded-4xl"
            />
            <p className="text-gray-600 mt-2 text-center p-4">{doc.title}</p>
          </div>
         ))
         }
        </div> */}

      </div>

    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
