import React, { Component } from 'react';
import SelectionPanel from './SelectionPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title">Latest News</header>
        <hr></hr>
        <SelectionPanel></SelectionPanel>

      </div>
    );
  }
}

export default App;
