import React from 'react'
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const navigate = useNavigate();

    return (
      <div className='p-20 flex flex-col gap-10 items-center justify-center mt-10 text-2xl'>
        This project is currently ongoing it might take some time to complete.
        <button className='p-2 bg-gray-400 rounded-2xl hover:cursor-pointer' onClick={()=>navigate("/")}>Go to  profile page</button>
      </div>
    )
}

export default Notification
