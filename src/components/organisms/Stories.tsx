import * as React from 'react';
import SectionTitle from "../atoms/SectionTitle";
import Story from "../molecules/Story";
import styled from "styled-components";
import HorizontalScroll from "../molecules/HorizontalScroll";

interface IState {

}

interface IProps {

}

class Stories extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <section>
                <SectionTitle>Stories</SectionTitle>
                <HorizontalScroll>
                    <Story ownerId="123" previewUrl="ololo" />
                    <Story ownerId="123" previewUrl="ololo" />
                    <Story ownerId="123" previewUrl="ololo" />
                    <Story ownerId="123" previewUrl="ololo" />
                    <Story ownerId="123" previewUrl="ololo" />
                </HorizontalScroll>
            </section>
        );
    }
}

export default Stories;