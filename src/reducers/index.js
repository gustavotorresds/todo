import { combineReducers } from 'redux'
import missions from './missions'
import tasks from './tasks'

export default combineReducers({
  missions,
  tasks
})