import React, {useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    CustomInput
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
              <Link to="/LoginPage">Logga in</Link>
            </NavItem>
            <NavItem>
              <Link to="/RegisterPage">Registrera</Link>
            </NavItem>
            <NavItem>
              <Link to="/ContactPage">Kontakta oss</Link>
            </NavItem>
            <NavItem>
              <Link to="/EventPage">Tjänster</Link>
            </NavItem>
            <NavItem>
              <Link to="/BookPage">Booka</Link>
            </NavItem>
          </Nav>
          <CustomInput
       type="switch" id="exampleCustomSwitch" name="customSwitch"
       />
        </Collapse>
    </Navbar>
  );
};

export default Header;
