import React from "react";
import './css/Privacy.css';
import privacyIcon from './css/Privacy_Page/PRIVACY.png'

export default class Privacy extends React.Component {
  render() {
    return (
      <div id="privacy">
        <img src={privacyIcon} alt ="" id = "privacyIcon" />
        <div id="privacyText">
          <p>
          Any disclosures of harassment or sexual misconduct made through U|Grow                          
          are not monitored.  You will not receive a response from U|Grow, law enforcement, 
          or any other resources to any disclosures made through any U|Grow platform.
          </p>
          <p>
          Please note that any information you choose to share on the U|Grow website 
          (with the exception of your name) is set to share automatically on the U|Grow feed. 
          To privatize individual pieces of information, click the “privatize” button located 
          under that piece of information. You can also privatize all elements of your tree during 
          the initial setup of your tree, or in the bottom right corner of your tree after it has been created.  
          </p>
          <p>
          Please avoid using individual names or personal identifiers in your responses 
          to maintain anonymity for yourself and those you include in your responses. 
          Only posts containing offensive or vulgar content will be blocked out or 
          removed by U|Grow administrators.   
          </p>
        </div>
      </div>
    );
  }
}