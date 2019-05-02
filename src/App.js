import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Movie from './Movie';

import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>name: {character.name}</li>
            <li>born: {character.born}</li>
            <li>culture: {character.culture}</li>
          </ul>

          <br />
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/movie">Movie</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie" component={Movie} />
          </Switch>
      </div>
    );
  }
}



export default App;
