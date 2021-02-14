/*
 *
 * Home actions
 */

import * as types from "./constants";

export const changeLogin = (val: boolean) => ({
  type: types.LOGIN,
  payload: val,
});
