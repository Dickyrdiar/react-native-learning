import React from 'react';
import {Text} from 'react-native';

function DetailBlog({route}: any): JSX.Element {
  const {data} = route.params;
  console.log('result', data);

  return (
    <>
      <Text>this is detail</Text>
    </>
  );
}

export default DetailBlog;
