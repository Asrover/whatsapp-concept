import * as React from 'react';
import HorizontalScroll from "../molecules/HorizontalScroll";
import SectionTitle from "../atoms/SectionTitle";
import Spacer from "../atoms/Spacer";
import { ICall, ICallsState, loadCalls, TCallsAction } from "../../stores/calls";
import Call from "../molecules/Call";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../stores";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

interface IPropsFromState {
    calls: ICall[];
    isFetching: boolean;
}

interface IPropsFromDispatch {
    loadCalls: () => void;
}

class Calls extends React.Component<IPropsFromState & IPropsFromDispatch> {
    public componentWillMount() {
        this.props.loadCalls();
    };

    public render() {
        const {
            calls,
            isFetching,
        } = this.props;

        return (
            <section>
                <SectionTitle>Calls</SectionTitle>
                <Spacer height={15} />
                <HorizontalScroll>
                    { isFetching &&
                        <Loader
                            type="Oval"
                            color="#25d366"
                            height={32}
                            width={32}
                        />
                    }
                    { calls.length > 0 && calls.map(call =>
                        <Call
                            key={call.id}
                            userId={call.userId}
                            isMissed={call.isMissed}
                        />
                    )}
                </HorizontalScroll>
            </section>
        );
    }
}

export default connect((state: IAppState) => {
    return {
        calls: state.calls.items,
        isFetching: state.calls.isFetching,
    }
}, (dispatch: ThunkDispatch<ICallsState, {}, TCallsAction>) => ({
    loadCalls: () => dispatch(loadCalls())
} ))(Calls);