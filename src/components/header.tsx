import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu after selection
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "how-it-works",
        "testimonials",
        "pricing",
        "faq",
      ];

      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check for active section
    handleScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "features", label: "Key Features", href: "#features" },
    { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "pricing", label: "Pricing", href: "#pricing" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 md:px-12 bg-white shadow-md">
      {/* Logo */}
      <div className="text-[#40b8a6] font-serif italic text-2xl">
        <Link href="/">MoveIt</Link>
      </div>

      {/* Desktop Navigation - with improved spacing */}
      <div className="hidden md:flex items-center justify-end w-full">
        {/* Nav Links with more space */}
        <nav className="flex items-center mr-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`font-medium transition-colors px-3 py-2 mx-1 ${
                activeSection === item.id
                  ? "text-[#40b8a6] border-b-2 border-[#40b8a6]"
                  : "hover:text-[#40b8a6]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons with spacing */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-[#40b8a6] text-white px-4 py-2 rounded-full font-medium border-2 border-[#40b8a6] hover:bg-[#359e8d] hover:shadow-[#9DD9D0]/40 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-transparent text-[#40b8a6] px-4 py-2 rounded-full font-medium border-2 border-[#40b8a6] hover:bg-[#e7f9f6] transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#40b8a6] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`py-3 px-6 font-medium ${
                  activeSection === item.id
                    ? "text-[#40b8a6] bg-[#f7fcfb]"
                    : "hover:text-[#40b8a6] hover:bg-[#f7fcfb]"
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-3 px-6 py-3">
              <Link
                href="/login"
                className="bg-[#40b8a6] text-white px-4 py-2 rounded-full font-medium border-2 border-[#40b8a6] hover:bg-[#359e8d] text-center"
                onClick={closeMenu}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-transparent text-[#40b8a6] px-4 py-2 rounded-full font-medium border-2 border-[#40b8a6] hover:bg-[#e7f9f6] text-center"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
