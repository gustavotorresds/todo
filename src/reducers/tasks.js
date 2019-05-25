// import update from 'react-addons-update';

const tasks = (state = [
      {id: 0, missionId: 1, description: 'Some task about education'},
      {id: 1, missionId: 2, description: 'Some miscellaneous task'},
      {id: 2, missionId: 3, description: 'Some task about health'},
      {id: 3, missionId: 3, description: 'Some task about health'}
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
    default:
      return state
  }
}

export default tasks