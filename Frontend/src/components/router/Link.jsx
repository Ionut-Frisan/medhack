import { NavLink, useLocation } from "react-router-dom";

const Link = ({ children, to = "/", activeClassName = "" }) => {
  const location = useLocation();
  return (
    <NavLink to={to} state={{ pre: location.pathname }}>
      {children}
    </NavLink>
  );
};

export default Link;
