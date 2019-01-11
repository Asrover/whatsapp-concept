import * as React from 'react';
import SectionTitle from "../atoms/SectionTitle";
import Story from "../molecules/Story";
import HorizontalScroll from "../molecules/HorizontalScroll";
import Spacer from "../atoms/Spacer";
import { IStoriesState, IStory, loadStories, TStoriesAction } from "../../stores/stories";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {IAppState} from "../../stores";

interface IPropsFromState {
    stories: IStory[];
    isFetching: boolean;
}

interface IPropsFromDispatch {
    loadStories: () => void;
}

class Stories extends React.Component<IPropsFromState & IPropsFromDispatch> {
    public componentWillMount() {
        this.props.loadStories();
    };

    public render() {
        const {
            stories,
            isFetching,
        } = this.props;

        return (
            <section>
                <SectionTitle>Stories</SectionTitle>
                <Spacer height={15} />
                <HorizontalScroll>
                    { stories.length > 0 && stories.map(story =>
                        <Story
                            key={story.id}
                            userId={story.userId}
                            previewUrl={story.previewUrl}
                        />
                    )}
                </HorizontalScroll>
            </section>
        );
    }
}

export default connect((state: IAppState) => {
    return {
        stories: state.stories.items,
        isFetching: state.stories.isFetching,
    }
}, (dispatch: ThunkDispatch<IStoriesState, {}, TStoriesAction>) => ({
    loadStories: () => dispatch(loadStories())
} ))(Stories);