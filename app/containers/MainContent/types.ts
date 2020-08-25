import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface MainContentState {
  readonly default: any;
}

/* --- ACTIONS --- */
type MainContentActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = MainContentState;
type ContainerActions = MainContentActions;

export { ContainerState, ContainerActions };
