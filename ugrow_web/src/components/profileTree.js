import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/profileTree.css'
import API from '../API'

import feedLeaf from '../css/Feed_Page/Feed_Leaf.png'

export default class profileTree extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showMod: false,
      userMod: null,
      userFeed: []
    }

    this.handleOpenMod = this.handleOpenMod.bind(this)
    this.handleCloseMod = this.handleCloseMod.bind(this)
  }

  handleOpenMod(username){
    API.userFeed(username).then(questions => this.loadUserFeed(questions)) 
    this.setState({showMod: true,
                   userMod: username})
  }
 
  loadUserFeed = (feed) => {
    let userFeedPosts = feed.map((f) => {
        return (
            <p key={f.id} >
                Q:{f.question}
                <br/> 
                A:{f.answer}
                submitted by:{f.username}
            </p>
        )
    })
    this.setState({ userFeed: userFeedPosts });
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
            <br/>
            {this.state.userFeed}
            <button onClick={this.handleCloseMod}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}