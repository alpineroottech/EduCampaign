"use client";
import {
  MailIcon,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

import email from "@/public/images/studyabroad/icons/email.png";

const useScrollDirection = () => {
  const [scrollUp, setScrollUp] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      // Keep navbar visible when near the top to avoid showing empty spacer
      setScrollUp(currentScrollY < lastScrollY || currentScrollY < 120);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return scrollUp;
};

interface NavDropdownItem {
  href: string;
  label: string;
  disabled?: boolean;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: NavDropdownItem[];
}

const Header = () => {
  const scrollUp = useScrollDirection();
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMobile = () => {
    setIsMobileActive((prev) => !prev);
    setOpenMobileDropdown(null); // Close any open dropdowns when toggling menu
  };

  const toggleMobileDropdown = (href: string) => {
    setOpenMobileDropdown(openMobileDropdown === href ? null : href);
  };

  //close mobile menu on route change
  useEffect(() => {
    setIsMobileActive(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileActive) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileActive]);

  const navLinks: NavLink[] = [
    { href: "/about", label: "About Us" },
    {
      href: "/studyabroad", label: "Study Abroad", dropdown: [
        { href: "/studyabroad/japan", label: "Study in Japan", disabled: false },
        { href: "/studyabroad/australia", label: "Study in Australia", disabled: false },
        { href: "/studyabroad/", label: "Study in UK", disabled: true },
        { href: "/studyabroad/", label: "Study in Canada", disabled: true },
        { href: "/studyabroad/", label: "Study in New Zealand", disabled: true },
        { href: "/studyabroad/", label: "Study in South Korea", disabled: true },
      ]
    },
    {
      href: "/testpreparation", label: "Test Preparation", dropdown: [
        { href: "/testpreparation/japaneselanguage", label: "Japanese Language" },
        { href: "/testpreparation/sswpreparation", label: "SSW Preparation" },
        { href: "/testpreparation/ielts", label: "IELTS" },
        { href: "/testpreparation/pte", label: "PTE" },
      ]
    },
    {
      href: "/services", label: "Services", dropdown: [
        { href: "/services/career-counseling", label: "Career Counselling" },
        { href: "/services/language-preparation", label: "Language Preparation" },
        { href: "/services/interview-assistance", label: "Interview Assistance" },
        { href: "/services/visa-lodgment", label: "Visa Lodgement" },
        { href: "/services/documentation", label: "Documentation" },
        { href: "/services/pre-departure-info", label: "Pre-Departure Info" },
      ]
    },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top info bar - stays visible */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#3d1a4d] text-white text-sm sm:text-base">
        <div className="px-4 sm:px-6 lg:px-12 h-[40px] flex items-center justify-between">
          {/* Left group: phone + message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="tel:+977011234567"
              className="hover:underline underline-offset-4"
            >
              <Phone
                className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <a
              href="tel:+977011234567"
              className="hover:underline underline-offset-2"
            >
              +977 1-4500074
            </a>
            <span className="hidden lg:inline opacity-40">|</span>
            <p className="hidden lg:inline whitespace-nowrap">
              Give Us A Call To Know Details!
            </p>
          </div>

          {/* Right group: social icons.  */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex justify-center items-center h-4 w-4">
              <MailIcon />
            </div>
            <a href="mailto:edu.campaign2008@gmail.com" className="hover:underline underline-offset-2">
              educampaign2008@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Main header - hides on scroll down */}
      <header
        className={`fixed top-[40px] left-0 right-0 z-40 bg-white px-4 sm:px-6 lg:px-12 transition-transform duration-300 ${scrollUp ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex justify-between items-center h-16 sm:h-[69px]">
          {/* Logo */}
          <div className="flex gap-2 sm:gap-4 font-bold text-lg sm:text-2xl items-center" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            <Link href="/">
              <Image
                className="w-12 h-12 sm:w-[69px] sm:h-[69px] bg-transparent"
                src="/logo.jpg"
                width={69}
                height={69}
                alt="Logo"
              />
            </Link>
            <div>
              <Link href={"/"}>
                <h6 className="">EDU. CAMPAIGN</h6>
                <h6 className="text-sm sm:text-base">Pvt. Ltd.</h6>
              </Link>
            </div>
          </div>

          {/* Desktop view of navbar // Desktop Navigation  */}
          <nav className="hidden lg:flex justify-end gap-10 items-center nav-links font-medium">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative group ">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 hover:text-purple-700 transition-colors"
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Invisible bridge to prevent dropdown from disappearing */}
                  <div className="absolute -left-60 right-0 w-140 h-6 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible" />

                  {/* Vertical Dropdown Menu */}
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-2">
                    <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-2 min-w-[220px]">
                      <div className="flex flex-col sub-nav-links">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-100 transition-colors ${item.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                          >
                            <div>{item.label}</div>
                            <svg
                              className="w-4 h-4 text-purple-600 flex-shrink-0 ml-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-purple-700 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger view on mobile devices // Mobile Toggle Button */}
          <div className="lg:hidden flex items-center">
            <Button
              className={
                isMobileActive
                  ? "bg-[#6B4FA1] hover:bg-[#5a3f8a] text-white border-2 border-[#6B4FA1] h-10 w-10"
                  : "bg-white hover:bg-purple-50 text-[#6B4FA1] border-2 border-[#6B4FA1] h-10 w-10"
              }
              aria-label={isMobileActive ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileActive}
              aria-controls="mobile-menu"
              onClick={toggleMobile}
            >
              {isMobileActive ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation -- Only show when menu is Open  */}
        {isMobileActive && (
          <nav
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[calc(100vh-120px)] overflow-y-auto"
            aria-label="Mobile menu"
            ref={menuRef}
            id="mobile-menu"
          >
            <div className="py-3 px-4">
              {navLinks.map((link) => (
                <div key={link.href} className="mb-2">
                  {link.dropdown ? (
                    <div>
                      {/* Parent Link with Dropdown Toggle */}
                      <div
                        className={`flex items-center rounded-lg overflow-hidden ${openMobileDropdown === link.href ? "bg-purple-50" : ""
                          }`}
                      >
                        <Link
                          href={link.href}
                          className={`flex-1 px-4 py-3 transition-colors ${pathname === link.href
                            ? "text-[#6B4FA1] font-medium"
                            : "text-gray-700"
                            }`}
                          onClick={() => {
                            setIsMobileActive(false);
                            setOpenMobileDropdown(null);
                          }}
                        >
                          {link.label}
                        </Link>
                        <button
                          className="px-4 border rounded-xl  py-3 hover:bg-purple-100 transition-colors"
                          onClick={() => toggleMobileDropdown(link.href)}
                          aria-label={`Toggle ${link.label} submenu`}
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === link.href
                              ? "rotate-180 text-[#6B4FA1]"
                              : "text-gray-400"
                              }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile Dropdown Items */}
                      {openMobileDropdown === link.href && (
                        <div className="mt-1 ml-2 space-y-1">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className={`flex items-center justify-between px-4 py-2.5 rounded-md text-sm transition-colors ${item.disabled
                                ? "text-gray-400 cursor-not-allowed pointer-events-none bg-gray-50"
                                : "text-gray-600 hover:bg-purple-50 hover:text-[#6B4FA1]"
                                }`}
                              onClick={() => {
                                if (!item.disabled) {
                                  setIsMobileActive(false);
                                  setOpenMobileDropdown(null);
                                }
                              }}
                            >
                              <span>{item.label}</span>
                              {!item.disabled && (
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className={`block px-4 py-3 rounded-lg transition-colors ${pathname === link.href
                        ? "bg-[#6B4FA1] text-white"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                      href={link.href}
                      onClick={() => {
                        setIsMobileActive(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </header>
      {/* Spacers to prevent content from being hidden under the fixed header */}
      <div className="h-[34px]" />
      <div className="h-16 sm:h-[69px]" />
    </>
  );
};

export default Header;
