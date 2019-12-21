import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import './Config/ReactotronConfig';

import Routes from './routes';

class App extends Component
{
    render()
    {
        return (
          <>
            <StatusBar barStyle="light-content" backgroundColor/>
            <Routes />
          </>
        );
    }
}

export default App;
