import * as React from 'react';
import SectionTitle from "../atoms/SectionTitle";
import Spacer from "../atoms/Spacer";
import MessageRow from "../molecules/MessageRow";
import {Link} from "react-router-dom";

interface IProps {
    countMessage?: number;
}

class RecentMessages extends React.Component<IProps, {}> {
    public render() {
        return (
            <section>
                <SectionTitle>Recent messages</SectionTitle>
                <Spacer height={20} />
                <Link to="/chat/123" style={{ textDecoration: 'none' }}>
                    <MessageRow />
                </Link>
                <Spacer height={20} divider />
                <Link to="/chat/123" style={{ textDecoration: 'none' }}>
                    <MessageRow />
                </Link>
                <Spacer height={20} divider />
                <Link to="/chat/123" style={{ textDecoration: 'none' }}>
                    <MessageRow />
                </Link>
            </section>
        );
    }
}

export default RecentMessages;