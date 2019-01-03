import * as React from 'react';
import styled from "styled-components";

interface IProps {
    children: React.ReactNode
}

const PageLayout: React.FC<IProps> = (props: IProps) => {
    return (
        <PageStyled>
            { props.children }
        </PageStyled>
    );
};

const PageStyled = styled.main`
  padding: 15px;
`;

export default PageLayout;