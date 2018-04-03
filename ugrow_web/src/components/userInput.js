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
      index: 0,
      value: ''
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleOpenModal(){
    API.questionData.then(questions => this.setQuestions(questions));
    this.setState({showModal: true})
  }

  setQuestions = (questions) => {
    let qDropdowns = questions.map((q) => {
        return (
          <div>
            <form key={q.id}>
                {q.qText}
                <input type="text" onChange={this.handleChange} />
                <br/>
                Consider: {q.consider}
                <br/>
                <br/>
            </form>
            <button onClick={(qID, val) => this.handleSubmit(q.id, this.state.value)}>Submit</button>
          </div>
        )
    })
    this.setState({ questions: qDropdowns });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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

  handleSubmit = (qID, val) => {
    API.postAnswer(qID, val);
    alert('The answer "' + val + '" was submitted for question: ' + qID)
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
            <button onClick={this.handlePrevious}>Previous</button>
            <button onClick={this.handleNext}>Next</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
    );
  }
}