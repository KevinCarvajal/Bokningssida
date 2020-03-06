import React, {useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

  import {Link} from "react-router-dom"

  import { Menu } from "react-feather"


const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className="Navbar">
       <NavbarBrand href="/" className="mr-auto">Havanna</NavbarBrand>
        <Menu onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/LoginPage">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/RegisterPage">Register</Link>
            </NavItem>
            <NavItem>
              <Link to="/ContactPage">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="/EventPage">Events</Link>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  );
};

export default Header;
