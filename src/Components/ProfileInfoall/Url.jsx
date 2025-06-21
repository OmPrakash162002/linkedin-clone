import React from "react";
import { LuPencil } from "react-icons/lu";
const Url = () => {
  return (
    <div className="bg-white rounded-2xl h-auto md:p-4 lg:p-4 p-3 border border-gray-200  md:w-auto w-full">
      <div className="border-b border-gray-300 p-2">
        <span className="flex flex-row justify-between">
          <h3 className="text-sm md:text-lg lg:text-lg font-semibold">Profile language</h3>
          <LuPencil></LuPencil>
        </span>
        <p className="text-xs sm:text-s md:text-sm lg:text-sm text-gray-500">English</p>
      </div>
      <div className="p-2">
        <span className="flex flex-row justify-between">
          <h3 className="text-sm md:text-lg lg:text-lg font-semibold">Public Profile and url</h3>
          <LuPencil></LuPencil>
        </span>
        <p className="text-xs sm:text-s md:text-sm lg:text-sm text-gray-500">www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9</p>
      </div>
    </div>
  );
};

export default Url;
