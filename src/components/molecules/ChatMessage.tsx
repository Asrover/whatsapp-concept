import * as React from 'react';
import styled from "styled-components";

interface IState {

}

interface IProps {
    isOutgoing: boolean;
    date: string;
    // children: React.ReactElement<IAudioProps>;
}

class ChatMessage extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        const {
            isOutgoing,
            date,
            children,
        } = this.props;

        return (
            <MessageWrap isOutgoing={isOutgoing}>
                <Message>
                    {children}
                    <Date>{date}</Date>
                </Message>
            </MessageWrap>
        );
    }
}

const MessageWrap = styled.div<{ isOutgoing: boolean }>`
    display: flex;
    justify-content: ${props => props.isOutgoing ? 'flex-end' : 'flex-start'};
    
    & > div {
        background-color: ${props => props.isOutgoing ? 'green' : 'gray'};
    }
`;

const Message = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 60%;
    padding: 15px 10px;
    border-radius: 4px;
`;

const Date = styled.div`

`;

export default ChatMessage;