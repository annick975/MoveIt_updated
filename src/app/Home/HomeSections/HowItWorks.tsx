// components/HowItWorks.tsx
import React from "react";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      text: "Sign up and create your first task.",
      position: "left",
    },
    {
      number: 2,
      text: "Organize tasks into categories or projects.",
      position: "right",
    },
    {
      number: 3,
      text: "Track progress and complete tasks with reminders.",
      position: "left",
    },
    {
      number: 4,
      text: "Collaborate with your team and stay productive.",
      position: "right",
    },
  ];

  return (
    <div className="bg-emerald-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Title with underline */}
        <div className="relative mb-16">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="absolute -bottom-2 left-0 h-1 w-48 bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-emerald-400" />

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative mb-24 last:mb-0">
              <div className="flex items-center justify-center">
                {/* Step bubble with number */}
                <div className="absolute left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-xl font-semibold text-emerald-800">
                    {step.number}
                  </span>
                </div>

                {/* Check mark at the top for the first step */}
                {index === 0 && (
                  <div className="absolute -top-10 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-400">
                    <Check size={20} className="text-white" />
                  </div>
                )}

                {/* Step text boxes */}
                <div
                  className={`w-full ${
                    step.position === "left"
                      ? "mr-8 text-right md:w-5/12 md:pr-12"
                      : "ml-8 text-left md:w-5/12 md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="rounded-full bg-emerald-100 px-6 py-4">
                    <p className="text-gray-800">{step.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
