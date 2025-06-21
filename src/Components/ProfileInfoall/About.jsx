import React from 'react'
import { LuPencil } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className='bg-white rounded-2xl p-3 w-full md:w-[60vw] lg:w-[60vw] flex flex-col gap-5 border border-gray-200 '>
      <div className='flex flex-row items-center  justify-between text-xl  md:text-2xl lg:text-2xl font-bold'><h1>About</h1> <LuPencil></LuPencil></div>
      <div><p className='text-gray-700 text-xs sm:text-xs md:text-sm lg:text-sm'>I'm a dedicated Frontend Developer specializing in React.js, with a strong command of modern JavaScript (ES6+), JSX, and component-based architecture. I love building dynamic, high-performance web applications with reusable components, efficient state management (using hooks or libraries like Redux), and clean, modular code. I'm experienced in using tools like Vite, Tailwind CSS, Axios, and React Router to craft seamless and responsive user interfaces. I'm constantly exploring the React ecosystem and enjoy working on challenging projects that help me grow and stay current in the fast-paced world of web development.</p></div>
      <div className='flex flex-row justify-between items-center border border-gray-300 rounded-2xl p-3'>
        <div><span className='flex flex-row gap-2 items-center text-sm sm:text-sm lg:text-lg md:text-lg font-semibold'><IoDiamondOutline></IoDiamondOutline><h3>Top skills</h3></span><p className='text-gray-700 text-sm sm:text-sm md:text-lg lg:text-lg'>JavaScript , React js , Tailwind css</p></div>
        <div><IoArrowForward></IoArrowForward></div>
      </div>
    </div>
  )
}

export default About
