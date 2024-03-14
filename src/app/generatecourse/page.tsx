"use client"
import React, { useState } from 'react';

const Page = () => {
  const [level, setLevel] = useState(1);
  const [courseData, setCourseData] = useState({
    courseIdea: '',
    titles: [{ title: '', subTitle: '' }],
    conclusion: '',
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTitles = [...courseData.titles];
    updatedTitles[index][name] = value;
    setCourseData({ ...courseData, titles: updatedTitles });
  };

  const handleAddTitle = () => {
    setCourseData({
      ...courseData,
      titles: [...courseData.titles, { title: '', subTitle: '' }],
    });
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Submitting form:', courseData);
  };

  return (
    <div className="max-w-screen">
      <div className="flex justify-center items-center h-screen flex-col -mt-12">
        <div className="font-bold mt-5 text-center text-4xl p-4">
          Learning Journey{' '}
        </div>
        <div className="h-4/5 w-1/2 rounded">
          <div className="p-2 flex justify-between font-medium">
            <div className="font-normal bg-gray-200 rounded-lg px-2 py-2">
              Enter in a course title, or what you want to learn about. Then
              enter a list of units, which are the specifics you want to
              learn. And our AI will generate a course for you!
            </div>
          </div>
          <hr />
          <div className="p-2">
            <form className="max-w-4xl pt-2">
              <div className="">
                <label className="text-sm font-bold ">Course Idea</label>
                <textarea
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-semibold placeholder-gray-500"
                  placeholder="Description"
                  name="courseIdea"
                  value={courseData.courseIdea}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      courseIdea: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              {courseData.titles.map((titleData, index) => (
                <div key={index} className="mb-5 mt-2">
                  <label className="text-sm font-bold ">Select Title</label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold  block w-full p-2.5  placeholder-gray-500 mb-1"
                    placeholder="Select a subject"
                    name="title"
                    value={titleData.title}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold  block w-full p-2.5  placeholder-gray-500"
                    placeholder="Specifics"
                    name="subTitle"
                    value={titleData.subTitle}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddTitle}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2"
              >
                Add Title
              </button>
              {level === 3 && (
                <div className="mb-5">
                  <label className="text-sm font-bold ">Conclusion</label>
                  <textarea
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-semibold placeholder-gray-500"
                    placeholder="Conclusion"
                    name="conclusion"
                    value={courseData.conclusion}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        conclusion: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              )}
              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  onClick={() => setLevel((prevLevel) => prevLevel - 1)}
                  disabled={level === 1}
                >
                  Previous Level
                </button>
                {level < 3 && (
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={() => setLevel((prevLevel) => prevLevel + 1)}
                    disabled={level === 3}
                  >
                    Next Level
                  </button>
                )}
                {level === 3 && (
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={handleSubmit}
                  >
                    Generate Course
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
