import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailBlog from '../../screen/Detail';

const Stack = createNativeStackNavigator();

export function TabperScreen(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="detailPost" component={DetailBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
