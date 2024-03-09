"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [level, setLevel] = useState(1);
  const [courseData, setCourseData] = useState({
    courseIdea: '',
    title: '',
    subTitle: '',
    outline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleLevelChange = (e) => {
    const newLevel = parseInt(e.target.value);
    if (newLevel >= 1 && newLevel <= 4) {
      setLevel(newLevel);
    }
  };

  const generateCourse = () => {
    // Generate the course here
    console.log('Generating course...');
  };

  return (
    <div className="container mx-auto">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        Learning Journey
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <div>
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. And our AI
          will generate a course for you!
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Course Idea</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md"
          rows="4"
          name="courseIdea"
          value={courseData.courseIdea}
          onChange={handleChange}
        ></textarea>
      </div>

      {level >= 2 && (
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Select Title</label>
          <input
            className="w-full px-3 py-2 border rounded-md mb-2"
            type="text"
            name="title"
            placeholder="Main Title"
            value={courseData.title}
            onChange={handleChange}
          />
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="subTitle"
            placeholder="Sub Title"
            value={courseData.subTitle}
            onChange={handleChange}
          />
        </div>
      )}

      {level === 3 && (
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Conclude the Outline</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            name="outline"
            value={courseData.outline}
            onChange={handleChange}
          ></textarea>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 ${
            level === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => setLevel((prevLevel) => prevLevel - 1)}
          disabled={level === 1}
        >
          Previous Level
        </button>
        <input
          type="range"
          min="1"
          max="4"
          value={level}
          className="slider"
          onChange={handleLevelChange}
        />
        {level === 4 ? (
          <Link href="/course">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={generateCourse}
            >
              View Course
            </button>
          </Link>
        ) : (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              level === 3 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => setLevel((prevLevel) => prevLevel + 1)}
       
          >
            Next Level
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
