import { createAsyncAction } from 'typesafe-actions';
import { ECallsActionTypes, ICall } from "./types";
import { Dispatch } from "redux";
import { CONFIG } from "../../config";

export const fetchCalls = createAsyncAction(
    ECallsActionTypes.FETCH_CALLS_REQUEST,
    ECallsActionTypes.FETCH_CALLS_SUCCESS,
    ECallsActionTypes.FETCH_CALLS_FAILURE,
)<void, ICall[], Error>();

export const loadCalls = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchCalls.request());

        const startFetch = new Date().getTime();

        return fetch(CONFIG.callsApi)
            .then(response => response.json())
            .then(json => {
                const fetchDuration = new Date().getTime() - startFetch;

                setTimeout(() => {
                    dispatch(fetchCalls.success(json));
                }, CONFIG.minFetchDuration - fetchDuration);
            })
    }
};