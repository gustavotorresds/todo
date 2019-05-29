import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
        <Main />
        <footer></footer>
      </div>
    );
  }
}

export default App;
