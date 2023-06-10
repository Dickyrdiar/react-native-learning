/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo, useRef, useState} from 'react';
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

function SearchPage({navigation}: any): JSX.Element {
  const scrollView = useRef<ScrollView>(null);
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState('');
  const [searchValue, setSearchValue] = useState(false);

  const {data, isLoading, error, tagList} = useSelector(
    (state: any) => state.data,
  );
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchData(0));
  }, [dispatch]);

  function filterTopList(
    positive_reactions_count: ParsingProps[],
  ): ParsingProps[] {
    return positive_reactions_count.filter(
      obj => obj.positive_reactions_count > 20,
    );
  }

  const handleSearch = (text: string) => {
    setQuery(text);
    setSearchValue(true);
  };

  const handleFilter = useMemo(() => {
    return data?.filter((item: any) =>
      item?.title?.toLowerCase().includes(query.toLocaleLowerCase()),
    );
  });

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
    <>
      <View style={style.container}>
        <View style={style.searchFormPosition}>
          <FieldInput
            placeholder="search something"
            onChangeText={handleSearch}
          />
        </View>

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

          {searchValue === true ? (
            <>
              <Text>blog's Articles</Text>
              <View style={style.TrendingPosts}>
                {handleFilter.map((val: any) => (
                  <TouchableOpacity
                    onPress={() => handleNavigationToScreen(val)}>
                    <CardTrending
                      title={val.title}
                      time={val.readable_publish_date}
                      user={[val.user]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            <View style={style.TrendingPosts}>
              <ScrollView style={style.scrollView} horizontal={false}>
                {filterTopList(data).map((val: any) => (
                  <TouchableOpacity
                    onPress={() => handleNavigationToScreen(val)}>
                    <CardTrending
                      title={val.title}
                      time={val.readable_publish_date}
                      user={[val.user]}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
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
