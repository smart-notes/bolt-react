import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import Temp from '../TempComp';
import SnNavBar from '../NavBar'; //sn stands for smart notes

import logo from './logo.svg';
import './style.css';

class App extends Component {

  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Smart Notes</h2>
        </div>
        <SnNavBar />
        <p className="App-intro">   
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is a rip-off from react</p>
        <p>The only other route that has been setup is <a href="/about">this</a></p>
        <Temp />
      </div>
    );
  }
}

export default App;
