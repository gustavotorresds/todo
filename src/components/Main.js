import React, { Component } from 'react';
import Add from './Add.js';
import Nav from './Nav.js';
import Missions from './Missions.js';
import Tasks from './Tasks.js';

class Main extends Component {
  render() {
    return (
      <main>
        <Nav/>
        <Missions />
        <Tasks />
        <Add />
      </main>
    );
  }
}

export default Main;
