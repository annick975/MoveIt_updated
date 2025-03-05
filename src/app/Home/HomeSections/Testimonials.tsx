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
    <section className="w-full max-w-6xl mx-auto px-14 py-12 relative overflow-hidden bg-gradient-to-br from-white to-teal-50">
      
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Testimonials
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See what our customers have to say about their experience with our
          product.
        </p>
      </motion.div>

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
                className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-[#40b8a6] rounded-tl-3xl"
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
                    <Quote className="h-8 w-8 text-[#40b8a6] rotate-180" />
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
                className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-[#40b8a6] rounded-tl-3xl"
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
                    <Quote className="h-8 w-8 text-[#40b8a6] rotate-180" />
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
