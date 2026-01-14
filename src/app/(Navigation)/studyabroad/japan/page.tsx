"use client";


import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import { useScrollToOffset } from "@/utils/useScrollToOffset";
import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { motion } from "motion/react";


interface IconBox {
  icon: string;
  title: string;
}

interface LanguageSchoolCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}

interface UniversityCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}

interface ScholarshipCard {
  title: string;
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  image: string;
  lernMoreText: string;
}

interface IntakeCard {
  desc: string;
  title: string;
  paragraph?: string;
  image: string;
}

function ServicesContent() {
  const searchParams = useSearchParams();
  const scholarship = useRef<HTMLDivElement>(null);
  const visaprocess = useRef<HTMLDivElement>(null);

  const RefMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
    scholarship: scholarship,
    visaprocess: visaprocess,
  };

  const scrollToOffset = useScrollToOffset(80);
  const scrollToCategory = (category: string) => {

    const target = RefMap[category]?.current;
    if (target) {
      scrollToOffset(target);
    }
  };

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      scrollToCategory(scrollTo);
    }
  }, [searchParams]);


  const iconBoxes: IconBox[] = [
    {
      icon: "/images/cap.png",
      title: "High-Quality Education"
    },
    {
      icon: "/images/studyabroad/icons/Money.png",
      title: "Affordable Tuition & Scholarships"
    },
    {
      icon: "/images/studyabroad/icons/Castle.png",
      title: "Cultural Immersion"
    },
    {
      icon: "/images/studyabroad/icons/Japanese.png",
      title: "Learn Japanese in Context"
    },
    {
      icon: "/images/studyabroad/icons/Soup.png",
      title: "Amazing Cuisine"
    },
    {
      icon: "/images/studyabroad/icons/Clean.png",
      title: "Safety & Cleanliness"
    },
    {
      icon: "/images/studyabroad/icons/Suitcase.png",
      title: "Career Opportunities"
    },
    {
      icon: "/images/studyabroad/icons/Robotichand.png",
      title: "Innovation & Technology"
    },
    {
      icon: "/images/studyabroad/icons/Earth.png",
      title: "Global Perspective"
    },

  ];

  const languageSchools: LanguageSchoolCard[] = [
    {
      image: "/images/studyabroad/university.png",
      title: "Japanese Language School",
      description:
        "Training for non-native speakers, covering general communication, business Japanese, and advanced academic skills.",
      slug: "/studyabroad/japan/japaneselanguageprogram",
    },
    {
      image: "/images/studyabroad/university.png",
      title: "Preparatory Japanese Language (Bekka) Program",
      description:
        "The Bekka Program in Japan is a preparatory course designed for international students who wish to continue their studies at Japanese universities.",
      slug: "/studyabroad/japan/bekka",
    },
  ];

  const universityCards: UniversityCard[] = [
    {
      image: "/images/studyabroad/university.png",
      title: "University Program",
      description: "In Japan, \"Daigaku\" means university and refers to institutions offering higher education and research opportunities.",
      slug: "/studyabroad/japan/universityprogram"
    },
  ];

  const scholarshipCards: ScholarshipCard[] = [
    {
      title: "The MEXT Scholarship",
      p1: "Offered by Japan’s Ministry of Education.",
      p2: "Covers full tuition, monthly stipend, and round-trip airfare.",
      p3: "Available for undergraduate, graduate, and research students.",
      p4: "Highly competitive and prestigious.",
      p5: "MEXT scholarships cover tuition, living costs, and airfare, with monthly allowances fixed by Japan’s Ministry of Education.",
      image: "/images/scholarship/Mext.jpg",
      lernMoreText: "https://www.mext.go.jp/en/policy/education/overview/index.htm",
    },
    {
      title: "JASSO Scholarship",
      p1: "The JASSO Scholarship is a financial support program for international students in Japan. ",
      p2: "Monthly stipend to support living expenses.",
      p3: "Often awarded to students in exchange programs or degree courses.",
      p4: "Eligibility for both exchange and privately financed students.",
      p5: "Creates a financially stable environment so students can focus on academics.",
      image: "/images/scholarship/jasso.jpeg",
      lernMoreText: "https://www.jasso.go.jp/en/",
    },
    {
      title: "JEES Scholarship",
      p2: "Offers scholarships based on nationality, field of study, or language learning.",
      p3: "Includes school-specific and donor-funded programs.",
      p4: "The JEES Scholarship is awarded based   on academic performance, character, and financial need.",
      p5: "Students usually apply through their university’s international office, with the program aimed at fostering global talent and cultural exchange.",
      image: "/images/scholarship/jees.jpg",
      lernMoreText: "https://www.jees.or.jp/en/foundation-en/",
    },
    {
      title: "Honjo International Scholarship",
      p1: " Only offered for graduate students.",
      p2: "Offers up to ¥200,000/month.",
      p3: "Supports long-term research and global impact goals.",
      p4: "Provides substantial monthly funding for exceptional international graduate  students in Japan.",
      p5: "Applications are online, requiring a research plan, transcripts, and recommendation letter.",
      image: "/images/scholarship/honjo.jpg",
      lernMoreText: "https://www.hisf.or.jp/en/scholarship/foreigner/",
    },


  ];

  const intakeCards: IntakeCard[] = [
    {
      title: "❄️ Janaury Intake",
      desc: "Limited winter intake",
      paragraph: "Mainly for short term and specialized language programs.",
      image: "/images/intake/janaury.jpg",
    },
    {
      title: "🏵️ April Intake",
      desc: "Main & Largest Intake",
      paragraph: "Mainly for short term and specialized language programs.",
      image: "/images/intake/april.png",
    },
    {
      title: "🍃 July Intake",
      desc: "Mid-Year Admission",
      paragraph: "Mainly for short term and specialized language programs.",
      image: "/images/intake/july.jpg",
    },
    {
      title: "🍂 October Intake",
      desc: "Second Major Intake",
      paragraph: "Mainly for short term and specialized language programs.",
      image: "/images/intake/october.jpg",
    },
  ];

  return (
    <div className="min-h-screen  pb-20">
      {/* Hero */}

      <div className="">
        <Breadcrumbs />
        <HeroSection imageSrc="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80" title="Study In Japan" />
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl mx-auto py-10 "
      >
        Japan has become one of the most popular destinations for
        international students who wish to combine quality education with
        cultural immersion. Known for its advanced technology, discipline, and
        academic excellence, Japan offers affordable tuition fees compared to
        many Western countries. Students also benefit from learning the
        Japanese language, which opens up global career opportunities in
        industries such as technology, engineering, business, and hospitality.
        The safe living environment, rich traditions, and modern lifestyle
        make Japan an attractive choice for students aiming for both academic
        and personal growth.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 border border-gray-300 rounded-2xl py-10 bg-white"
      >
        <h2 className=" mb-6 text-center">Why Japan ?</h2>
        <p className=" mb-6 max-w-4xl text-center mx-auto  ">
          Japan provides high-quality, affordable education in a safe and
          innovative setting. Known for excellence in technology, science, and
          culture, it offers scholarships, global career prospects, and rich
          cultural experiences. Students enjoy personal growth and world-class
          learning in a nation that seamlessly combines tradition with modern
          advancement.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto px-2 sm:px-4">
          {iconBoxes.map((box, index) => (
            <div
              key={index}
              className="w-40 h-20 flex flex-col items-center justify-center border border-purple-300 rounded-full"
            >
              <Image
                src={box.icon}
                alt={box.title}
                className="w-6 h-6 mt-2"
                width={1080}
                height={1080}
              />
              <p className=" text-[12px] text-gray-800 text-center font-bold">
                {box.title}
              </p>
            </div>
          ))}n        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-10 mt-8 ">
        <h2 className=" mb-6  text-center">Study Pathway in Japan</h2>
        <p className="mb-4 max-w-6xl text-center mx-auto ">
          Japan’s education system is globally respected for its discipline, innovation, and academic rigor. It focuses not only on academic excellence but also on developing responsible, well-rounded individuals. International students can pursue higher education in Japan through two main pathways: first, by studying the Japanese language before entering a
          university or vocational college, or second, by directly enrolling in degree programs, many of which are offered in English.
        </p>

        <div className="max-w-4xl mx-auto mt-8 px-4">
          <div className="border border-purple-300 rounded-2xl p-4 sm:p-6">
            <h5 className="text-center mb-6">Japanese Language Program</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languageSchools.map((school, index) => (
                <Link href={school.slug} key={index} className="h-full">
                  <div
                    className="border relative w-full h-full min-h-[200px] sm:min-h-[220px] rounded-lg overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${school.image})` }}
                    />
                    <div className="relative h-full p-4 sm:p-5 flex flex-col justify-center text-center">
                      <h6 className="font-bold text-base sm:text-lg mb-2 mt-1">{school.title}</h6>
                      <p className="text-xs sm:text-sm leading-relaxed">{school.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {universityCards.map((school, index) => (
              <Link
                href={school.slug}
                key={index}
                className="w-full max-w-2xl h-full"
              >
                <div
                  className="border relative w-full h-full min-h-[160px] sm:min-h-[180px] rounded-lg overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${school.image})` }}
                  />
                  <div className="relative h-full p-4 sm:p-5 flex flex-col justify-center text-center">
                    <h6 className="font-bold text-base sm:text-lg mb-2 mt-1">{school.title}</h6>
                    <p className="text-xs sm:text-sm leading-relaxed">{school.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat py-8 px-4 sm:px-6 md:px-10 mx-2 sm:mx-4 md:mx-10"
        style={{ backgroundImage: "url('/images/tution.jpg')" }} // <-- replace with your image
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center max-w-6xl mx-auto text-white">
          <h2 className="mb-4">Tuition Fee</h2>

          <p className="max-w-5xl mx-auto leading-relaxed mb-8 px-2 sm:px-4 text-sm sm:text-base">
            Tuition fees in Japan are relatively affordable compared to
            countries like the US or the UK. The cost of study varies
            depending on the university and program, with national
            universities generally offering lower tuition rates. Japanese
            language courses are also available at reasonable prices,
            particularly those offered by universities. Public education in
            Japan is free up to junior high school, while higher education
            institutions charge moderate tuition fees.
          </p>

          {/* Table */}
          <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-x-auto border border-white/30 max-w-3xl mx-auto">
            <table className="w-full text-left text-gray-900">
              <thead>
                <tr className="bg-[#7b5d4c] text-white text-base sm:text-lg">
                  <th className="p-2 sm:p-4">Courses</th>
                  <th className="p-2 sm:p-4">Estimated tuition Fee</th>
                </tr>
              </thead>

              <tbody className="font-light text-sm sm:text-base">
                <tr className="border-t">
                  <td className="p-2 sm:p-4">Japanese Language Program</td>
                  <td className="p-2 sm:p-4">600,000 to 997,000 Yen</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2 sm:p-4">Bekka Program</td>
                  <td className="p-2 sm:p-4">400,000 to 700,000 Yen</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2 sm:p-4">Undergraduate Course</td>
                  <td className="p-2 sm:p-4">538,000 to 1,700,000 Yen</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2 sm:p-4">Graduate Course</td>
                  <td className="p-2 sm:p-4">537,878 to 1,450,000 Yen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div ref={scholarship} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-20">
        <h2 className="mb-6 text-center">Scholarships in Japan</h2>
        <p className="mb-4 max-w-4xl text-center mx-auto px-4">
          There are several scholarship opportunities available for
          international students. A brief Explanation widens your concerns as
          follows.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
          {scholarshipCards.map((scholarship, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white border border-purple-200 shadow-lg rounded-3xl overflow-hidden"
            >
              {/* LEFT TEXT SECTION */}
              <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col">
                {/* Title Background */}
                <div className="bg-purple-200 rounded-lg mb-4 p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-semibold">
                    {scholarship.title}
                  </h4>
                </div>
                {/* Scholarship Section */}
                <ul className="space-y-2 mb-4 text-sm sm:text-base text-gray-700 flex-grow">
                  {[scholarship.p1, scholarship.p2, scholarship.p3, scholarship.p4, scholarship.p5]
                    .filter(Boolean)
                    .map((text, idx) => (
                      <li key={idx} className="flex">
                        <div className="text-purple-500 text-3xl mr-2 -mt-1">▸</div>
                        <span className="pt-1">{text}</span>
                      </li>
                    ))}
                </ul>

                <Link href={scholarship.lernMoreText} target="_blank" rel="noopener noreferrer">
                  <button className="font-semibold text-gray-800 px-4 py-2 rounded-lg bg-purple-200 hover:bg-purple-300 transition-colors text-sm sm:text-base">
                    Learn more →
                  </button>
                </Link>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="relative w-full md:w-1/3 min-h-[250px] md:min-h-0">
                <Image
                  src={scholarship.image}
                  alt={scholarship.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="mb-10 text-center">Intake Available</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-around gap-4 sm:gap-2 lg:gap-0 mx-4 px-2 sm:px-0">
          {intakeCards.map((intake, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[calc(50%-0.5rem)] lg:w-55 h-50 shadow-md bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${intake.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="flex flex-col p-4 relative z-10 ">
                <h3 className="relative text-xl font-light text-white z-10 mb-2">
                  {intake.title}
                </h3>
                <div className="flex justify-center ">
                  <span className="text-white">┗━ {intake.desc}</span>
                </div>
                <p className="text-white text-center">{intake.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={visaprocess} className="mx-auto px-standard mt-20 max-w-7xl">
        <h2 className="mb-6 text-center">Visa Info</h2>
        <Image
          src="/images/visaprocess.png"
          alt="Visa Process"
          width={2340}
          height={4160}
          className="mx-auto shadow-lg w-full max-w-6xl mt-10 h-auto"
        />
        <div className="mt-10">
          <h2 className="mb-2 ">Process:</h2>
          <ul className="list-disc pl-6  ">
            <li className="mb-2 ">
              Clarify and concretize your goal for studying in Japan.
            </li>
            <li className="mb-2 ">
              Confirm the language abilities required and costs for studies in
              Japan.
            </li>
            <li className="mb-2 ">
              Request school information and application materials from
              several schools you are interested in and Confirm requirements
              for application.
            </li>
            <li className="mb-2 ">
              Select the school you wish to attend based on school information
              and other materials.
            </li>
            <li className="mb-2 ">
              Send the application for admittance and other necessary
              documents to the school you wish to attend.
            </li>
            <li className="mb-2 ">
              Receive admission acceptance letter. Send money to pay for tuition fees, etc.
            </li>
            <li className="mb-2 ">
              Receive your Certificate of Eligibility for a Status of Residence and apply for a visa at Japanese Embassy in Nepal.
            </li>
            <li className="mb-2 ">
              Find a place to live (or your school or University will arrange
              it for you).
            </li>
            <li className="mb-2 ">
              Travel
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 p-6 ">
        {/* Title */}
        <h2 className="text-center mb-10">Living Costs / Part Time Work</h2>


        <div className="max-w-6xl mx-auto  p-6 border border-purple-300 rounded-3xl bg-white">
          <h3>WHAT ABOUT THE LATEST DATA?</h3>
          <p className="py-3">The average monthly expenses, excluding academic fee, of international students are shown below.
            The cost of living in metropolitan areas is higher than in rural areas.</p>
          {/* Chart + Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Chart Image */}
            <div className="flex justify-center">
              <Image
                src="/images/numbers/priceinjapan.png" // <-- Replace with your actual chart image
                alt="Living Cost Chart"
                className="rounded-xl object-contain max-w-full"
                width={4210}
                height={3260}
              />
            </div>

            {/* Table */}
            <div className="w-full">
              <div className="rounded-3xl overflow-hidden shadow-md border border-gray-300">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#362447] text-white text-lg">
                      <th className="p-4">City</th>
                      <th className="p-4">Living Costs</th>
                      <th className="p-4">Earning</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-800">
                    <tr className="border-t">
                      <td className="p-4">Ottawa</td>
                      <td className="p-4">$1000</td>
                      <td className="p-4">$400</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">Tokyo</td>
                      <td className="p-4">$1000</td>
                      <td className="p-4">$400</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">Island</td>
                      <td className="p-4">$1000</td>
                      <td className="p-4">$400</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">Kanto</td>
                      <td className="p-4">$1000</td>
                      <td className="p-4">$400</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">Chubu</td>
                      <td className="p-4">$1000</td>
                      <td className="p-4">$400</td>
                    </tr>
                  </tbody>
                </table>

                {/* Source text */}
                <p className="text-right p-3 text-gray-400 text-sm italic">
                  Source: www.heeafdsa.com/source
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Paragraph */}
          <p className="mt-12 leading-relaxed px-4 text-center ">
            The cost of living for international students in Japan varies by
            location, with metropolitan areas being more expensive than rural
            regions. Monthly expenses include rent and daily necessities, in
            addition to academic fees. While many students take part-time jobs
            to help cover costs, these earnings are not enough to meet all
            expenses, so financial support from sponsors is necessary.
            Students must follow Japanese laws by obtaining permission to
            work, limiting work to 28 hours per week (or 8 hours per day
            during long holidays), avoiding adult entertainment jobs, ensuring
            work does not affect studies, and using income only for essential
            needs. Violations, such as exceeding work hours or poor
            attendance, can result in visa denial or deportation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl px-standard mx-auto mt-20 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex flex-col justify-center text-center md:text-left px-4">
          <h2 className=" p-4 bg-gray-200 max-w-2xl mx-auto md:mx-0">
            Career Outcomes
          </h2>
          <p className="mt-6 text-justify">
            Regarding career outcomes, Japanese school and university
            qualifications are widely recognized. International students
            seeking work experience in Japan can find opportunities with
            various companies. The Japanese government supports this through
            platforms like Open for Professionals by JETRO, which provides
            information and contacts for companies actively hiring foreign
            employees.
          </p>
        </div>

        <Image
          src="/images/career.png"
          alt="Career Outcomes"
          width={1080}
          height={1080}
          className="md:w-[800px] h-[220px]"
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  )
}