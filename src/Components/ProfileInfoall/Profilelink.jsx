import React from "react";
import { LuPencil } from "react-icons/lu";
const Profilelink = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:border-gray-700 rounded-2xl h-auto md:p-4 lg:p-4 p-3 border border-gray-200  lg:w-[25vw] w-full">
      <div className="border-b border-gray-300 dark:border-gray-600 p-2">
        <span className="flex flex-row justify-between dark:text-white">
          <h3 className="text-sm md:text-lg lg:text-lg font-semibold ">
            Profile language
          </h3>
          <LuPencil></LuPencil>
        </span>
        <p className="text-xs sm:text-s md:text-sm lg:text-sm text-gray-500 dark:text-white/80">
          English
        </p>
      </div>
      <div className="p-2">
        <span className="flex flex-row justify-between dark:text-white">
          <h3 className="text-sm md:text-lg lg:text-lg font-semibold">
            Public Profile and url
          </h3>
          <LuPencil></LuPencil>
        </span>
        <p className="text-xs sm:text-s md:text-sm lg:text-sm text-gray-500 dark:text-white/80">
          www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9
        </p>
      </div>
    </div>
  );
};

export default Profilelink;
