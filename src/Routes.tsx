import * as React from 'react';
import { Route } from 'react-router-dom';
import MainPage from "./components/pages/MainPage";

const Routes: React.FC = () => {
    return(
        <>
            <Route path="/" component={MainPage} />
        </>
    );
};

export default Routes;