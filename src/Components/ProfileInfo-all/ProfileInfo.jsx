import mypic from "../../assets/profileInfo/mypic.jpg";
import cover from "../../assets/profileInfo/cover.jpg";
import ggv from "../../assets/profileInfo/ggv.png";
import { MdVerifiedUser } from "react-icons/md";
import { NavLink } from "react-router-dom";

import React from 'react'

const ProfileInfo = () => {
  return (
    <div className="relative bg-white rounded-2xl w-full md:w-[60vw] lg:w-[60vw] md:h-auto  pb-3 border border-gray-200 ">
          <img
            className="h-[150px] md:h-[150px] lg:h-[250px]  w-full md:w-[60vw] lg:w-[60vw] rounded-tl-2xl rounded-tr-2xl"
            src={cover}
            alt=""
          />
          <div>
            <img
              className=" absolute md:top-15 lg:top-40 sm:top-20 top-15 left-8 md:h-35 lg:h-38 h-35 rounded-full border-white border-6 cursor-pointer"
              src={mypic}
              alt=""
            />
          </div>
          <div className="md:mt-18 mt-20 px-5 flex flex-col gap-3">
            {/* name collage skills div */}
            <div>
              <div className=" flex md:flex-row flex-col justify-between md:items-center">
                <span className="flex flex-row gap-2 items-center">
                  <h1 className="md:text-2xl text-lg font-semibold text-gray-800">
                    OM PRAKASH VISHWAKARMA
                  </h1>
                  <MdVerifiedUser className="text-2xl"></MdVerifiedUser>
                  <p className="text-gray-500">He/him</p>
                </span>
                <span className="flex flex-row gap-1 items-center">
                  <img className="md:h-8 h-4" src={ggv} alt="" />{" "}
                  <p className="md:text-sm text-xs">Guru Gasidas Vishwavidyalaya</p>
                </span>
              </div>
              <div className="text-gray-700 ">
                Skilled in React JS | Passionate About Building Interactive and
                Scalable Frontend Web Applications | MCA'25
              </div>
            </div>
            {/* location span */}
            <span className="flex flex-row gap-2 text-sm">
              <p className="text-gray-400">Bilaspur, Chhattisgarh, India </p>{" "}
              <NavLink className="text-blue-600 underline font-bold" to="/contectinfo">Contenct info</NavLink>
            </span>
         {/* connections div */}
            <div>
               <NavLink className="text-blue-600 font-bold" to ="/my network/connections">60 connections</NavLink>
            </div>
            {/* resourses and add profile div */}
            <div className="py-2 flex justify-baseline gap-3">
               <button className="h-10 w-30 text-xs md:w-35 md:h-10 md:text-sm p-2 rounded-3xl text-white bg-blue-600 font-bold">Open to</button>
               <button className="h-10 w-30 text-xs md:h-10 md:w-35 md:text-sm p-2 border border-blue-600 rounded-3xl text-blue-600 ">Add Profile section</button>
               <button className="h-10 w-30 text-xs md:h-10  md:w-35 md:text-sm p-2 border border-blue-600 rounded-3xl text-blue-600">Enhence Profile</button>
               <button className="h-10 w-30 text-xs  md:w-35 md:h-10 md:text-sm border border-gray-700 p-2 text-gray-700 rounded-3xl">Resources</button>
            </div>
          </div>
        </div>
  )
}

export default ProfileInfo
