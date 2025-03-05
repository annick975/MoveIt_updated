import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  features: PricingFeature[];
  buttonText: string;
  yearlyPrice?: string;
}

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "monthly"
  );

  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      description: "For individuals",
      price: "$0",
      yearlyPrice: "$0",
      period: "/month",
      features: [
        { text: "Create & manage tasks" },
        { text: "Basic reminders & notifications" },
        { text: "Access on web & mobile" },
        { text: "Light & dark mode" },
        { text: "Up to 5 projects" },
        { text: "Limited file attachments" },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      description: "For professionals",
      price: "$9.99",
      yearlyPrice: "$7.99",
      period: "/month",
      popular: true,
      features: [
        { text: "Everything in Free, plus:" },
        { text: "Unlimited projects & tasks" },
        { text: "Advanced task tracking & analytics" },
        { text: "Team collaboration" },
        { text: "Calendar & productivity app integrations" },
        { text: "Priority support" },
      ],
      buttonText: "Subscribe Now",
    },
    {
      name: "Premium",
      description: "For teams & enterprises",
      price: "$19.99",
      yearlyPrice: "$16.99",
      period: "/month",
      features: [
        { text: "Everything in Pro, plus:" },
        { text: "AI-powered task suggestions & automation" },
        { text: "Custom workflows & automations" },
        { text: "Advanced security & encrypted storage" },
        { text: "Multi-device sync & offline mode" },
        { text: "Admin dashboard & role-based access control" },
      ],
      buttonText: "Subscribe Now",
    },
  ];

  // Calculate annual savings
  const getSavingsText = (plan: PricingPlan) => {
    if (plan.name === "Free" || !plan.yearlyPrice) return null;
    const monthlyPrice = parseFloat(plan.price.replace("$", ""));
    const yearlyPrice = parseFloat(plan.yearlyPrice.replace("$", ""));
    const monthlySavings = monthlyPrice - yearlyPrice;
    const yearlySavings = monthlySavings * 12;

    return `Save $${yearlySavings.toFixed(2)} yearly`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const planVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const checkmarkVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.3,
      },
    }),
  };

  const backgroundCircleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-teal-50 to-[#F0FFFD] py-16 px-4">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 rounded-full bg-teal-100 opacity-40 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-teal-100 opacity-30 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="absolute top-40 left-1/4 w-20 h-20 rounded-full bg-yellow-100 opacity-40 -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundCircleVariants}
        transition={{ delay: 0.4 }}
      />

      {/* Decorative patterns */}
      <div className="absolute top-10 right-10 opacity-10 -z-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-10 -z-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path
            d="M20 20L80 80M80 20L20 80"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.h2>

          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mt-2 mb-6"></div>

          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose the plan that works best for you and your team
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className={`text-sm ${
              billingPeriod === "monthly"
                ? "font-semibold text-teal-600"
                : "text-gray-600"
            }`}
          >
            Monthly
          </span>

          <motion.button
            onClick={() =>
              setBillingPeriod(
                billingPeriod === "monthly" ? "annually" : "monthly"
              )
            }
            className="relative w-14 h-7 bg-teal-200 rounded-full p-1 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 bg-[#40b8a6] rounded-full"
              animate={{
                translateX: billingPeriod === "annually" ? 28 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.button>

          <span
            className={`text-sm ${
              billingPeriod === "annually"
                ? "font-semibold text-teal-600"
                : "text-gray-600"
            }`}
          >
            Annually
          </span>

          {billingPeriod === "annually" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full flex items-center"
            >
              <Sparkles size={12} className="mr-1" /> Save up to 20%
            </motion.div>
          )}
        </motion.div>

        {/* Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-white border-2 border-[#40b8a6] shadow-xl"
                  : "bg-white border border-gray-100 shadow-lg"
              }`}
              variants={planVariants}
              whileHover="hover"
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-0 right-6 transform -translate-y-1/2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-[#40b8a6] text-white text-sm px-4 py-1 mt-4 rounded-full flex items-center shadow-md">
                    <Sparkles size={14} className="mr-1" /> Popular
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <motion.div
                className="mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: "easeInOut",
                }}
              >
                <span className="text-4xl font-bold text-gray-900">
                  {billingPeriod === "monthly" ? plan.price : plan.yearlyPrice}
                </span>
                <span className="text-gray-600">{plan.period}</span>

                {billingPeriod === "annually" && getSavingsText(plan) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-medium text-teal-600 mt-2"
                  >
                    {getSavingsText(plan)}
                  </motion.div>
                )}
              </motion.div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    custom={idx}
                    variants={featureVariants}
                  >
                    <motion.div
                      className="flex-shrink-0 h-6 w-6 rounded-full bg-[#40b8a6] flex items-center justify-center mt-0.5"
                      variants={checkmarkVariants}
                    >
                      <Check size={16} className="text-white" />
                    </motion.div>
                    <span className="ml-3 text-gray-700">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-lg 
                  ${
                    plan.popular
                      ? "bg-[#40b8a6] hover:bg-[#359e8d] text-white"
                      : "bg-transparent text-[#40b8a6] border-2 border-[#40b8a6] hover:bg-[#e7f9f6] transition-colors"
                  } 
                  font-medium transition-colors shadow-sm`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center text-gray-500 text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          All plans include a 14-day free trial. No credit card required to
          start.
          <br />
          Need a custom plan for your enterprise?{" "}
          <a href="#" className="text-teal-500 hover:underline">
            Contact us
          </a>
          .
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlans;
