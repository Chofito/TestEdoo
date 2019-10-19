import {
  TaskOwner,
  ADD_TASK_OWNER,
  UPDATE_TASK_OWNER,
  REMOVE_TASK_OWNER,
} from '../types/taskOwner';

const addTaskOwner = (owner: TaskOwner) => {
  return {
    type: ADD_TASK_OWNER,
    id: owner.id,
    owner,
  };
};

const updateTaskOwner = (owner: TaskOwner) => {
  return {
    type: UPDATE_TASK_OWNER,
    id: owner.id,
    owner,
  };
};

const removeTaskOwner = (owner: TaskOwner) => {
  return {
    type: REMOVE_TASK_OWNER,
    id: owner.id,
    owner,
  };
};

export default {
  addTaskOwner,
  updateTaskOwner,
  removeTaskOwner,
};
