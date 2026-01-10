"use client";


import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import Link from 'next/link';


interface TestPreparationCard {
  icon: string;
  title: string;
  paragraph: string;
  image: string;
  color?: string;
  link:string,
}


export default function TestPreparation() {


  const testPreparation: TestPreparationCard[] = [
    {
      icon: "/images/Translation.png",
      title: "Prepare Japanese Language",
      paragraph: "Comprehensive Japanese Language preparation courses designed to help students achieve high scores in all sections of the exam, including reading, listening, speaking, and writing.",
      image: "/images/testpreparation/japanese.jpg",
      color: "bg-[#e8d9fd]",
      link:"/testpreparation/japaneselanguage",
    },
    {
      icon: "/images/Translation.png",
      title: "SSW Preparation",
      paragraph: "Specialized GMAT preparation classes that focus on the unique format and content of the exam, providing strategies and practice to maximize scores for business school admissions.",
      image: "/images/testpreparation/ssw.webp",
      color: "bg-[#fdfcda]",
      link:"/testpreparation/sswpreparation",
    },
    {
      icon: "/images/Translation.png",
      title: "IELTS Preparation",
      paragraph: "Intensive IELTS preparation programs focusing on the four key skills tested in the exam, with personalized feedback and practice tests to ensure success.",
      image: "/images/testpreparation/ielts.png",
      color: "bg-[#fddada]",
      link:"/testpreparation/ielts",

    },
    {
      icon: "/images/Translation.png",
      title: "PTE Preparation",
      paragraph: "Targeted GRE preparation courses that cover verbal reasoning, quantitative reasoning, and analytical writing, helping students to excel in their graduate school applications.",
      image: "/images/testpreparation/pte.jpg",
      color: "bg-[#dae9fd]",
      link:"/testpreparation/pte",
    },
    
    
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="relative">
        <Breadcrumbs />
        <HeroSection imageSrc="/images/testpreparation/exam.webp" title="Test Preparation" />
      </div>
      <div className="text-center max-w-5xl mx-auto py-6 px-4">
        <p className="">
          Japan has become one of the most popular destinations for international students who wish to combine quality education with cultural immersion. Known for its advanced technology, discipline, and academic excellence, Japan offers affordable tuition fees compared to many Western countries.
        </p>
      </div>

      <div className="relative grid grid-cols-1 grid-rows-4 max-w-[80vw] mx-auto mb-6">
        {testPreparation.map((service, index) => (
          <Link href={service.link} key={index
          }>
          <div key={index} className={`flex flex-col items-center rounded-2xl shadow-md m-4 p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300
              ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${service.color}
              `}>
            <div className="w-full md:w-1/2 p-4">
              <Image
                src={service.image}
                alt={service.title}
                width={4160}
                height={2340}
                className=" object-cover rounded-2xl"
                />
            </div>
            <div className="w-full flex flex-col items-center justify-center md:w-1/2 p-4">
              <div className=" mb-4 ">
                <Image src={service.icon} alt={`${service.title} Icon`} className="w-12 h-12 mr-4"
                  width={1080}
                  height={720} />
              </div>
              <h5 className="bg-purple-300 w-full flex justify-center px-auto py-2 text-white cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:shadow-xl hover:outline-1 hover:ring-2 ring-1 ring-purple-400 hover:ring-offset-2 hover:ring-purple-500">{service.title}</h5>
              <p className=" text-justify ">{service.paragraph}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>


    </div>
  )
}
