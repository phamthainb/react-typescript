/*
 *
 * App types
 *
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppStore = {
  loading: boolean;
  lang: AppLanguage;
};

export type ActionsApp = ActionType<typeof actions>;

export enum AppLanguage {
  vi = 'vi',
  en = 'en',
}
