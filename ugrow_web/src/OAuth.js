import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
 
export default class GoogleAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    //const WEB_CLIENT_ID = '520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com';

    /* Collects the response */

    handleLoginSuccess = (response) => {
        // Grabs the token portion we want:
        let theGoods = response.tokenObj.id_token;
        console.log(theGoods);

        // Sets state to logged in
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutSuccess = () => {
        // NOTE: there is no response
        // Sets state to logged out
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        if (!this.state.isLoggedIn){
            // Render as Login button
            return (
                    // The whole thing is just a button, with the functionality included
                    // NOTE: the button is kind of ugly but can deal with that part later 
                    <GoogleLogin 
                        clientId="520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com"
                        buttonText="Login!"
                        onSuccess={this.handleLoginSuccess}
                        onFailure={this.responseGoogle} />   
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