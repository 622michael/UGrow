import React, { Component } from "react";
import { NavLink } from 'reactstrap';

export default class Feed extends Component {
  render() {
    return (
      <div id="feed">
        This is the page dedicated to the feed.
        <Footer />
      </div>
    );
  }
}

const Footer = () => (
  <footer>
      <button>
          <NavLink href="/tree">Tree</NavLink>
      </button>
      <button>Feed</button>
  </footer>    
)