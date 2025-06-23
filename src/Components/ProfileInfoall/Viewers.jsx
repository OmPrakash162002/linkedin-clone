import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { connectionsInfo } from "../../info";
import { MdVerifiedUser } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Viewers = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:border-gray-700 rounded-2xl h-auto md:p-4 lg:p-4 p-3 border border-gray-200  md:w-auto w-full lg:w-[25vw]  flex flex-col gap-4">
      <div>
        <h3 className="text-sm md:text-sm lg:text-lg font-semibold dark:text-white">
          Who your viewers also viewed
        </h3>
        <span className="flex flex-row items-center gap-2 text-gray-500 text-sm dark:text-white/60">
          <IoEyeSharp></IoEyeSharp>
          <p>Private to you</p>
        </span>
      </div>
      <ul className="flex flex-col gap-3">
        {connectionsInfo.map((connection,index) =>
          connection.id === "profile" ? (
            <li key={index} className="flex flex-row gap-2 border-t border-gray-300 dark:border-gray-600 pt-2">
              <img
                className="h-15 rounded-full "
                src={connection.image}
                alt=""
              />
              <div className="flex flex-col">
                <span className="flex flex-row  md:gap-0 gap-2 items-center dark:text-white">
                  <h4>{connection.name}</h4>
                  <MdVerifiedUser></MdVerifiedUser>
                  <p className="text-xs text-gray-400 dark:text-white/70" >1st</p>
                </span>
                <p className=" overflow-hidden md:overflow-hidden lg:h-[40px] md:h-[40px] text-gray-600 dark:text-white/80 text-sm">{connection.info}</p>
                <button className="flex flex-row items-center gap-1 border-2 border-gray-600 dark:border-white/80 dark:text-white p-0.5 rounded-3xl w-[100px]" ><IoIosSend></IoIosSend>Message</button>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Viewers;
