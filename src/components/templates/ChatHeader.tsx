import * as React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Theme } from "../../theme";

interface IState {

}

interface IProps {
    userId: number;
}

class ChatHeader extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <HeaderStyled>
                <Link to="/">
                    <Img src={require('../../assets/avatar/avatar_1.jpg')} alt=""/>
                </Link>
                <UserName>Sonia</UserName>
            </HeaderStyled>
        );
    }
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 12px;
    height: ${Theme.headerHeight}px;
    width: 100%;
    background-color: #25d366;
`;

const UserName = styled.div`
    margin-left: 10px;
    font-size: 16px;
    color: #fff;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`;

export default ChatHeader;