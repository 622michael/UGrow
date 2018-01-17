import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css'
import TopNav from './Nav'

// Page Components
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Hiw from './Hiw'
import Privacy from './Privacy'
import Resources from './Resources'
import Roots from './Roots'
import Branches from './Branches'
import Extras from './Extras'
import Tree from './Tree'
import Feed from './Feed'

class App extends Component {
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
            <Route path='/branches' component={Branches}/>
            <Route path='/extras' component={Extras}/>
            <Route path='/tree' component={Tree}/>
            <Route path='/feed' component={Feed}/>
            <Route path='*' component={Home}/>
          </Switch>  
        </main>
      </div>
    );
  }
}

export default App;