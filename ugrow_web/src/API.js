import React from 'react';

/* myJSON mock data */

// Get
export const ROOTS_QUESTIONS_TEST_URL = 'https://api.myjson.com/bins/wvxlj'
export const RESOURCES_TEST_URL = 'https://api.myjson.com/bins/1cn7w1'
export const RESOURCES_ROUTE = 'https://20a0ca07.ngrok.io/resources'
export const FEED_TEST_ROUTE = 'https://api.myjson.com/bins/u2jwn'
export const USER_FEED_420blazeit = 'https://api.myjson.com/bins/pb32f'
export const USER_FEED_veryhighIQindividual = 'https://api.myjson.com/bins/wgabr'


/* ngrok mock routes */

export const NGROK_BASE = 'https://6f8a3b04.ngrok.io/'

// Get
export const ROOTS_QUESTIONS_NGROK = NGROK_BASE + 'questions/root'
export const FEED_NGROK = NGROK_BASE + 'feed'

// Post
export const ANSWER_POST_NGROK = NGROK_BASE + 'answer'

/* Real routes */

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
        return fetch(ROOTS_QUESTIONS_NGROK)
        .then(response => response.json()) 
        .then(json => {
            let qData = json.questions;
            console.log(qData);
            return qData;
        }) 
        .catch(caught => console.log("Caught error getting question data: " + caught))
    }

    static postAnswer(qID, content) {
        console.log(qID+","+content)
        fetch(ANSWER_POST_NGROK, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                questionId:qID,
                aText:content
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
    }
    
    ///////////////////////////////////
    ////// FEED-RELATED REQUESTS //////
    ///////////////////////////////////

    static get feedData() {
        return fetch(FEED_NGROK)
        .then(response => response.json()) 
        .then(json => {
            let feedData = json.answers;
            console.log(feedData);
            return feedData;
        }) 
        .catch(caught => console.log("Caught error loading feed: " + caught))
    }

    static userFeed(userId) {
        var userFeedURL = FEED_NGROK + '/' + userId;

        // Actual route
        return fetch(userFeedURL)
        .then(response => {return response.json()}) 
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