/*
 *
 * Home reducers
 *
 */
import * as types from "./constants";
import { ActionsHome, HomeStore } from "./types";

const initState: HomeStore = {
};

const reducersHome = (state = initState, actions: ActionsHome) => {
  switch (actions.type) {
    
    default:
      return { ...state };
  }
};

export default reducersHome;
