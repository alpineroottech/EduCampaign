import { ReactNode } from "react";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  icon: string; // Path to icon image
  image: string; // Featured image
  description: string[]; // Paragaphs
}

export const servicesData: ServiceDetail[] = [
  {
    id: "1",
    slug: "career-counseling",
    title: "Career Counseling",
    icon: "/images/career.png",
    image: "/images/Career Counselling.png",
    description: [
      "Choosing the right career path and study destination is a crucial step toward a successful future. We ensure from career guidance to course giving you the clarity and confidence to make informed choices. Our expert counselors help you explore comprehensive career counseling, educational and professional guidance to help you to identify your interests, and aspirations.",
      "At Edu. Campaign Pvt. Ltd., we believe that choosing the right path for your education is more than just picking a course or a university—it’s about shaping your future. Our comprehensive counseling services are designed to guide you through every step of this life-changing journey, making the process simple, transparent, and tailored to your goals.",
      "We begin by deeply understanding your strengths, interests, and career ambitions through one-on-one sessions. Our experienced counselors carefully assess your academic background, skills, and long-term goals to recommend the best field of study and courses that will help you excel academically and grow professionally.",
      "Whether your passion lies in technology, medicine, business, arts, or emerging fields like AI and robotics, we offer personalized guidance tailored to your aspirations. We map your potential to global opportunities, ensuring that your choice of study aligns with market trends and future employability.",
      "Choosing the right country for your education is also a critical decision. Our experts evaluate various options based on education quality, cultural environment, language, lifestyle, research opportunities, and career prospects. Once your preferred country is selected, we assist you in finding the university that best matches your goals by providing detailed insights into accreditation, faculty expertise, campus facilities, and alumni success.",
      "Beyond academics, we provide career counseling after course completion to help you navigate job markets, internships, professional growth, and further studies—ensuring you have a holistic roadmap for success."
    ]
  },
  {
    id: "2",
    slug: "language-preparation",
    title: "Language Preparation",
    icon: "/images/Learning.png",
    image: "/images/langyage.png",
    description: [
      "Language proficiency is the key to unlocking global opportunities. Our Language Preparation classes focus on building strong reading, writing, listening, and speaking skills for effective communication in an academic or professional setting.",
      "We offer specialized coaching for standardized tests required for studying abroad:",
      "• JLPT & NAT (Japanese): Essential for students aiming to study in Japan, focusing on grammar, vocabulary, and kanji mastery.",
      "• IELTS & PTE (English): Intensive preparation covering all four modules to ensure you meet the entry requirements for universities in Australia, Canada, USA, and UK.",
      "Our classes are led by experienced instructors who use interactive methods, mock tests, and personalized feedback to track your progress. We provide comprehensive study materials and practice sessions to boost your confidence and ensure you achieve your target scores."
    ]
  },
  {
    id: "3",
    slug: "interview-assistance",
    title: "Interview Assistance",
    icon: "/images/Learning.png",
    image: "/images/interview.jpg",
    description: [
      "Facing an interview—whether for university admission or a visa—can be daunting. Our Interview Assistance program is designed to help candidates showcase their skills, intent, and confidence effectively.",
      "We provide targeted training that covers:",
      "• Mock Interviews: Simulated interview sessions that mimic real-life scenarios to reduce anxiety and improve performance.",
      "• Question Analysis: Understanding the intent behind common questions and framing clear, concise, and honest answers.",
      "• Body Language & Etiquette: Tips on maintaining professional composure, eye contact, and tone.",
      "• Research Skills: Guiding you on how to research the university or country to demonstrate genuine interest.",
      "Educational campaigns enhance this process by providing expert guidance and interactive coaching, empowering individuals with polished communication and composure to succeed in even the most competitive interview settings."
    ]
  },
  {
    id: "4",
    slug: "visa-lodgment",
    title: "Visa Lodgment",
    icon: "/images/password.png",
    image: "/images/password.png",
    description: [
      "Visa lodgment is the formal process of submitting a visa application to the relevant immigration authority. It is often the most complex part of the study abroad journey, involving strict deadlines and precise documentation.",
      "Edu. Campaign plays a key role by guiding applicants through the entire cycle:",
      "• Document Verification: We meticulously check your academic records, financial proofs, and identification documents to ensure they meet the specific requirements of the destination country.",
      "• Form Filing: Assistance with filling out complex visa application forms accurately to avoid errors that could lead to rejection.",
      "• SOP/GTE Assistance: Helping you draft a compelling Statement of Purpose (SOP) or Genuine Temporary Entrant (GTE) statement that clearly articulates your study goals.",
      "• Submission & Tracking: We handle the submission process and keep you updated on the status of your application.",
      "Our expertise ensures compliance with procedural updates and immigration policies, significantly improving the likelihood of a successful visa outcome."
    ]
  },
  {
    id: "5",
    slug: "documentation",
    title: "Documentation",
    icon: "/images/documents/visadocs.png",
    image: "/images/service-1.webp",
    description: [
      "Documentation is the backbone of your application process. Organizing essential records, supporting proofs, and relevant papers is critical for a smooth experience. Edu. Campaign assists by providing guidance, verifying accuracy, and ensuring completeness.",
      "Key Documentation Categories:",
      "• Academic Records: Proof of your educational history, including degree certificates, provisional certificates, mark sheets, and transcripts.",
      "• Financial Proof: Evidence of funds to cover tuition and living expenses. This includes bank statements, education loan sanction letters, scholarship letters, and income tax returns.",
      "• Government/Municipality Documents: Identity and residency verification documents such as Passport, Citizenship/National ID, Birth Certificate, and Relationship Certificates.",
      "• Statement of Purpose (SOP): A personal essay (1–2 pages) explaining your background, study plans, career goals, and reasons for choosing specific institution.",
      "• Supporting Documents: Letters of Recommendation (LOR) from professors or employers, work experience certificates, and updated CV/Resume.",
      "• Others: Language proficiency test scores (IELTS/JLPT), medical reports, and police clearance certificates if required."
    ]
  },
  {
    id: "6",
    slug: "pre-departure-info",
    title: "Pre Departure Info",
    icon: "/images/documents/tickets.png",
    image: "/images/service-1.webp",
    description: [
      "With our warm support and dedication, we make sure every item on the pre-departure checklist is thoroughly completed, giving you confidence and peace of mind for a successful journey abroad.",
      "Our Pre-Departure Briefing covers:",
      "1. Accommodation & Essentials: We help students find suitable accommodation and arrange travel insurance. We also provide a list of essentials to carry.",
      "2. Flight & Transit: Detailed information on flight schedules, baggage allowances, transit duration, and airport procedures.",
      "3. Airport & Immigration Guidance: Advice on arrival procedures, immigration clearance, and pickup arrangements. Students are advised to arrive 2–3 hours early.",
      "4. Packing Checklist: A comprehensive list of clothing, medicines, adapters, and personal items. We also highlight prohibited items to avoid customs issues.",
      "5. Cultural Adaptation: Insights into the local culture, etiquette, and laws of your destination country to help you adapt quickly.",
      "6. Financial Preparation: Guidance on carrying currency (Forex card vs Cash), opening a bank account abroad, and managing monthly expenses (carry at least 2–3 months' worth).",
      "7. Academic Expectations: Briefing on the education system, attendance rules, and maintaining academic integrity."
    ]
  },
  {
    id: "7",
    slug: "important-documents",
    title: "Important Documents",
    icon: "/images/documents/importantDocs.png",
    image: "/images/service-1.webp",
    description: [
      "Before you head to the airport, ensure you have your document folder ready and accessible (in your carry-on luggage).",
      "Must-Carry Documents:",
      "• Original Passport with valid Student Visa",
      "• Flight Tickets and Itinerary",
      "• University Offer Letter and ECOE (Electronic Confirmation of Enrolment)",
      "• Original Academic Documents and English Proficiency Scores",
      "• Proof of Accommodation and Airport Pickup details",
      "• Evidence of Financial Support (Drafts, Forex Card, Cash)",
      "• Travel Insurance Policy",
      "• Emergency Contact Numbers (University, Embassy, Agent)",
      "Tip: Keep digital copies of all these documents in your email or cloud storage for emergency access."
    ]
  }
];
