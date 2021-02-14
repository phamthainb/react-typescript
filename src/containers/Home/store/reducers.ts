/*
 *
 * Home reducers
 *
 */
import { ActionsHome, HomeStore } from './types';
// import * as types from './constants';

const initState: HomeStore = {};

const reducersHome = (state = initState, actions: ActionsHome) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default reducersHome;
