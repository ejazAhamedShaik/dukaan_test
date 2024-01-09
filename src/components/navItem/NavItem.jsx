// NavItem.jsx

import React from "react";
import { NavItemContainer, NavItemTitle } from "./navItem.styles";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NavItem = ({ title, icon: Icon, path, isActive }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <NavItemContainer isActive={isActive} onClick={handleNavigate}>
      <Icon />
      <NavItemTitle>{title}</NavItemTitle>
    </NavItemContainer>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

NavItem.defaultProps = {
  icon: React.Fragment,
};

export default NavItem;
