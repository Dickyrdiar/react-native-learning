import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from '../navigation';
import DetailBlog from '../../screen/Detail';
import TagDetails from '../../screen/TagDetails';

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
          <Stack.Screen name="detail-tag" component={TagDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
