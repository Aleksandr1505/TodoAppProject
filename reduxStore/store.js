import { applyMiddleware, createStore } from 'redux';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const useThunkDispatch = () => useDispatch();
