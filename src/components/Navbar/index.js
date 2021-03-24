import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
        <span style={{color: "#1dc0e2"}}>f</span>ave
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="movie"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Movie
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="actor"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Actor
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
