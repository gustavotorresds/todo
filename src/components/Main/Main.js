import React, { Component } from 'react';
import Add from './Add/Add';
import Nav from './Nav/Nav';
import Missions from './Missions/Missions';
import Tasks from './Tasks/Tasks';

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
