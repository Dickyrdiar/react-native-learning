import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import CardMenu, {Tag} from '../components/cardMenu';

function IndexApp(): JSX.Element {
  console.log('data', dataDummy);

  return (
    <View style={style.container}>
      {dataDummy.map(val => {
        return (
          <CardMenu
            title={val.title}
            time={val.time}
            user={val.user}
            chidren={val.children}
            tags={[]}
          />
        );
      })}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f7f7f7',
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

const dataDummy = [
  {
    title: 'Streamlining Constructors in Functional React Components',
    children: 'this is children for free ',
    time: '10:30',
    tag: [{tagname: 'Javascript'}, {tagname: 'react'}, {tagname: 'vue'}],
    user: 'Fahni',
  },
];
