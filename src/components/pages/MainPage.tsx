import * as React from 'react';
import Header from "../templates/Header";
import Stories from "../organisms/Stories";
import PageLayout from "../templates/PageLayout";
import Calls from "../organisms/Calls";
import Spacer from "../atoms/Spacer";

interface IState {

}

interface IProps {

}

class MainPage extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <>
                <Header />
                <PageLayout>
                    <Stories />
                    <Spacer height={20} withBorder />
                    <Calls />
                </PageLayout>
            </>
        );
    }
}

export default MainPage;