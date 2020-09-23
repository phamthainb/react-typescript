/*
 *
 * App actions
 *
 */
import * as types from "./constants";

export const changeLogin = (val: boolean) => ({
  type: types.LOGIN,
  payload: val,
});

export const changeLanguage = (val: string) => ({
  type: types.LANGUAGE,
  payload: val,
});
