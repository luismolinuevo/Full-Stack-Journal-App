import { useAuth } from "../context/AuthContext.jsx";
import { useLocation, Navigate } from "react-router-dom";

function PrivateRouteRequiresAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRouteRequiresAuth;