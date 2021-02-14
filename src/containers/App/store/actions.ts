/*
 *
 * App actions
 *
 */
import * as types from './constants';
import { AppLanguage } from './types';
import { action } from 'typesafe-actions';

export const changeLogin = (val: boolean) => action(types.LOGIN, val);

export const changeLanguage = (val: AppLanguage) => action(types.LANGUAGE, val);
