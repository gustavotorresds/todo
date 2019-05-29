import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Tasks.scss';

import Task from './Task/Task';

class Tasks extends Component {
  render() {
    let {tasks, missions, missionFilter} = this.props;

    if (missionFilter !== null) {
      tasks = tasks.filter((task) => task.missionId === missionFilter)
    }

    const allElements = tasks.map((task, index) =>
      <Task
        task={task}
        mission={missions.find((mission) => mission.id === task.missionId)}
        key={index}/>
    );

    return (
      <div className="tasks">
        {/*<div className="musts">
                  <div className="subtitle">Today's musts</div>
                  {mustElements}
        </div>*/}

        <div className="general">
          <div className="subtitle">All tasks</div>
          {allElements}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  missions: state.missions,
  missionFilter: state.missionFilter
});

export default connect(
  mapStateToProps
)(Tasks);
