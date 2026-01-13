import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socialIcons } from "@/data/socialData";


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
            { label: "Services", href: "/services" },
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Gallery", href: "/gallery" },
            { label: "Important Documents", href: "/services?scrollTo=importantDocs" },
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
];

const defaultBranches: Branch[] = [
    //{ country: "Japan", city: "Tokyo, Japan", flag: "jp" },
    { country: "Kathmandu, Nepal", city: "Dillibazar-30, Gurjumarga, ", flag: "np" },
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
            <h3 className="text-base font-semibold text-white mb-3">{section.title}</h3>
            <ul className="space-y-2">
                {section.items.map((item, index) => (
                    <li key={index}>
                        <a 
                            href={item.href || "#"}
                            className="text-sm text-white/70 hover:text-white transition-colors"
                        >
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
        <footer className="relative w-full bg-[#3d1a4d]">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-standard py-12">
                {/* Unified Desktop Grid: Links + Contact + Map */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
                    {/* Render Links Columns */}
                    {links.map((section, index) => (
                        <div key={index} className="col-span-1">
                            <FooterSection section={section} />
                        </div>
                    ))}

                    {/* Head Office Info - takes 1 column on desktop */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-base font-semibold text-white mb-3">Head Office</h3>
                        <p className="text-white/90 text-sm font-medium mb-1">Edu. Campaign Pvt. Ltd.</p>
                        {branches.map((branch, index) => (
                            <div key={index} className="text-white/70 text-sm">
                                {branch.city && <span className="block">{branch.city}</span>}
                                {branch.country && <span className="block">{branch.country}</span>}
                            </div>
                        ))}
                        <Link href="/contact" className="inline-block mt-3 text-white/90 text-sm hover:text-white transition-colors border-b border-white/20 pb-0.5">
                            Contact Us →
                        </Link>
                    </div>

                    {/* Map Preview - Compact Thumbnail */}
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-base font-semibold text-white mb-3">Location</h3>
                        <div className="flex items-start">
                            {mapEmbedUrl ? (
                                <iframe
                                    src={mapEmbedUrl}
                                    title="Our Location Map"
                                    aria-label="Our Location Map"
                                    className="w-[250px] h-[200px] rounded-lg shadow-lg bg-white/5"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                />
                            ) : (
                                <div className="w-[80px] h-[80px] rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                                    <div className="text-center text-white/60 text-xs">
                                        <svg className="w-5 h-5 mx-auto mb-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Map
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Social & Copyright Bar */}
            <div className="py-4 bg-[#2a1136] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-standard flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        <span className="text-white/70 text-sm hidden sm:inline">Follow us:</span>
                        <div className="flex items-center gap-1">
                            {socialIcons.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="block w-5 h-5">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-white/60 text-sm">
                        © {displayYear} Education Campaign Pvt. Ltd.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;