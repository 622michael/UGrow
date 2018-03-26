import React from "react";
import './css/About.css'

//png files
import aboutIcon from './css/About_Page/ABOUT.png'
import projectIcon from './css/About_Page/THE_PROJECT.png'
import teamIcon from './css/About_Page/THE_TEAM.png'

export default class About extends React.Component {
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
        <div id="about">
          <img src={aboutIcon} alt="" id="aboutIcon"/>
          <button id="projectIcon" onClick={this.switchLeft}>
            <img src={projectIcon} alt=""/>
          </button>
          <button id="teamIcon" onClick={this.switchRight}>
            <img src={teamIcon} alt=""/>
          </button>
          <div id="aboutTeam">
            <p>
              Graduating in May 2018, Lexi Haggert is a senior at Lehigh University majoring in Accounting 
              with minors in Global Studies and Anthropology. Throughout her time at Lehigh, she has been 
              involved in the work of Lehigh’s Center for Gender Equity and Break the Silence, a club sponsored by 
              the Office of Gender Violence Education and Support. During her studies, Lexi had the opportunity to do 
              research in Ghana surrounding the gendered experience of the transatlantic slave trade as well as travel 
              to Denmark and Cambodia. Her after-graduation plans include moving to Philadelphia, getting her CPA, and 
              working for a Big Four firm. She hopes to use her interdisciplinary background to create a more diverse, open, 
              and inclusive business environment within her firm and the larger business community. 
            </p>
            <p>
              Katie Barr is also a senior at Lehigh University, double majoring in Global Studies and German 
              with a minor in Anthropology.  Katie works at Lehigh’s Center for Community Engagement, which seeks to 
              bring the Lehigh community and the greater Bethlehem community closer together.  Her academic interests 
              include community engagement, service learning, and the current refugee crisis, which she has studied in 
              both Germany and Bethlehem through interaction with local refugee populations. Katie seeks to bring a 
              globally-minded approach to her work in local communities and draws on experiences from her time working 
              and studying abroad in both Germany and Cambodia.  Upon her graduation, she wishes to pursue an M.A. in Sociology 
              and gain further experiences in community engagement through Lehigh’s Community Fellows Program.
            </p>
          </div>      
        </div>
      );
    }
    else {
      return(
        <div id="about">
          <img src={aboutIcon} alt="" id="aboutIcon"/>
          <button id="projectIcon" onClick={this.switchLeft}>
            <img src={projectIcon} alt=""/>
          </button>
          <button id="teamIcon" onClick={this.switchRight}>
            <img src={teamIcon} alt=""/>
          </button>
          <div id="aboutProject">
            <p>
              The U|Grow project started as a senior capstone project 
              within the Lehigh University Global Citizenship Program, 
              which seeks to create young adults who strive for personal, 
              social, and corporate responsibility within the global community. 
              The U|Grow team began with an interest in improving the Lehigh campus climate surrounding gender. 
              The team quickly grew this vision to connect and include communities from all over the world. 
            </p>
            <p>
              The project is designed to aid individuals both on Lehigh’s campus and across the globe 
              in understanding, developing, and sharing their gender identity in a way which fosters equity 
              and inclusion in their communities. It is structured to promote both individual reflection and greater 
              understanding through interaction with others. The user reflects upon their own 
              identity and experiences and then has the ability to explore others’ identities and experiences.  
            </p>
            <p>
              The goal of the U|Grow initiative is to create more inclusive and equitable communities 
              through increased awareness of the role gender plays in our lives.  We hope that each of our 
              users is able to use U|Grow to better understand both their own gendered experiences and those of others.
            </p>
          </div>     
        </div>
      );
    }
  }
}