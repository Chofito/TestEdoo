export interface State<T> {
  [key: string]: T;
}

export type ItemReducer<T> = (
  state: T | undefined,
  action: any,
  id: string,
) => T | undefined;
export type GetId<T> = (action: any, state: State<T>) => string | undefined;

export function byId<T>(getId: GetId<T>, itemReducer: ItemReducer<T>) {
  return function reducer(state: State<T> = {}, action: any) {
    const id = getId(action, state);
    if (id) {
      const {[id]: itemState, ...newState} = state;
      const newItemState = itemReducer(itemState, action, id);
      if (newItemState !== undefined) {
        newState[id] = newItemState;
      }
      return newState;
    }

    return state;
  };
}
