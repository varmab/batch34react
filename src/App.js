import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome'
import Friends from './Friends'
import Counter from './Counter'
import Greeting from './Greeting'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" password="123456"/>
          <Welcome name={"Ram"} year={2021} isNewYear={true} password="123456" />
        </header>
        <Greeting/>
      </div>
    );
  }
}

export default App;
