import * as React from 'react';
import styled from "styled-components";

export interface IAudioProps {
    source: string;
}

const Audio: React.FC<IAudioProps> = (props: IAudioProps) => {
    return(
        <AudioStyled source={props.source} />
    );
};

const AudioStyled = styled.div<IAudioProps>`
  position: absolute;
  display: block;
  width: ${props => props.source}px;
  height: ${props => props.source}px;
  background: #000;
`;

export default Audio;