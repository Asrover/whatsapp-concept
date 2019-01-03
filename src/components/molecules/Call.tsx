import * as React from 'react';
import styled from "styled-components";
import UserAvatar from "../atoms/UserAvatar";
import {ESizes} from "../../theme";

interface IState {

}

interface IProps {
    userId: string;
    isMissed: boolean;
}

interface ICallType {
    isMissed: boolean;
}

class Call extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <CallStyled>
                <UserAvatar
                    userId="123"
                    size={ESizes.LARGE}
                    userNameColor="#615375"
                />
                <CallType isMissed={this.props.isMissed}>

                </CallType>
            </CallStyled>
        );
    }
}

const CallStyled = styled.div`
  position: relative;
`;

const CallType = styled.span<ICallType>`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 4px;
  right: -4px;
  background: ${props => props.isMissed ? '#f44336' : '#25d366'};
  border: 2px solid #fff;
  border-radius: 100%;
`;

export default Call;