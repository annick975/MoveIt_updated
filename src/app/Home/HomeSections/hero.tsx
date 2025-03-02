import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#f8fdfe] py-16 px-6 md:px-12 overflow-hidden min-h-[700px]">
      {/* Large background ellipse */}
      <div className="absolute right-0 top-0 w-[450px] h-[470px] bg-[#E1FFFA] rounded-full translate-x-1/8 -translate-y-1/8"></div>
      {/* Smaller background ellipse */}
      <div className="absolute right-48 top-17 w-[400px] h-[400px] bg-[#9DD9D0] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 pt-12">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-black">Better </span>
              <span className="text-[#40b8a6]">Task</span>
              <br />
              <span className="text-[#40b8a6]">Management </span>
              <span className="text-black">Starts</span>
              <br />
              <span className="text-black">With </span>
              <span className="text-[#40b8a6] font-serif italic">MoveIt</span>
            </h1>
            <div className="pt-8">
              <Link
                href="/get-started"
                className="inline-flex items-center bg-[#e7f9f6] text-[#40b8a6] px-8 py-4 rounded-full font-medium text-xl hover:bg-[#d7f5f0] transition-colors"
              >
                Get Started
                <span className="ml-2 text-2xl">→</span>
              </Link>
            </div>
          </div>

          <div className="relative h-[600px]">
            {/* Stats bubbles */}
            <div className="absolute top-0 right-0 bg-white px-6 py-3 rounded-full shadow-lg z-20 flex items-center gap-3">
              <div className="bg-black p-2 rounded-full">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg">4500+</span>
                <div className="text-sm text-gray-500">Users</div>
              </div>
            </div>

            <div className="absolute bottom-32 right-0 bg-white px-6 py-3 rounded-full shadow-lg z-20 flex items-center gap-3">
              <div className="p-2 border-2 border-black rounded">
                <svg
                  className="h-5 w-5 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg">6000+</span>
                <div className="text-sm text-gray-500">Tasks</div>
              </div>
            </div>

            {/* Hero image */}
            <div className="absolute bottom-0 right-0 pl-36 z-10 w-full h-full">
              <Image
                src="/heroImage.png"
                alt="Professional at desk with laptop"
                width={500}
                height={500}
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
