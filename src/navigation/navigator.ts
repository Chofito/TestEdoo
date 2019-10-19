import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import routes from './routes';

const AppStack = createStackNavigator(routes, {headerMode: 'none'});

export default createAppContainer(AppStack);
