import { useSelector } from "react-redux";
import {
  getRole,
  getAuthStatus,
} from "../../store/featutres/auth/auth-slice.js";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const doctorRoute = ({ redirectPath = "/login" }) => {
  const role = useSelector(getRole);
  const isLoggedIn = useSelector(getAuthStatus);
  const location = useLocation();
  const { state } = location;

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }
  if (!role || role !== "doctor") {
    const path = state?.pre || "/login";
    return <Navigate to={path} />;
  }
  return <Outlet />;
};

export default doctorRoute;
