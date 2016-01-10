import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

/**
 * Todo application root component
 *
 * @class App has two function<br/> Input new todo and show todos.
 */
class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  // You can use `bindActionCreators()` to automatically bind many action creators to a dispatch() function.
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

// You'll access `dispatch()` function using a helper like react-redux's connect().
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
