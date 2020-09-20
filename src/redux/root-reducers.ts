import { combineReducers } from "redux";
//pages

const globalState = { lang: "vi" };

const globalReducer = (state = globalState, actions: any) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};
const rootReducer = combineReducers({
  globalReducer,
  //pages
});

export default rootReducer;
