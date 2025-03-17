import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-12 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Me</h2>
        <form className="space-y-8">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-lg">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg" 
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-lg">Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg" 
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-lg">Message</label>
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/aral-hudaoglu-794844281/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={40} />
          </a>
          <a 
            href="https://github.com/aral55" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-black"
          >
            <FaGithub size={40}  className="text-white hover:text-gray-300"/>
          </a>
          <a 
            href="mailto:aralhudaoglu23@gmail.com" 
            className="text-red-600 hover:text-red-800"
          >
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;