import Image from "next/image";
import React from "react";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    avatarSrc: string; // place avatar images under /public/images/avatars/
    rating: 1 | 2 | 3 | 4 | 5;
    quote: string;
};

const Star = ({ filled }: { filled: boolean }) => (
    <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className={`h-5 w-5 ${filled ? "fill-purple-900" : "fill-purple-200"}`}
    >
        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.97 5.06 16.7 6 11.2 2 7.31l5.53-.8L10 1.5z" />
    </svg>
);

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => {
    const { name, role, avatarSrc, rating, quote } = t;

    return (
        <div className="">
            {/* Top accent line */}
            <div className={"top-0 h-1 w-16 bg-purple-900"} aria-hidden="true" />

            <article
                className="relative flex h-full flex-col bg-white shadow-2xl"
                aria-label={`Testimonial from ${name}`}
            >

                <div className="px-6 pt-4 h-72">
                    {/* Rating */}
                    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} filled={i < rating} />
                        ))}
                        <span className="sr-only">{rating} out of 5 stars</span>
                    </div>

                    {/* Quote - Scrollable without visible scrollbar */}
                    <div 
                        className="mt-8 leading-7 overflow-y-auto h-[calc(100%-3rem)] scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none', /* Firefox */
                            msOverflowStyle: 'none', /* IE and Edge */
                        }}
                    >
                        <p>{quote}</p>
                        <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none; /* Chrome, Safari, Opera */
                            }
                        `}</style>
                    </div>
                </div>

                {/* Footer bar */}
                <div className={`mt-auto flex items-center gap-3 px-6 py-4 bg-[#b884c9]`}>
                    <Image
                        src={avatarSrc}
                        alt={`${name} avatar`}
                        width={40}
                        height={40}
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="text-white">
                        <div className="text-sm font-semibold">{name}</div>
                        <div className="text-xs opacity-90">{role}</div>
                    </div>
                </div>
            </article>
        </div>

    );
};

const testimonials: ReadonlyArray<Testimonial> = [
    {
        id: "1",
        name: "Biraj Tiwari",
        role: " Australia",
        avatarSrc: "/images/people/birajtiwari.png",
        rating: 5,
        quote:
            "Edu. Campaign guided me in choosing the best university in Australia according to my goals. Their assistance with applications, visa, and scholarships made the whole process stress-free.",
    },
    {
        id: "2",
        name: "Manjari Silwal",
        role: "Japan",
        avatarSrc: "/images/people/manjarisilwal.png",
        rating: 4,
        quote:
            "I always dreamt of studying in Japan, but the process seemed complicated. With Edu. Campaign's guidance, I received my COE and admission without stress. Life in Osaka has been amazing so far.",
    },
    {
        id: "3",
        name: "Bhawana Dahal",
        role: "Japan",
        avatarSrc: "/images/about-board.png",
        rating: 5,
        quote:
            "The counseling I received was personalized and practical. The team guided me in choosing the right Japanese language school, and even after my arrival, they kept in touch. I am grateful for their genuine care.",
    },
    {
        id: "4",
        name: "Saurab Bhatta",
        role: "UK",
        avatarSrc: "/images/people/saurabbhatta.png",
        rating: 5,
        quote:
            "Choosing Edu. Campaign was the best decision. They helped me with university selection, visa filing, and even accommodation guidance. Life in the UK has been rewarding, and I owe much of it to their assistance.",
    },
];

const Testimonials = () => {
    return (
      <section
        className="relative max-w-7xl mx-auto pt-6 md:pt-10 "
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-4 md:mb-6 ">
            <h2 id="testimonials-heading" className="">
              Testimonials
            </h2>
            <p className="mt-4 px-2">
              From challenges to achievements, every student&apos;s story is
              important. Curious about students&apos; experience here?
              Don&apos;t just take our word for it—hear it straight from the
              students themselves!
            </p>
          </header>

          <section className="py-12">
            <div className="px-standard mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={index % 2 === 1 ? "lg:mt-22" : ""}
                  >
                    <TestimonialCard t={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    );
};

export default Testimonials;