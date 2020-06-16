import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" />
          <Welcome name={"Ram"} year={2020} />
        </header>
      </div>
    );
  }
}

export default App;
