const missions = (state = [
      {id: 1, name: 'Edu', color: '#2ECC71'},
      {id: 2, name: 'Mis', color: '#F1C40F'},
      {id: 3, name: 'Hea', color: '#8E44AD'}
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