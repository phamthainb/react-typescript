import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export interface layoutStore {
  loading: boolean;
}

export type ActionsLayOut = ActionType<typeof actions>;
