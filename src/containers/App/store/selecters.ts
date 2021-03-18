/*
 *
 * App selecters
 *
 */
import rootReducer from 'src/redux/root-reducers';

export const selectAppStore = (state: ReturnType<typeof rootReducer>) =>
  state.App;
