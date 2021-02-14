/*
 *
 * App reducers
 *
 */
import * as types from './constants';
import { ActionsApp, AppStore } from './types';
import { AppLanguage } from './types';

const initState: AppStore = {
  login: false,
  lang: AppLanguage.vi,
  loading: false,
};

const reducersApp = (state = initState, actions: ActionsApp): AppStore => {
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
