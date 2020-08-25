import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the mainContent state domain
 */

const selectMainContentDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainContent
 */

const makeSelectMainContent = () =>
  createSelector(selectMainContentDomain, substate => substate);

export default makeSelectMainContent;
export { selectMainContentDomain };
