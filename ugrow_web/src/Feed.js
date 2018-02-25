import React, { Component } from "react"
import './css/Feed.css'

//png files
/*import headingBox from './css/Feed_Page/Feed_Heading_Box.png'*/
import feedB from './css/Feed_Page/Title_Feed_Back.png'
import feedF from './css/Feed_Page/Title_Feed_Front.png'
import feedLeaf from './css/Feed_Page/Feed_Leaf.png'

export default class Feed extends Component {

  doSomething = () => {
    alert("you clicked the leaf!")
  }

  render() {
    return (
      <div className="feed">
        <img src ={feedB} alt="" id ="feedB"/>
        <img src ={feedF} alt="" id ="feedF"/>
        {/* <img src={headingBox} alt="" id="headingBox"/> */}
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>
          <button onClick = {this.doSomething} id = "feedLeaf">
            <img src={feedLeaf} alt=""/>
          </button>this is a test
        </p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        <p>this is a test</p>
        
          
      </div>
    );
  }
}
