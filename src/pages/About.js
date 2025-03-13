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
    <motion.div 
      className="max-w-4xl mx-auto p-10 text-center"
      initial="hidden"
      animate="visible"
    >
      {/* Profile Image */}
      <motion.div 
      className="flex justify-center mb-6"
       variants={scaleIn}
       whileHover={{scale: 1.1, rotate: 3}}
       transition={{type: "spring", stiffness: 200}}
       >
        <img 
          src="/IMG_3419.JPG"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* About Section */}
      <motion.h1 className="text-4xl font-bold mb-4 text-gray-800" variants={fadeIn}>
        About Me
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-600" 
        variants={fadeIn} 
        transition={{ delay: 0.3 }} // Added delay
      >
        I am a front-end developer passionate about creating clean, responsive, and interactive web applications.
        My focus is on building sleek UI components with React and Tailwind CSS.
      </motion.p>

      {/* Skills Section */}
      <motion.div className="mt-8" variants={fadeIn} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "MySQL", "GitHub", "Docker"].map((skill, index) => (
            <motion.span 
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;