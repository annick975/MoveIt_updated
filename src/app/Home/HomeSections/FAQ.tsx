import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Is MoveIt free to use?",
      answer:
        "Yes, MoveIt offers a free tier with basic features. Premium plans are available for additional functionality and higher usage limits.",
    },
    {
      question: "What's the difference between Free, Pro, and Premium plans?",
      answer:
        "Free plans include basic features, Pro adds advanced tools and higher limits, while Premium offers enterprise-grade features, priority support, and customization options.",
    },
    {
      question: "Can I use MoveIt on mobile?",
      answer:
        "Yes, MoveIt is fully responsive and works on mobile devices through our web app. We also offer native iOS and Android applications.",
    },
    {
      question: "Does MoveIt work offline?",
      answer:
        "Some features of MoveIt require an internet connection, but our mobile apps offer limited offline functionality with sync capabilities when you reconnect.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We take data security seriously. MoveIt uses industry-standard encryption for all data, regular security audits, and complies with GDPR and other privacy regulations.",
    },
    {
      question: "Does MoveIt support team collaboration?",
      answer:
        "Yes, our Pro and Premium plans include team collaboration features like shared workspaces, permission controls, and real-time collaboration tools.",
    },
    {
      question: "How do I get support if I have an issue?",
      answer:
        "We offer support through our help center, email support, and live chat. Premium users also get access to priority support and dedicated account managers.",
    },
  ];

  return (
    <div className="px-6 py-10 bg-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Frequently asked questions (FAQs)
      </h2>
      <div className="h-1 w-full max-w-xs bg-gradient-to-r from-cyan-400 to-cyan-200 mb-10"></div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full p-4 flex items-center justify-between bg-cyan-50 hover:bg-cyan-100 transition-colors duration-200 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
