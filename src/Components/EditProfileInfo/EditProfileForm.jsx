import React, { useContext, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { linkedinContext } from "../../Store/Context";

const EditProfileForm = () => {
  const navigate = useNavigate();

  const { formdata, handleChange, handleFormSubmit } =
    useContext(linkedinContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-black/70 transition-opacity"></div>
      <div className="bg-white dark:bg-gray-900 dark:border-gray-700 z-50 lg:w-[60vw] md:w-[80vw] sm:w-[80vw] w-[90vw] p-5 rounded-2xl border border-gray-300 ">
        <div onClick={() => navigate("/")} className="flex justify-end ">
          <RxCross1 className="p-1 text-2xl rounded-full hover:bg-gray-300 dark:text-white"></RxCross1>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-5"
          action="/"
        >
          <h1 className="border-gray-300 border-b pb-2 text-2xl dark:text-white">
            Edit Info
          </h1>

          <div className="flex flex-col">
            <label className="dark:text-white" htmlFor="fullName">
              First Name
            </label>
            <input
              value={formdata.fullName}
              onChange={handleChange}
              className="inputstyles"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="fullName"
            />
          </div>

          <div className="flex flex-col">
            <label className="dark:text-white" htmlFor="Pronouns">
              Pronouns
            </label>
            <input
              value={formdata.Pronouns}
              onChange={handleChange}
              className="inputstyles"
              type="text"
              id="Pronouns"
              name="Pronouns"
              placeholder="Pronouns"
            />
          </div>

          <div className="flex flex-col">
            <label className="dark:text-white" htmlFor="Headline">
              Headline
            </label>
            <textarea
              value={formdata.Headline}
              onChange={handleChange}
              className="inputstyles"
              name="Headline"
              id="Headline"
              placeholder="Headline"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="dark:text-white" htmlFor="Education">
              Education
            </label>
            <input
              value={formdata.Education}
              onChange={handleChange}
              className="inputstyles"
              type="text"
              id="Education"
              name="Education"
              placeholder="your education"
            />
          </div>

          <div className="flex flex-col">
            <label className="dark:text-white" htmlFor="Location">
              Location
            </label>
            <input
              value={formdata.Location}
              onChange={handleChange}
              className="inputstyles"
              type="text"
              id="Location"
              name="Location"
              placeholder="Location"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/")}
              className="p-2 bg-blue-800 text-white font-semibold rounded-3xl w-[80px]"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
