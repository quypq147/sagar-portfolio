import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaTwitter, FaDribbble } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10 text-center flex flex-col items-center gap-4">
      {/* Badge */}
      <span className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full text-sm">
        Get in touch
      </span>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 max-w-md text-center">
        What's next? Feel free to reach out to me if you're looking for a developer, 
        have a query, or simply want to connect.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 text-gray-800 dark:text-gray-200 text-lg">
        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-600 dark:text-gray-300" />
          <span className="font-semibold">reachsagarshah@gmail.com</span>
          <MdContentCopy className="cursor-pointer text-gray-500 dark:text-gray-400" />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-600 dark:text-gray-300" />
          <span className="font-semibold">+91 8980500565</span>
          <MdContentCopy className="cursor-pointer text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Social Icons */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
        <FaGithub className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
        <FaTwitter className="cursor-pointer hover:text-blue-500" />
        <FaDribbble className="cursor-pointer hover:text-pink-500" />
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
        © 2023 | Designed and coded with ❤️ by Sagar Shah
      </div>
    </footer>
  );
}

export default Footer;
