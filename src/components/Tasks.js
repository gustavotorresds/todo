import React, { Component } from 'react';
import { connect } from 'react-redux'

import Task from './Task.js';
import AddTask from './AddTask.js';

// const Tasks = ({ tasks, missions }) => (
//   <div className="tasks">
//     <div className="general">
//       <div className="subtitle">All tasks</div>
//       {tasks.map((task, index) =>
//         <Task task={task} mission={missions[task.mission_id]} key={index}/>
//       )}
//     </div>

//     <AddTask />
//   </div>
// )

class Tasks extends Component {
  render() {
    const {tasks, missions} = this.props;

    const allElements = tasks.map((task, index) =>
      <Task task={task} mission={missions[task.mission_id]} key={index}/>
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

        <AddTask />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  missions: state.missions
});

export default connect(
  mapStateToProps
)(Tasks);
