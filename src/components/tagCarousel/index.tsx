import React from 'react';
import {Text} from 'react-native';
import {TagProps} from '../../lib/TypeData/tagCarousel.types';
import {StyledView} from './TagCarousel.style';

const Tag = ({tag, selected, colro}: TagProps) => (
  <StyledView aria-selected={selected} style={colro}>
    <StyledView>
      <Text>{tag}</Text>
    </StyledView>
  </StyledView>
);

export default Tag;
