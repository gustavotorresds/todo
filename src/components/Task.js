import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions';
import Swipeout from 'rc-swipeout';
import 'rc-swipeout/assets/index.css';

class Task extends Component {
  handleChange(event) {
    const task = this.props.task;
    const newDescription = event.target.value;

    this.props.dispatch(updateTask(task.id, newDescription));
  }

  handleRemove() {
    const task = this.props.task;
    this.props.dispatch(deleteTask(task.id));
  }

  render() {
    const task = this.props.task;
    const mission = this.props.mission;

    return (
      <Swipeout
        right={[
          {
            text: 'delete',
            onPress: () => this.handleRemove(),
            style: { backgroundColor: 'red', color: 'white' },
            className: 'custom-class-1'
          }
        ]}
        autoClose={true}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <form className="task">
          <div className={'marker ' + mission.color}></div>
          <input
            className="description"
            value={task.description}
            onChange={(event) => this.handleChange(event)}
          />
        </form>
      </Swipeout>
    );
  }
}

export default connect()(Task);
