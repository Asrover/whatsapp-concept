import * as React from 'react';
import styled from "styled-components";

interface IProps {
    children: React.ReactNode
}

const SectionTitle: React.FC<IProps> = (props: IProps) => {
    return (
        <TitleStyled>
            {props.children}
        </TitleStyled>
    );
};

const TitleStyled = styled.h2`
  margin: 0;
  font-size: 12px;
`;

export default SectionTitle;