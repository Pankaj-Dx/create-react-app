import { initialstate } from './App';

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "Decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialstate;
    default:
      return initialstate;
  }
}
