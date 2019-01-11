import { Reducer } from "redux";
import { IMainState, EMainActionTypes } from "./types";

const initialState: IMainState = {
    appLoading: false,
};

const reducer: Reducer<IMainState> = (state = initialState, action) => {
    switch (action.type) {
        case EMainActionTypes.SET_APP_LOADED:
            return {
                ...state,
                appLoading: true,
            };

        default:
            return state;

    }
};

export { reducer as MainReducer };