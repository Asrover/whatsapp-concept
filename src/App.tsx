import * as React from 'react';
import Routes from './Routes';
import {Switch} from 'react-router';
import { createGlobalStyle } from 'styled-components';

export default class App extends React.Component<{}, {}> {
    public render() {
        return(
            <>
                <Switch>
                    <Routes />
                </Switch>
                <GlobalStyle />
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&subset=cyrillic');

  body {
    margin: 0;
    overflow: hidden;
    background: #fff;
    font: 12px normal Montserrat, sans-serif;
  }
`;