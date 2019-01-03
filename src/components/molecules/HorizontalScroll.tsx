import * as React from 'react';
import styled from "styled-components";

interface IProps {
    children: React.ReactNode
}

const HorizontalScroll: React.FC<IProps> = (props: IProps) => {
    return (
        <ScrollWrap>
            {props.children}
            <LastItemMargin />
        </ScrollWrap>
    );
};

const ScrollWrap = styled.div`
  display: flex;
  overflow: auto;
  margin: 15px -15px;
  padding-left: 15px;
  -webkit-overflow-scrolling: touch;
  
  & > * {
    //display: flex;
    margin-right: 15px;
  }
`;

const LastItemMargin = styled.div`
  min-width: .1px;
  margin: 0 !important;
`;

export default HorizontalScroll;