import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/profileTree.css'

import feedLeaf from '../css/Feed_Page/Feed_Leaf.png'

export default class profileTree extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showMod: false
    }

    this.handleOpenMod = this.handleOpenMod.bind(this)
    this.handleCloseMod = this.handleCloseMod.bind(this)
  }
 
  handleOpenMod(){
    this.setState({showMod: true})
  }
 
  handleCloseMod(){
    this.setState({showMod: false})
  }
  
  render() {
    return (
        <div className="profileModal">
          <button id ="leafButton" onClick={this.handleOpenMod}><img src={feedLeaf} alt=""/></button>
          <ReactModal
            isOpen={this.state.showMod}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseMod}
            className="Modal"
            overlayClassName="Overlay"
          >
            <p>Modal text!</p>
            <button onClick={this.handleCloseMod}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}