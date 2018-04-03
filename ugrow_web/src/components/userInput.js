import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/userInput.css'
import API from '../API'

import myTreeButton from '../css/User_Tree_Page/Edit_my_tree_button.png'
import topBranch from '../css/User_Tree_Page/tabs/root.graphic_2.png'
import sideBranch from '../css/User_Tree_Page/tabs/small.root.graphic.png'
import xButton from '../css/x_button.png'

export default class userInput extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showModal: false,
      questions: [],
      rootsIndex: 0,
      branchesIndex: 0,
      personalIndex: 0,
      tabIndex: 0,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleRootsNext = this.handleRootsNext.bind(this)
    this.handleBranchesNext = this.handleBranchesNext.bind(this)
    this.handlePersonalNext = this.handlePersonalNext.bind(this)
    this.handleRootsPrevious = this.handleRootsPrevious.bind(this)
    this.handleBranchesPrevious = this.handleBranchesPrevious.bind(this)
    this.handlePersonalPrevious = this.handlePersonalPrevious.bind(this)
    this.goRoots = this.goRoots.bind(this)
    this.goBranches = this.goBranches.bind(this)
    this.goPersonal = this.goPersonal.bind(this)
  }

  /**
   * Universal functions
   */
  goRoots(){
    this.setState({tabIndex:0})
  }
  goBranches(){
    this.setState({tabIndex:1})
  }
  goPersonal(){
    this.setState({tabIndex:2})
  }
  handleOpenModal(){
    API.questionData.then(questions => this.setQuestions(questions));
    this.setState({showModal: true})
  }
  setQuestions = (questions) => {
    let qDropdowns = questions.map((q) => {
        return (
            <form key={q.id} onSubmit={this.handleSubmit}>
                {q.qText}
                <input type="text" onChange={this.handleChange} />
                <br/>
                Consider: {q.consider}
            </form>
        )
    })
    this.setState({ questions: qDropdowns });
  }
  handleCloseModal(){
    this.setState({showModal: false})
    var currIndex = 0
    this.setState({
      rootsIndex: currIndex,
      branchesIndex: currIndex,
      persoanlIndex: currIndex,
      tabIndex: currIndex,
    })
  }

  /**
   * roots functions
   */
  handleRootsPrevious(){
    var currIndex = this.state.rootsIndex - 1
    this.setState({rootsIndex: currIndex})
  }
  handleRootsNext(){
    var currIndex = this.state.rootsIndex + 1
    this.setState({rootsIndex: currIndex})
  }

  /**
   * branches functions
   */
  handleBranchesPrevious(){
    var currIndex = this.state.branchesIndex - 1
    this.setState({branchesIndex: currIndex})
  }
  handleBranchesNext(){
    var currIndex = this.state.branchesIndex + 1
    this.setState({branchesIndex: currIndex})
  }

  /**
   * personal functions
   */
  handlePersonalPrevious(){
    var currIndex = this.state.rootsIndex - 1
    this.setState({personalIndex: currIndex})
  }
  handlePersonalNext(){
    var currIndex = this.state.personalIndex + 1
    this.setState({personalIndex: currIndex})
  }
  
  render() {
    if(this.state.tabIndex == 0){
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

              <img src={topBranch} alt="" id="topBranch"/>
              <button id="xButton" onClick={this.handleCloseModal}>close<img src={xButton} alt=""/></button>
              <div id="userInputContents">
                <p>{this.state.questions[this.state.rootsIndex]}</p>
                <br/>
                <br/>
                <button onClick={this.handleRootsPrevious}>Previous</button>
                <button onClick={this.handleRootsNext}>Next</button>
              </div>
              <button class="rootsButton" onClick={this.goRoots}>Roots</button>
              <button class="branchesButton" onClick={this.goBranches}>Branches</button>
              <button class="personalButton" onClick={this.goPersonal}>Personal</button>
            </ReactModal>
          </div>
      );
    }
    else if(this.state.tabIndex == 1){
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

            <img src={topBranch} alt="" id="topBranch"/>
            <button id="xButton" onClick={this.handleCloseModal}>close<img src={xButton} alt=""/></button>
            <div id="userInputContents">
              <p>Branches</p>
              <br/>
              <br/>
              <button onClick={this.handleBranchesPrevious}>Previous</button>
              <button onClick={this.handleBranchesNext}>Next</button>
            </div>
            <button class="rootsButton" onClick={this.goRoots}>Roots</button>
            <button class="branchesButton" onClick={this.goBranches}>Branches</button>
            <button class="personalButton" onClick={this.goPersonal}>Personal</button>
          </ReactModal>
        </div>
      );
    }
    else {
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

            <img src={topBranch} alt="" id="topBranch"/>
            <button id="xButton" onClick={this.handleCloseModal}>close<img src={xButton} alt=""/></button>
            <div id="userInputContents">
              <p>Personal</p>
              <br/>
              <br/>
              <button onClick={this.handlePersonalPrevious}>Previous</button>
              <button onClick={this.handlePersonalNext}>Next</button>
            </div>
            <button class="rootsButton" onClick={this.goRoots}>Roots</button>
            <button class="branchesButton" onClick={this.goBranches}>Branches</button>
            <button class="personalButton" onClick={this.goPersonal}>Personal</button>
          </ReactModal>
        </div>
      );
    }
  }
}