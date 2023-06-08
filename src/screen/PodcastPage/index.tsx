import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

function PodcastPage(): JSX.Element {
  const {podcast, isLoading, error} = useSelector((state: any) => state.data);
  console.log('podcast', podcast);

  return (
    <>
      <Text>this is podcast page</Text>
    </>
  );
}

export default PodcastPage;
