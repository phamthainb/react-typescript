/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

enum ActionTypes {
  LOADING = 'app/LOADING',
  AUTH = 'app/AUTH',
  LOCATION = 'app/LOCATION',
}

export default ActionTypes;
