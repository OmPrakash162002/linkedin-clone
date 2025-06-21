import React from "react";
import { IoSearch } from "react-icons/io5";
import { connectionsInfo } from "../../info"
import { BsThreeDots } from "react-icons/bs";

const Connections = () => {
  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-5 bg-white w-full sm:w-[70vw] md:w-[70vw] lg:w-[70vw] mt-20 md:py-5 mx-5 sm:mx-15 md:mx-15 lg:mx-20  flex flex-col gap-4 border border-gray-200 rounded-2xl">
      <h1 className="text-xl">13 Connections</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between items-center gap-2">
          <p>Sort by</p> <button>Recently added</button>
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
          <a href="">Search with filters</a>
        </div>
      </div>
      <ul className="flex flex-col gap-5 pt-4 border-t border-gray-300">
        {connectionsInfo.map((connection,index)=>(
            <li className="flex flex-row justify-between border-b border-gray-300 pb-4" key={index}>
                <div className="flex flex-row gap-3 items-center">
                <img className="h-20 rounded-full"  src={connection.image} alt="" />
                <div><h2 className="text-lg font-semibold">{connection.name}</h2><p className="text-gray-500">{connection.info}</p></div>
                </div>
                <div className="flex flex-row items-center gap-2 text-sm"><button className="border rounded-3xl border-blue-600 text-blue-600 p-2">Message</button><BsThreeDots></BsThreeDots></div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
