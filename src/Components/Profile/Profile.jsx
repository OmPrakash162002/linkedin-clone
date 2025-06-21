
import React from "react";
import ProfileInfo from "../ProfileInfoall/ProfileInfo";
import Analytics from "../ProfileInfoall/Analytics";
import About from "../ProfileInfoall/About";
import Url from "../ProfileInfoall/url";

const Profile = () => {
  return (
    <div className=" mt-20 md:py-5 md:px-10 lg:px-20 xl:px-20 w-full flex flex-col md:flex-row  justify-around gap-4 ">
      {/* 1st div for profile info  */}
      <div className="flex flex-col gap-3">
        {/* first half div */}
        <ProfileInfo></ProfileInfo>
        <Analytics></Analytics>
        <About></About>
    </div>
      {/* 2nd div for others info */}
      <div>
        <Url></Url>
      </div>
    </div>
  );
};

export default Profile;
