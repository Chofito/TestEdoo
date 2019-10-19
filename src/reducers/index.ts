import {byId} from '../utils/byId';
import {taskReducer} from './task';
import {taskOwnerReducer} from './taskOwner';
import {combineReducers} from 'redux';

export const tasks = byId(action => action.id, taskReducer);
export const owners = byId(action => action.id, taskOwnerReducer);

export const taskManager = combineReducers({tasks, owners});
