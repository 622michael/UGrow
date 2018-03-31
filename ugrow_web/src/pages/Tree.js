import React, { Component } from "react"
import { NavLink } from 'reactstrap'
import ReactModal from 'react-modal'
import TreeModal from '../components/userInput'
import SwitchButton from 'react-switch-button'
import '../css/Tree.css'


export default class Tree extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="tree">
        <TreeModal />
          <div class="onoffswitch">
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