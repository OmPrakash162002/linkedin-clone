import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Applayout from './Applayout'
import Profile from './Components/Profile/Profile'
import MyNetwork from './Components/myNetwork/MyNetwork'
import Connections from './Components/myConnection/Connections'

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout></Applayout>,
      children : [
        { path : "/",
          element : <Profile></Profile>
        },
        {
          path : "/my network",
          element : <MyNetwork></MyNetwork>,
        
        },
        {
          path : "/my network/connections",
          element : <Connections></Connections>
        }
      ]
      
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
