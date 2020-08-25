import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the coreOnePage state domain
 */

const selectCoreOnePageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CoreOnePage
 */

const makeSelectCoreOnePage = () =>
  createSelector(selectCoreOnePageDomain, substate => substate);

export default makeSelectCoreOnePage;
export { selectCoreOnePageDomain };
