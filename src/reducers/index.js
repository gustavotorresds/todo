import { combineReducers } from 'redux'
import missions from './missions'
import tasks from './tasks'
import missionFilter from './missionFilter'

export default combineReducers({
  missions,
  tasks,
  missionFilter
})