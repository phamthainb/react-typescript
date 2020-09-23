/*
 *
 * LayOut reducers
 *
 */
import * as types from "./constants";
import { ActionsLayOut, layoutStore } from "./types";

const initState: layoutStore = {
  loading: false,
};

const reducersLayOut = (state = initState, actions: ActionsLayOut) => {
  switch (actions.type) {
    case types.LOADING: {
      return { ...state, loading: actions.payload };
    }
    default:
      return { ...state };
  }
};

export default reducersLayOut;
