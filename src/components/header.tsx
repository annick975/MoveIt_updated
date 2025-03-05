import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-white">
      <div className="text-[#40b8a6] font-serif italic  text-2xl">
        <Link href="/">MoveIt</Link>
      </div>
      <nav className="flex space-x-6 items-center ">
        <Link
          href="/"
          className="hidden md:block font-medium hover:text-[#40b8a6]"
        >
          Home
        </Link>
        <Link
          href="/features"
          className="hidden md:block font-medium hover:text-[#40b8a6]"
        >
          Features
        </Link>
        <Link
          href="/resources"
          className="hidden md:block font-medium hover:text-[#40b8a6]"
        >
          Resources
        </Link>
        <Link
          href="/login"
          className="bg-[#40b8a6] text-white px-4 py-2 rounded-full font-medium  border-2 border-[#40b8a6] hover:bg-[#359e8d] hover:shadow-[#9DD9D0]/40"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="bg-transparent text-[#40b8a6] px-4 py-2 rounded-full font-medium  border-2 border-[#40b8a6]  hover:bg-[#e7f9f6] transition-colors"
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
