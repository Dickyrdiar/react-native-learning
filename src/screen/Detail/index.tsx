import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchDetail} from '../../redux/fetching';
import RenderHtml from 'react-native-render-html';

function DetailBlog({route}: any): JSX.Element {
  const scrollViewRwf = useRef<ScrollView>(null);
  const {width} = useWindowDimensions();
  const {data} = route.params;
  const formateDate = moment(data.readable_publish_date).format('LLL');

  const {detail, isLoading, errror} = useSelector((state: any) => state.data);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchDetail(data.path));
  }, [dispatch, data]);

  const htmlBody = data.html_body;

  console.log('detail', htmlBody?.replace(/<[^>]+>/g, ''));

  if (isLoading) {
    return (
      <>
        <View style={style.constainer}>
          <ActivityIndicator size="large" />
        </View>
      </>
    );
  }

  return (
    <>
      <ScrollView
        ref={scrollViewRwf}
        style={style.scrollView}
        horizontal={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={style.constainer}>
          <Text style={style.text}>{detail.title}</Text>
          <View style={style.profileImageName}>
            <Image
              style={style.pict}
              source={{uri: detail?.user?.profile_image}}
            />
            <View>
              <Text style={style.user}>{detail?.user?.name}</Text>
              <Text style={style.readable_publish_date}>{formateDate}</Text>
            </View>
          </View>

          {detail?.cover_image === null ? null : (
            <Image style={style.imagePost} source={{uri: detail.cover_image}} />
          )}

          <View style={style.detailContetn}>
            <RenderHtml contentWidth={width} source={detail.body_html} />
            {/* <WebView
              originWhitelist={['*']}
              source={{html: detail.body_html}}
            /> */}
          </View>
        </View>
      </ScrollView>
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

  scrollView: {
    marginHorizontal: 4,
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

  detailContetn: {
    marginTop: 30,
  },
});
