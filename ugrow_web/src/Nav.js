import React from 'react';
//import { Collapse, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GoogleAuth from './OAuth'
//import { NavLink } from 'react-router-dom'
//import { Nav, Navbar } from 'reactstrap'

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">U|Grow</NavbarBrand>
          <GoogleAuth />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar="mr-auto">
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hiw">How UGrow Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/privacy">UGrow's Privacy Policy</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  
  /* constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">U|Grow</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <GoogleAuth />
              </NavItem>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                 <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  // 2nd stuff
  render() {
    return (
      <Navbar brand='React-Bootstrap'>
        <Nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Band'>Band</NavLink>
          <NavLink to='/Discography'>Discography</NavLink>
          <NavLink to='/Media'>Media</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </Nav>
      </Navbar>
    );
  } */