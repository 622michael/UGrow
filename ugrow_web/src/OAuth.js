import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
 
export default class GoogleAuth extends React.Component {

    //WEB_CLIENT_ID = "520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com";

    /* Collects the response */
    responseGoogle(response) {
        // Grabs the portion we want:
        //  - Right now it's the whole token object
        //  - If you want to get further though, use the console (on Google Chrome is what I did) to see the object hierarchy
        //  - i.e. I think adding '.id_token' to the end of this is what we need but I'm not sure
        let theGoods = response.tokenObj;

        // Here is where it logs it, again check it out because you can see the entire hierarchy
        console.log(theGoods);
      }

    render() {
        return (
                // The whole thing is just a button, with the functionality included
                // NOTE: the button is kind of ugly but can deal with that part later
                <GoogleLogin 
                    clientId="520933852537-7kp1tqiq1jl8qddoj9vsoh8rvu2a1tha.apps.googleusercontent.com"
                    buttonText="Login boii"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} />
        );
    }
}