/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexApp from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <MaterialCommunityIcons name="iso-home" color={color} size={size} />
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
