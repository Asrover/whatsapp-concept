import * as React from 'react';
import HorizontalScroll from "../molecules/HorizontalScroll";
import SectionTitle from "../atoms/SectionTitle";
import Call from "../molecules/Call";

interface IState {

}

interface IProps {

}

class Calls extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <section>
                <SectionTitle>Calls</SectionTitle>
                <HorizontalScroll>
                    <Call userId="123" isMissed={true} />
                    <Call userId="123" isMissed={true} />
                    <Call userId="123" isMissed={false} />
                    <Call userId="123" isMissed={false} />
                    <Call userId="123" isMissed={false} />
                    <Call userId="123" isMissed={true} />
                    <Call userId="123" isMissed={false} />
                    <Call userId="123" isMissed={false} />
                </HorizontalScroll>
            </section>
        );
    }
}

export default Calls;