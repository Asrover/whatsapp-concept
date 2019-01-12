import { ICallsState, ECallsActionTypes, TCallsAction } from "./types";
import { Reducer } from "redux";

const initialState: ICallsState = {
    items: [],
    isFetching: false,
};

const reducer: Reducer<ICallsState, TCallsAction> = (state = initialState, action) => {
    switch (action.type) {
        case ECallsActionTypes.FETCH_CALLS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case ECallsActionTypes.FETCH_CALLS_SUCCESS:
            return {
                ...state,
                items: [ ...action.payload ],
                isFetching: false,
            };

        case ECallsActionTypes.FETCH_CALLS_FAILURE:
            return {
                ...state,
                items: [],
                isFetching: false,
            };

        default:
            return state;
    }
};

export { reducer as CallsReducer };