import { combineReducers } from 'redux';
import todos from './todos';

// `combineReducers` expects an object, we can put all top-level reducers into a separate file,
//  export each reducer function,
//  and use import * as reducers to get them as an object with their names as the keys
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
