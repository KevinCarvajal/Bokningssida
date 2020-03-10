import React, {useState } from "react";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    CustomInput
  } from 'reactstrap';

  import {Link} from "react-router-dom"
  import { Menu } from "react-feather"


const Header = () => {
  
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const [darkmode, setDarkmode] = useState(false)

  return (
    
    <Navbar className="Navbar" >
       <Link to="/" className="mr-center">
           Havanna
         </Link>
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
          <CustomInput onClick={()=>setDarkmode(!darkmode)}
       type="switch" id="exampleCustomSwitch" name="customSwitch"
       />
       {/* <div className={darkmode ? 'App dark-mode' : 'App'}></div> */}
        </Collapse>
    </Navbar>
  );
};

export default Header;
