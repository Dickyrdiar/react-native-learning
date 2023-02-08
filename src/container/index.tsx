import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import CardMenu from '../components/cardMenu';

function IndexApp(): JSX.Element {
  return (
    <View style={style.container}>
      <CardMenu title="this is string" children="string is good" />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IndexApp;
