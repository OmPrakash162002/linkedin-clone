
import React from "react";
import ProfileInfo from "../ProfileInfo-all/ProfileInfo";
import Analytics from "../ProfileInfo-all/Analytics";
import About from "../ProfileInfo-all/About";
import Url from "../ProfileInfo-all/url";

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
