import expect from 'expect'
import * as actions from '../../src/actions/todos'
import * as types from '../../src/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to delete a todo', () => {
    const id = 4
    const expectedAction = {
      type: types.DELETE_TODO,
      id
    }
    expect(actions.deleteTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to edit a todo', () => {
    const id = 1
    const text = 'Updated docs'
    const expectedAction = {
      type: types.EDIT_TODO,
      id,
      text
    }
    expect(actions.editTodo(id, text)).toEqual(expectedAction)
  })

  it('should create an action to complete a todo', () => {
    const id = 1
    const expectedAction = {
      type: types.COMPLETE_TODO,
      id
    }
    expect(actions.completeTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to complete all todos', () => {
    const expectedAction = {
      type: types.COMPLETE_ALL,
    }
    expect(actions.completeAll()).toEqual(expectedAction)
  })
})
