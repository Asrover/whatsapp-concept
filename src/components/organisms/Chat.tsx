import * as React from 'react';
import styled from "styled-components";
import ChatMessage from "../molecules/ChatMessage";

interface IState {

}

interface IProps {

}

class Chat extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <ChatStyled>
                <ChatMessage isOutgoing={false} date="10-11-2019">
                </ChatMessage>
            </ChatStyled>
        );
    }
}

const ChatStyled = styled.div`

`;

export default Chat;