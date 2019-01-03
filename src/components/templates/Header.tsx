import * as React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface IState {

}

interface IProps {

}

class Header extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <HeaderStyled>
                <Link to="/">
                    <img src={require('../../assets/img/logo.png')} alt=""/>
                </Link>
                <img src={require('../../assets/img/search.png')} alt=""/>
            </HeaderStyled>
        );
    }
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 12px;
    height: 54px;
    width: 100%;
    background-color: #25d366;
`;

export default Header;