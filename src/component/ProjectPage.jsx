import React from "react";

const ProjectPage = () => {
  return (
    <div id="projectpage" className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/random"
        alt="Random"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a simple card component styled with Tailwind CSS.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tailwind
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #css
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #react
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #next
        </span>
      </div>

      <div className="px-10 py-5 bg-yellow-200 flex flex-col text-center justify-center">
        <p className="text-gray-500 font-semibold underline">this button is killing me</p>
        <button className="bg-red-400 rounded-full px-10 py-2  text-white font-bold hover:bg-red-900 mt-3">Hint me</button>
      </div>
    </div>
  );
};

export default ProjectPage;
