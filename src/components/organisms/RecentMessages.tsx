import * as React from 'react';
import SectionTitle from "../atoms/SectionTitle";
import Spacer from "../atoms/Spacer";
import MessageRow from "../molecules/MessageRow";

interface IProps {
    countMessage?: number;
}

class RecentMessages extends React.Component<IProps, {}> {
    public render() {
        return (
            <section>
                <SectionTitle>Recent messages</SectionTitle>
                <Spacer height={20} />
                <MessageRow />
                <Spacer height={20} divider />
                <MessageRow />
                <Spacer height={20} divider />
                <MessageRow />
            </section>
        );
    }
}

export default RecentMessages;