import { createStore, combineReducers, applyMiddleware } from "redux";
import { IMainState, MainReducer } from "./main";
import {IStoriesState, StoriesReducer} from "./stories";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

export interface IAppState {
    main: IMainState;
    stories: IStoriesState;
}

const rootReducer = combineReducers<IAppState>({
    main: MainReducer,
    stories: StoriesReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger,
    )
);