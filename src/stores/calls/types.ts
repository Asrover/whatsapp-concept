import { ActionType } from "typesafe-actions";
import { fetchCalls } from './actions';

export interface ICall {
    id: number;
    userId: number;
    isMissed: boolean;
}

export interface ICallsState {
    readonly items: ICall[];
    readonly isFetching: boolean;
}

export enum ECallsActionTypes {
    FETCH_CALLS_REQUEST = '@@stories/FETCH_CALLS_REQUEST',
    FETCH_CALLS_FAILURE = '@@stories/FETCH_CALLS_FAILURE',
    FETCH_CALLS_SUCCESS = '@@stories/FETCH_CALLS_SUCCESS',
}

export type TCallsAction = ActionType<typeof fetchCalls>;

