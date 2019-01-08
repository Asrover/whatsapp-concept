import * as React from 'react';
import SectionTitle from "../atoms/SectionTitle";
import Spacer from "../atoms/Spacer";
import MessageBlock from "../molecules/MessageBlock";

interface IProps {
    countMessage?: number;
}

class RecentMessages extends React.Component<IProps, {}> {
    public render() {
        return (
            <section>
                <SectionTitle>Recent messages</SectionTitle>
                <Spacer height={20} />
                <MessageBlock />
                <Spacer height={20} divider />
                <MessageBlock />
                <Spacer height={20} divider />
                <MessageBlock />
            </section>
        );
    }
}

export default RecentMessages;