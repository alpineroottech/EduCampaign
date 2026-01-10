'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const aboutTextOne = `It is a privilege to welcome you to Edu. Campaign Pvt. Ltd., a trusted education consultancy established in 2008.
Since our inception, we have remained committed to guiding students toward academic and professional success
through ethical, transparent, and student-focused services. At Edu. Campaign, we believe education is not just about
earning qualifications, it is a gateway to global opportunities, broader perspectives, and brighter futures.
`;
const aboutTextTwo = `Furthermore, the integrity, ethical counseling, and personalized guidance, enabling students to make confident and
informed decisions about studying abroad will accurately support at every step. We strive to be a trusted bridge
between students and reputable global institutions, guided by honesty, excellence, and long-term success.`;

// const aboutTextThree = `Our mission is to empower Nepalese students with access to world-class education, nurturing them into confident,
// responsible, and globally competitive individuals. Through strategic partnerships with reputable institutions and a
// dedicated team, we strive to turn student aspirations into tangible achievements.`;

// const aboutTextFour = `As we look ahead, our vision remains steadfast: to be a reliable bridge between aspiring students and prestigious
// global institutions while upholding the highest standards of honesty, professionalism, and excellence. We invite you
// to join us in this transformative journey to unlock potential and shape the charismatic career of tomorrow.`;

const backgroundImages = [
  "/images/about-board.png",
  "/images/Career Counselling.png",
  "/images/languageprep.jpg"
];

const AboutSection = () => {

  // const scrollRef = useRef<HTMLDivElement>(null);
  const [bgIndex, setBgIndex] = useState(0);

  // Background image fade transition every 13 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // // Auto-scroll when section enters viewport
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!scrollRef.current) return;
  //     const rect = scrollRef.current.getBoundingClientRect();
  //     if (rect.top < window.innerHeight && rect.bottom > 0) {
  //       if (scrollRef.current.scrollTop < scrollRef.current.scrollHeight - scrollRef.current.clientHeight - 10) {
  //         scrollRef.current.scrollTo({
  //           top: scrollRef.current.scrollHeight,
  //           behavior: "smooth"
  //         });
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="relative py-12 z-10 min-h-[500px] md:min-h-[300px]">
      {/* Background images with fade transition */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="About Us"
            fill
            priority={idx === 0}
            className={`object-cover transition-opacity duration-1000 ${bgIndex === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header text */}
      <div className="relative max-w-7xl px-standard text-justify mx-auto text-white md:h-92 flex flex-col justify-center items-center">
        <div className="relative flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-100 drop-shadow-lg">WELCOME TO EDU. CAMPAIGN</h2>
        </div>

        {/* About text with auto-scroll */}
        {/* ref={scrollRef} */}
        {/* overflow-y-scroll */}
        <p className={`text-lg md:text-xl font-sans text-center mb-2 leading-relaxed`}
          id="about-text-one">
          {aboutTextOne}
        </p>
        <p className={`text-lg md:text-xl font-sans text-center mb-2 leading-relaxed`}
          id="about-text-two">
          {aboutTextTwo}
        </p>
      </div>

    </section>
  );
};

export default AboutSection;
