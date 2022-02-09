import * as React from "react";

//! simple action type
/* type CounterAction = {
  type: string;
  payload: number;
}; */

//! strict action type
// type CounterAction = { type: "INCREMENT" | "DECREMENT" | "RESET"; payload?: number };

type UpdateActionType = { type: "INCREMENT" | "DECREMENT"; payload: number };

type ResetActionType = { type: "RESET" };

type ActionType = UpdateActionType | ResetActionType; // discriminated unions

const initialState = {
  count: 0,
};
function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increase</button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>Decrease</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};
