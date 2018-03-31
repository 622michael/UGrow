import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/profileTree.css'

import feedLeaf from '../css/Feed_Page/Feed_Leaf.png'

export default class profileTree extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showMod: false,
      userMod: null
    }

    this.handleOpenMod = this.handleOpenMod.bind(this)
    this.handleCloseMod = this.handleCloseMod.bind(this)
  }
 
  handleOpenMod(username){
    this.setState({showMod: true,
                   userMod: username})
  }
 
  handleCloseMod(){
    this.setState({showMod: false})
  }
  
  render() {
    return (
        <div className="profileModal">
          <button id ="leafButton" onClick={() => this.handleOpenMod(this.props.user)}><img src={feedLeaf} alt=""/></button>
          <ReactModal
            isOpen={this.state.showMod}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseMod}
            className="Modal"
            overlayClassName="Overlay"
          >
            <p>Question history for:</p>
            <br/>
            <p>{this.state.userMod}</p>
            <button onClick={this.handleCloseMod}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}