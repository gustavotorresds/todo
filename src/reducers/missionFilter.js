const missionFilter = (state = null, action) => {
  switch (action.type) {
    case 'SET_MISSION_FILTER':
      return action.missionId
    default:
      return state
  }
}

export default missionFilter
