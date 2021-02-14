import { combineReducers } from "redux";
import reducersApp from "@containers/App/store/reducers";
import reducersHome from "@containers/Home/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly



//pages
const rootReducer = combineReducers({
  //pages
  reducersHome,
  reducersApp,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  });

export default rootReducer;
