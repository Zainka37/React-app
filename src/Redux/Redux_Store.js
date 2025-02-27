import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import profileReducer from './profile_Reducer.js';
import sidebarReducer from './sidebar_Reducer.js';
import messagesReducer from './messagesPage_Reducer.js';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './Auth_Reducer.js';
import usersReducer from './Users_Redusers.js';
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar  :sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store =store;
export default store;
