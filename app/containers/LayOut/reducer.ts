/*
 *
 * LayOut reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  menuBar: true,
};

function layOutReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.MENU_BAR:
      return { ...state, menuBar: action.payload };
    default:
      return state;
  }
}

export default layOutReducer;
