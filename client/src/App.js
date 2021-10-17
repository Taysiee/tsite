import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Navbar from './Components/Navbar/Navbar.js';
import TopNav from './Components/TopNav/topnav.js';

import Footer from './Components/Footer/footer.js';
import Home from './Components/Home/home.js';
import About from './Components/About/about.js';
import Work from './Components/Work/work.js';
import Contact from './Components/Contact/contact.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1> */}
         <Router>
          <div className="navagationDiv">
            <TopNav /> 
            <Navbar />
          </div>    
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/work">
                <Work/>
              </Route>

              

              <Route path="/contact">
                <Contact/>
              </Route>

            </Switch>
        
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;