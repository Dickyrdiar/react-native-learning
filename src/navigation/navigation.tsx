/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexApp from '../screen';
import SearchPage from '../screen/searchPage';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SavePosts from '../screen/SavePosts';
// import * as iconSearch from '../assets/icon/Button/Search.png';
import {renderIcon} from './renderIcon';
import {Profile} from '../screen/profile';

const Tab = createBottomTabNavigator();

// const SearchIcon = () => {
//   <Image
//     source={require('../assets/icon/Button/Search.png')}
//     style={{width: 20, height: 20}}
//   />;
// };

function SearchIcon(): JSX.Element {
  return (
    <Image
      source={require('../assets/icon/Button/Search.png')}
      style={{width: 20, height: 20}}
    />
  );
}

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
          tabBarIcon: ({color}) => <SearchIcon />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <SearchIcon />,
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
