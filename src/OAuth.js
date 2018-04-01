import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import API from './API';
import './css/OAuth.css'

import loginIcon from './css/Main_Heading/SIGN_IN.png'

const WEB_CLIENT_ID = '520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com';

export default class GoogleAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    toggle() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        })
    }

    /* Collects the response */

    handleLoginSuccess(response) {
        // Grabs the token portion we want:
        let userToken = response.tokenObj;
        console.log(userToken);
        
        // Make HTTP request
        let postReponse = API.userSignIn(userToken);
        console.log(postReponse);

        // Switches state to show sign out button
        this.toggle();
    }

    handleLogoutSuccess() {this.toggle()}
        

    render() {
        if (!this.state.isLoggedIn){
            // Render as Login button
            return (
                    // The whole thing is just a button, with the functionality included
                    // NOTE: the button is kind of ugly but can deal with that part later    
                    <GoogleLogin
                        clientId={WEB_CLIENT_ID}
                        onSuccess={this.handleLoginSuccess}
                        onFailure={this.responseGoogle} >
                        <img src={loginIcon} alt=""/> 
                    </GoogleLogin>      
            );
        }

        else{
            // Render as Logout button
            return (
                <GoogleLogout
                    buttonText="Logout!"
                    onLogoutSuccess={this.handleLogoutSuccess} />
            );
        }
    }
}