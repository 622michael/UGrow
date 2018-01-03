import React, { Component } from "react";
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonGroup, DropdownButton, Button, MenuItem } from "react-bootstrap";

export default class Roots extends Component {
  constructor(props){
      super(props);
      this.state = {
        value: '',
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

  
  render() {
    return (
      <div id="roots">
        <Header /> 
        This is the roots page.
        <ButtonGroup>
            <DropdownButton title="Sex" id="bg-nested-dropdown">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
        </ButtonGroup>
        <UncontrolledDropdown>
        <DropdownToggle caret>
            Religion
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
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