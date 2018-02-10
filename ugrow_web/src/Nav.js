import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GoogleAuth from './OAuth'
import FaTree from 'react-icons/lib/fa/tree'


import './Nav.css'
// png files
import homeButton from './Main_Heading/HOME.png'
import aboutButton from './Main_Heading/DropDownMenu/ABOUT.png'
import howItWorks from './Main_Heading/DropDownMenu/HOW_IT_WORKS.png'
import resourceButton from './Main_Heading/DropDownMenu/RESOURCES.png'
import privacyButton from './Main_Heading/DropDownMenu/PRIVACY.png'
import signUpButton from './Main_Heading/DropDownMenu/SIGN_UP.png'
import feedButton from './Main_Heading/DropDownMenu/FEED.png'
import ddMenu from './Main_Heading/DropDownMenu/dropdownmenu.png'


export default class TopNav extends React.Component {
  constructor(props) {
    super(props)

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
    if (this.state.collapsed){
      return (
        <div>
            <NavbarBrand href="/" id="homeButton"> <img src={homeButton} alt=""/> </NavbarBrand>
            <NavLink href="/roots">Roots</NavLink>
            <button id="treeButton">
              <NavLink href="/tree">
                <FaTree />
              </NavLink>
            </button>
            <div id="googleButton">
              <GoogleAuth/>
            </div>
            <button onClick={this.toggleNavbar} id="ddMenu">
              <img src={ddMenu} alt="" width="35"/>
            </button>  
        </div>
      );
    }
    else {
      return (
        <div>
            <NavbarBrand href="/" id="homeButton"> <img src={homeButton} alt=""/> </NavbarBrand>
            <NavLink href="/roots">Roots</NavLink>
            <button id="treeButton">
              <NavLink href="/tree">
                <FaTree />
              </NavLink>
            </button>
            <div id="googleButton">
              <GoogleAuth/>
            </div>
            <button onClick={this.toggleNavbar} id="ddMenu">
              <img src={ddMenu} alt="" width="35"/>
            </button>
            <div class="menu">
              <div><NavLink href="/about"><img src={aboutButton} alt=""/></NavLink></div>
              <div><NavLink href="/hiw"><img src={howItWorks} alt=""/></NavLink></div>
              <NavLink href="/resources"><img src={resourceButton} alt=""/></NavLink>
              <div><NavLink href="/privacy"><img src={privacyButton} alt=""/></NavLink></div>
              <NavLink href="/"><img src={signUpButton} alt=""/></NavLink>
              <div><NavLink href="/feed"><img src={feedButton} alt=""/></NavLink></div>
            </div>    
        </div>
      );
    }
  }
}