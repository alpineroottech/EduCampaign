import { ReactNode } from "react";

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  details: string;
  bgColor: string;
}

export interface MissionVision {
  title: string;
  content: string;
}

export interface WhyUsCard {
  title: string;
  description: string;
  image: string;
}

// Introduction Section
export const introContent = {
  title: "Introduction",
  paragraph: `It is a privilege to welcome you to Edu. Campaign Pvt. Ltd., a trusted education consultancy established in 2008. Since our inception, we have remained committed to guiding students toward academic and professional success through ethical, transparent, and student-focused services. At Edu. Campaign, we believe education is not just about earning qualifications it is a gateway to global opportunities, broader perspectives, and brighter futures.Our philosophy is rooted in integrity and personalized support, helping students make informed decisions about studying abroad. Drawing inspiration from globally renowned universities and best practices in international education consulting, we have built a strong foundation of professionalism, accurate guidance, and ethical counseling.`,
  image: "/images/interview.jpg",
};

// Team Members
export const teamMembers: TeamMember[] = [
  {
    name: "Tanka Nath Dawadi",
    position: "Managing Director",
    image: "/images/people/team/tankanathdawadi.png",
  },
];

// Mission & Vision
export const missionVision: MissionVision[] = [
  {
    title: "Our Mission",
    content: `At the heart of our consultancy lies a commitment to illuminate the educational journeys of our clients. We dedicate ourselves to offering insightful, customized advice that transforms aspirations into achievable pathways. By blending in-depth knowledge with compassionate understanding, we navigate the complexities of academic choices and global opportunities. Our purpose is to empower every learner and institution we serve with clarity, confidence, and access to the resources they need to thrive in an ever-evolving educational landscape.`,
  },
  {
    title: "Our Vision",
    content: `To be a trusted bridge between aspiring students and top global institutions, always upholding honesty, professionalism, and international standards. We strive to guide students so that their potential turns into a bright and successful future. By helping them navigate the wide world of education, we open doors to opportunities and support journeys that shape the leaders, innovators, and change-makers of tomorrow.`,
  },
];

// Why Choose Us Cards (for horizontal scroll section)
export const whyUsCards: WhyUsCard[] = [
  {
    title: "Personalized Counseling",
    description:
      "Edu. Campaign carefully evaluates each student's unique academic background, career aspirations, financial situation, and personal preferences to create a tailored study abroad plan. Rather than following a generic one-size-fits-all approach, our expert counselors take the time to understand your individual goals and constraints.",
    image: "/images/whyus/Personalized Counselling.png",
  },
  {
    title: "Comprehensive Services",
    description:
      "The consultancy provides complete end-to-end support throughout your entire study abroad journey. From initial test preparation for standardized exams (JLPT, NAT, IELTS, PTE, JFT, and more) to scholarship guidance, meticulous documentation assistance, seamless visa processing, travel arrangements, and comprehensive post-departure services.",
    image: "/images/about-board.png",
  },
  {
    title: "Wide Destination Options",
    description:
      "Students can choose from an extensive range of premier study destinations including Australia, Japan, Canada, the United Kingdom, New Zealand, and South Korea. Each destination offers unique educational opportunities, cultural experiences, and career prospects tailored to your aspirations.",
    image: "/images/whyus/wide Destination.png",
  },
  {
    title: "Affordability & Accessibility",
    description:
      "Edu. Campaign is committed to making overseas education accessible to students from all backgrounds. We work diligently to reduce financial and procedural burdens by keeping our service costs reasonable and transparent. Our team simplifies complex application processes, identifies scholarship opportunities, and provides guidance on cost-effective study options.",
    image: "/images/whyus/Affordable.png",
  },
  {
    title: "Post-Arrival Support",
    description:
      "The consultancy provides continuous assistance even after you reach your study destination. We ensure smooth adjustment to your new environment through comprehensive pre-departure briefings, airport reception coordination, accommodation guidance, and local orientation support.",
    image: "/images/whyus/podt_arrival.png",
  },
];
