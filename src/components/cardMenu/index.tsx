import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ParsingProps} from './cardMeu.type';

function CardMenu({title, children}: ParsingProps): JSX.Element {
  return (
    <View style={Style.container}>
      <Text style={Style.title}>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#0000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
    marginVertical: 10,
  },

  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CardMenu;
