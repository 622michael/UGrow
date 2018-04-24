import React, { Component } from "react"
import { NavLink } from 'reactstrap'
import ReactModal from 'react-modal'
import ProfModal from '../components/personalProf'
import SwitchButton from 'react-switch-button'
import '../css/Tree.css'


export default class Tree extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="tree">
        <ProfModal />
        <p id="profileName">
          Tommy's Tree
        </p>
        <div class="onoffswitch" id="actualswitch">
          <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"/>
          <label class="onoffswitch-label" for="myonoffswitch">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
        </div>
        <div class="onoffswitch" id="testswitch">
          <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"/>
          <label class="onoffswitch-label" for="myonoffswitch">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
        </div>
      </div>
    );
  }
}