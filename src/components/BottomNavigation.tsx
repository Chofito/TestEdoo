import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Tasks} from './views/Tasks';
import {TaskOwners} from './views/TaskOwners';

export default createBottomTabNavigator(
  {
    Tasks,
    ['Task Owners']: TaskOwners,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName: string;
        if (routeName === 'Tasks') {
          iconName = 'md-bookmarks';
        } else if (routeName === 'Task Owners') {
          iconName = 'md-people';
        } else {
          iconName = 'md-bookmarks';
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
    },
  },
);
