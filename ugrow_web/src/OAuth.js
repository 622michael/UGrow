import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
 
export default class GoogleAuth extends React.Component {

    //WEB_CLIENT_ID = "520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com";

    /* Collects the response */
    responseGoogle(response) {
        // Grabs the portion we want:
        //  - Right now it's the whole token object
        //  - If you want to get further though, use the console to see the object hierarchy
        //  - You were right, musa
        let theGoods = response.tokenObj.id_token;

        // Here is where it logs it, again check it out because you can see the entire hierarchy
        console.log(theGoods);
    }

    // currently response is always false, so either the logout doesn't work or onLogoutSuccess does not
    loggedOut(response) {
        response ? alert("You logged out") : alert("you did not log out");
    }

    render() {
        return (
                // The whole thing is just a button, with the functionality included
                // NOTE: the button is kind of ugly but can deal with that part later

                <div>
                <GoogleLogin 
                    clientId="520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com"
                    buttonText="Login boii"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} /> 
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.loggedOut}
                    >
                </GoogleLogout>    
                </div>     
        );
    }
}