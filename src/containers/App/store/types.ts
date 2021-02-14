/*
 *
 * App types
 *
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppStore = {
  login: boolean;
  loading: boolean;
  lang: AppLanguage;
};

export type ActionsApp = ActionType<typeof actions>;

// type role
export enum AppRole {
  ADMIN = 'admin',
  USER = 'user',
}

export enum AppLanguage {
  vi = 'vi',
  en = 'en',
}
