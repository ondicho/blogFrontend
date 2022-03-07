import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
const Navigationbar = () =>{
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Daily Motivation Blog</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Add Post</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      );
}

export default Navigationbar;


