import React, { Component } from 'react'
import { NavLink } from 'reactstrap'
import API from '../API'

export default class Roots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rootQs: [],
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

    setQuestions = (questions) => {
        let qDropdowns = questions.map((q) => {
            return (
                <form key={q.id} onSubmit={this.handleSubmit}>
                    {q.qText}
                    <input type="text" onChange={this.handleChange} />
                </form>
            )
        })
        this.setState({ rootQs: qDropdowns });
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