import * as React from 'react';
import Header from "../templates/Header";
import Stories from "../organisms/Stories";
import PageLayout from "../templates/PageLayout";
import Calls from "../organisms/Calls";
import Spacer from "../atoms/Spacer";
import RecentMessages from "../organisms/RecentMessages";

class MainPage extends React.Component<{}, {}> {
    public render() {
        return (
            <>
                <Header />
                <PageLayout>
                    <Stories />
                    <Spacer height={20} />
                    <Calls />
                    <Spacer height={40} divider />
                    <RecentMessages />
                </PageLayout>
            </>
        );
    }
}

export default MainPage;