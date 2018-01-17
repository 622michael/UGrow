import React from "react"
import './Resources.css'

//png files
import resourcesIcon from './Resources_Page/RESOURCES.png'
import lehighUIcon from './Resources_Page/LEHIGH_UNIVERSITY.png'
import lehighVIcon from './Resources_Page/LEHIGH_VALLEY.png'
import usIcon from './Resources_Page/UNITED_STATES.png' 

/**
 * method for handling tab state needs to be determined. skeleton has been created though.
 */
export default class Resources extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentTab: 1,
    }
  }
  toLu = () => {
    this.setState({
      currentTab: 1,
    })
  }
  toLv = () => {
    this.setState({
      currentTab: 2,
    })
  }
  toUs = () => {
    this.setState({
      currentTab: 3,
    })
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
      </div>
    );
  }
}