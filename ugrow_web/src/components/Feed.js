import React, { Component } from "react"
import '../css/Feed.css'
import API from '../API'

//png files
/*import headingBox from './css/Feed_Page/Feed_Heading_Box.png'*/
import feedB from '../css/Feed_Page/Title_Feed_Back.png'
import feedF from '../css/Feed_Page/Title_Feed_Front.png'
import feedLeaf from '../css/Feed_Page/Feed_Leaf.png'

export default class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
        feedPosts: [],
    };

    //this.handleChange = this.handleChange.bind(this);
}

  doSomething = () => {
    alert("you clicked the leaf!")
  }

  loadFeed = (feed) => {
    let feedPosts = feed.map((f) => {
        return (
            <p key={f.id} >
                <button onClick = {this.doSomething} id = "feedLeaf">
                  <img src={feedLeaf} alt=""/>
                </button>
                Q:{f.question}
                <br/>  
                A:{f.answer}
                submitted by: {f.username}
            </p>
        )
    })
    this.setState({ feedPosts: feedPosts });
}

componentWillMount() {
    API.feedData.then(questions => this.loadFeed(questions));
}

  render() {
    return (
      <div className="feed">
        <img src ={feedB} alt="" id ="feedB"/>
        <img src ={feedF} alt="" id ="feedF"/>
        <br/>
        <br/>
        <br/>
        <br/>
        {this.state.feedPosts}      
      </div>
    );
  }
}
