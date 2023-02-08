import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ParsingProps} from './cardMeu.type';

function CardMenu({
  title,
  time,
  tags,
  user,
  chidren,
}: ParsingProps): JSX.Element {
  console.log(tags);

  return (
    <View style={Style.container}>
      <View style={Style.profilePost}>
        <View>
          <Image
            style={Style.pict}
            source={{
              uri: 'https://reactjs.org/logo-og.png',
            }}
          />
        </View>
      </View>
      <Text style={Style.user}>{user}</Text>
      <Text style={Style.title}>{title}</Text>

      <Tag textTag={tags} />
    </View>
  );
}

interface tagProps {
  textTag: Array<string[]>;
}

export function Tag({textTag}: tagProps): JSX.Element {
  return (
    <View style={Style.TagContainer}>
      {textTag.map(val => {
        return <Text style={Style.tagText}>#{val}</Text>;
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    // borderRadius: 10,
    shadowColor: '#0000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
    marginVertical: 10,
  },

  profilePost: {
    flex: 1,
    flexDirection: 'row',
  },

  pict: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 18,
  },

  time: {
    color: '#636262ab',
    fontSize: 9,
  },

  user: {
    fontSize: 13,
    marginBottom: 10,
    color: 'black',
    marginLeft: 32,
  },

  TagContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },

  tagText: {
    color: 'black',
    fontSize: 16,
  },
});

export default CardMenu;
