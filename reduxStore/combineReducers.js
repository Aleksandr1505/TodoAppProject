import { combineReducers } from 'redux';
import { TodoReducer } from './createTodo/reducers';

const rootReducer = combineReducers({
    TodoReducer,
});

export default rootReducer;
