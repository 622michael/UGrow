import React from "react";
import './css/Hiw.css';
export default class Hiw extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      leftSide: false,
    }
  }

  switchRight = () => {
    this.setState({
        leftSide: false,
    })
  }

  switchLeft = () => {
    this.setState({
        leftSide: true,
    })
  }

  render() {
    if (!this.state.leftSide){
      return (
        <div id="hiw">
          <p id="hiwHeader">
            How it Works
          </p>
          <button style={{color: "#37c2c3"}} id="weGrowIcon" onClick={this.switchLeft}>
            We|Grow
          </button>
          <button style={{color: "#a0a0a0"}} id="uGrowIcon" onClick={this.switchRight}>
            U|Grow
          </button>
          <div id="uHiw">
            <p>
              After logging in, users will be prompted to answer questions about themselves and their 
              experiences in order to generate a personal tree.  This tree is meant to map each individual’s 
              gender identity as a growing, changing organism.  Here users can reflect on their experiences 
              and express themselves in a variety of formats, allowing the tree to grow as each person’s identity 
              and their understanding of gendered experience grow, too.  Even though we take you through the initial 
              set-up of your tree, you can always makes changes or add to it.

            </p>
            <h6>The Roots</h6>
            <p>
              Users will first be asked to answer questions about their identity.  Though each 
              question may not relate directly to gender identity, we feel that by including various 
              identity categories and seeking a more holistic understanding of our gender identities, 
              we can more easily see how gender identity intertwines with many of the other identities we carry.  
            </p>
            <p>
              The answers to these questions will then become the roots of the identity tree, as they are meant to 
              represent the way in which our 
              identity (our own personal roots) informs our everyday experiences and the way we choose to live.
            </p>
            <h6>The Branches &amp; Leaves</h6>  
            <p>
              After answering identity-related questions, users will be asked to reflect on the way their 
              gender identity has impacted their experiences through a set of questions.  These questions 
              will then become branches on the individual’s identity tree, while the answers will appear as leaves.  
              The leaves may contain written text or images.  
              We hope this inspires users to map their experiences in a variety of ways.
            </p>
            <p>
              Users will also discover that they can create their own questions as well.  
              These will appear as branches along with the other questions they 
              have answered, and users can respond with leaves in the same way.  
            </p>  
          </div>      
        </div>
      );
    }
    else {
      return(
        <div id="hiw">
          <p id="hiwHeader">
            How it Works
          </p>
          <button style={{color: "#a0a0a0"}} id="weGrowIcon" onClick={this.switchLeft}>
            We|Grow
          </button>
          <button style={{color: "#37c2c3"}} id="uGrowIcon" onClick={this.switchRight}>
            U|Grow
          </button>
          <div id="weHiw">
            <p>
              We believe that while personal growth and an understanding of individual identity is the first step 
              toward improving gender equity, we must also look outside of ourselves to create change in our 
              communities and strive for more open, inclusive spaces for individuals of all identities.  
            </p>
            <h6>The Feed</h6>
            <p>
              Outside of mapping their own gendered experiences, users can also explore the experiences of others 
              through a rolling feed which displays recently-posted leaves from other users.  To explore the identity 
              of the person whose leaf appears, users may click the leaf to connect to the creator’s full identity tree*.  
              By opting to use our feed tool, users can gain insight into others’ 
              gendered experiences and increase their awareness of gender’s impact and gender equity issues. 
            </p>
            <p>
              *All leaves and trees appear anonymously and by 
              the consent of their creator.  For more information, please see our privacy section.
            </p>
            <h6>Resources</h6>
            <p>
              The U|Grow platform also includes a resource section, in which users can access international, 
              national, and local resources (if their community is a part of our database).  We hope this can 
              encourage our users to understand the work of local organizations and seek support,
              knowledge, and connections.  If you would like to add a resource to our list, please click here.
            </p>  
          </div>     
        </div>
      );
    }
  }
}