import React from 'react';
import {PodcastProps} from '../../lib/TypeData/podcase.type';
import {View, Text} from 'react-native';
import {Style} from './podcast.style';

export function CardPodcast({title, image_url}: PodcastProps): JSX.Element {
  return (
    <View style={Style.container}>
      <View style={Style.pictureApplication}>
        <View style={{width: '80%'}}>
          <Text style={Style.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}
