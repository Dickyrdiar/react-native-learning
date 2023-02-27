import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import {FieldInput} from '../../components/Form';
import Tag from '../../components/tagCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchData} from '../../redux/fetching';
import {ParsingProps} from '../../lib/TypeData/cardMenu.type';
import {CardTrending} from '../../components/cardTrending';

function SearchPage(): JSX.Element {
  const scrollView = useRef<ScrollView>(null);
  const [selected, setSelected] = useState(0);

  const {data, isLoading, error, tagList} = useSelector(
    (state: any) => state.data,
  );
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

  console.log('trending', filterTopList(data));

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
            {tagList.map((tag: any, id: number) => (
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

          <View style={style.TrendingPosts}>
            <ScrollView style={style.scrollView} horizontal={false}>
              {filterTopList(data).map((val: any) => (
                <TouchableOpacity>
                  <CardTrending
                    title={val.title}
                    time={val.readable_publish_date}
                    user={[val.user]}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
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

  TrendingPosts: {
    padding: 8,
    marginTop: 8,
  },
  scrollView: {
    marginHorizontal: 4,
  },
});

export default SearchPage;
