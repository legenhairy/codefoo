import React, { Component } from 'react';
import SelectionPanel from './SelectionPanel';
import ContentView from './ContentView';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }



  render() {
    return (
      <div className="App">
        <header className="title">Latest News</header>
        <hr></hr>
        <div className="app-container">  
          <SelectionPanel></SelectionPanel>
          <ContentView></ContentView>      
        </div>
      </div>
    );
  }
}

export default App;
