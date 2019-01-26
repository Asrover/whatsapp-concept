import * as React from 'react';
import styled from "styled-components";
import {ESizes} from "../../theme";

interface IProps {
    source: ESizes;
}

const Photo: React.FC<IProps> = (props: IProps) => {
    return(
        <PhotoStyled source={props.source} />
    );
};

const PhotoStyled = styled.div<IProps>`
  position: absolute;
  display: block;
  width: ${props => props.source}px;
  height: ${props => props.source}px;
  background: #000;
`;

export default Photo;