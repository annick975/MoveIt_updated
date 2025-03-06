import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  FolderKanban,
  Bell,
  Users,
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Sign up and create",
      description:
        "Create an account and start adding your first tasks in seconds.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <FolderKanban className="h-6 w-6 text-white" />,
      title: "Organize your way",
      description:
        "Categorize tasks into projects, add tags, and create your ideal workflow.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Track progress",
      description:
        "Never miss a deadline with customizable reminders and notifications.",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Collaborate",
      description:
        "Invite team members and work together on shared projects seamlessly.",
      color: "from-cyan-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-[#F0FFFD] to-emerald-50 py-20 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-100 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-100 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How it works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with MoveIt in just a few steps and transform the way
            you manage tasks and stay productive.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-emerald-100"
            >
              <div className="p-6">
                <div
                  className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive demo section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="md:flex">
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to transform your workflow?
              </h3>
              <p className="text-emerald-50 mb-6">
                Join thousands of teams who have already improved their
                productivity with MoveIt.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 hover:text-emerald-700 font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white border border-white hover:bg-white/10 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </div>
            <div className="md:w-1/2 bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col items-center">
                  {[1].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: item * 0.2, duration: 0.5 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg mb-2 flex items-center justify-center"
                    >
                      <Check className="h-6 w-6 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
