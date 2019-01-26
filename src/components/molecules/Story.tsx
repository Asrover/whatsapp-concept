import * as React from 'react';
import styled from "styled-components";
import UserAvatar from "../atoms/UserAvatar";
import { ESizes } from "../../theme";

interface IProps {
    userId: number;
    previewUrl: string;
}

const Story: React.FC<IProps> = (props: IProps) => (
    <StoryStyled image={props.previewUrl}>
       <UserAvatar userId={props.userId} size={ESizes.SMALL} />
    </StoryStyled>
);

const StoryStyled = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 75px;
  min-width: 75px;
  height: 100px;
  padding-bottom: 10px;
  background: url('${props => props.image}');
  background-size: cover;
  border-radius: 6px;
`;

export default Story;