import rootReducer from "src/redux/root-reducers";

export const selectHomeStore = (state: ReturnType<typeof rootReducer>) =>
  state.Home;
