import React, { Component } from "react"
import { NavLink } from 'reactstrap'
import './Tree.css'

export default class Tree extends Component {
  render() {
    return (
      <div className="tree">
        This is the Tree page.
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
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