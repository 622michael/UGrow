import React from 'react';

export const MYJSON_TEST_URL = 'https://api.myjson.com/bins/10oh0j';
export const USER_POST_URL = '/OAuth/login'


export default class API extends React.Component {

    static initialize() {/* Add DEVMODE options*/}

    ////////////////////////////////////
    ////// OAUTH-RELATED REQUESTS //////
    ////////////////////////////////////

    // Sends token to backend
    static userSignIn(userToken) {
        return fetch(USER_POST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userToken),
        }) 
        .catch(caught => console.log("Caught error: " + caught))
    }

    ///////////////////////////////////
    //// QUESTION-RELATED REQUESTS ////
    ///////////////////////////////////

    static get questionData() {
        return fetch(MYJSON_TEST_URL)
        .then(response => response.json()) 
        .then(json => {
            let qData = json.questions;
            console.log(qData);
            return qData;
        }) 
        .catch(caught => console.log("Caught error getting question data: " + caught))
    }
}