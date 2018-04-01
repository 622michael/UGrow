import React, { Component } from 'react'
import { NavLink } from 'reactstrap'
import API from '../API'
import InputModal from '../components/userInput'

export default class Roots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        API.postAnswer(1,69,this.state.value);
        console.log("Submitted");
        alert('An answer was submitted: ' + this.state.value);
    }

    render() {
        return (
            <div id="roots">
                <br/>
                <br/>
                <br/>
                <br/>
                <Header />
                This is the roots page.
                <InputModal/>
                <Footer />
                <button onClick={this.handleSubmit}>
                    Testing
                </button>
            </div>
        );
    }
}

const Header = () => (
    <header>
        ROOTS -----> Branches -----> Extras
    </header>
)

const Footer = () => (
    <footer>
        <button>
            <NavLink href="/branches">Continue</NavLink>
        </button>
    </footer>
)