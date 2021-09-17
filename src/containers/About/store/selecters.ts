/*
*
* About selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectAboutStore = ((state: ReturnType<typeof rootReducer>) => state.About)