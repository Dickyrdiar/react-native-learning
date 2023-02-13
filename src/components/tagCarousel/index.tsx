import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Tag, TagCarouselProps} from '../../lib/TypeData/tagCarousel.types';
import {styles} from './TagCarousel.style';

const TagCarousel: React.FC<TagCarouselProps> = ({tags}) => {
  const _renderTag = ({item}: {item: Tag}) => {
    return (
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={tags}
      renderItem={_renderTag}
      sliderWidth={300}
      itemWidth={100}
      inactiveSlideScale={0.95}
      inactiveSlideOpacity={1}
    />
  );
};

export default TagCarousel;
