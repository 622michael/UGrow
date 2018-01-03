import React, { Component } from "react";
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Extras extends Component {
  render() {
    return (
      <div id="extras">
        <Header />
        This is the page where people make their own branches.
        So make your own questions!
        <Footer />
      </div>
    );
  }
}

const Header = () => (
  <header>
      Roots -----> Branches -----> EXTRAS
  </header> 
)

const Footer = () => (
  <footer>
      <button>
          <NavLink href="/tree">Finish</NavLink>
      </button>
  </footer>    
)