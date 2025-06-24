import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applayout from "./Applayout";
import Profile from "./Components/Profile/Profile";
import MyNetwork from "./Components/myNetwork/MyNetwork";
import Connections from "./Components/myConnection/Connections";
import EditProfileForm from "./Components/EditProfileInfo/EditProfileForm";
import Home from "./Components/HomePage/Home";
import Job from "./Components/JobsPage/Job";
import Notification from "./Components/Notifications/Notification";
import Messeging from "./Components/Messeging/Messeging";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout></Applayout>,
      children: [
        {
          path: "/",
          element: <Profile></Profile>,
          children: [
            {
              path: "/edit",
              element: <EditProfileForm></EditProfileForm>,
            },
          ],
        },
        {
          path: "/my network",
          element: <MyNetwork></MyNetwork>,
        },
        {
          path: "/my network/connections",
          element: <Connections></Connections>,
        },
        {
          path : "/home",
          element : <Home></Home>

        },
        {
          path: "/jobs",
          element : <Job></Job>
        },
        {
          path : "/notifications",
          element : <Notification></Notification>
        },
        {
          path : "messaging",
          element :<Messeging></Messeging>
        }

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
