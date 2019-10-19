import {Task, ADD_TASK, UPDATE_TASK, REMOVE_TASK} from '../types/task';

const addTask = (task: Task) => {
  return {
    type: ADD_TASK,
    id: task.id,
    task,
  };
};

const updateTask = (task: Task) => {
  return {
    type: UPDATE_TASK,
    id: task.id,
    task,
  };
};

const removeTask = (task: Task) => {
  return {
    type: REMOVE_TASK,
    id: task.id,
    task,
  };
};

export default {addTask, updateTask, removeTask};
