import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Frank Lampard",
      role: "Student",
      quote:
        "MoveIt has completely transformed how I manage my daily tasks. Simple, fast, and effective!",
      rating: 5,
    },
    {
      id: 2,
      name: "John Terry",
      role: "Founder",
      quote:
        "With MoveIt, my team stays on top of deadlines like never before. Game changer!",
      rating: 5,
    },
    {
      id: 3,
      name: "Cole Palmer",
      role: "Graphic designer",
      quote:
        "I used to struggle with organizing my work, but MoveIt makes it effortless. Highly recommend!",
      rating: 5,
    },
    {
      id: 4,
      name: "Eden Hazard",
      role: "Freelancer",
      quote:
        "Finally, a task manager that's easy to use and actually helps me stay productive!",
      rating: 5,
    },
  ];

  // Helper function to render star ratings using SVG namespace
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <motion.svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </motion.svg>
      ));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const backgroundCircleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 relative overflow-hidden bg-gradient-to-br from-white to-teal-50">
      {/* Decorative SVG Elements */}
      <motion.svg
        className="absolute top-0 right-0 -z-10 w-72 h-72 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <path
          fill="currentColor"
          className="text-teal-500"
          d="M40,-62.3C52.2,-55.3,62.7,-44.5,69.8,-31.4C77,-18.4,80.8,-3.1,78.7,11.2C76.6,25.5,68.5,38.8,57.9,49.1C47.2,59.4,34,66.7,19.3,72.1C4.7,77.5,-11.4,81,-25.6,76.8C-39.8,72.6,-52.1,60.7,-62.8,47.3C-73.5,33.9,-82.7,19,-81.8,4.6C-80.9,-9.7,-70,-22.9,-60,-36.4C-50,-49.9,-41,-63.6,-29.2,-70.5C-17.3,-77.3,-2.7,-77.3,10.8,-73.8C24.4,-70.3,47.8,-63.4,61.1,-53.3C74.5,-43.2,77.8,-29.7,82.1,-15.4C86.5,-1,91.7,14.2,87,25.6C82.3,36.9,67.7,44.4,54.1,51.8C40.6,59.1,28.1,66.3,13.4,74.8C-1.4,83.3,-18.4,93.1,-33,91.2C-47.6,89.3,-59.9,75.7,-70.6,61.1C-81.3,46.6,-90.5,31.2,-91.5,15.3C-92.6,-0.6,-85.6,-16.9,-76.4,-30.5C-67.2,-44.1,-55.8,-55,-42.8,-62.3C-29.8,-69.6,-15.2,-73.2,-0.3,-72.7C14.7,-72.2,29.3,-67.7,40,-62.3Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
      />

      <motion.div
        className="absolute bottom-20 left-0 w-40 h-40 bg-teal-200 rounded-full opacity-20 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.3 }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-40 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.5 }}
      />

      {/* SVG Pattern Backgrounds */}
      <div className="absolute top-20 right-10 opacity-10 -z-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-teal-800"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 opacity-10 -z-10">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="5"
                cy="5"
                r="1"
                fill="currentColor"
                className="text-teal-800"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-teal-800 relative inline-block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
          <motion.div
            className="h-1 w-full bg-teal-400 mt-2 absolute"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        <motion.p
          className="text-teal-600 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          See what our customers have to say about their experience with our
          product.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
        {/* First Column */}
        <div className="space-y-12 md:space-y-20">
          {[testimonials[0], testimonials[2]].map((testimonial, idx) => (
            <motion.div
              className="relative"
              key={testimonial.id}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-teal-300 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
              />
              <div className="relative z-10 bg-white backdrop-blur-sm bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t border-l border-white border-opacity-40">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <motion.div
                    variants={quoteVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Quote className="h-8 w-8 text-teal-300 rotate-180" />
                  </motion.div>
                </div>
                <motion.p
                  className="text-gray-800 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                >
                  {testimonial.quote}
                </motion.p>
                <div className="flex items-center">
                  <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800">
                      {testimonial.name}
                    </p>
                    <p className="text-teal-600 text-sm">—{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Column with offset for staggered effect */}
        <div className="space-y-12 md:space-y-20 mt-8 md:mt-32">
          {[testimonials[1], testimonials[3]].map((testimonial, idx) => (
            <motion.div
              className="relative"
              key={testimonial.id}
              custom={idx + 2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-teal-300 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 + 0.6, duration: 0.5 }}
              />
              <div className="relative z-10 bg-white backdrop-blur-sm bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t border-l border-white border-opacity-40">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <motion.div
                    variants={quoteVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Quote className="h-8 w-8 text-teal-300 rotate-180" />
                  </motion.div>
                </div>
                <motion.p
                  className="text-gray-800 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.7, duration: 0.5 }}
                >
                  {testimonial.quote}
                </motion.p>
                <div className="flex items-center">
                  <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800">
                      {testimonial.name}
                    </p>
                    <p className="text-teal-600 text-sm">—{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SVG Footer Decoration */}
      <svg
        className="w-full h-16 mt-12 opacity-20"
        viewBox="0 0 1200 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,60 600,0 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
          className="text-teal-500"
        />
      </svg>
    </section>
  );
};

export default TestimonialsSection;
