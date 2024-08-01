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

type Action = {
  type: "ADD_TODO";
  payload: ITodo;
} | {
  type: "DELETE_TODO";
  payload: ITodo;
}

export function todoReducer(state: ITodo[] = [], action: Action) {
  // here you have manage the state based on the type of action dispatched
  console.log("INSIDE todoReducer");
  console.log(action);
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state, // spread operator in JS
        action.payload,
      ];
    }
    default:
      return state;
  }
}
