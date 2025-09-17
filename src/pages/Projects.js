import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "A user-friendly e-commerce website where customers can browse products, add items to their cart, and make secure purchases.",
      link: "https://github.com/aral55/e-commerce",
      image: "/images/e-commerce.jpeg",
    },
    {
      title: "NASA search tool",
      description:
        "A NASA search tool website that allows users to search and learn about planets and space.",
      link: "https://github.com/aral55/react-nasa-search-app",
      image: "/images/nasa.jpeg",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix UI clone to practice API integration and Tailwind CSS.",
      link: "https://github.com/aral55/react-netflix",
      image: "/images/netflix.jpeg",
    },
    {
      title: "Travel Agency",
      description:
        "A Travel agency website to look at holidays and all inclusive packages. It was a final group project for my boot-camp.",
      link: "https://github.com/ArhanKonuksal/Travel-Agency-fe",
      image: "/images/travel-agency.png",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-blue-900 p-6">
      <motion.h2 className="text-4xl font-bold text-center text-white dark:text-gray-200 mb-8">
        My Projects
      </motion.h2>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
