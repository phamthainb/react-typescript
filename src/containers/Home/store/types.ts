import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { AppRole } from "@containers/App/store/types";

export interface HomeStore {}

export type LoginFormData = {
  phone: string;
  password: string;
  type: AppRole;
};

export type ActionsHome = ActionType<typeof actions>;
