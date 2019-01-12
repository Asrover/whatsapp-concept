import { createAsyncAction } from 'typesafe-actions';
import { ECallsActionTypes, ICall } from "./types";
import { Dispatch } from "redux";
import { CallsFromApi } from "../../fixtures/Calls";

const responseServerDelay = 1000;

export const fetchCalls = createAsyncAction(
    ECallsActionTypes.FETCH_CALLS_REQUEST,
    ECallsActionTypes.FETCH_CALLS_SUCCESS,
    ECallsActionTypes.FETCH_CALLS_FAILURE,
)<void, ICall[], Error>();

export const loadCalls = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchCalls.request());

        setTimeout(() => {
            dispatch(fetchCalls.success(CallsFromApi));
        }, responseServerDelay);

        // return fetch(`https://reqres.in/api/users`)
        //     .then(response => response.json())
        //     .then(json => dispatch(fetchCalls.success(json)))
    }
};