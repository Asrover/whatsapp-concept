import { IStoriesState, EStoriesActionTypes, TStoriesAction } from "./types";
import { Reducer } from "redux";

const initialState: IStoriesState = {
    items: [],
    isFetching: false,
};

const reducer: Reducer<IStoriesState, TStoriesAction> = (state = initialState, action) => {
    switch (action.type) {
        case EStoriesActionTypes.FETCH_STORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case EStoriesActionTypes.FETCH_STORIES_SUCCESS:
            return {
                ...state,
                items: [ ...action.payload ],
                isFetching: false,
            };

        case EStoriesActionTypes.FETCH_STORIES_FAILURE:
            return {
                ...state,
                items: [],
                isFetching: false,
            };

        default:
            return state;
    }
};

export { reducer as StoriesReducer };