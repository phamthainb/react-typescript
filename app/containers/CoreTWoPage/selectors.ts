import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the coreTWoPage state domain
 */

const selectCoreTWoPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CoreTWoPage
 */

const makeSelectCoreTWoPage = () =>
  createSelector(selectCoreTWoPageDomain, substate => substate);

export default makeSelectCoreTWoPage;
export { selectCoreTWoPageDomain };
