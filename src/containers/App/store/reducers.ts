/*
 *
 * App reducers
 *
 */
import * as types from './constants';
import { ActionsApp, AppStore } from './types';

const initState: AppStore = {
  login: false,
  lang: 'vi',
  loading: false,
};

const reducersApp = (state = initState, actions: ActionsApp) => {
  switch (actions.type) {
    case types.LOGIN: {
      return { ...state, login: actions.payload };
    }
    case types.LANGUAGE: {
      return { ...state, lang: actions.payload };
    }
    default:
      return { ...state };
  }
};

export default reducersApp;
