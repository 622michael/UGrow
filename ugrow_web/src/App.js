import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import TopNav from './Nav';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Hiw from './Hiw';
import Privacy from './Privacy';
import Resources from './Resources';

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
            <Route path='*' component={Home}/>
          </Switch>  
        </main>
      </div>
    );
  }
}

export default App;

/* const App = () => (
  <div>
    <Header />
    <Main />
  </div>  
) */