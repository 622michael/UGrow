import React from "react"
import './css/Resources.css'

//png files
import resourcesIcon from './css/Resources_Page/RESOURCES.png'
import lehighUIcon from './css/Resources_Page/LEHIGH_UNIVERSITY.png'
import lehighVIcon from './css/Resources_Page/LEHIGH_VALLEY.png'
import usIcon from './css/Resources_Page/UNITED_STATES.png' 


const tabStates = {
  lehighU: 1,
  lehighV: 2,
  usa: 3,
}
export default class Resources extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentTab: 1,
    }
  }

  toLu = () => {
    this.setState({
      currentTab: tabStates.lehighU,
    })
    alert(this.state.currentTab)
  }
  toLv = () => {
    this.setState({
      currentTab: tabStates.lehighV,
    })
    alert(this.state.currentTab)
  }
  toUs = () => {
    this.setState({
      currentTab: tabStates.usa,
    })
    alert(this.state.currentTab)
  }

  render() {
    return (
      <div id="resources">
        <img src={resourcesIcon} alt ="" id="resourcesIcon" />
        <button id="lehighUIcon" onClick={this.toLu}>
          <img src={lehighUIcon} alt=""/>
        </button>
        <button id="lehighVIcon" onClick={this.toLv}>
          <img src={lehighVIcon} alt=""/>
        </button>
        <button id="usIcon" onClick={this.toUs}>
          <img src={usIcon} alt=""/>
        </button>
        <a id="resourceLink" href="https://studentaffairs.lehigh.edu/content/pride-center-0">
          <button id= "resourceButton">The Pride Center</button>
        </a>
      </div>
    );
  }
}