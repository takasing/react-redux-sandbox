/**
 * The Action Creators for todo.<br/>
 *
 * Actions are
 * 	- payloads of information that send data from your application to your store.
 *  - are plain JavaScript objects.<br/>
 *  - must have a `type` property that indicates the type of action being performed.
 *  - describe the fact that something happened.
 */

import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  console.log('ADD_TODO action');
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  console.log('DELETE_TODO action');
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  console.log('EDIT_TODO action');
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  console.log('COMPLETE_TODO action');
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  console.log('COMPLETE_ALL action');
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  console.log('CLEAR_COMPLETED action');
  return { type: types.CLEAR_COMPLETED }
}
