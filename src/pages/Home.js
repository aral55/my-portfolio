import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "../images/IMG_1560.jpeg"

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom },
  }),
};

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
};

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-blue-900 p-6">
      <div className="max-w-6xl w-full mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariant} custom={0}>
            <p className="text-lg text-gray-200 mb-2">Hi, my name is </p>
          </motion.div>
          <motion.div variants={textVariant} custom={0.3}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Aral Hudaoglu
            </h1>
          </motion.div>
          <motion.div variants={textVariant} custom={0.6}>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 mb-6">
              Junior Full-Stack Engineer
            </h2>
            <motion.div variants={textVariant} custom={0.9}>
              <p className="text-gray-200 mb-8">
                I like to build clean, responsive and user friendly web designs
                and applications with modern technologies such as React and
                Tailwind CSS. I also use APIs to fetch for my projects and write
                database using SQL.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#/projects"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow hover:scale-105 hover:bg-indigo-700 transition-transform transition-colors duration-300"
            >
              View My Work
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          variants={avatarVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={Avatar}
            alt="Aral Hudaoglu"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
