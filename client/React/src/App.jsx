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
import Home from "./Pages/Home/Home.jsx"
import LoginPage from "./Pages/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext";
import { Signup } from "./Pages/Signup/Signup";
import CreateEntrie from "./Pages/Entries/CreateEntrie";
import ShowEntries from "./Pages/Entries/ShowEntries";
import SpecEntrie from "./Pages/Entries/SpecEntrie";

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
            path: "/createentry",
            element: <CreateEntrie/>
          },
          {
            path: "/entries",
            element: <ShowEntries/>
          },
          {
            path: "entries/:id",
            element: <SpecEntrie/>
          }

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
