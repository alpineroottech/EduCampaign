'use client';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import { useEffect, useRef, useState } from 'react';
import { useScrollToOffset } from '@/utils/useScrollToOffset';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'motion/react';

interface RelatedProgramCard {
  image: string;
  title: string;
  description: string;
  slug: string;
}

const UniversityPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);

  const menuItems = [
    { id: "about", label: "ABOUT AUSTRALIAN UNIVERSITY" },
    { id: "why", label: "WHY AUSTRALIAN UNIVERSITY?" },
    { id: "course", label: "ABOUT COURSE" },
    { id: "requirements", label: "APPLICATION REQUIREMENT" },
    { id: "admission", label: "ADMISSION GUIDE" },
    { id: "career", label: "CAREER AND INTERNSHIP PATHWAYS" },
    { id: "faq", label: "FAQ" },
  ];

  const relatedPrograms: RelatedProgramCard[] = [
    {
      image: "/images/studyabroad/university.png",
      title: "VET Program",
      description: "Vocational Education and Training for practical career-focused skills",
      slug: "/studyabroad/australia/subpages/vet"
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
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
          width={1220}
          height={1400}
          alt="Australian University Hero"
          className="w-full h-[350px] object-cover rounded-none"
        />
      </div>

      <div ref={containerRef} className="container-narrow mx-auto lg:flex lg:items-start lg:gap-12 relative">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 -mt-14 z-30">
          <div
            ref={sidebarRef}
            className={`w-64 rounded-sm bg-white border-2 border-purple-300 ${isSticky ? 'fixed top-28' : ''
              } ${isAtBottom ? 'absolute bottom-12 left-0' : ''
              }`}
          >
            <h6 className="text-gray-900 p-4 bg-purple-300">AUSTRALIAN UNIVERSITY</h6>
            <div>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                  }}
                  className={`block w-full text-left text-xs font-semibold py-3 px-3 leading-relaxed transition-colors border-b border-purple-300 ${activeSection === item.id
                    ? "bg-purple-200   text-gray-900"
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
          {activeSection === "about" && (
          <div ref={aboutRef}>
            <h3 className="bg-gray-200 p-4">ABOUT AUSTRALIAN UNIVERSITY</h3>
            <div className="flex flex-col gap-4 py-8 text-justify px-4">
              <p>
                Australia is home to 39 universities, including public, private, and Catholic institutions, spread across metropolitan and regional areas, many with multiple campuses. These universities offer a wide range of undergraduate and postgraduate programs, from Bachelor&apos;s degrees to Doctoral studies, with some focusing on research, technology, or specialized disciplines. In addition, smaller private institutions provide niche courses in fields such as hospitality, digital media, and performing arts, catering to specific industry needs or communities.
              </p>
              <p>
                Australian universities are globally recognized for their high standards in teaching and research, with quality regulated by the Tertiary Education Quality and Standards Agency (TEQSA). Many institutions consistently rank among the world&apos;s top universities, and their degrees are widely respected, including in Nepal. The education system is designed to actively support international students, offering inclusive learning environments and clear academic pathways.
              </p>
              <p>
                Student protection is a priority in Australia. <strong>The Education Services for Overseas Students (ESOS) Act</strong> safeguards students&apos; rights, while the <strong>Tuition Protection Service (TPS)</strong> ensures course placement or refunds if institutions fail to deliver. Health and well-being are supported through <strong>Overseas Student Health Cover (OSHC)</strong>, which covers medical visits, minor treatments, ambulance services, and selected medications. Beyond legal protections, Australia is known for its welcoming, multicultural society that embraces diversity and provides a safe, supportive environment for students from all backgrounds.
              </p>
            </div>
          </div>
          )}

          {/* Why Australian University Section */}
          {activeSection === "why" && (
          <>
          <h3 ref={whyRef} className="bg-gray-200 p-4 mt-15">WHY AUSTRALIAN UNIVERSITIES?</h3>
          <div className="flex py-4 text-justify">
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>International Student Support:</strong> Universities provide specialized services to assist international students. Students can access <strong>Overseas Student Health Cover (OSHC)</strong> for medical and health needs. Australian cities are safe, with high living standards and well-developed public infrastructure.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Scholarships & Financial Assistance:</strong> Many merit-based scholarships are available for Nepali students. Institutions also offer <strong>fee waivers, bursaries, and other financial support</strong> based on academic performance.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Globally Recognized Degrees:</strong> Australian qualifications are recognized and respected worldwide, opening doors to international career opportunities.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Opportunities for Post-Study Work and Migration:</strong> Australia offers post-study work visas and pathways for skilled migration for eligible graduates.</span>
              </li>
            </ul>
          </div>
          </>
          )}

          {/* About Course Section */}
          {activeSection === "course" && (
          <section ref={courseRef} id="course" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">ABOUT COURSE</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                Australia is home to world-class universities and colleges, offering:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Undergraduate Degrees:</strong> Bachelor&apos;s programs typically 3–4 years.</li>
                <li><strong>Postgraduate Degrees:</strong> Master&apos;s and Doctoral programs.</li>
                <li><strong>Graduate Diplomas & Certificates:</strong> Shorter, specialized qualifications.</li>
              </ul>
              <p>
                Many institutions offer pathway programs for students who don&apos;t meet direct entry requirements, including Foundation Studies, ELICOS (English Language Intensive Courses for Overseas Students), and Diploma-to-Degree transitions.
              </p>
              <p>
                <strong>Undergraduate Programs:</strong> These programs provide foundational and specialized knowledge in fields like business, IT, science, arts, and engineering, typically lasting 3–4 years, and prepare students for professional careers or further study.
              </p>
              <p>
                <strong>Graduate Programs:</strong> Eligibility for Master&apos;s or Doctoral studies, or Research Student Programs to prepare for higher degrees.
              </p>
            </div>

            {/* Course Table */}
            <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-x-auto border border-gray-300 max-w-4xl mx-auto my-8">
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="bg-[#7b5d4c] text-white text-lg">
                    <th className="p-2 sm:p-4">Course</th>
                    <th className="p-2 sm:p-4">Intake</th>
                    <th className="p-2 sm:p-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Undergraduate</td>
                    <td className="p-2 sm:p-4">February, July</td>
                    <td className="p-2 sm:p-4">3-4 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Graduate/Postgraduate</td>
                    <td className="p-2 sm:p-4">February, July, November</td>
                    <td className="p-2 sm:p-4">1-2 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Doctoral/PhD</td>
                    <td className="p-2 sm:p-4">February, July</td>
                    <td className="p-2 sm:p-4">3-4 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4">Post Doctoral</td>
                    <td className="p-2 sm:p-4">Varies depending on funding and institution</td>
                    <td className="p-2 sm:p-4">2-4 years (research position)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* Application Requirements Section */}
          {activeSection === "requirements" && (
          <section ref={requirementsRef} id="requirements" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">APPLICATION REQUIREMENT</h3>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Completion of 12-year high school or equivalent in Nepal</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Must be 18 years of age at the time of entrance</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">IELTS 5.5 / PTE 51 or higher scores meeting college-specific requirements</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Completed application form and fee</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Statement of Purpose (SOP) or personal statement</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Letters of recommendation (1–2)</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Valid passport</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Proof of financial capacity</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2">Additional documents if required (portfolio, resume, work experience)</span>
              </li>
            </ul>
            <p className="text-sm mt-4 text-gray-600 px-4">
              *Requirements may vary depending on the specific university and course. Contact us for personalized guidance.
            </p>
          </section>
          )}

          {/* Admission Guide Section */}
          {activeSection === "admission" && (
          <section ref={admissionRef} id="admission" className="bg-white py-12">
            <h3 className="bg-gray-200 p-4">ADMISSION GUIDE</h3>
            <p className="py-4 px-4">Follow these steps for a smooth admission process to Australian Universities:</p>

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
                    <td className="p-2 sm:p-4">Meet high school & academic requirements</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">2</td>
                    <td className="p-2 sm:p-4">Prove English proficiency (IELTS/TOEFL/PTE)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">3</td>
                    <td className="p-2 sm:p-4">Choose course & college</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">4</td>
                    <td className="p-2 sm:p-4">Prepare and submit documents</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">5</td>
                    <td className="p-2 sm:p-4">Receive and accept offer</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">6</td>
                    <td className="p-2 sm:p-4">Pay tuition & get CoE</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2 sm:p-4 font-semibold">7</td>
                    <td className="p-2 sm:p-4">Apply for student visa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          )}

          {/* Career Path Section */}
          {activeSection === "career" && (
          <section ref={careerRef} id="career" className="bg-white pt-12">
            <h3 className="bg-gray-200 p-4">CAREER AND INTERNSHIP PATHWAYS</h3>
            <div className="flex flex-col gap-4 py-4 text-justify px-4">
              <p>
                Completing your degree at an Australian University opens up numerous career and professional opportunities:
              </p>
            </div>
            <ul className="flex flex-col gap-5 px-4 py-4 text-justify">
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Professional Employment:</strong> Step into your chosen industry with full-time or part-time roles, leveraging your university training. Work visa sponsorship may be needed for international graduates.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Internships & Industry Experience:</strong> Gain hands-on experience, build professional networks, and enhance your resume through structured internships or work placements.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Advanced Studies:</strong> Continue your academic journey with postgraduate programs such as Master&apos;s or PhD to specialize and advance your career prospects.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Entrepreneurial Ventures:</strong> Apply your skills and knowledge to launch your own business, freelance, or explore innovative professional opportunities.</span>
              </li>
              <li className='flex'>
                <div className="text-purple-500 text-3xl">▸</div>
                <span className="ml-2 pt-2"><strong>Skilled Migration Opportunities:</strong> Certain degrees and qualifications may open pathways for skilled migration, allowing graduates to live and work long-term in Australia.</span>
              </li>
            </ul>


          </section>
          )}

          {/* FAQ Section */}
          {activeSection === "faq" && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default UniversityPage;
