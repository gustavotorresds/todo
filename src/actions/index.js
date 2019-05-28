let nextMissionId = 0

export const addMission = text => ({
  type: 'ADD_MISSION',
  id: nextMissionId++,
  text
})

let nextTaskId = 4
export const addTask = (text, missionId) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  missionId: missionId,
  description: text,
  completed: false
})

export const updateTask = (taskId, newDescription) => ({
	type: 'UPDATE_TASK',
	task_id: taskId,
	description: newDescription
})

export const deleteTask = taskId => ({
  type: 'DELETE_TASK',
  task_id: taskId
})

export const toggleTask = taskId => ({
  type: 'TOGGLE_TASK',
  task_id: taskId
})

export const setMissionFilter = missionId => ({
  type: 'SET_MISSION_FILTER',
  missionId: missionId
})
