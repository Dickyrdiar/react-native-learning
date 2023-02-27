import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicatorBase,
  ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';
import CardMenu from '../components/cardMenu';
import Tag from '../components/tagCarousel/index';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, fetchTaglist} from '../redux/fetching';
import {ThunkDispatch} from 'redux-thunk';

// type MyObject = {
//   positive_reactions_count: number;
// };

function IndexApp({navigation}: any): JSX.Element {
  // const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const ScrollViewRef = useRef<ScrollView>(null);
  const {data, isLoading, error, tagList} = useSelector(
    (state: any) => state.data,
  );
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTaglist());
  }, [dispatch]);

  const handleTagPress = (index: number) => {
    setSelected(index);
    ScrollViewRef.current?.scrollTo({
      x: index * (Dimensions.get('window').width / 3),
      y: 0,
    });
  };

  const handleNavigationToScreen = () => {
    navigation.navigate('detailScreen');
  };

  if (isLoading) {
    return (
      <>
        <View style={style.container}>
          <ActivityIndicator size="large" />
        </View>
      </>
    );
  }

  console.log('data', data.length <= 0);

  return (
    <View style={style.container}>
      <View style={style.Carouselcontainer}>
        <ScrollView
          ref={ScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {tagList?.map((tag: any, id: number) => (
            <TouchableOpacity>
              <Tag
                key={tag.id}
                tag={tag.name}
                selected={id === selected}
                colro={tag.bg_color_hex}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={style.scrollView} horizontal={false}>
        {data.length >= 0 ? (
          <>
            {data.map((val: any) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailBlog')}>
                <CardMenu
                  title={val.title}
                  time={val.readable_publish_date}
                  user={[val.user]}
                  chidren={val.children}
                  tags={[val.flare_tag]}
                  tag_list={val.tag_list}
                  cover_image={val.cover_image}
                  comments_count={val.comments_count}
                  positive_reactions_count={val.positive_reactions_count}
                  public_reactions_count={val.public_reactions_count}
                />
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <View>this is empty</View>
        )}
      </ScrollView>
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

  TextError: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },

  scrollView: {
    marginHorizontal: 4,
  },

  Carouselcontainer: {
    padding: 8,
    flexDirection: 'row',
  },
});

export default IndexApp;
