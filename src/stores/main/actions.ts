import { action } from 'typesafe-actions';
import { EMainActionTypes } from "./types";

export const setAppLoaded = () => action(EMainActionTypes.SET_APP_LOADED);