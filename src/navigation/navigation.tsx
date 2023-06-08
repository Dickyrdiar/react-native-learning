/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexApp from '../screen';
import SearchPage from '../screen/searchPage';
import {StyleSheet, Image} from 'react-native';
import {Profile} from '../screen/profile';
import ProfilePicture from '../navigation/navigatePerScreen/image';
import PodcastPage from '../screen/PodcastPage';

const Tab = createBottomTabNavigator();

interface LosginProps {
  isLoggedIn?: boolean;
}

function BottomTabNavigator({isLoggedIn}: LosginProps): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f8f8f8',
        tabBarInactiveTintColor: '#f8f8f8',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={IndexApp}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/icon/Button/home.png')}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={PodcastPage}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/icon/Button/microphone.png')}
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={SearchPage}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/icon/Button/Search.png')}
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfilePicture
              imageUrl={
                focused
                  ? 'https://example.com/profile.png'
                  : 'https://example.com/default-profile.png'
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    backgroundColor: 'white',
  },
});

export default BottomTabNavigator;
