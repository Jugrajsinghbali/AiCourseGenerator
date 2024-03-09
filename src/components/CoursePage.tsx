import React from 'react';

const CoursePage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Sidebar content */}
        <div className="mb-4">
          <h2 className="font-bold">Chapter 1</h2>
          <ul className="ml-4">
            <li>Subheading 1</li>
            <li>Subheading 2</li>
            {/* Add more subheadings as needed */}
          </ul>
        </div>
        {/* Add more chapters as needed */}
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Subheading 1</h1>
        {/* Video Player */}
        <div className="mb-4">
          {/* Video Player Component */}
          <video controls className="w-full">
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Summary Section */}
        <div className="mb-4">
          <h2 className="font-bold">Summary</h2>
          <p>Summary of the video content goes here...</p>
        </div>
        {/* Next Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next Subheading
        </button>
      </div>
    </div>
  );
};

export default CoursePage;
