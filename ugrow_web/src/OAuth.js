import React from 'react';
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
 
export default class GoogleAuth extends React.Component {

    //WEB_CLIENT_ID = "520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com";

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false
        };
    }

    toggle() {
        this.setState({
          isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        return (
            <GoogleAPI clientId = "520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com"
                onUpdateSigninStatus={Function}
                onInitFailure={Function} >
                <div>
                    { this.state.isLoggedIn ? <GoogleLogout
                                                text = "Log out boi"
                                                onLogoutSuccess = {() => this.toggle()}/> 
                                            : <GoogleLogin 
                                                text = "Log in PLEASE"
                                                onLoginSuccess = {() => this.toggle()}/> 
                    }
    		    </div>
            </GoogleAPI>
        );
    }
}