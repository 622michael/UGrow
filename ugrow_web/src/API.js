import React from 'react';

// Get
export const ROOTS_QUESTION_TEST_URL = 'https://api.myjson.com/bins/125zn5'
export const RESOURCES_TEST_URL = 'https://api.myjson.com/bins/1cn7w1'
export const RESOURCES_ROUTE = 'https://20a0ca07.ngrok.io/resources'
export const FEED_TEST_ROUTE = 'https://api.myjson.com/bins/s9vtj'

// Post
export const USER_POST_URL = '/OAuth/login'
export const ANSWER_POST_TEST_ROUTE = 'https://3355765a.ngrok.io/answer'


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
        return fetch(ROOTS_QUESTION_TEST_URL)
        .then(response => response.json()) 
        .then(json => {
            let qData = json.questions;
            console.log(qData);
            return qData;
        }) 
        .catch(caught => console.log("Caught error getting question data: " + caught))
    }

    static postAnswer(qID, uID, content) {
        console.log(qID+","+uID+","+content);
        fetch(ANSWER_POST_TEST_ROUTE, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                question_id:qID,
                user_id:uID,
                content:content
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
    }

    static get feedData() {
        return fetch(FEED_TEST_ROUTE)
        .then(response => response.json()) 
        .then(json => {
            let feedData = json.feed;
            console.log(feedData);
            return feedData;
        }) 
        .catch(caught => console.log("Caught error loading feed: " + caught))
    }

    ///////////////////////////////////
    //// RESOURCE-RELATED REQUESTS ////
    ///////////////////////////////////

    static get resourceData() {
        return fetch(RESOURCES_TEST_URL)
        .then(response => response.json()) 
        .then(json => {
            let resourceData = json.resources;
            console.log(resourceData);
            return resourceData;
        }) 
        .catch(caught => console.log("Caught error getting resource data: " + caught))
    }
}