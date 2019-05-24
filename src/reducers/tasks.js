import update from 'react-addons-update';

const tasks = (state = [
      {id: 0, mission_id: 0, description: 'Some task about education'},
      {id: 1, mission_id: 1, description: 'Some miscellaneous task'},
      {id: 2, mission_id: 2, description: 'Some task about health'},
      {id: 3, mission_id: 2, description: 'Some task about health'}
    ], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          mission_id: action.mission_id,
          description: action.description
        }
      ]
    case 'UPDATE_TASK':
      return update(state, { 
        [action.task_id]: {
          description: {$set: action.description}
        }
      });
    default:
      return state
  }
}

export default tasks