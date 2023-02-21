import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import {FieldInput} from '../../components/Form';

function SearchPage(): JSX.Element {
  return (
    <>
      <View style={style.container}>
        <View style={style.searchForm}>
          <FieldInput
            label="search"
            placeholder="search something"
            onChangeText={function (text: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
        {/* <Text>this is Search page</Text> */}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // padding: 5,
    backgroundColor: '#f7f7f7',
    // padding: 8,
    height: '100%',
  },

  searchForm: {
    margin: 6,
    padding: 9,
    // flexDirection: 'row',
  },
});

export default SearchPage;
