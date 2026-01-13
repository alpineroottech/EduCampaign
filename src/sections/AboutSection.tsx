'use client';
import { WelcomeCard } from "@/components/ui/WelcomeCard";

const aboutTextOne = `It is a privilege to welcome you to Edu. Campaign Pvt. Ltd., a trusted education consultancy established in 2008. Since our inception, we have remained committed to guiding students toward academic and professional success through ethical, transparent, and student-focused services. At Edu. Campaign, we believe education is not just about earning qualifications—it is a gateway to global opportunities, broader perspectives, and brighter futures.`;

const aboutTextTwo = `Furthermore, the integrity, ethical counseling, and personalized guidance, enabling students to make confident and informed decisions about studying abroad will accurately support at every step. We strive to be a trusted bridge between students and reputable global institutions, guided by honesty, excellence, and long-term success.`;

const AboutSection = () => {
  return (
    <WelcomeCard
      title="Welcome to Edu. Campaign"
      subtitle="Your Gateway to Global Education"
      description={aboutTextOne}
      secondaryDescription={aboutTextTwo}
    />
  );
};

export default AboutSection;
