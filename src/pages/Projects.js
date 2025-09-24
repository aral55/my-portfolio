import React from "react";
import ProjectCard from "../components/ProjectCard";
import eCommerce from "../images/e-commerce.jpeg";
import nasa from "../images/nasa.jpeg";
import netflix from "../images/netflix.jpeg";
import travelAgency from "../images/travel-agency.png";

const projects = [
  {
    title: "E-Commerce",
    description: "A full-featured eCommerce platform with payment integration.",
    link: "https://github.com/aral55/e-commerce",
    image: eCommerce,
  },
  {
    title: "NASA Search App",
    description: "A NASA search tool showcasing planets and space data.",
    link: "https://github.com/aral55/react-nasa-search-app",
    image: nasa,
  },
  {
    title: "Netflix Clone",
    description:
      "A clone of Netflix using API integration and responsive design.",
    link: "https://github.com/aral55/react-netflix",
    image: netflix,
  },
  {
    title: "Travel Agency",
    description:
      "A travel agency website showing all-inclusive holiday packages.",
    link: "https://github.com/aral55/Travel-Agency-fe",
    image: travelAgency
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
