import React, { Component } from 'react';
import Add from './Add.js';
import Nav from './Nav.js';
import Missions from './Missions.js';
import Tasks from './Tasks.js';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App-header">Hi, Gustavo</div>
        <Missions />
        <Tasks />
        <Add />
        <Nav />
      </main>
    );
  }
}

export default Main;
