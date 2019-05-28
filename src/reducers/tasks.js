// import update from 'react-addons-update';

const tasks = (state = [
      {id: 0, missionId: 1, description: 'Some task about education', completed: false},
      {id: 1, missionId: 2, description: 'Some miscellaneous task', completed: false},
      {id: 2, missionId: 3, description: 'Some task about health', completed: false},
      {id: 3, missionId: 3, description: 'Some task about health', completed: false}
    ], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          missionId: action.missionId,
          description: action.description
        }
      ]
    case 'UPDATE_TASK':
      // return update(state, { 
      //   [action.task_id]: {
      //     description: {$set: action.description}
      //   }
      // });
      return state.map(
        (task, i) => task.id === action.task_id ?
          {...task, description: action.description} :
          task
        )
    case 'DELETE_TASK':
      let deleteTaskIndex = state.findIndex((task) => task.id === action.task_id);
      console.log(deleteTaskIndex);
      return [
        ...state.slice(0, deleteTaskIndex),
        ...state.slice(deleteTaskIndex + 1)
      ]
    case 'TOGGLE_TASK':
      return state.map(
        (task, i) => task.id === action.task_id ?
          {...task, completed: !task.completed} :
          task
        )
    default:
      return state
  }
}

export default tasks