import {ADD_TASK, UPDATE_TASK, REMOVE_TASK} from '../types/task';

export const taskReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case ADD_TASK:
    case UPDATE_TASK:
      return {...action.task};
    case REMOVE_TASK:
      return undefined;
    default:
      return state;
  }
};
