/**
 * The Reducers for todo.<br/>
 *
 * Reducer specify how the application’s state changes in response.
 * The word of 'Reducer' is derived from `Array.prototype.reduce()`
 * Given the same arguments,
 * 	it should calculate the next state and return it.
 * 	No surprises.
 * 	No side effects.
 * 	No API calls.
 * 	No mutations.
 * 	Just a calculation.
 */

import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

// Redux will call our reducer with an undefined state for the first time.
// This is our chance to return the initial state of our app
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

/**
 * Reducer for todos
 * @param  {Array} state  =             initialState include only sample todo
 * @param  {Redux Action} action
 * @return {Array} The list of todo
 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log('ADD_TODO reducer')
      return [
        {
          // Array.prototype.reduce(callback[, initialValue])
          //  the return value of the callback will be previous value
          // `(previous, current) => expression` equal `(previous, current) => return expression`
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    case DELETE_TODO:
      console.log('DELETE_TODO reducer')
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      console.log('EDIT_TODO reducer')
      return state.map(todo =>
        todo.id === action.id ?
          // We don’t mutate the state.
          Object.assign({}, todo, { text: action.text }) :
          todo
      );

    case COMPLETE_TODO:
      console.log('COMPLETE_TODO reducer')
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      );

    case COMPLETE_ALL:
      console.log('COMPLETE_ALL reducer')
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      console.log('CLEAR_COMPLETED reducer')
      return state.filter(todo => todo.completed === false);

    // It’s important to return the previous state for any unknown action.
    default:
      return state;
  }
}
