import React from "react";
import './css/Privacy.css';
import privacyIcon from './css/Privacy_Page/PRIVACY.png'

export default class Privacy extends React.Component {
  render() {
    return (
      <div id="privacy">
        <img src={privacyIcon} alt ="" id = "privacyIcon" />
      </div>
    );
  }
}