let nextMissionId = 0

export const addMission = text => ({
  type: 'ADD_MISSION',
  id: nextMissionId++,
  text
})

let nextTaskId
export const addTask = text => ({
  type: 'ADD_TASK',
  mission_id: 1,
  description: text
})

export const updateTask = (taskId, newDescription) => ({
	type: 'UPDATE_TASK',
	task_id: taskId,
	description: newDescription
})