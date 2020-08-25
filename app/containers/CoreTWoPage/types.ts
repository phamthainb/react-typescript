import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface CoreTWoPageState {
  readonly default: any;
}

/* --- ACTIONS --- */
type CoreTWoPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = CoreTWoPageState;
type ContainerActions = CoreTWoPageActions;

export { ContainerState, ContainerActions };
