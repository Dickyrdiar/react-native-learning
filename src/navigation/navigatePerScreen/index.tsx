import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailBlog from '../../components/Detail';
import BottomTabNavigator from '../navigation';

const Stack = createNativeStackNavigator();

export function TabperScreen(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Bottom"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="detail" component={DetailBlog} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
