import React from "react";
import {Link} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem, } from 'reactstrap';

const style = {
  navBorder: {
    background: "#ffffff",
    borderBottom: "1px solid gray"
  }

}



function Navigation() {
    let isLoggedIn = window.localStorage.getItem("username"), logout = () => {
    localStorage.clear();
    window.location.reload();
    }
    if (isLoggedIn) {
      return (
        <div>
          <Navbar style={style.navBorder} light expand="md">
          <NavbarBrand href="/">RunLog</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/log">Log</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/list" >List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signin">Sign In</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      );
    } else { return null }
} 
    
  export default Navigation;