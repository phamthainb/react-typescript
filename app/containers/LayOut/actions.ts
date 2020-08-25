/*
 *
 * LayOut actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const setMenuBar = value => action(ActionTypes.MENU_BAR, value);
