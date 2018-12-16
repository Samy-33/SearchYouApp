import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './screens/home-screen';
import { ResultScreen } from './screens/search-result-screen';

const appNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Results: ResultScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(appNavigator);