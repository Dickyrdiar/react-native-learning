import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import {FieldInput} from '../../components/Form';
import Tag from '../../components/tagCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchData} from '../../redux/fetching';
import {ParsingProps} from '../../lib/TypeData/cardMenu.type';

function SearchPage(): JSX.Element {
  const scrollView = useRef<ScrollView>(null);
  const [selected, setSelected] = useState(0);

  const {data, isLoading, error} = useSelector((state: any) => state.data);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  function filterTopList(
    positive_reactions_count: ParsingProps[],
  ): ParsingProps[] {
    return positive_reactions_count.filter(
      obj => obj.positive_reactions_count > 20,
    );
  }

  // console.log('trending', modifiedTrending);

  return (
    <>
      <View style={style.container}>
        <View style={style.searchFormPosition}>
          <FieldInput
            placeholder="search something"
            // onChangeText={function (text: string): void {
            //   throw new Error('Function not implemented.');
            // }}
          />
          {/* <Text>this is search page</Text> */}
        </View>
        {/* <Text>this is Search page</Text> */}
        <View style={style.searchForm}>
          <ScrollView
            ref={scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {tags.map((tag, id) => (
              <Tag
                key={tag.id}
                tag={tag.name}
                selected={id === selected}
                onClick={function (): void {
                  throw new Error('function not implement');
                }}
                colro={''}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    height: '100%',
  },

  searchFormPosition: {
    marginTop: 8,
    justifyContent: 'center',
    width: '86%',
    marginLeft: 20,
  },

  searchForm: {
    margin: 6,
  },
});

export default SearchPage;

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
