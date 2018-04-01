import React from 'react'
import { NavbarBrand, NavLink } from 'reactstrap'
import GoogleAuth from './OAuth'
import FaTree from 'react-icons/lib/fa/tree'


// png files
import homeButton from './css/Main_Heading/HOME.png'
import aboutButton from './css/Main_Heading/DropDownMenu/ABOUT.png'
import howItWorks from './css/Main_Heading/DropDownMenu/HOW_IT_WORKS.png'
import resourceButton from './css/Main_Heading/DropDownMenu/RESOURCES.png'
import privacyButton from './css/Main_Heading/DropDownMenu/PRIVACY.png'
import signUpButton from './css/Main_Heading/DropDownMenu/SIGN_UP.png'
import feedButton from './css/Main_Heading/DropDownMenu/FEED.png'
import ddMenu from './css/Main_Heading/DropDownMenu/dropdownmenu.png'

// Style components
import './css/Nav.css';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props)

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
            <div id = "adminLink"> <NavLink href="/admin">admin</NavLink> </div>
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
              <NavLink href="/about">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={aboutButton} alt=""/></NavLink>
              <br></br>
              <NavLink href="/hiw"><img src={howItWorks} alt=""/></NavLink>
              <br></br>
              <NavLink href="/resources">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={resourceButton} alt=""/></NavLink>
              <br></br>
              <NavLink href="/privacy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={privacyButton} alt=""/></NavLink>
              <br></br>
              <NavLink href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={signUpButton} alt=""/></NavLink>
              <br></br>
              <NavLink href="/feed">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={feedButton} alt=""/></NavLink>
            </div>    
        </div>
      );
    }
  }
}