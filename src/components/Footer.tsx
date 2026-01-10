import Image from "next/image";
import Link from "next/link";
import React from "react";


// Types
interface FooterLink {
    label: string;
    href?: string;
}

interface FooterSection {
    title: string;
    items: FooterLink[];
}

interface Branch {
    country: string;
    city?: string;
    flag?: "jp" | "np" | string;
}

interface FooterProps {
    links?: FooterSection[];
    branches?: Branch[];
    mapEmbedUrl?: string;
    year?: number;
}

// Data
const defaultLinks: FooterSection[] = [
    {
        title: "Quick links",
        items: [
            { label: "Japanese Language Program", href: "/studyabroad/japan/japaneselanguageprogram" },
            { label: "Bekka Program", href: "/studyabroad/japan/bekka" },
            { label: "Specified Skilled Worker I", href: "/testpreparation/sswpreparation?scrollTo=field&tab=ssw1" },
            { label: "Specified Skilled Worker II", href: "/testpreparation/sswpreparation?scrollTo=field&tab=ssw2" },
            { label: "Important Documents to Carry", href: "/services?scrollTo=importantDocs" },

        ],
    },
    {
        title: "Study Abroad",
        items: [
            { label: "Study in Japan", href: "/studyabroad/japan" },
            { label: "Study in Australia", href: "/studyabroad/australia" },
            { label: "Study in UK", href: "/studyabroad" },
            { label: "Study in Canada", href: "/studyabroad" },
            { label: "Study in New Zealand", href: "/studyabroad" },
            { label: "Study in South Korea", href: "/studyabroad" },
        ],
    },
    {
        title: "Test Preparation",
        items: [
            { label: "Japanese Language Preparation", href: "/testpreparation/japaneselanguage" },
            { label: "SSW Preparation", href: "/testpreparation/sswpreparation" },
            { label: "IELTS", href: "/testpreparation/ielts" },
            { label: "PTE", href: "/testpreparation/pte" },
        ],
    },
    {
        title: "Services",
        items: [
            { label: "Career Counselling", href: "/services?scrollTo=careerCounseling" },
            { label: "Language Preparation", href: "/services?scrollTo=languagePreparation" },
            { label: "Interview Assistance", href: "/services?scrollTo=interviewAssistance" },
            { label: "Visa Lodgement", href: "/services?scrollTo=visaLodgment" },
            { label: "Documentation", href:"/services?scrollTo=documentation"},
            { label: "Pre-departure Info", href: "/services?scrollTo=preDeparture" },
        ],
    },
    {
        title: "Important Links",
        items: [
            { label: "Scholarship in Japan", href: "/studyabroad/japan?scrollTo=scholarship" },
            { label: "Visa Process In Japan", href: "/studyabroad/japan?scrollTo=visaprocess" },
            { label: "Scholarship In Australia", href: "/studyabroad/australia?scrollTo=scholarship" },
            { label: "SSW Japan", href: "/testpreparation/sswpreparation" },
        ],
    },
];

const defaultBranches: Branch[] = [
    //{ country: "Japan", city: "Tokyo, Japan", flag: "jp" },
    { country: "Kathmandu, Nepal", city: "Dillibazar-30, Gurjumarga, ", flag: "np" },
];

const socialIcons = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61561121886307&rdid=GPY4zqEK3FPJmPxy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18CEAvqAEo%2F#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/edu.campaign2008/?igsh=eXltZ2E3ODZjNjh3#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/qr/WRRENBMZGHUTJ1",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@edu.campaign2008?_r=1&_t=ZS-923AvV9VHWP",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
        ),
    },


    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: "Viber",
        href: "viber://add?number=818091608830",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.971-1.084 1.397-1.58 3.85.323 6.812-.416 7.152-.525.776-.252 5.176-.813 5.89-6.657.733-6.015-.446-9.832-2.048-11.5C19.302.667 15.797.04 11.4 0zm.505 1.945h.054c3.866.011 6.592.502 8.04 1.817 1.334 1.456 2.322 4.667 1.772 9.544-.6 5.04-4.182 5.203-4.818 5.396-.29.09-2.882.737-6.153.477 0 0-2.436 2.94-3.197 3.705-.12.12-.26.167-.352.145-.13-.033-.167-.188-.165-.414l.02-4.016c-.001 0-.001 0 0 0-4.758-1.332-4.46-6.287-4.404-8.82.056-2.535.567-4.656 1.977-6.193C6.6 1.677 10.123 1.96 11.905 1.945z" />
                <path fill="white" d="M7.5 6C7.2 6 7 6.2 7 6.5L7 7C7 7.1 7 7.2 7.1 7.3L10.8 15.3C10.9 15.5 11.1 15.6 11.3 15.7C11.4 15.7 11.5 15.8 11.7 15.8C11.8 15.8 12 15.8 12.1 15.7C12.3 15.6 12.5 15.5 12.6 15.3L16.3 7.3C16.4 7.2 16.4 7.1 16.4 7L16.4 6.5C16.4 6.2 16.2 6 15.9 6C15.7 6 15.5 6.1 15.4 6.3L11.7 14.3L8 6.3C7.9 6.1 7.7 6 7.5 6Z" />
            </svg>
        ),
    },
    {
        label: "X",
        href: "https://x.com/EduCampaign2008?t=iy5WkRfku9hWtwD3iFhesw&s=08",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },

];

