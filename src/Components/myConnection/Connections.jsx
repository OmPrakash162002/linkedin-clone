import React from "react";
import { IoSearch } from "react-icons/io5";
import { connectionsInfo } from "../../info";
import { BsThreeDots } from "react-icons/bs";

const Connections = () => {
  return (
    <main className="bg-stone-200 pt-20 md:pt-25 pb-10 dark:bg-black/95">
      <div className="p-3 sm:p-4 md:p-5 lg:p-5 bg-white dark:bg-gray-900 dark:border-gray-700 w-full sm:w-full md:w-[80vw] lg:w-[70vw]  md:py-5 mx-0 sm:mx-1 md:mx-15  lg:mx-20  flex flex-col gap-4 border border-gray-200 rounded-2xl">
        <h1 className="text-xl dark:text-white">13 Connections</h1>
        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between ">
          <div className="flex flex-row justify-baseline sm:justify-between items-center gap-2">
            <p className="text-gray-400">Sort by</p>{" "}
            <button className="text-gray-600">Recently added</button>
          </div>
          <div className="flex flex-row justify-between items-center gap-2">
            {" "}
            <div className="md:flex flex-row items-center gap-2 h-9 w-[230px] px-2 bg-gray-100 rounded-lg ">
              <IoSearch></IoSearch>
              <input
                className="focus:outline-none "
                type="text"
                placeholder="search"
              />
            </div>
            <a className="dark:text-white" href="">Search with filters</a>
          </div>
        </div>
        <ul className="flex flex-col gap-5 pt-4 ">
          {connectionsInfo.map((connection, index) => (
            <li
              className="flex flex-row justify-between border-t border-gray-300 dark:border-gray-600 pt-4"
              key={index}
            >
              <div className="flex flex-row gap-3 items-center">
                <img
                  className="h-20 rounded-full"
                  src={connection.image}
                  alt=""
                />
                <div>
                  <h2 className="text-lg font-semibold dark:text-white">{connection.name}</h2>
                  <p className="text-gray-500 dark:text-white/70">{connection.info}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 text-sm ">
                <button className="border rounded-3xl border-blue-600 text-blue-600 p-2">
                  Message
                </button>
                <BsThreeDots className="dark:text-white text-xl"></BsThreeDots>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Connections;
