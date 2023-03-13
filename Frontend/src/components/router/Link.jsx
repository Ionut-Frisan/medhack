import { NavLink, useLocation } from "react-router-dom";

const Link = ({ children, to = "/", props }) => {
  const location = useLocation();
  const computedProps = {
    ...props,
    to,
    state: { pre: location.pathname },
  };
  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  );
};

export default Link;
