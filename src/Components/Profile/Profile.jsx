import React, { useContext } from "react";
import ProfileInfo from "../ProfileInfoall/ProfileInfo";
import Analytics from "../ProfileInfoall/Analytics";
import About from "../ProfileInfoall/About";
import Profilelink from "../ProfileInfoall/Profilelink";
import { Outlet } from "react-router-dom";
import Viewers from "../ProfileInfoall/Viewers";
import { linkedinContext } from "../../Store/Context";
import EditProfileImage from "../EditProfileImage/EditProfileImage";

const Profile = () => {
  const{editImage} = useContext(linkedinContext);
  return (
    <div className=" mt-10 sm:mt-10 md:mt-14 lg:mt-16 py-5 md:py-15 sm:py-5 md:px-10 lg:px-20 xl:px-20 w-full flex flex-col md:flex-row  justify-around gap-4 bg-stone-200 dark:bg-black/95 ">
      {/* 1st div for profile info  */}
      <div className="flex flex-col gap-3">
        {/* first half div */}
        <ProfileInfo></ProfileInfo>
        <Analytics></Analytics>
        <About></About>
      </div>
      {/* 2nd div for others info */}
      <div className="flex flex-col gap-3">
        <Profilelink></Profilelink>
        <Viewers></Viewers>
      </div>
      <Outlet></Outlet>
      {editImage && ( 
        <EditProfileImage></EditProfileImage>
      )}
    </div>
  );
};

export default Profile;
