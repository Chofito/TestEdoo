export interface Task {
  id: string;
  name: string;
  finalDate: string;
  description: string;
  taskOwner: string;
}

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
