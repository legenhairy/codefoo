import React, { Component } from 'react';
import SelectionPanel from './SelectionPanel';
import ContentView from './ContentView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title">Latest News</header>
        <hr></hr>
        <SelectionPanel></SelectionPanel>
        <ContentView></ContentView>
      </div>
    );
  }
}

export default App;
