"use client"
import React from "react";
const MainPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Add Collection Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add Collection</h2>
        {/* Your form or content for adding a new collection */}
      </section>

      {/* Existing Collections Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Existing Collections</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Example squares for existing collections */}
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
            Collection 1
          </div>
          <div className="bg-gray-200 p-4  rounded-lg flex items-center justify-center">
            Collection 2
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
            Collection 3
          </div>
          {/* Square for adding new course */}

        </div>
      </section>

      {/* Footer Section */}
      <footer className="fixed bottom-0 mt-8 px-100 py-4 bg-gray-200 text-center">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default MainPage;
