import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/Views/HomeScreen/HomeScreen';
import DetailsScreen from './src/Views/DetailsScreen/DetailsScreen';
import ModalScreen from './src/Views/ModalScreen/ModalScreen';

export default class App extends Component{
  render() {
    return <AppContainer/>
  }
}

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
});

const RootStack = createStackNavigator({
  Main: {
    screen: MainStack
  },
  Modal: {
    screen: ModalScreen
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});

const AppContainer =  createAppContainer(RootStack);
