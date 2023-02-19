/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexApp from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SavePosts from '../screen/SavePosts';
import SearchPage from '../screen/searchPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f8f8f8',
        tabBarInactiveTintColor: '#f8f8f8',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={IndexApp}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={SavePosts}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ios-bookmark"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="ios-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabScreen: {
    backgroundColor: 'white',
  },
});

export default BottomTabNavigator;
