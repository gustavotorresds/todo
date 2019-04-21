import React, { Component } from 'react';
import Add from './Add.js';
import Nav from './Nav.js';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App-header">Hi, Gustavo</div>
        <Add />
        <Nav />
      </main>
    );
  }
}

export default Main;
