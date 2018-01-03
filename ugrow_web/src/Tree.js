import React, { Component } from "react";
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Tree extends Component {
  render() {
    return (
      <div id="tree">
        This is the Tree page.
        <Footer />
      </div>
    );
  }
}

const Footer = () => (
  <footer>
      <button>Tree</button>
      <button>
          <NavLink href="/feed">Feed</NavLink>
      </button>
  </footer>    
)