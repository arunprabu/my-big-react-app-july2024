/// Reducer
/*
 * function that takes in two params namely state and action
 * must return new state
 * action is an object
 *   action object can have two properties
 *   1. type
 *   2. payload -- (optional)
 * reducer should never be called directly
 * to execute reducer you have to dispatch an action
 *
 */

export interface ITodo {
  id: number;
  title: string;
  status: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: ITodo }
  | { type: "DELETE_TODO"; payload: number };

export function todoReducer(state: ITodo[] = [], action: Action): ITodo[] {
  console.log("INSIDE todoReducer");
  console.log(action);
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}