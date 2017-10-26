import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://github.com/electron/electron/issues/7300
// We don't want to bundle electron in the webpack process so we use it's globally exposed require method.
const electron = window.require('electron');
const fs = electron.remote.require('fs');
var files = fs.readdirSync('./');

class App extends Component {

  constructor(props){
    super(props)
    const url = "https://docs.google.com/presentation/d/e/2PACX-1vQnSbwQHHlO3nf6nlB85KxH-n_rIXbHQTnhUVQK8hoHM_U548L-mSk1VO7OlyfFlphw-b6_Qfnz6EJe/embed"
    this.state = {
      presentationUrl: process.env.PRESENTATION_URL || url,
      queryParams: "?start=true&loop=true&delayms=3000"
    }
  }

  render() {

    let height = window.innerHeight + 30
    let width = window.innerWidth

    console.log(height)
    console.log(width)

    let contStyle = {
      width: width,
      height: height - 30,
      overflow: "hidden"
    }

    console.log("The presentation" + this.state.presentationUrl)

    return (
      <div className="App">
        <div style={contStyle}>
          <iframe src={this.state.presentationUrl + this.state.queryParams}
            frameborder="0"
            width={width}
            height={height}
            position="relative"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true">
          </iframe>
        </div>
      </div>
    );
  }
}

export default App;
