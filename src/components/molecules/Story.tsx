import * as React from 'react';
import styled from "styled-components";
import UserAvatar from "../atoms/UserAvatar";
import { ESizes } from "../../theme";

interface IProps {
    userId: number;
    previewUrl: string;
}

const Story: React.FC<IProps> = (props: IProps) => (
    <StoryStyled>
       <UserAvatar userId={props.userId} size={ESizes.SMALL} />
    </StoryStyled>
);

const StoryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 75px;
  min-width: 75px;
  height: 100px;
  padding-bottom: 10px;
  background: #000;
  border-radius: 6px;
`;

export default Story;