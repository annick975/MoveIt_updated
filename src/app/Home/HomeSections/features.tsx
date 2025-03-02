// components/KeyFeatures.tsx
import React from "react";
import { ClipboardList, Bell, Users, LineChart, Shield } from "lucide-react";

const KeyFeatures = () => {
  // Feature data with Lucide React icons
  const features = [
    {
      icon: <ClipboardList size={24} className="text-emerald-600" />,
      title: "Smart Task Management",
      description: "Create, organize, and prioritize tasks with ease",
    },
    {
      icon: <Bell size={24} className="text-emerald-600" />,
      title: "Deadline Reminders",
      description: "Never miss a deadline with automated alerts",
    },
    {
      icon: <Users size={24} className="text-emerald-600" />,
      title: "Team Collaboration",
      description: "Assign tasks and work together seamlessly.",
    },
    {
      icon: <LineChart size={24} className="text-emerald-600" />,
      title: "Progress Tracking",
      description: "Visualize your productivity with intuitive insights",
    },
    {
      icon: <Shield size={24} className="text-emerald-600" />,
      title: "Secure & Private",
      description: "Your data is encrypted and safe.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Title with gradient underline */}
        <div className="relative">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="absolute -bottom-2 left-0 h-1 w-64 bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* First row - 3 cards */}
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="col-span-1">
              <div className="rounded-lg border bg-emerald-50 p-6 shadow-sm">
                <div className="flex flex-col items-start gap-2">
                  <div className="rounded-full bg-emerald-100 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Second row - 2 centered cards */}
          <div className="col-span-1 md:col-span-1 lg:col-start-1 lg:col-end-2">
            <div className="rounded-lg border bg-emerald-50 p-6 shadow-sm">
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-full bg-emerald-100 p-3">
                  {features[3].icon}
                </div>
                <h3 className="mt-2 text-xl font-semibold">
                  {features[3].title}
                </h3>
                <p className="text-gray-700">{features[3].description}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-start-2 lg:col-end-3">
            <div className="rounded-lg border bg-emerald-50 p-6 shadow-sm">
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-full bg-emerald-100 p-3">
                  {features[4].icon}
                </div>
                <h3 className="mt-2 text-xl font-semibold">
                  {features[4].title}
                </h3>
                <p className="text-gray-700">{features[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
