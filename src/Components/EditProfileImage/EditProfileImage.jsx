import React, { useContext } from "react";
import { linkedinContext } from "../../Store/Context";
import { RxCross1 } from "react-icons/rx";
import mypic from "../../assets/profileInfo/mypic.jpg"

const EditProfileImage = () => {
  const { handleImageChange, handleProfileImage,image } = useContext(linkedinContext);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/70 transition-opacity"></div>
      <div className="bg-white  dark:bg-gray-900 border-gray-300 dark:border-gray-700  rounded-3xl z-50 lg:w-[40vw] p-5">
        <div onClick={handleProfileImage } className="flex justify-end ">
          <RxCross1 className="p-1 text-2xl rounded-full hover:bg-gray-300 dark:text-white"></RxCross1>
        </div>
       <div className="flex items-center justify-center">
       {image ? (
                  <img 
                  className="  md:top-15 lg:top-40 sm:top-20 top-15 left-8 md:h-35 lg:h-38 h-35 rounded-full border-gray-400 border-6 dark:border-gray-800 cursor-pointer"
                  src={image}
                  alt=""
                />
                ): <img 
                className="  md:top-15 lg:top-40 sm:top-20 top-15 left-8 md:h-35 lg:h-38 h-35 rounded-full border-gray-400 border-6 dark:border-gray-800 cursor-pointer"
                src={mypic}
                alt=""
              />}
       </div>
        <span className="flex flex-col gap-2  dark:text-white/80">
          <p>Edit your image</p>{" "}
          <input className="p-2 w-[95px] hover:scale-105  border border-black dark:border-gray-700 rounded-xl text-center " onChange={handleImageChange} type="file" accept="image/*" />
    
        </span>
      </div>
    </div>
  );
};

export default EditProfileImage;
