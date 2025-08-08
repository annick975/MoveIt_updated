import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Send,
  Mail,
  Heart,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F0FFFD] pt-8 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#40b8a6]">
                Move<span className="italic text-cyan-500">It</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Simplifying your digital journey with intuitive solutions for
              modern workflows.
            </p>
            <div className="pt-2">
              <button className="bg-[#40b8a6] hover:bg-[#2e9182] text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2 transition-colors duration-300">
                <Send className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Status</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Download Apps</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Privacy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Terms</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Accessibility</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-600 hover:text-[#40b8a6] text-sm flex items-center transition-colors duration-200"
                >
                  <span>Security</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#40b8a6] text-sm"
                placeholder="Your email address"
              />
              <button className="bg-[#40b8a6] hover:bg-[#2e9182] text-white px-3 py-2 rounded-r-md transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-500 hover:text-[#40b8a6] transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-[#40b8a6] transition-colors duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-[#40b8a6] transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-4 border-t border-gray-200">
          <p className="flex items-center justify-center">
            ©{currentYear}{" "}
            <span className="text-[#40b8a6] font-medium mx-1">MoveIt</span>
            <span className="ml-1">· Made with</span>
            <Heart
              className="w-4 h-4  mx-1 text-[#40b8a6] inline"
              fill="currentColor"
            />
            <span>by Annick</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
