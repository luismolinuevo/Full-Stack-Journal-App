import {useState, useEffect} from 'react'   //rafce is the short cut
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/Navstyles.css"

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setExpandNavbar(!expandNavbar)   //sets expandnavbar to opposite value


  const changeBackground = () => {
      if(window.scrollY >= 90) {
          setNavbar(true)
      } 
      else {
          setNavbar(false)
      }
  }

  useEffect(() => {
      setExpandNavbar(false);
      window.addEventListener("scroll", changeBackground)
  }, []);

  return (
          <header className = {navbar ? "active" : " "}>
              <div className = "container">
                  <div className = "navbar">
                      <nav className={expandNavbar ? "responsive_nav" : " "}>
                          <Link to="/home" onClick={handleClick}>Home</Link>
                          <Link to="login" onClick={handleClick}>Login/Signup</Link>
                          <button className="nav-btn nav-close-btn" onClick={() => {
                              setExpandNavbar((prev) => !prev);
                           }}> 
                          
                              <FaTimes/>
                          </button>  
                      </nav>
                  </div>
              
                  <button className="nav-btn" onClick={() => {
                      setExpandNavbar((prev) => !prev);
                  }}>
                      <FaBars/>
                  </button>
              </div>
          </header>
  )
}
