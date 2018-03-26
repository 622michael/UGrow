import React, { Component } from "react"
import './css/Home.css'
import motto from './css/Home_Page/Motto.png'
import leaf1 from './css/Home_Page/Leaf.1.png'
import leaf2 from './css/Home_Page/Leaf.2.png'
import leaf3 from './css/Home_Page/Leaf.3.png'
import leaf4 from './css/Home_Page/Leaf.4.png'
import leaf5 from './css/Home_Page/Leaf.5.png'
import leaf6 from './css/Home_Page/Leaf.6.png'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
          <img src={motto} alt="" id="motto"/>
          <img src={leaf1} alt="" id="leaf1"/>
          <img src={leaf2} alt="" id="leaf2"/>
          <img src={leaf3} alt="" id="leaf3"/>
          <img src={leaf4} alt="" id="leaf4"/>
          <img src={leaf5} alt="" id="leaf5"/>
          <img src={leaf6} alt="" id="leaf6"/>
      </div>
    );
  }
}