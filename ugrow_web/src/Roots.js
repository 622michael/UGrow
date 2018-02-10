import React, { Component } from "react";
import { NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

import API from './API';

export default class Roots extends Component {
  constructor(props){
      super(props);
      this.state = {
        value: '',
        rootQs: [],
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.toggle = this.toggle.bind(this);
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }

  setQuestions = (questions) => {
      let qDropdowns = questions.map((q) => {
          return(
            <UncontrolledDropdown key={q.qID}>
                <DropdownToggle caret>{q.qLabel}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Q1</DropdownItem>
                    <DropdownItem>Q2</DropdownItem>
                    <DropdownItem>Q3</DropdownItem>
                    <DropdownItem>Q4</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          )
      })
      this.setState({rootQs:qDropdowns});
      console.log("state", this.state.rootQs);
  }

  componentWillMount() {
      API.questionData.then(questions => this.setQuestions(questions));
  }
  
  render() {
    return (
      <div id="roots">
        <Header /> 
        This is the roots page.
        {this.state.rootQs}
        <form onSubmit={this.handleSubmit}>
            <label>
                My sex assigned at brith was...
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
        </form>
        <form onSubmit={this.handleSubmit}>    
            <label>
                My current sex is...
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            {/* <input type="submit" value="Submit" /> */}
        </form> 
        <Footer />
      </div>
    );
  }
}

const Header = () => (
    <header>
        ROOTS -----> Branches -----> Extras
    </header> 
)

/* const Sex = () => (
) */

/* const Form = () => (
    <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>    
) */

const Footer = () => (
    <footer>
        <button>
            <NavLink href="/branches">Continue</NavLink>
        </button>
    </footer>    
)