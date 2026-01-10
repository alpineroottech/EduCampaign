"use client";


import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useScrollToOffset } from "@/utils/useScrollToOffset";


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



interface ScholarshipCard {
    title: string;
    p1: string;
    image: string;
}



function PageContent() {
    const searchParams = useSearchParams();
    const scholarship = useRef<HTMLDivElement>(null);

    const RefMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        scholarship: scholarship,
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
            title: "Globally Recognized Degrees"
        },
        {
            icon: "/images/studyabroad/icons/learning.png",
            title: "Holistic Learning Approach"
        },
        {
            icon: "/images/studyabroad/icons/skills.png",
            title: "Skills for the Future"
        },
        {
            icon: "/images/studyabroad/icons/learningthruexperience.png",
            title: "Learning Through Experience"
        },
        {
            icon: "/images/studyabroad/icons/studentlife.png",
            title: "A Fulfilling Student Lifestyle"
        },
        {
            icon: "/images/studyabroad/icons/career.png",
            title: "Career-Building Opportunities"
        },
        {
            icon: "/images/studyabroad/icons/support.png",
            title: "Dedicated Student Support"
        },


    ];

    const languageSchools: LanguageSchoolCard[] = [
        {
            image: "/images/studyabroad/university.png",
            title: "VET ( VOCATIONAL COLLEGES)",
            description: "TAFE and private institutions offering VET courses for specialized knowledge and job-ready skills.",
            slug: "/studyabroad/australia/vet"
        },
        {
            image: "/images/studyabroad/university.png",
            title: "UNIVERSITY",
            description: "World-class universities offering undergraduate, postgraduate, and doctoral programs with global recognition.",
            slug: "/studyabroad/australia/university"
        },
    ];



    const scholarshipCards: ScholarshipCard[] = [
        {
            title: "Australia Awards Scholarships (AAS) ",
            p1: " Funded by the Australian Government, these scholarships cover tuition, living costs, travel, and health insurance, helping students from Asia, the Pacific, Africa, and the Middle East study in Australia without financial worries.",
            image: "/images/scholarship/aas.jpg",
        },
        {
            title: "Research Training Program (RTP) Scholarships ",
            p1: "Offered by universities for research-based postgraduate degrees, RTP scholarships provide tuition, living stipends, and research support to help students focus entirely on their studies.",
            image: "/images/scholarship/rtp.png",
        },
        {
            title: "Endeavour Postgraduate Scholarships ",
            p1: "These awards support international postgraduate students with tuition, travel, and health coverage, combining advanced study with professional and academic opportunities.   ",
            image: "/images/scholarship/eps.jpg",
        },
        {
            title: " University-Specific Scholarships",
            p1: "Top universities like Sydney, UNSW, Monash, and Melbourne offer merit-based scholarships to reward academic excellence, leadership, or financial need.",
            image: "/images/scholarship/university.jpg",
        },
        {
            title: "Destination Australia Scholarship ",
            p1: "Encouraging study in regional Australia, this scholarship offers up to AUD 15,000 per year to help cover living and study costs while experiencing vibrant, multicultural communities.",
            image: "/images/scholarship/das.jpg",
        },


    ];



    return (
        <div className="min-h-screen  pb-20">
            {/* Hero */}

            <div className="">
                <Breadcrumbs />
                <HeroSection imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" title="Study In Australia" />
            </div>
            <p className=" text-center max-w-6xl mx-auto mt-6 px-2 md:px-0">
                Australia continues to be a highly sought-after destination for international students,
                particularly from Nepal, thanks to its world-class universities and practical, industry-
                focused education. Students benefit from modern facilities, innovative teaching, and
                strong links to employers, which help them build skills that are valued globally. Beyond
                academics, Australia offers a safe, multicultural, and welcoming environment, with
                vibrant student communities and a high standard of living. One of its biggest attractions is
                the post-study work opportunities, enabling graduates to gain real-world experience and
                even explore pathways to permanent residency, especially in fields where skilled
                professionals are in demand, such as IT, healthcare, engineering, and teaching.

            </p>
            <p className=" text-center max-w-6xl mx-auto my-6 px-2  md:px-0">
                Additionally, Australia offers Nepali students not just a degree but a meaningful
                international experience through quality education, strong industry-linked learning, and
                excellent career prospects. With top universities, a safe multicultural environment,
                flexible post-study work options, and a rich lifestyle, it stands out as a balanced and
                attractive destination for global study and future opportunities.
            </p>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 border border-gray-300 rounded-2xl py-10 bg-white">
                <h2 className=" mb-6 text-center">
                    Why Australia ?
                </h2>
                <p className=" mb-6 max-w-4xl text-center mx-auto  ">
                    Australia has emerged as one of the most popular power house of education for
                    international students and has been recognized by the universities and the employers of
                    the world for austrialian universities’ academic deegrees and the certificates.
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
                                height={1080} />
                            <p className="text-[12px] text-gray-800 text-center font-bold">
                                {box.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>


            <div className="max-w-6xl mx-auto px-6 py-10 mt-8 ">
                <h2 className=" mb-6  text-center">HIGHER EDUCATION &amp; STUDY PATHWAY IN AUSTRALIA</h2>
                <p className="mb-4 max-w-6xl text-center mx-auto ">
                    Australia offers international students a well-organized journey of learning, starting with
                    English language courses and foundation programs to prepare them for higher education.

                    From there, students can advance to vocational training, undergraduate, and postgraduate
                    degrees, gaining both theoretical knowledge and hands-on experience. With opportunities
                    for internships and professional placements, learners not only enhance practical skills but
                    also develop global perspectives, equipping themselves to step confidently into successful
                    careers. Australia’s education system provides a clear pathway for international students,
                    from school preparation to certificates, diplomas, university degrees, and postgraduate
                    studies, emphasizing practical skills and career readiness. At the vocational level, VET
                    qualifications are offered through TAFE institutes and private providers, both recognized
                    as RTOs, giving students hands-on training and smooth transitions into further study or
                    the workforce.
                </p>

                <div className="max-w-4xl mx-auto mt-8 sm:px-4">
                    <div className="border border-purple-300 rounded-2xl p-4 sm:p-6">
                        <h5 className="text-center mb-6">Educational Institutions</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {languageSchools.map((school, index) => (
                                <Link href={school.slug} key={index} className="h-full">
                                    <div className="border relative w-full h-full min-h-[200px] sm:min-h-[220px] rounded-lg overflow-hidden">
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
            </div>

            <div
                className="relative bg-cover bg-center bg-no-repeat py-8 px-4 mx-0 sm:mx-6"
                style={{ backgroundImage: "url('/images/tution.jpg')" }}  // <-- replace with your image
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative text-center max-w-6xl mx-auto text-white">
                    <h2 className="mb-4">Tuition Fee</h2>

                    <p className="max-w-5xl mx-auto leading-relaxed mb-8">
                        Below is a table providing an approximate range of annual tuition fees for international
                        students studying in Australia.
                    </p>
                    <p className="max-w-6xl mx-auto leading-relaxed mb-8 font-light">Note: The cost mentioned above is based on estimated figures from the college and university average and does not confirm the fees you may pay.</p>

                    {/* Table */}
                    <div className="bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30 max-w-3xl mx-auto">
                        <table className="w-full text-left text-gray-900">
                            <thead>
                                <tr className="bg-[#7b5d4c] text-white text-lg">
                                    <th className="p-4">Level of Study</th>
                                    <th className="p-4">Average Annual Tuition Fees (in AUD)</th>
                                </tr>
                            </thead>

                            <tbody className="font-light">
                                <tr className="border-t">
                                    <td className="p-4">Undergraduate</td>
                                    <td className="p-4">$20,000 – $45,000</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4">Postgraduate</td>
                                    <td className="p-4">$22,000 – $50,000</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4">Doctoral Degree</td>
                                    <td className="p-4">$18,000 – $42,000</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4">Graduate Course</td>
                                    <td className="p-4">$22,000 – $50,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-20" ref={scholarship}>
                <h2 className="mb-6 text-center">Scholarships in Australia</h2>
                <p className="mb-4 max-w-4xl text-center mx-auto px-2">
                    There are several scholarship opportunities available for international students. A brief Explanation widens your concerns as follows.
                </p>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
                    {scholarshipCards.map((scholarship, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white border border-gray-400 rounded-xl p-2 sm:p-3 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Title Header */}
                            <div className="bg-purple-200 rounded-md p-3 sm:p-4 mb-3 sm:mb-4">
                                <h4 className="text-base sm:text-lg font-semibold text-center sm:text-left">
                                    {scholarship.title}
                                </h4>
                            </div>
                            
                            {/* Content Section */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {/* Text */}
                                <div className="flex-1 text-sm sm:text-base text-gray-700 text-justify order-2 sm:order-1">
                                    {scholarship.p1 && (
                                        <p className="border-b-2 border-gray-200 pb-2">{scholarship.p1}</p>
                                    )}
                                </div>
                                
                                {/* Image */}
                                <div className="relative w-full sm:w-36 md:w-44 lg:w-48 h-44 sm:h-auto sm:min-h-[120px] flex-shrink-0 order-1 sm:order-2 rounded-lg overflow-hidden border border-gray-200">
                                    <Image
                                        src={scholarship.image}
                                        alt={scholarship.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 200px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="mx-auto px-standard mt-20 max-w-7xl ">
                <h2 className=" mb-6 text-center">Visa Info</h2>
                <p className="mb-4 max-w-4xl text-center mx-auto ">
                    Japan education system is admired globally for its rigor, efficiency, and cultural depth. It’s not just about learning facts—it’s about shaping thoughtful, responsible citizens. If you&apos;re curious about how it compares to Western systems or want to explore international student life in Japan.
                </p>
                <Image
                    src="/images/visaprocess.png"
                    alt="Visa Process"
                    width={2340}
                    height={4160}
                    className="mx-auto shadow-lg max-w-6xl mt-10 "
                />
                <div className="mt-10">
                    <h3 className="mb-2 " >Helpful Points:</h3>
                    <ul className="list-disc pl-6  " >
                        <li className="mb-2">Decide your study goal and choose a course that matches your future plans.</li>
                        <li className="mb-2">Check entry requirements, English test scores, tuition fees, and living costs early.</li>
                        <li className="mb-2">Apply to a few Australian institutions and compare offers before choosing one.</li>
                        <li className="mb-2">Accept the offer and arrange required documents such as financial proof and OSHC.</li>
                        <li className="mb-2">Prepare accurate visa documents, as incomplete or weak documents can cause refusal.</li>
                        <li className="mb-2">Apply for the Australian student visa and pay the required visa fee.</li>
                        <li className="mb-2">Attend biometrics or an interview if immigration asks for it.</li>
                        <li className="mb-2">After visa approval, arrange accommodation, book flights, and prepare for arrival in Australia.</li>

                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 p-6 ">

                {/* Title */}
                <h2 className="text-center mb-10">
                    Living Costs / Part Time Work
                </h2>

                <div className="max-w-6xl mx-auto  p-6 border border-purple-300 rounded-3xl bg-white">


                    {/* Chart + Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Chart Image */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/aus-graph.png"  // <-- Replace with your actual chart image 
                                alt="Living Cost Chart"
                                className="rounded-xl max-w-full"
                                width={4210}
                                height={3260}
                            />
                        </div>

                        {/* Table */}
                        <div className="w-full">
                            <div className="rounded-3xl overflow-hidden shadow-md border border-gray-300">

                                <table className="w-full text-left text-gray-900">
                                    <thead>
                                        <tr className="bg-[#7b5d4c] text-white text-lg">
                                            <th className="p-4">Expense Category</th>
                                            <th className="p-4">Average Monthly Cost (in AUD)</th>
                                        </tr>
                                    </thead>

                                    <tbody className="font-light">
                                        <tr className="border-t">
                                            <td className="p-4">Accommodation</td>
                                            <td className="p-4">$800 – $1,500</td>
                                        </tr>

                                        <tr className="border-t">
                                            <td className="p-4">Groceries</td>
                                            <td className="p-4">$200 – $400</td>
                                        </tr>

                                        <tr className="border-t">
                                            <td className="p-4">Eating Out</td>
                                            <td className="p-4">$200 – $400</td>
                                        </tr>

                                        <tr className="border-t">
                                            <td className="p-4">Public Transportation</td>
                                            <td className="p-4">$100 – $200</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4">Utilities</td>
                                            <td className="p-4">$100 – $200</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4">Internet and Mobile</td>
                                            <td className="p-4">$50 – $100</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4">Entertainment</td>
                                            <td className="p-4">$100 – $200</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4">Personal Care </td>
                                            <td className="p-4">$50 – $100</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4">Clothing</td>
                                            <td className="p-4">$50 – $100</td>
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
                    <p className="mt-12 leading-relaxed px-4  md:text-left text-justify ">
                        <strong>Work Right:</strong> International students with a valid student visa are generally allowed to work part-time during their studies. They can work up to 48 hours per fortnight during the academic term and full-time during scheduled breaks.
                        <br /><br />Living expenses, including accommodation, food, transportation, and other miscellaneous costs, typically amount to around AUD 20,000 per year.

                    </p>
                </div>
            </div>

            <div className="max-w-7xl px-standard mx-auto mt-20 flex flex-col md:flex-row items-center md:items-start gap-10">

                <div className="flex flex-col justify-center text-center md:text-left px-4">
                    <h2 className=" p-4 bg-gray-200 max-w-2xl mx-auto md:mx-0">
                        Career Outcomes</h2>
                    <ul className="flex flex-col gap-5 py-4 text-justify ">
                        <li className='flex'>
                            <div className=" text-purple-500 text-3xl">▸</div>
                            <span className="ml-2 pt-2"><strong>Post-Study Work Opportunities:</strong> After graduation, international students may be
                                eligible for the Post-Study Work Stream of the Temporary Graduate Visa
                                (subclass 485), allowing them to work in Australia for a period of two to four
                                years, depending on their level of study.</span>
                        </li>
                        <li className='flex'>
                            <div className=" text-purple-500 text-3xl ">▸</div>
                            <span className="ml-2 pt-2">Generous <strong> post-study work visas</strong> (up to 5 years depending on the course and location).</span>
                        </li>
                        <li className='flex'>
                            <div className=" text-purple-500 text-3xl">▸</div>
                            <span className="ml-2 pt-2">  Career & Migration Opportunities</span>
                        </li>
                        <li className='flex'>
                            <div className=" text-purple-500 text-3xl">▸</div>
                            <span className="ml-2 pt-2">Pathways to <strong> Permanent Residency (PR)</strong> through skilled migration programs.</span>
                        </li>
                        <li className='flex'>
                            <div className=" text-purple-500 text-3xl ">▸</div>
                            <span className="ml-2 pt-2">High demand for professionals in <strong>IT, nursing, engineering, and trades.</strong> </span>
                        </li>
                    </ul>
                </div>

                <Image
                    src="/images/career.png"
                    alt="Career Outcomes"
                    width={1080}
                    height={1080}
                    className="md:w-[800px] h-[400px]"
                />
            </div>

        </div>
    );
}
export default function Pages() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}