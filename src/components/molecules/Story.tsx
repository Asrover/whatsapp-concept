import * as React from 'react';
import styled from "styled-components";
import UserAvatar from "../atoms/UserAvatar";
import {ESizes} from "../../theme";

interface IState {

}

interface IProps {
    ownerId: string;
    previewUrl: string;
}

class Story extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <StoryStyled>
               <UserAvatar userId="123" size={ESizes.SMALL} />
            </StoryStyled>
        );
    }
}

const StoryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  min-width: 75px;
  height: 110px;
  background: #000;
  border-radius: 6px;
`;

export default Story;