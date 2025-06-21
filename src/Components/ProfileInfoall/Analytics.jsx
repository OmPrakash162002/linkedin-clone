import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Analytics = () => {

    const AnalyticsInfo = [
        {
            heading: "11 profile views",
            subHeading : "Discover who's viewed your profile.",
            logo : <MdPeopleAlt></MdPeopleAlt>
            
        },
        {
            heading: "31 post impressions",
            subHeading : "Check out who's engaging with your posts.",
            logo : <VscGraph></VscGraph>
        },
        {
            heading: "2 search appearances",
            subHeading : "See how often you appear in search results.",
            logo : <IoSearch></IoSearch>
        }
    ]
  return (
    <div className='bg-white rounded-2xl p-3 w-full md:w-[60vw] lg:w-[60vw] flex flex-col gap-5 border border-gray-200 '>
      <div>
        <h1 className='text-gray-700 text-lg font-semibold'>Analytics</h1>
        <span className='flex flex-row gap-2 items-center text-sm text-gray-500'> <IoEyeSharp></IoEyeSharp> <p>Private to you</p></span>
      </div>
      <div className='flex md:flex-row flex-col gap-10'>
        
            {AnalyticsInfo.map((item,index)=>(
                <div key={index}>
                    <span className='flex flex-row items-center gap-2 text-lg text-gray-900 font-semibold'>{item.logo} {item.heading}</span>
                    <p className='text-gray-700 '>{item.subHeading}</p>
                </div>
                
            ))}
    
      </div>
      <div className='pt-3 border-t-1 border-gray-300 flex items-center justify-center gap-1'><NavLink>Show all Analytics</NavLink><IoArrowForward></IoArrowForward></div>
    </div>
  )
}

export default Analytics
