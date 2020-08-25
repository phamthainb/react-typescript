import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the layOut state domain
 */

const selectLayOutDomain = (state: ApplicationRootState) =>
  state.layOut || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LayOut
 */

const makeSelectLayOut = () =>
  createSelector(selectLayOutDomain, substate => substate);

export default makeSelectLayOut;
export { selectLayOutDomain };
