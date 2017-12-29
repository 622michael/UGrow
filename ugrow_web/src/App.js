import React, { Component } from 'react';
import './App.css';

// Service components
import API from './API'

// Visual components
import TopNav from './Nav';

class App extends Component {

  componentWillMount() {
    API.initialize();
  }
  
  render() {
    return (
      <div className="App">
        <TopNav />
      </div>
    );
  }
}

export default App;