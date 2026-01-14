import React from 'react'
import Image from "next/image";
import { University } from 'lucide-react';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';

interface University {
  name: string;
  description: string;
  image: string;
  button: string;
}
export default function UniversityProgram() {

  const universities: University[] = [
    {
      name: "​Kyoto Minsai Japanese Language School",
      description: "This school offers a long-term course that provides students with the opportunity to learn Japanese for one to two years. It also assists students with choosing a desired course at a Japanese university or vocational school.",
      image: "/images/university.png",
      button: "View Websites",
    },
    {
      name: "​Kyoto Minsai Japanese Language School",
      description: "This school offers a long-term course that provides students with the opportunity to learn Japanese for one to two years. It also assists students with choosing a desired course at a Japanese university or vocational school.",
      image: "/images/university.png",
      button: "View Websites",
    },
    {
      name: "​Kyoto Minsai Japanese Language School",
      description: "This school offers a long-term course that provides students with the opportunity to learn Japanese for one to two years. It also assists students with choosing a desired course at a Japanese university or vocational school.",
      image: "/images/university.png",
      button: "View Websites",
    },
    {
      name: "​Kyoto Minsai Japanese Language School",
      description: "This school offers a long-term course that provides students with the opportunity to learn Japanese for one to two years. It also assists students with choosing a desired course at a Japanese university or vocational school.",
      image: "/images/university.png",
      button: "View Websites",
    },
  ];

  return (
    <div className=" ">
      {/* Hero Section - Figma accurate */}
      <div className="">
        <Breadcrumbs />
        <div className="relative h-[350px] grid grid-cols-6 grid-rows-1 ">

          <div className="grid col-span-1 row-span-1 h-full bg-[#ebe9e1] items-center">
            <div className="absolute z-20 ml-8 bg-gradient-to-r from-white/80 to-white/10 p-15 border-l-10 border-l-[#df5252] shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
              <h2 className=" text-gray-900">University Program</h2>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            width={1220}
            height={400}
            alt="SSW Preparation Hero"
            className="  grid col-span-5 h-full w-full object-cover"
          />
        </div>
        <div className="text-center max-w-5xl mx-auto py-8 md:py-12 px-4">
          <h2 className="text-4xl font-bold text-gray-800">University Programs</h2>
          <p className="text-gray-600 font-light mt-5">
            If you’re planning to study abroad and need expert support to navigate
            choices, applications, and career planning, Edu. Campaign Pvt. Ltd. is here to guide you. We make the visa process straightforward with step-by-step assistance and provide professional help with all documentation. Whether you are
            a student, graduate, or professional, we help you achieve your goals and unlock global opportunities.
          </p>
        </div>
        <div className="border rounded-2xl shadow-lg max-w-5xl mx-auto py-8 px-4 md:px-6">
          <h6 className="font-normal">University Requirements </h6>
          <ul className="list-disc px-6 mt-2">
            <li className="text-gray-600 font-light">Offered by Japan’s Ministry of Education</li>
            <li className="text-gray-600 font-light">Covers full tuition, monthly stipend, and round-trip airfare</li>
            <li className="text-gray-600 font-light">Available for undergraduate, graduate, and research students</li>
            <li className="text-gray-600 font-light">Highly competitive and prestigious</li>
          </ul>
          <p className="text-gray-300 font-bold text-right">Source:  www.afdhsfjkhasd.fsadfsa/casdfads</p>
        </div>


        <div className="grid grid-cols-1 grid-rows-4 max-w-[80vw] mx-auto mb-6">
          {universities.map((service, index) => (
            <div key={index} className={`flex flex-col items-center m-4 p-6 
                          ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                        `}>
              <div className="w-full md:w-1/2 p-4">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={4160}
                  height={2340}
                  className=" object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center md:w-1/2 p-4">
                <h5 className=" w-full flex justify-center px-auto py-2">{service.name}</h5>
                <p className="text-gray-600 text-center font-light">{service.description}</p>
                <button className="bg-purple-400 text-white font-light px-4 py-2 my-3 rounded-2xl hover:bg-purple-700 transition">View Websites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
