import React from 'react'
//import { Collapse, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GoogleAuth from './OAuth'
import FaTree from 'react-icons/lib/fa/tree'

// png files
import homeButton from './Main_Heading/HOME.png'
import aboutButton from './Main_Heading/DropDownMenu/ABOUT.png'
import howItWorks from './Main_Heading/DropDownMenu/HOW_IT_WORKS.png'
import resourceButton from './Main_Heading/DropDownMenu/RESOURCES.png'
import privacyButton from './Main_Heading/DropDownMenu/PRIVACY.png'
import signUpButton from './Main_Heading/DropDownMenu/SIGN_UP.png'
import feedButton from './Main_Heading/DropDownMenu/FEED.png'

export default class TopNav extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"> <img src={homeButton} alt=""/> </NavbarBrand>
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
                <NavLink href="/about"><img src={aboutButton} alt=""/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hiw"><img src={howItWorks} alt=""/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources"><img src={resourceButton} alt=""/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/privacy"><img src={privacyButton} alt=""/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><img src={signUpButton} alt=""/></NavLink>
              </NavItem> 
              <NavItem>
                <NavLink href="/feed"><img src={feedButton} alt=""/></NavLink>
              </NavItem> 
              {/*Fin out if a contact page is still desired*/} 
              {/* <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}