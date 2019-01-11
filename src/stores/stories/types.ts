import { ActionType } from "typesafe-actions";
import { fetchStories } from './actions';

export interface IStory {
    id: number;
    userId: number;
    previewUrl: string;
}

export interface IStoriesState {
    readonly items: IStory[];
    readonly isFetching: boolean;
}

export enum EStoriesActionTypes {
    FETCH_STORIES_REQUEST = '@@stories/FETCH_STORIES_REQUEST',
    FETCH_STORIES_FAILURE = '@@stories/FETCH_STORIES_FAILURE',
    FETCH_STORIES_SUCCESS = '@@stories/FETCH_STORIES_SUCCESS',
}

export type TStoriesAction = ActionType<typeof fetchStories>;

