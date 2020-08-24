import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const changeAuth = (value: boolean) => action(ActionTypes.AUTH, value);

export const changeLoading = (value: boolean) =>
  action(ActionTypes.LOADING, value);
