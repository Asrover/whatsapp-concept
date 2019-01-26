import { createAsyncAction } from 'typesafe-actions';
import { EStoriesActionTypes, IStory } from "./types";
import { Dispatch } from "redux";
import { CONFIG } from "../../config";

export const fetchStories = createAsyncAction(
    EStoriesActionTypes.FETCH_STORIES_REQUEST,
    EStoriesActionTypes.FETCH_STORIES_SUCCESS,
    EStoriesActionTypes.FETCH_STORIES_FAILURE,
)<void, IStory[], Error>();

export const loadStories = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchStories.request());

        const startFetch = new Date().getTime();

        return fetch(CONFIG.storiesApi)
            .then(response => response.json())
            .then(json => {
                const fetchDuration = new Date().getTime() - startFetch;

                setTimeout(() => {
                    dispatch(fetchStories.success(json));
                }, CONFIG.minFetchDuration - fetchDuration);
            })
    }
};