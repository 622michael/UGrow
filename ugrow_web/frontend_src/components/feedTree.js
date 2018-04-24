import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/feedTree.css'
import API from '../API'

import feedLeaf from '../css/Feed_Page/Feed_Leaf_2.png'
import topBranch from '../css/User_Tree_Page/tabs/root.graphic_2.png'
import sideBranch from '../css/User_Tree_Page/tabs/small.root.graphic.png'

export default class feedTree extends Component {
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

  handleOpenMod(userId){
    API.userFeed(userId).then(questions => this.loadUserFeed(questions)) 
    this.setState({showMod: true })
  }
 
  loadUserFeed = (feed) => {
    let userFeedPosts = feed.answers.map((f) => {
        return (
            <p key={f.id} id ="singleQA">
                <img src={sideBranch} alt="" id="sideBranch"/>
                <p id="postText">  
                  Q:{f.question.qText}
                  <br/> 
                  A:{f.aText}
                </p>
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
        <div className="feedModal">
          <button id ="leafButton" onClick={() => this.handleOpenMod(this.props.userId)}><img src={feedLeaf} alt=""/></button>
          <ReactModal
            isOpen={this.state.showMod}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseMod}
            className="Modal"
            overlayClassName="Overlay"
          >
          
          <img src={topBranch} alt="" id="topBranch"/>
            <h5 id="profTitle">Question history for: {this.state.userMod}</h5>
            <div id="profInfo">
              {this.state.userFeed}
            </div>
            <button id="closeButton" onClick={this.handleCloseMod}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}