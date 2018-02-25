import React, { Component } from "react"
import { NavLink } from 'reactstrap'
import ReactModal from 'react-modal'
import TreeModal from './userInput'
import './css/Tree.css'

import treeButton from './css/User_Tree_Page/Edit_my_tree_button.png'

export default class Tree extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="tree">
        <TreeModal />
      </div>
    );
  }
}