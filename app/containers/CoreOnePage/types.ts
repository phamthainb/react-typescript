import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface CoreOnePageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type CoreOnePageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = CoreOnePageState;
type ContainerActions = CoreOnePageActions;

export { ContainerState, ContainerActions };
