import React from 'react';
import {Text, Image} from 'react-native';

function DetailBlog({route}: any): JSX.Element {
  const {data} = route.params;
  console.log('result', data);

  return (
    <>
      <Text>{data.title}</Text>
    </>
  );
}

export default DetailBlog;
