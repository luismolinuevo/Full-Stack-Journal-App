import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import './App.css'

import Layout from "./components/Layout";
import Home from "./Pages/Home"

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
            // loader: () => {
            //   return getDailyImage();
            // }
          },
          // {
          //   path: "/dailyimage",
          //   element: <DailyImage/>,
          //   loader: () => {
          //     return getDailyImage();
          //   }
          // },
          // {
          //   path: "/mars",
          //   element: <Mars/>,
          //   loader: () => {
          //      return getMarsImages();
          //   }
          // },
          // {
          //   path: "nasaimages",
          //   element: <NasaImages/>,
          //   // loader: () => {
          //   //   // return searchImages();
          //   // }
          // }
        ]
      },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