// Components
const ChevronIcon = () => (
    // <svg className="w-3 h-3 text-white/60 flex-shrink-0" viewBox="0 0 16 16" fill="none">
    //     <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    // </svg>
    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.56 0.533C1.077 0.038 1.9 -0.18 2.683 0.175L15.25 5.754C16.583 6.419 16.583 8.381 15.25 9.046L2.683 14.625C1.9 14.98 1.077 14.762 0.56 14.267C0.036 13.765 -0.205 12.927 0.212 12.142L2.602 7.695C2.699 7.511 2.699 7.289 2.602 7.105L0.212 2.658C-0.205 1.873 0.036 1.035 0.56 0.533ZM1.346 1.344C1.14 1.54 1.074 1.826 1.215 2.099L3.605 6.546C3.89 7.102 3.89 7.698 3.605 8.254L1.215 12.701C1.074 12.974 1.14 13.26 1.346 13.456C1.557 13.656 1.886 13.742 2.227 13.584L14.794 8.005C15.339 7.761 15.339 7.039 14.794 6.795L2.227 1.216C1.886 1.058 1.557 1.144 1.346 1.344Z" fill="white" stroke="white" strokeWidth="0.5" />
    </svg>

);

const Flag: React.FC<{ flag?: string }> = ({ flag }) => {
    if (flag === "jp") {
        return (
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-red-500" />
            </div>
        );
    }

    if (flag === "np") {
        return (
            <Image src={"/images/countries/flag/nepalflag.png"} className="w-8 h-8 rounded-full" width={8} priority={false} height={8} alt="Nepal's flag" />
        );
    }

    return <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />;
};


const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-white mb-4"> {section.title} </h3>
            <ul className={`space-y-3`}>
                {section.items.map((item, index) => (
                    <li key={index}
                        className="break-inside-avoid flex items-center-safe gap-2">
                        <ChevronIcon />
                        <a href={item.href || "#"}
                            className="text-sm text-white hover:font-semibold transition-colors">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};


// Main Footer Component
const Footer: React.FC<FooterProps> = ({
    links = defaultLinks,
    branches = defaultBranches,
    mapEmbedUrl,
    year,
}) => {
    const displayYear = year ?? new Date().getFullYear();

    return (
        <footer className="relative w-full bg-[#b884c9]">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* First Row: 4 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {links.slice(0, 4).map((section, index) => (
                        <div key={index}>
                            <FooterSection section={section} />
                        </div>
                    ))}
                </div>

                {/* Second Row: Important Links + Branches + Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Important Links */}
                    {links[4] && (
                        <div>
                            <FooterSection section={links[4]} />
                        </div>
                    )}

                    {/* Branches */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Head Office</h3>
                        <ul className="space-y-4">
                            <p className="text-white text-sm font-bold">Edu. Campaign Pvt. Ltd.</p>
                            {branches.map((branch, index) => (
                                <li key={index} className="flex items-center ">

                                    <div>
                                        {branch.city && (
                                            <div className="text-white text-sm">{branch.city}</div>
                                        )}
                                        <div className="text-white text-sm ">{branch.country}</div>
                                    </div>
                                </li>
                            ))}
                            <Link href="/about">
                                <p className="text-white text-sm">Contact Us</p>
                            </Link>

                        </ul>
                    </div>

                    {/* Our Location - spans 2 columns */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-1">Our Location</h3>

                        {mapEmbedUrl ? (
                            <iframe
                                src={mapEmbedUrl}
                                title="Our Location Map"
                                aria-label="Our Location Map"
                                className="w-full h-48 md:h-56 lg:h-64 rounded-lg"
                                loading="lazy"
                                style={{ border: 0 }}
                            />
                        ) : (
                            <svg viewBox="0 0 200 130" className="w-full h-48 md:h-56 lg:h-64 rounded-lg" aria-hidden="true">
                                <rect width="200" height="130" rx="16" fill="#e5e7eb" />
                                <path d="M20 30c20 5 40 0 60-10s40-15 60 0 40 20 60 10" stroke="#c4b5fd" strokeWidth="4" fill="none" />
                                <circle cx="120" cy="60" r="12" fill="#ef4444" />
                                <circle cx="120" cy="60" r="5" fill="#fff" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Quote & Social Bar */}
            {/* suggest tailwind class for below bg gradient from 7937c4 to 292939 */}
            <div className="py-4 bg-gradient-to-r from-[#7937c4] to-[#5d4b9f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">

                    {/* Social icons */}
                    <div className="flex items-center justify-center w-full md:w-auto">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl bg-white/10 border border-white/20 shadow-sm backdrop-blur-md">
                            <span className="text-white font-semibold text-sm mr-2 whitespace-nowrap">Get In Touch With Us :</span>
                            <div className="flex flex-wrap gap-2">
                                {socialIcons.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="p-2 rounded-full bg-white/0 hover:bg-white/30 focus:bg-white/40 transition-colors outline-none focus:ring-2 focus:ring-white/50"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="block w-6 h-6 text-white">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="w-full md:w-auto text-center md:text-left">
                        <div className="text-white text-sm">
                            © {displayYear} Education Campaign Pvt. Ltd.
                        </div>
                    </div>
                </div>
            </div>




            {/* Floating Chat Button */}
            {/* <button
                aria-label="Open chat"
                className="fixed right-6 bottom-6 bg-white text-[#b884c9] rounded-full p-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
            </button> */}
        </footer>
    );
};

export default Footer;