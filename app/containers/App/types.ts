import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly auth: boolean;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = AppState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
