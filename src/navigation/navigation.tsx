/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexApp from '../screen';
import SearchPage from '../screen/searchPage';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SavePosts from '../screen/SavePosts';
// import * as iconSearch from '../assets/icon/Button/Search.png';
import {Profile} from '../screen/profile';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(isLoggenIn: boolean): JSX.Element {
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
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
          component={SavePosts}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/icon/Button/Bookmark.png')}
                style={{width: 26, height: 26}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
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
            tabBarIcon: ({color}) => (
              <Image
                source={require('../assets/icon/Button/Bookmark.png')}
                style={{width: 26, height: 26}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    backgroundColor: 'white',
  },
});

export default BottomTabNavigator;
