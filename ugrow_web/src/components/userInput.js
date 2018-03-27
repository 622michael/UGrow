import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/userInput.css'

import myTreeButton from '../css/User_Tree_Page/Edit_my_tree_button.png'

export default class userInput extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
 
  handleOpenModal(){
    this.setState({showModal: true})
  }
 
  handleCloseModal(){
    this.setState({showModal: false})
  }
  
  render() {
    return (
        <div>
          <button id ="editButton" onClick={this.handleOpenModal}><img src={myTreeButton} alt=""/></button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <p>Modal text!</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}