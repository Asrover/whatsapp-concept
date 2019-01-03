import * as React from 'react';
import styled from "styled-components";

interface IProps {
    height: number;
    withBorder?: boolean;
}

const Spacer: React.FC<IProps> = (props: IProps) => {
    return (
        <SpacerStyled height={props.height} withBorder={props.withBorder}>

        </SpacerStyled>
    );
};

const SpacerStyled = styled.div<IProps>`
  height: ${props => props.height}px;
  border-bottom: ${props => props.withBorder ? '1px' : '0'}px solid #979797;
`;

export default Spacer;