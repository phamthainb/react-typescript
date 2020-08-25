import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface LayOutState {
  menuBar: boolean;
}

/* --- ACTIONS --- */
type LayOutActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = LayOutState;
type ContainerActions = LayOutActions;

export { ContainerState, ContainerActions };
