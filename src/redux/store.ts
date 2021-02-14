import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducers";
import thunk from "redux-thunk";

const hasExtension =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const composeWith = hasExtension
  ? compose(applyMiddleware(thunk), hasExtension)
  : compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composeWith);

export default store;
