import { NavLink, useLocation } from "react-router-dom";
import "./Link.scss";

const Link = ({ children, to = "/", ...props }) => {
  const location = useLocation();
  const computedProps = {
    ...props,
    to,
    state: { pre: location.pathname },
    className: props.className ? props.className : 'med-link',
  };
  return (
    <NavLink to={to} {...computedProps}>
      {children}
    </NavLink>
  );
};

export default Link;
