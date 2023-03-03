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
import PrivateRouteRequiresAuth from "./components/PrivateRouteRequiresAuth";

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/createentry",
            // element: <PrivateRouteRequiresAuth><CreateEntrie/></PrivateRouteRequiresAuth>
            element: <CreateEntrie/>
          },
          {
            path: "/entries",
            // element: <PrivateRouteRequiresAuth><ShowEntries/></PrivateRouteRequiresAuth>
            element: <ShowEntries/>
          },
          {
            path: "entries/:id",
            // element: <PrivateRouteRequiresAuth><SpecEntrie/></PrivateRouteRequiresAuth>
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
