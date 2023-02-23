import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailBlog from '../../screen/Detail';

const Stack = createStackNavigator();

export function TabperScreen(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="DetailBlog" component={DetailBlog} />
      </Stack.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="detailScreen" component={DetailBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
