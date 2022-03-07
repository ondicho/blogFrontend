import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
const Navigationbar = () =>{
    return (
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Daily Motivation Blog</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Add Post</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      );
}

export default Navigationbar;


