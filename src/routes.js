import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Pages/Main';
import User from './Pages/User';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF'
            }
        }
    )
);

export default Routes;