'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import Image from 'next/image';
import { motion } from 'motion/react';

interface RelatedProgramCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}

const VETPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT VET PROGRAM" },
    { id: "why", label: "WHY VET PROGRAM?" },
    { id: "course", label: "ABOUT COURSE" },
    { id: "requirements", label: "APPLICATION REQUIREMENT" },
    { id: "admission", label: "ADMISSION GUIDE" },
    { id: "career", label: "CAREER PATH AFTER GRADUATION" },
    { id: "faq", label: "FAQ" },
  ];

  const relatedPrograms: RelatedProgramCard[] = [
    {
      image: "/images/studyabroad/university.png",
      title: "University Program",
      description: "Pursue undergraduate or postgraduate degrees at top Australian universities",
      slug: "/studyabroad/australia/subpages/university"
    },
  ];

  // Section refs for scroll
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs = {
    about: aboutRef,
    why: whyRef,
    course: courseRef,
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
    const stickyOffset = 124;
    const bottomOffset = 36;
    const buffer = 10;

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

      const sidebarBottomWhenFixed = scrollTop + stickyOffset + sidebarHeight + bottomOffset;
      const shouldStop = sidebarBottomWhenFixed >= containerBottom;
      const shouldStick = scrollTop >= initialTop - stickyOffset + buffer;

      setIsSticky(shouldStick && !shouldStop);
      setIsAtBottom(shouldStick && shouldStop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="">
        <Breadcrumbs />
        <Image
          src="/images/subpages/vocational_education.png"
          width={1220}
          height={1400}
          alt="VET Program Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>

      <div ref={containerRef} className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-20 z-30">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-purple-300 ${isSticky ? 'fixed top-28' : ''
              } ${isAtBottom ? 'absolute bottom-12 left-0' : ''
              }`}
          >
            <h6 className="text-gray-900 p-4 bg-purple-300">VET (VOCATIONAL COLLEGES)</h6>
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
        <div className="flex-1 min-w-0 bg-white my-12 px-4 lg:px-0">
          {/* About Section */}
          <div ref={aboutRef}>
            <h3 className="bg-gray-200 p-4">ABOUT VET PROGRAM</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                There are TAFE and private educational institutions that offer VET (Vocational Education and Training) courses to acquire specialized knowledge useful for jobs in Australia. Public schools are called TAFE, and private schools are called vocational schools. The TAFE sector is the largest education and training sector in Australia. At the VET level, private providers offer VET qualifications alongside government-funded TAFE institutes and are classified as Registered Training Organizations (RTOs).
              </p>
              <p>
                <strong>Diploma / Advanced Diploma:</strong> Higher-level VET qualifications that build on certificate courses, providing specialized skills and knowledge, often leading to professional employment or further higher education pathways.
              </p>
              <p>
                Each VET qualification can be a first step towards a new job or a new skill, or a pathway to further study. Diploma and Advanced Diploma courses may also provide study credit towards a higher education (university level) degree.
              </p>
            </div>
          </div>

          {/* Why VET Program Section */}
          <h3 ref={whyRef} className="bg-gray-200 p-4 mt-15">WHY VET PROGRAM?</h3>
          <div className="flex py-4 text-justify">
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Practical, career-focused training:</strong> VET and Diploma programs in Australia provide hands-on learning in fields like business, IT, healthcare, hospitality, and skilled trades.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Job-ready skills:</strong> These courses equip students with real-world skills for professional roles or entrepreneurial opportunities.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Pathway to further study:</strong> They offer opportunities to continue into higher education programs.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Blend of theory and practice:</strong> Students gain both essential theoretical knowledge and practical experience.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Confidence and competence:</strong> Programs help learners build industry competence, self-assurance, and expertise to succeed in their chosen careers.</span>
              </li>
            </ul>
          </div>

          {/* About Course Section */}
          <section ref={courseRef} id="course" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">ABOUT COURSE</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                Each VET qualification can be a first step towards a new job or a new skill, or a pathway to further study. Certificates I–IV in Australia&apos;s VET system offer a step-by-step approach to gaining practical, industry-ready skills, starting from basic knowledge in Certificate I and II to advanced, specialized competencies in Certificate III and IV.
              </p>
              <p>
                For Nepali students who have completed +2 and meet IELTS requirements, these certificates are <strong>not mandatory</strong> for university admission. However, they can be a valuable option for those seeking hands-on experience, a smooth transition into diploma courses, or a head start in vocational careers. Essentially, they act as a flexible bridge—helping students gain confidence, real-world skills, and a clearer pathway to higher education or professional opportunities, without being a prerequisite for academic progression.
              </p>
              <p>
                Diploma and Advanced Diploma courses in Australia&apos;s VET system offer international students, including Nepali students, a practical and career-focused pathway to higher education or the workforce. <strong>Diploma courses</strong>, typically 1–2 years in duration, provide technical skills and industry knowledge for specific careers while also serving as a stepping stone to university degree programs.
              </p>
              <p>
                <strong>Advanced Diplomas</strong>, lasting 1.5–2.5 years, offer more specialized training, preparing students for senior roles, management positions, or direct entry into higher-level degrees. These programs span diverse fields such as business, IT, hospitality, engineering, health, and creative industries, allowing students to align their studies with personal career goals. By combining hands-on learning with academic progression, Diplomas and Advanced Diplomas help Nepali students gain practical skills, industry experience, and a smooth transition into further study or professional opportunities.
              </p>
            </div>

            {/* Course Table */}
            <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-x-auto border border-gray-300 max-w-3xl mx-auto my-8">
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="bg-[#7b5d4c] text-white text-lg">
                    <th className="p-2 sm:p-4">Course Level</th>
                    <th className="p-2 sm:p-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Certificate I - II</td>
                    <td className="p-2 sm:p-4">3-6 months</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Certificate III - IV</td>
                    <td className="p-2 sm:p-4">6-12 months</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Diploma</td>
                    <td className="p-2 sm:p-4">1-2 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Advanced Diploma</td>
                    <td className="p-2 sm:p-4">1.5-2.5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Requirements Section */}
          <section ref={requirementsRef} id="requirements" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">APPLICATION REQUIREMENT</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Academic:</strong> 60% or 2.4 (2.8 in many universities) GPA</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Gap Year:</strong> No more than 2 years after High School with proper justification and evidence of Gap</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>IELTS for Bachelor:</strong> 6 (Not less than 5.5)</span>
              </li>
              
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Or <strong>IELTS</strong> score requirements depend upon college and universities</span>
              </li>
            </ul>
            <p className="text-sm mt-4 text-gray-600 px-4">
              *Requirements may vary depending on the specific institution and course. Contact us for personalized guidance.
            </p>
          </section>

          {/* Admission Guide Section */}
          <section ref={admissionRef} id="admission" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">ADMISSION GUIDE</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                Once you meet the admission criteria, the first step is to apply to your chosen school. After submitting the required documents and making the necessary payment, the school will issue your Certificate of Enrolment (CoE).
              </p>
              <p>
                The next step is applying for a student visa. <strong>Edu. Campaign Pvt. Ltd.</strong> can guide you through the entire process of all aspects of student visa applications afterwards.
              </p>
            </div>

            {/* Admission Steps */}
            <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-x-auto border border-gray-300 max-w-3xl mx-auto my-8">
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="bg-[#7b5d4c] text-white text-lg">
                    <th className="p-2 sm:p-4">Step</th>
                    <th className="p-2 sm:p-4">Description</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">1</td>
                    <td className="p-2 sm:p-4">Meet academic and English requirements</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">2</td>
                    <td className="p-2 sm:p-4">Choose course & institution</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">3</td>
                    <td className="p-2 sm:p-4">Submit application with documents</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">4</td>
                    <td className="p-2 sm:p-4">Receive and accept offer</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">5</td>
                    <td className="p-2 sm:p-4">Pay tuition & receive CoE</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">6</td>
                    <td className="p-2 sm:p-4">Apply for student visa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Career Path Section */}
          <section ref={careerRef} id="career" className="bg-white pt-12 ">
            <h3 className="bg-gray-200 p-4">CAREER PATH AFTER GRADUATION</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                Completing a VET program opens up multiple pathways for career advancement and further education:
              </p>
            </div>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Further Study:</strong> TAFE graduates can progress to higher-level vocational courses, university degrees, or postgraduate programs, gaining advanced skills and qualifications.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Career Opportunities:</strong> Pursue jobs and internships in your chosen field with industry-ready skills.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Professional Certifications:</strong> Obtain additional certifications to enhance your professional profile.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Entrepreneurship:</strong> Start your own business with the practical skills gained during your training.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Skilled Visa Pathways:</strong> Explore skilled visa options to live and work long-term in Australia.</span>
              </li>
            </ul>



          </section>

          {/* FAQ Section */}
          <section ref={faqRef} id="faq" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">FAQ</h3>
            <p className="text-justify max-w-6xl mx-auto py-4 px-4">
              Find answers to common questions about studying in Australia.
            </p>
            <div className="mt-4 max-w-6xl mx-auto space-y-4 px-4">
              {[
                {
                  title: "01. Is a gap year acceptable?",
                  content: "Yes, gap years are accepted if you can provide valid reasons such as work experience, training, or further studies."
                },
                {
                  title: "02. How many hours can I work legally?",
                  content: "You can work up to 48 hours per fortnight during study periods and unlimited hours during official school breaks."
                },
                {
                  title: "03. Are scholarships available for international students?",
                  content: "Yes, many universities and institutions offer scholarships based on academic merit, course type, or financial need."
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

export default VETPage;
