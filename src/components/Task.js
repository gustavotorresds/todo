import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../actions'

class Task extends Component {
  handleChange(event) {
    const task = this.props.task;
    const newDescription = event.target.value;
    
    this.props.dispatch(updateTask(task.id, newDescription));
  }

  render() {
    const task = this.props.task;
    const mission = this.props.mission;

    return (
      <form className="task">
        <div className={'marker ' + mission.color}></div>
        <input className="description" value={task.description} onChange={(event) => this.handleChange(event)} />
      </form>
    );
  }
}

export default connect()(Task);
