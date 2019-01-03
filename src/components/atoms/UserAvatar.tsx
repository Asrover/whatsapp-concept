import * as React from 'react';
import styled from "styled-components";
import { ESizes } from "../../theme";

interface IState {}

interface IProps {
    userId: string;
    size: ESizes;
    userNameColor?: string;
    hideUserName?: boolean;
}

interface IAvatarProps {
    size: number;
}

interface INameProps {
    fontSize: number;
    color: string;
}

class UserAvatar extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        const {
            size,
            hideUserName,
            userNameColor
        } = this.props;

        return (
            <User>
                <Avatar  size={sizes[size].avatar} src={require('../../assets/avatar/avatar_1.jpg')} />
                { !hideUserName &&
                    <Name
                        fontSize={sizes[size].name}
                        color={userNameColor ? userNameColor : '#fff'}
                    >
                        Sonia
                    </Name>
                }
            </User>
        );
    }
}

const sizes = {
    [ESizes.SMALL]: {
        avatar: 34,
        name: 10,
    },
    [ESizes.MEDIUM]: {
        avatar: 40,
        name: 11,
    },
    [ESizes.LARGE]: {
        avatar: 60,
        name: 12,
    },
    [ESizes.EXTRA_LARGE]: {
        avatar: 114,
        name: 16,
    }
};

const User = styled.figure`
  margin: 0;
`;

const Avatar = styled.img<IAvatarProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  object-fit: cover;
  margin: 0 0 3px 0;
  border-radius: 100%;
`;

const Name = styled.figcaption<INameProps>`
  margin-bottom: 10px;
  text-align: center;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
`;

export default UserAvatar;