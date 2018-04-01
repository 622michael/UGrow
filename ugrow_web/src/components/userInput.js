import React, { Component } from "react"
import ReactModal from 'react-modal'
import '../css/userInput.css'
import API from '../API'

import myTreeButton from '../css/User_Tree_Page/Edit_my_tree_button.png'

export default class userInput extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showModal: false,
      questions: [],
      index: 0
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
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
  }

  handlePrevious(){
    var currIndex = this.state.index - 1
    this.setState({index: currIndex})
  }

  handleNext(){
    var currIndex = this.state.index + 1
    this.setState({index: currIndex})
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
            <p>{this.state.questions[this.state.index]}</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <br/>
            <br/>
            <button onClick={this.handlePrevious}>Previous</button>
            <button onClick={this.handleNext}>Next</button>
          </ReactModal>
        </div>
    );
  }
}