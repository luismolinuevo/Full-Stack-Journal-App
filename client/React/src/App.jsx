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
import LoginPage from "./Pages/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext";
import { Signup } from "./Pages/Signup/Signup";
import CreateEntrie from "./Pages/Entries/CreateEntrie";

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
          {
            path: "/createentrie",
            element: <CreateEntrie/>
          },

        ]
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
  ]);

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
      
    </div>
  )
}

export default App
