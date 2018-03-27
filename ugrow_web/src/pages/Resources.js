import React from "react"
import '../css/Resources.css'
import API from '../API'

//png files
import resourcesIcon from '../css/Resources_Page/RESOURCES.png'
import lehighUIcon from '../css/Resources_Page/LEHIGH_UNIVERSITY.png'
import lehighVIcon from '../css/Resources_Page/LEHIGH_VALLEY.png'
import usIcon from '../css/Resources_Page/UNITED_STATES.png' 
import resourceButton from '../css/Resources_Page/RESOURCE_BUTTON.png'

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
      resourceLinks: [],
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

  setResources = (resources) => {
    console.log("resources:", resources);
    let rLinks = resources.map((rl) => {
        return (
          <a key={rl.id} href={rl.url} target="_blank" rel="noopener noreferrer">
            <img src={resourceButton} alt={rl.name}/>
            <div className="centered">{rl.name}</div>
          </a>
        )
    })
    this.setState({ resourceLinks: rLinks });
    console.log("state", this.state.resourceLinks);
}

  componentWillMount() {
    API.resourceData.then(resources => this.setResources(resources));
  }

  render() {
    return (
      <div>
        <div className="headers">
          <img src={resourcesIcon} alt ="" id="resourcesIcon" />
          <a onClick={this.toLu}>
            <img src={lehighUIcon} alt="Lehigh University Resources" id="lehighUIcon"/>
          </a>
          <a onClick={this.toLv}>
            <img src={lehighVIcon} alt="Lehigh Valley Resources" id="lehighVIcon"/>
          </a>
          <a onClick={this.toUs}>
            <img src={usIcon} alt="US Resources" id="usIcon"/>
          </a>
        </div>
        
        <div className = "links">
          {this.state.resourceLinks}
        </div>

      </div>
    );
  }
}