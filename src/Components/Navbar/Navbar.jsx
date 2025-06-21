import React from 'react'
import linkedin from '../../assets/Linkedin logo/linkedin.png'
import { TiHome } from "react-icons/ti";
import { MdPeopleAlt } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links = [
    {
        name : "Home",
        logo : <TiHome></TiHome>,
        path : "/Home"

    },
    {
        name : "My Network",
        logo : <MdPeopleAlt></MdPeopleAlt>,
        path : "/my network"
    },
    {
        name : "Jobs",
        logo: <IoBagHandle></IoBagHandle>,
        path : "/Jobs"
    },
    {
        name : "Messaging",
        logo : <RiMessage2Fill></RiMessage2Fill>,
        path : "/Messaging"
    },
    {
        name : "Notifications",
        logo: <IoNotifications></IoNotifications>,
        path : "/Notifications"
    }
  ]

  return (
    <nav className=' fixed top-0 flex flex-row items-center justify-around px-2 py-2 w-full bg-white md:gap-5 z-50'>
        <div className='flex flex-row items-center gap-2 md:gap-0'>
            <img className='h-8 md:h-12' src={linkedin} alt="" />
            <IoSearch className='md:hidden'></IoSearch>
            <div className='md:flex flex-row items-center gap-2 h-9 w-70 px-2 bg-gray-100 rounded-lg hidden'>
                 <IoSearch></IoSearch>
                 <input className='focus:outline-none ' type="text" placeholder='search'/>
          </div>
           
        </div>
        <ul className='flex flex-row justify-between md:gap-15 gap-7 md:text-3xl text-2xl text-gray-500'>
          {
            links.map((link,index)=>(
               <NavLink key={index} to={link.path}><li className='flex flex-col items-center hover:text-black'>{link.logo}<p className='text-center  md:text-sm md:inline hidden'>{link.name}</p></li></NavLink>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navbar
