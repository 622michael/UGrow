import React from 'react';
import { Collapse, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GoogleAuth from './OAuth'

export default class TopNav extends React.Component {
  constructor(props) {
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
                {/* <NavLink href="/">Sign in</NavLink> */}
              </NavItem>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>Dropdown</DropdownToggle>
{/*                 <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu> */}
              </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}