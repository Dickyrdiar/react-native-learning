import {produceWithPatches} from 'immer';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchPodcast} from '../../redux/fetching';

function PodcastPage(): JSX.Element {
  const {podcast, isLoading, error} = useSelector((state: any) => state.data);
  const dispacth = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispacth(fetchPodcast(1));
  }, [dispacth]);

  const handelLoadMore = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasure.height;

    if (offsetY >= contentHeight - layoutHeight) {
      const nextPage = Math.ceil(podcast.length / 30) + 1;
      dispacth(fetchPodcast(nextPage));
    }
  };

  console.log('podcast', podcast);

  return (
    <>
      <Text>this is podcast page</Text>
    </>
  );
}

export default PodcastPage;
