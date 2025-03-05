import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F0FFFD]  to-[#edfbfa] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[700px]">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
          className="absolute -right-20 -top-20 w-[450px] h-[470px] bg-[#E1FFFA] rounded-full blur-[30px] lg:blur-[0px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-48 top-17 w-[400px] h-[400px] bg-[#9DD9D0] rounded-full blur-[20px] lg:blur-[0px]"
        />

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/4 bottom-1/4 w-24 h-24 rounded-full bg-[#40b8a6] hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute left-10 top-20 w-32 h-32 rounded-full border-4 border-[#9DD9D0] hidden lg:block"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text content */}
          <div className="space-y-8 pt-8 md:pt-12 order-2 lg:order-1">
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="bg-[#e7f9f6] text-[#40b8a6] px-4 py-2 rounded-full inline-block mb-4"
              >
                <span className="font-medium">
                  Trusted by 4500+ professionals
                </span>
              </motion.div>

              <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-black">Better </span>
                <span className="text-[#40b8a6]">Task</span>
                <br />
                <span className="text-[#40b8a6]">Management </span>
                <span className="text-black">Starts</span>
                <br />
                <span className="text-black">With </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-[#40b8a6] font-serif italic relative inline-block"
                >
                  MoveIt
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.4, duration: 0.7 }}
                    className="absolute -bottom-1 left-0 h-[6px] bg-[#e7f9f6] rounded-full"
                  />
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg max-w-lg mt-6 hidden md:block"
            >
              Streamline your workflow, collaborate seamlessly, and accomplish
              more in less time with our intuitive task management platform.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-6 md:pt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/get-started"
                className="inline-flex items-center bg-[#40b8a6] text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg shadow-[#9DD9D0]/30 hover:bg-[#359e8d] hover:shadow-[#9DD9D0]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                  }}
                  className="ml-2 text-xl"
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center bg-transparent text-[#40b8a6] border-2 border-[#40b8a6] px-6 py-[14px] rounded-full font-medium text-lg hover:bg-[#e7f9f6] transition-colors"
              >
                Watch Demo
              </Link>
            </motion.div>

            {/* Social proof - visible on mobile */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mt-8 lg:hidden"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs text-gray-600 font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> from 1200+ reviews
              </span>
            </motion.div>
          </div>

          {/* Image and stat elements */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
            {/* Stats bubbles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-0 right-0 bg-white px-5 py-3 rounded-full shadow-lg z-20 flex items-center gap-3 transform hover:scale-105 transition-transform"
            >
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="font-bold text-lg"
                >
                  4500+
                </motion.span>
                <div className="text-sm text-gray-500">Users</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-32 right-0 bg-white px-5 py-3 rounded-full shadow-lg z-20 flex items-center gap-3 transform hover:scale-105 transition-transform"
            >
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="font-bold text-lg"
                >
                  6000+
                </motion.span>
                <div className="text-sm text-gray-500">Tasks</div>
              </div>
            </motion.div>

            {/* New stat bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-32 left-0 bg-white px-5 py-3 rounded-full shadow-lg z-20 items-center gap-3 transform hover:scale-105 transition-transform hidden lg:flex"
            >
              <div className="p-2 bg-[#e7f9f6] rounded-full">
                <svg
                  className="h-5 w-5 text-[#40b8a6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="font-bold text-lg"
                >
                  98%
                </motion.span>
                <div className="text-sm text-gray-500">Faster</div>
              </div>
            </motion.div>

            {/* Hero image with glow effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 right-0 w-full h-full flex justify-center lg:justify-end items-center"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-[#9DD9D0]/20 rounded-full blur-lg"></div>

                <div className="relative z-10">
                  <Image
                    src="/heroImage.png"
                    alt="Professional at desk with laptop"
                    width={500}
                    height={500}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom social proof - visible on desktop */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 hidden lg:flex items-center justify-between border-t border-gray-200 pt-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                >
                  <span className="text-xs text-gray-600 font-medium">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-gray-600">
              <span className="font-semibold">4.9/5</span> from 1200+ reviews
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-[#e7f9f6] rounded-full">
                <svg
                  className="h-4 w-4 text-[#40b8a6]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Easy setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-[#e7f9f6] rounded-full">
                <svg
                  className="h-4 w-4 text-[#40b8a6]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Free for 14 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-[#e7f9f6] rounded-full">
                <svg
                  className="h-4 w-4 text-[#40b8a6]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">No credit card</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
