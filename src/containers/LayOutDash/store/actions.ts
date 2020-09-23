/*
 *
 * LayOut actions
 *
 */
import * as types from "./constants";

export const changeLoading = (val: boolean) => ({
  type: types.LOADING,
  payload: val,
});
