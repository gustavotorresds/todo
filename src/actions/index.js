export const FETCH_TODOS = "FETCH_TODOS";

// export const addToDo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };
// 
// export const completeToDo = completeToDo => async dispatch => {
//   todosRef.child(completeToDo).remove();
// };
// 
// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };

// TODO: this is potentially wrong.
export const fetchToDos = () => async dispatch => {
	dispatch({
	  type: FETCH_TODOS,
	  payload: ["T1", "T2"]
	});
};