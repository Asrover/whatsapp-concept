import * as React from 'react';
import styled from "styled-components";

interface IProps {
    height: number;
    divider?: boolean;
}

const Spacer: React.FC<IProps> = (props: IProps) => {
    return (
        <SpacerStyled height={props.height} divider={props.divider} />
    );
};

const SpacerStyled = styled.div<IProps>`
  position: relative;
  height: ${props => props.height}px;
  
  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #ededed;
    content: ${props => props.divider ? "''" : "none"};
  }
`;

export default Spacer;