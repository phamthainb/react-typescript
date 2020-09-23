import rootReducer from "src/redux/root-reducers";

export const selectLayOutStore = (state: ReturnType<typeof rootReducer>) =>
  state.reducersLayOut;
