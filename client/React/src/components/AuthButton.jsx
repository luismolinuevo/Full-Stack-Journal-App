import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    auth.signout().then(() => navigate("/"));
    window.location.reload();
  };

  return (
    <div>
        {
          !auth.isAuthenticated
          ? 
            <Link to="/login">
              Login/Signup
            </Link>
          :
            <div>
              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </div>
        }
    </div>


  );
};

export default AuthButton;