import React from 'react';

// https://stackoverflow.com/questions/46164068/react-js-fetch-returns-empty-response-but-postman-does-not

export const MYJSON_TEST_URL = 'http://myjson.com/oj2vf';
export const REAL_POST_URL = '/users'


export default class API extends React.Component {

    static initialize() {/* Add DEVMODE options*/}

    // Sends token to backend
    static userSignIn(userToken) {
        return fetch(REAL_POST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userToken),
        }) 
        .catch(caught => console.log("Caught error: " + caught))
    }
}