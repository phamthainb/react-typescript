import configureStore from './configureStore';
import history from 'utils/history';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

export default store;
