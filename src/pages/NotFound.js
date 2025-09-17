import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:scale-105 hover:bg-indigo-500 transition-transform transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
