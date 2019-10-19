import {
  ADD_TASK_OWNER,
  UPDATE_TASK_OWNER,
  REMOVE_TASK_OWNER,
} from '../types/taskOwner';

export const taskOwnerReducer = (state: any = {}, action: any) => {
  console.log(state, 'este es el estado');
  console.log(action, 'esta es la accion');
  switch (action.type) {
    case ADD_TASK_OWNER:
    case UPDATE_TASK_OWNER:
      return {...action.owner};
    case REMOVE_TASK_OWNER:
      return undefined;
    default:
      return state;
  }
};
