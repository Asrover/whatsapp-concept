import * as React from 'react';
import PageLayout from "../templates/PageLayout";
import ChatHeader from "../templates/ChatHeader";
import Chat from "../organisms/Chat";

class ChatPage extends React.Component<{}, {}> {
    public render() {
        return (
            <>
                <ChatHeader userId={5} />
                <PageLayout>
                    <Chat />
                </PageLayout>
            </>
        );
    }
}

export default ChatPage;