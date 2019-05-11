import React, { Component } from 'react';

import Task from './Task.js';

class Tasks extends Component {
  render() {
    const missionTags = {
      1: {id: 1, name: 'Edu', color: 'green'},
      2: {id: 2, name: 'Mis', color: 'yellow'},
      3: {id: 3, name: 'Hea', color: 'purple'}
    };

    const mustTasks = [
      {mission_id: 1, description: 'Some task about education'},
      {mission_id: 2, description: 'Some miscellaneous task'}
    ];

    const allTasks = [
      {mission_id: 3, description: 'Some task about health'},
      {mission_id: 3, description: 'Some task about health'}
    ];

    const mustElements = mustTasks.map((task, index) =>
      <Task task={task} mission={missionTags[task.mission_id]} key={index}/>
    );

    const allElements = allTasks.map((task, index) =>
      <Task task={task} mission={missionTags[task.mission_id]} key={index}/>
    );

    return (
      <div className="tasks">
        <div className="musts">
          <div className="subtitle">Today's musts</div>
          {mustElements}
        </div>

        <div className="general">
          <div className="subtitle">All tasks</div>
          {allElements}
        </div>
      </div>
    );
  }
}

export default Tasks;
