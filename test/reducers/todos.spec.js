import expect from 'expect'
import todos from '../../src/reducers/todos'
import * as types from '../../src/constants/ActionTypes'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }])
  })

  it('should handle ADD_TODO', () => {
    const text1 = 'Run the tests'
    expect(
      todos([], {
        type: types.ADD_TODO,
        text: text1
      })
    ).toEqual([{
      text: text1,
      completed: false,
      id: 0
    }])

    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: text1, completed: false, id: 1 }
    expect(
      todos([todo0], {
        type: types.ADD_TODO,
        text: text1
      })
    ).toEqual([todo1, todo0])
  })

  it('should handle DELETE_TODO', () => {
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: false, id: 1 }
    expect(
      todos([todo1, todo0], {
        type: types.DELETE_TODO,
        id: 1
      })
    ).toEqual([
      todo0
    ])
  })

  it('should handle EDIT_TODO', () => {
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: false, id: 1 }
    const edited = 'Edited text'
    expect(
      todos([todo1, todo0], {
        type: types.EDIT_TODO,
        text: edited,
        id: 1
      })
    ).toEqual([
      Object.assign({}, todo1, { text: edited }),
      todo0
    ])
  })

  it('should handle COMPLETE_TODO', () => {
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: false, id: 1 }
    expect(
      todos([todo1, todo0], {
        type: types.COMPLETE_TODO,
        id: 1
      })
    ).toEqual([
      Object.assign({}, todo1, { completed: true }),
      todo0
    ])
  })

  it('should handle COMPLETE_ALL', () => {
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: false, id: 1 }
    expect(
      todos([todo1, todo0], {
        type: types.COMPLETE_ALL
      })
    ).toEqual([
      Object.assign({}, todo1, { completed: true }),
      Object.assign({}, todo0, { completed: true })
    ])
    // Unmark if all todos are currently completed
    expect(
      todos([
        Object.assign({}, todo1, { completed: true }),
        Object.assign({}, todo0, { completed: true })
      ], {
        type: types.COMPLETE_ALL
      })
    ).toEqual([
      todo1,
      todo0
    ])
  })

  it('should handle CLEAR_COMPLETED', () => {
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: true, id: 1 }
    expect(
      todos([todo1, todo0], {
        type: types.CLEAR_COMPLETED
      })
    ).toEqual([
      todo0
    ])
  })

  it('should not generate id less than max id after CLEAR_COMPLETED', () => {
    const text2 = 'Added todo'
    const todo0 = { text: 'Use Redux', completed: false, id: 0 }
    const todo1 = { text: 'Run the tests', completed: false, id: 1 }
    expect(
      [
        {
          type: types.COMPLETE_TODO,
          id: 0
        }, {
          type: types.CLEAR_COMPLETED
        }, {
          type: types.ADD_TODO,
          text: text2
        }
      ].reduce(todos, [
        todo1,
        todo0
      ])
    ).toEqual([
      {
        text: text2,
        completed: false,
        id: 2
      },
      todo1
    ])
  })
})
