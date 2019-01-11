import { createAsyncAction } from 'typesafe-actions';
import { EStoriesActionTypes, IStory } from "./types";
import { Dispatch } from "redux";
import { StoriesFromAPI } from "../../fixtures/Stories";

const responseServerDelay = 1000;

export const fetchStories = createAsyncAction(
    EStoriesActionTypes.FETCH_STORIES_REQUEST,
    EStoriesActionTypes.FETCH_STORIES_SUCCESS,
    EStoriesActionTypes.FETCH_STORIES_FAILURE,
)<void, IStory[], Error>();

export const loadStories = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchStories.request());

        setTimeout(() => {
            dispatch(fetchStories.success(StoriesFromAPI));
        }, responseServerDelay);

        // return fetch(`https://reqres.in/api/users`)
        //     .then(response => response.json())
        //     .then(json => dispatch(fetchStories.success(json)))
    }
};