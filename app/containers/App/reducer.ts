import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  auth: true,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}

export default appReducer;
