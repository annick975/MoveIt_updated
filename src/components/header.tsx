import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-white">
      <div className="text-teal-500 font-cursive text-2xl">
        <Link href="/">MoveIt</Link>
      </div>
      <nav className="flex space-x-6 items-center">
        <Link href="/" className="hidden md:block font-medium">
          Home
        </Link>
        <Link href="/features" className="hidden md:block font-medium">
          Features
        </Link>
        <Link href="/resources" className="hidden md:block font-medium">
          Resources
        </Link>
        <Link
          href="/login"
          className="bg-teal-400 text-white px-4 py-2 rounded-full font-medium"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="bg-gray-100 px-4 py-2 rounded-full font-medium"
        >
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
