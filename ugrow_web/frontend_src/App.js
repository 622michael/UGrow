import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// Style components
import './css/App.css';

// Service components
import API from './API'

// Visual components
import TopNav from './components/Nav'

// Page Components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hiw from './pages/Hiw'
import Privacy from './pages/Privacy'
import Resources from './pages/Resources'
import Roots from './pages/Roots'
import Tree from './pages/Tree'
import Feed from './components/Feed'
import admin from './admin'

class App extends Component {

  componentWillMount() {
    API.initialize();
  }
  
  render() {
    return (
      <div className="App">
        <TopNav />
        <main>
           <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/hiw' component={Hiw}/>
            <Route path='/privacy' component={Privacy}/>
            <Route path='/resources' component={Resources}/>
            <Route path='/roots' component={Roots}/>
            <Route path='/tree' component={Tree}/>
            <Route path='/feed' component={Feed}/>
            <Route path='/admin' component={admin}/>
            <Route path='*' component={Home}/>
          </Switch>  
        </main>
        
        <treeModal />
      </div>
    );
  }
}

export default App;