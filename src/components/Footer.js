import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 mt-0">
      <div className="text-center mb-2">
        <p>@ {year} Aral Hudaoglu. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 mt-2">
        <a
          href="https://github.com/aral55"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-5xl hover:text-gray-400 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/aral-hudaoglu-794844281"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl hover:text-blue-500 transition-colors" />
        </a>
        <a href="mailto:aralhudaoglu23@gmail.com">
          <FaEnvelope className="text-5xl hover:text-red-500 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
