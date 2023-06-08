import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';

function DetailBlog({route}: any): JSX.Element {
  const {data} = route.params;
  console.log('result', data);

  const formateDate = moment(data.readable_publish_date).format('LLL');

  return (
    <>
      {/* <Text>{data.title}</Text> */}
      <View style={style.constainer}>
        <Text style={style.text}>{data.title}</Text>
        <View style={style.profileImageName}>
          <Image style={style.pict} source={{uri: data?.user?.profile_image}} />
          <View>
            <Text style={style.user}>{data.user.name}</Text>
            <Text style={style.readable_publish_date}>{formateDate}</Text>
          </View>
        </View>

        {data.cover_image === null ? null : (
          <Image style={style.imagePost} source={{uri: data.cover_image}} />
        )}
      </View>
    </>
  );
}

export default DetailBlog;

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f7f7f7',
    padding: 9,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 9,
    color: 'black',
    // margin
  },

  imagePost: {
    width: 370,
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 10,
    padding: 9,
  },

  pict: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 40,
    padding: 9,
  },

  profileImageName: {
    flexDirection: 'row',
    margin: 9,
  },

  user: {
    fontSize: 13,
    marginBottom: 10,
    color: 'black',
    marginLeft: 10,
    marginTop: -4,
  },

  readable_publish_date: {
    fontSize: 10,
    marginTop: -10,
    marginLeft: 20,
  },
});
