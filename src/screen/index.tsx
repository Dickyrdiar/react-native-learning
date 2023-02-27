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

  console.log('curr', tagList);

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
          {tags.map((tag, id) => (
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

const tags = [
  {
    id: 6,
    name: 'javascript',
    bg_color_hex: '#f7df1e',
    text_color_hex: '#000000',
  },
  {
    id: 8,
    name: 'webdev',
    bg_color_hex: '#562765',
    text_color_hex: '#ffffff',
  },
  {
    id: 555,
    name: 'beginners',
    bg_color_hex: '#008335',
    text_color_hex: '#FFFFFF',
  },
  {
    id: 33,
    name: 'programming',
    bg_color_hex: '#890606',
    text_color_hex: '#ffffff',
  },
  {
    id: 297,
    name: 'tutorial',
    bg_color_hex: '#FEFFA5',
    text_color_hex: '#b30047',
  },
  {
    id: 125,
    name: 'react',
    bg_color_hex: '#222222',
    text_color_hex: '#61DAF6',
  },
  {
    id: 3371,
    name: 'archlinux',
    bg_color_hex: '#0099bd',
    text_color_hex: '#FFFFFF',
  },
  {
    id: 25,
    name: 'python',
    bg_color_hex: '#1E38BB',
    text_color_hex: '#FFDF5B',
  },
  {
    id: 44,
    name: 'news',
    bg_color_hex: '#111111',
    text_color_hex: '#fff9ac',
  },
  {
    id: 112,
    name: 'productivity',
    bg_color_hex: '#2A0798',
    text_color_hex: '#C8F7C5',
  },
];
