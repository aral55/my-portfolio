import React from "react";
import { motion } from "framer-motion"; 

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

function About() {
  return (
<section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-blue-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-12 w-full max-w-3xl text-center">
        {/* Profile Image */}
        <motion.div 
          className="flex justify-center mb-6"
          variants={scaleIn}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img 
            src="/IMG_3419.JPG"
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* About Section */}
        <motion.h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white" variants={fadeIn}>
          About Me
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6" 
          variants={fadeIn} 
          transition={{ delay: 0.3 }}
        >
          I am a full-stack engineer primarily focusing on front-end development. I am passionate about creating clean, responsive, and interactive web applications.
          My focus is on building sleek UI components with React and Tailwind CSS. I am also interested in exploring new technologies and frameworks to improve my skills.
        </motion.p>

        {/* Skills Section */}
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-6" variants={fadeIn} transition={{ delay: 0.6 }}>
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-xl shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">2+ years in front-end development, specializing in modern UI frameworks.</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-xl shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Skills</h3>
            <p className="text-gray-600 dark:text-gray-300">React, JavaScript, Tailwind CSS, UI/UX Design, MySql, Github, Docker, Node.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
  