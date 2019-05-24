const missions = (state = [
      {name: 'Edu', color: 'green'},
      {name: 'Mis', color: 'yellow'},
      {name: 'Hea', color: 'purple'}
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