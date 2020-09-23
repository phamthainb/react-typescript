import Admin from "@containers/pages/admin/Admin";
/*
 *
 * App types
 *
 */
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export interface AppStore {
  login: boolean;
  lang: string;
}

export type ActionsApp = ActionType<typeof actions>;

// type role
export enum AppRole {
  ADMIN = "admin",
  USER = "user",
}
