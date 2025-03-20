const ProjectCard = ({ title, description, link, image }) => {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View on GitHub
        </a>
      </div>
    );
  };
  
  export default ProjectCard;