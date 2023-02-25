import React, { Component } from 'react'
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"

export default function Home() {
  const auth = useAuth();  //from authcontext
  const navigate = useNavigate();

  const login = async (e) => {
    let email = "testjose@gmail.com"
    let password = "Luis111"
    e.preventDefault();
    // let { email, password } = data;    //makes email and password variable the email and password that is in the data state           
  
    try {
      await auth.authenticate(email, password);  //authenticate from authcontext 
      //  navigate(from, { replace: true });   //go to where user was before login
          navigate("/")
          
    } catch (error) {
      setError(true);
    }
  };


    return (
      <div id="home">
        <div className='container'>
          <div className='homeMain'>
            <h1>Worlds Best Journal and Mood tracker</h1>
            <p>
              This app allows you to create journal entries and track your mood at the same time.
              Allowing for better day to day reflection and expressing your emotions with a couple clicks.
            </p>
            <div className="homeButtons">
              <Link to={"/signup"} className="getStarted">Get Started!</Link>
              <button onClick={login} className="demoButton">Demo App</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

