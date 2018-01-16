import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GoogleAuth from './OAuth'
import FaTree from 'react-icons/lib/fa/tree'

// Style components
import './css/Nav.css';

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
          <NavItem>
            <NavLink href="/roots">Roots</NavLink>
          </NavItem>
          <button>
            <NavLink href="/tree">
              <FaTree />
            </NavLink>
          </button>
          <GoogleAuth />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
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