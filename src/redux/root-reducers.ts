import { combineReducers } from 'redux';
import App from '@containers/App/store/reducers';
import Home from '@containers/Home/store/reducers';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

//pages
const rootReducer = combineReducers({
  App,
  Home,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
});

export default rootReducer;
