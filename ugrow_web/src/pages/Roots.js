import React, { Component } from 'react'
import { NavLink } from 'reactstrap'
import API from '../API'
import InputModal from '../components/userInput'

export default class Roots extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="roots">
                <br/>
                <br/>
                <br/>
                <br/>
                <InputModal/>
            </div>
        );
    }
}