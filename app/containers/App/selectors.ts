/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => state.global;

const selectRoute = (state: ApplicationRootState) => state.router;

// /////////////////
const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectLocation };
