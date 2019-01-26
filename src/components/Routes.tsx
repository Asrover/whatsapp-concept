import * as React from 'react';
import { Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";

const Routes: React.FC = () => {
    return(
        <>
            <Route path="/" exact component={MainPage} />
            <Route path="/chat/:userId" component={ChatPage} />
        </>
    );
};

export default Routes;