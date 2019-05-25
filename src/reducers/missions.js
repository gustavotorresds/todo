const missions = (state = [
      {id: 1, name: 'Edu', color: 'green'},
      {id: 2, name: 'Mis', color: 'yellow'},
      {id: 3, name: 'Hea', color: 'purple'}
    ], action) => {
  switch (action.type) {
    case 'ADD_MISSION':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default missions