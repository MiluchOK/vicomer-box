import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://github.com/electron/electron/issues/7300
// We don't want to bundle electron in the webpack process so we use it's globally exposed require method.
const electron = window.require('electron');
const fs = electron.remote.require('fs');
var files = fs.readdirSync('./');

class App extends Component {
  render() {
    return (
      <div className="App">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQW71LSwpNEu_0dCEki9B5TK6w4uBqcauoAjp1qnwFxqV65cWKo2kjcNZ4fC85pvYGBSMCo3NllTYwb/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
          
        </iframe>
      </div>
    );
  }
}

export default App;
