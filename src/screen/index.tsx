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
  Image,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import CardMenu from '../components/cardMenu';
import Tag from '../components/tagCarousel/index';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, fetchTaglist} from '../redux/fetching';
import {ThunkDispatch} from 'redux-thunk';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';
import GroupBydata from '../service/groupByData';

type Item = {
  id: number;
  name: string;
  tags: string[];
};

type GroupByData = {
  [tagName: string]: {
    name: string;
    items: ParsingProps[];
  };
};

function IndexApp({navigation}: any): JSX.Element {
  // const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const ScrollViewRef = useRef<ScrollView>(null);
  const {data, isLoading, error, tagList} = useSelector(
    (state: any) => state.data,
  );
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // const [items, setItems] = useState<Item[]>([]);

  const {groupedData} = GroupBydata();

  console.log('gggg', groupedData);

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

    console.log('click');
    navigation.navigate('detail-tag', {
      data: index,
    });
  };

  const handleNavigationToScreen = (val: any) => {
    navigation.navigate('detail', {
      data: val,
    });
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

  return (
    <View style={style.container}>
      <View style={style.Carouselcontainer}>
        <ScrollView
          ref={ScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {tagList?.map((tag: any, id: number) => (
            <TouchableOpacity onPress={() => handleTagPress(id)}>
              <Tag
                key={tag.id}
                tag={tag.name}
                selected={id === selected}
                colro={tag.bg_color_hex}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={style.scrollView} horizontal={false}>
        {data.length === 0 || null || undefined ? (
          <View style={style.imageEmpty}>
            <Image
              source={require('../assets/icon/Button/empty-folder.png')}
              // style={{width: 25, height: 25}}
            />
            <Text>Up's Something went Wrong</Text>
          </View>
        ) : (
          <>
            {data.map((val: any) => (
              <TouchableOpacity onPress={() => handleNavigationToScreen(val)}>
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

  imageEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  Carouselcontainer: {
    padding: 8,
    flexDirection: 'row',
  },
});

export default IndexApp;
