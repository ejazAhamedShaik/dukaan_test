import NavFooter from "../navFooter/NavFooter";
import NavItem from "../navItem/NavItem";
import NavTitle from "../navTitle/NavTitle";
import { Footer, MainBody, NavGridContainer } from "./navbar.styles";
import { navbarItems } from "./navbarItems";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavGridContainer>
      <NavTitle />
      <MainBody>
        {navbarItems.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            path={item.path}
            isActive={location.pathname === item.path}
          />
        ))}
      </MainBody>
      <Footer>
          <NavFooter />
      </Footer>
    </NavGridContainer>
  );
};

export default Navbar;
