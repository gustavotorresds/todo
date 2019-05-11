import React, { Component } from 'react';

class Task extends Component {
  render() {
    const task = this.props.task;
    const mission = this.props.mission;


    return (
      <div className="task">
        <div className={'marker ' + mission.color}></div>
        <div className="description">{task.description}</div>
      </div>
    );
  }
}

export default Task;
