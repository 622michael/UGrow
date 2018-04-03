import React, { Component } from "react"
import '../css/Feed.css'
import API from '../API'
import FeedModal from './feedTree'

//png files
import feedB from '../css/Feed_Page/Title_Feed_Back.png'
import feedF from '../css/Feed_Page/Title_Feed_Front.png'

export default class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
        feedPosts: [],
    };
  }

  loadFeed = (feed) => {
    let feedPosts = feed.map((f) => {
        return (
            <p key={f.id} id ="singlePost">
                <FeedModal user={f.username}/>
                <p id="feedText">
                <br/>
                  Q:{f.qText}
                  <br/> 
                  A:{f.aText}
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  testtesttesttesttesttesttesttesttest
                  submitted by: {f.username}
                </p>
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
        <div className="feedBounds">
          {this.state.feedPosts}
        </div>
      </div>
    );
  }
}
