import * as React from 'react';
import styled from "styled-components";
import UserAvatar from "../atoms/UserAvatar";
import { ESizes } from "../../theme";
import PhoneIcon from "../../assets/icons/phone.svg";
import PhoneMissIcon from "../../assets/icons/phone-missed.svg";

interface IState {

}

interface IProps {
    userId: number;
    isMissed: boolean;
}

interface ICallType {
    isMissed: boolean;
}

class Call extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        const {
            userId,
            isMissed
        } = this.props;

        return (
            <CallStyled>
                <UserAvatar
                    userId={userId}
                    size={ESizes.LARGE}
                    userNameColor="#615375"
                />
                <CallType isMissed={isMissed}>
                    { isMissed
                        ? <PhoneMissIcon width={12} height={12} viewBox="0 0 24 24" fill="#fff" />
                        : <PhoneIcon width={12} height={12} viewBox="0 0 24 24" fill="#fff" />
                    }
                </CallType>
            </CallStyled>
        );
    }
}

const CallStyled = styled.div`
  position: relative;
`;

const CallType = styled.span<ICallType>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  top: 4px;
  right: -4px;
  background: ${props => props.isMissed ? '#f44336' : '#25d366'};
  border: 2px solid #fff;
  border-radius: 100%;
`;

export default Call;