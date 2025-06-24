import React from 'react'
import { IoMdPeople } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { RiNewsLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const MyNetwork = () => {

  const listOfpage = [
    {
      heading : "Connections",
      logo : <IoMdPeople></IoMdPeople> ,
      numbers  : "13",
      links  : "/my network/connections"
    },
    {
      heading : "Followers and Following",
      logo : <MdGroups></MdGroups>,
      numbers  : "13",
      links  : "/"
    },
    {
      heading : "Groups",
      logo :<IoMdPerson></IoMdPerson> ,
      numbers  : "13",
      links  : "/"
    },
    {
      heading : "Events",
      logo :<FaRegCalendarAlt></FaRegCalendarAlt> ,
      numbers  : "13",
      links  : "/"
    },
    {
      heading : "Pages",
      logo :<RiPagesLine></RiPagesLine> ,
      numbers  : "13",
      links  : "/"
    },
    {
      heading : "News letters",
      logo :<RiNewsLine></RiNewsLine> ,
      numbers  : "13",
      links  : "/"
    }
  ]


  return (
    <main className='sm:mt-10 mt-5 lg:mt-15 md:mt-15 pt-10  bg-stone-200 dark:bg-black/95 sm:px-5 px-0 md:px-12 h-screen'>
        <div className='bg-white dark:bg-gray-900 border-gray-300 border dark:border-gray-700 sm:w-full w-full md:w-[40vw] lg:w-[25vw] p-5 rounded-2xl'>
            <h1 className='border-b border-gray-300 pb-4 font-semibold text-black/70 dark:text-white/70'>Manage my network</h1>
          <ul>
              {listOfpage.map((item,index)=>(
                 <NavLink key={index} to={item.links} ><li  className='flex flex-row justify-between items-center p-3 text-md text-gray-500 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl '>
                 <span className='flex flex-row gap-2 items-center  '>{item.logo}<p>{item.heading}</p></span>
                 <p>{item.numbers}</p>
               </li>
             </NavLink> 
              ))}
          </ul>
        </div>
        <div></div>
    </main>
  )
}

export default MyNetwork
