import { ACTION_TYPES } from "./action/postMessage";
const initialState = {
  list: [],
};

export const postMessage = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.Fetch_All:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
