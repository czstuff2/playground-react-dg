import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBarContainer'
import ManufacturerContainer from './components/ManufacturerContainer'
import InnovaContainer from './components/innova/InnovaContainer'

// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

class App extends Component {
    state = {
        toHome: false
    };
    goHome = () => {
        this.setState({ toHome: true });
    }
  render() {
    return (
        <Router>
              <div className="App">
                  <div className="container">
                    <NavBar />
                      <Switch>
                          <Route exact path="/" component={ManufacturerContainer} />
                          <Route path="/innova" component={InnovaContainer} />
                      </Switch>
                  </div>
              </div>
        </Router>
    );
  }
}

export default App;
