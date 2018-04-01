import React, { Component } from "react";
import { NavLink } from 'reactstrap'
export default class admin extends Component {
    constructor(props){
        super(props);
        this.state = {
          value: '',
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.toggle = this.toggle.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

  render() {
    return (
        <div id="admin">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1><u>Admin Page</u></h1>

            <br></br>

            <h2> Feed: </h2>

            <h3> Add a Message to the Feed</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Message: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>

            <br></br>

            <h3> Delete a Branch From the Feed</h3>
            <button>
                <NavLink href="/feed">Go to Feed</NavLink>
            </button>

            <br></br>
    
            <h3> Clear Entire Feed</h3>
            <button onSubmit="clearFeed"> Delete Feed</button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2> Resources: </h2>

            <h3> Add a New Resource</h3>
            <form onSubmit={this.handleSubmit}>    
                <label>
                    Resource Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Link: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            
            <br></br>

            <h3> Delete a Resource</h3>
            <form onSubmit={this.handleSubmit}>    
                <label>
                    Resource Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}