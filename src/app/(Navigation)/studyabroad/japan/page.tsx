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
import { Paper, Box, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import YardIcon from '@mui/icons-material/Yard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


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
      title: "Learn Japanese with Context"
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

  const pathwayItems = [
    {
      icon: MenuBookIcon,
      title: "Japanese Language School",
      description: "Training for non-native speakers, covering general communication, business Japanese, and advanced academic skills.",
      slug: "/studyabroad/japan/japaneselanguageprogram",
      color: "#6B4FA1"
    },
    {
      icon: SchoolIcon,
      title: "Preparatory Japanese Language (Bekka) Program",
      description: "The Bekka Program in Japan is a preparatory course designed for international students who wish to continue their studies at Japanese universities.",
      slug: "/studyabroad/japan/bekka",
      color: "#5a3f8a"
    },
    {
      icon: AccountBalanceIcon,
      title: "University Program",
      description: "In Japan, \"Daigaku\" means university and refers to institutions offering higher education and research opportunities.",
      slug: "/studyabroad/japan/universityprogram",
      color: "#3d1a4d"
    }
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

  const intakeCards = [
    {
      title: "January Intake",
      desc: "Limited Winter Intake",
      paragraph: "Mainly for short term and specialized language programs.",
      icon: AcUnitIcon,
      color: "#64B5F6",
    },
    {
      title: "April Intake",
      desc: "Main & Largest Intake",
      paragraph: "Ideal for students starting their academic journey in Japan's primary admission period.",
      icon: LocalFloristIcon,
      color: "#F06292",
    },
    {
      title: "July Intake",
      desc: "Mid-Year Admission",
      paragraph: "Perfect for students seeking flexible enrollment options during the summer season.",
      icon: WbSunnyIcon,
      color: "#FFD54F",
    },
    {
      title: "October Intake",
      desc: "Second Major Intake",
      paragraph: "Popular choice for students preparing for spring semester enrollment.",
      icon: YardIcon,
      color: "#FF8A65",
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
        className="text-center max-w-6xl mx-auto pt-16 pb-2"
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
        className="max-w-6xl mx-auto px-4 sm:px-6 border-2 border-gray-300 rounded-2xl bg-gray-100 pt-16 pb-2"
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
              className="w-40 h-20 flex flex-col items-center justify-center border-2 border-purple-300 rounded-full"
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
          ))}        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-10 mt-8 ">
        <h2 className=" mb-6  text-center">Study Pathway in Japan</h2>
        <p className="mb-4 max-w-6xl text-center mx-auto ">
          Japan’s education system is globally respected for its discipline, innovation, and academic rigor. It focuses not only on academic excellence but also on developing responsible, well-rounded individuals. International students can pursue higher education in Japan through two main pathways: first, by studying the Japanese language before entering a
          university or vocational college, or second, by directly enrolling in degree programs, many of which are offered in English.
        </p>

        <div className="max-w-4xl mx-auto mt-8 px-4">
          {/* Ladder Timeline Structure */}
          <Box sx={{ position: 'relative', px: { xs: 2, md: 4 } }}>
            {/* Central Vertical Line */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '3px',
                bgcolor: '#e0e0e0',
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' }
              }}
            />

            {/* Pathway Items */}
            {pathwayItems.map((pathway, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = pathway.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
                      alignItems: 'center',
                      mb: 6,
                      gap: { xs: 2, md: 4 }
                    }}
                  >
                    {/* Content Card */}
                    <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                      <Link href={pathway.slug}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 2,
                            bgcolor: 'white',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: 6,
                              borderColor: pathway.color
                            },
                            border: '2px solid transparent'
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              mb: 2,
                              color: '#2a1136',
                              fontSize: { xs: '1rem', md: '1.25rem' }
                            }}
                          >
                            {pathway.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#6b7280',
                              lineHeight: 1.6,
                              fontSize: { xs: '0.875rem', md: '1rem' }
                            }}
                          >
                            {pathway.description}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              color: pathway.color,
                              fontWeight: 500,
                              fontSize: '0.875rem'
                            }}
                          >
                            Learn More →
                          </Typography>
                        </Paper>
                      </Link>
                    </Box>

                    {/* Timeline Dot (Desktop) */}
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: pathway.color,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 2,
                        boxShadow: '0 4px 12px rgba(107, 79, 161, 0.3)'
                      }}
                    >
                      <IconComponent sx={{ color: 'white', fontSize: 28 }} />
                    </Box>

                    {/* Spacer */}
                    <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                  </Box>

                  {/* Mobile Icon */}
                  <Box
                    sx={{
                      display: { xs: 'flex', md: 'none' },
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: pathway.color,
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 4,
                      boxShadow: '0 4px 12px rgba(107, 79, 161, 0.3)'
                    }}
                  >
                    <IconComponent sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                </motion.div>
              );
            })}
          </Box>
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

      <div ref={scholarship} className="max-w-7xl mx-auto px-standard mt-20">
        <h2 className="mb-6 text-center">Scholarships in Japan</h2>
        <p className="mb-12 max-w-4xl text-center mx-auto">
          There are several scholarship opportunities available for
          international students. A brief Explanation widens your concerns as
          follows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarshipCards.map((scholarship, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group overflow-hidden flex flex-col rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image with 16:10 aspect ratio */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={scholarship.image}
                  alt={scholarship.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-xl">{scholarship.title}</h4>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-2 mb-4 text-sm text-gray-700 flex-grow">
                  {[scholarship.p1, scholarship.p2, scholarship.p3, scholarship.p4, scholarship.p5]
                    .filter(Boolean)
                    .map((text, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-purple-500 text-lg mr-2 flex-shrink-0">▸</div>
                        <span>{text}</span>
                      </li>
                    ))}
                </ul>

                <Link 
                  href={scholarship.lernMoreText} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <button className="w-full font-semibold text-white px-4 py-2.5 rounded-lg bg-[#6B4FA1] hover:bg-[#5a3f8a] transition-colors text-sm">
                    Learn more →
                  </button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-standard mt-20 mb-16">
        <h2 className="mb-16 text-center">Intake Available</h2>
        
        {/* Timeline Container */}
        <Box sx={{ position: 'relative', px: { xs: 2, md: 4 } }}>
          {/* Central Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              bgcolor: '#e0e0e0',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }}
          />

          {/* Timeline Items */}
          {intakeCards.map((intake, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = intake.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: isLeft ? 'flex-start' : 'flex-end' },
                    mb: 6,
                    position: 'relative'
                  }}
                >
                  {/* Timeline Dot (Desktop) */}
                  <Box
                    sx={{
                      position: { xs: 'static', md: 'absolute' },
                      left: { md: '50%' },
                      top: { md: '20px' },
                      transform: { md: 'translateX(-50%)' },
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      borderRadius: '50%',
                      bgcolor: intake.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 3,
                      zIndex: 2,
                      mb: { xs: 2, md: 0 }
                    }}
                  >
                    <IconComponent sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />
                  </Box>

                  {/* Content Card */}
                  <Paper
                    elevation={3}
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      p: 3,
                      borderRadius: 3,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6
                      },
                      border: `2px solid ${intake.color}20`
                    }}
                  >
                    {/* Connector Line (Desktop) */}
                    <Box
                      sx={{
                        position: { xs: 'none', md: 'absolute' },
                        display: { xs: 'none', md: 'block' },
                        top: '28px',
                        [isLeft ? 'right' : 'left']: '-40px',
                        width: '40px',
                        height: '2px',
                        bgcolor: intake.color,
                        opacity: 0.4
                      }}
                    />

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#1a1a1a'
                      }}
                    >
                      {intake.title}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: intake.color
                      }}
                    >
                      {intake.desc}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7
                      }}
                    >
                      {intake.paragraph}
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            );
          })}
        </Box>
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
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Chart Image - 2x larger */}
            <div className="w-full lg:w-2/3 flex justify-center">
              <Image
                src="/images/numbers/priceinjapan.png"
                alt="Living Cost Chart"
                className="rounded-xl object-contain w-full"
                width={4210}
                height={3260}
              />
            </div>

            {/* Table - Smaller to fit remaining space */}
            <div className="w-full lg:w-1/3">
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

      {/* Career Outcomes Section */}
      <div className="max-w-7xl px-standard mx-auto mt-20 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex flex-col justify-center text-center md:text-left px-4">
          <h2 className="p-4 bg-gray-200 max-w-2xl mx-auto md:mx-0">
            Career Outcomes
          </h2>
          <p className="py-4 text-justify">
            Regarding career outcomes, Japanese school and university qualifications are widely recognized. 
            International students seeking work experience in Japan can find opportunities with various companies. 
            The Japanese government supports this through platforms like <strong>Open for Professionals by JETRO</strong>, 
            which provides information and contacts for companies actively hiring foreign employees.
          </p>
        </div>

        <Image
          src="/images/career.png"
          alt="Career Outcomes"
          width={1080}
          height={1080}
          className="md:w-[640px] h-[320px]"
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