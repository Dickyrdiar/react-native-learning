import {TagProps} from '../../lib/TypeData/tagCarousel.types';
import styled from 'styled-components';
import {View, Text} from 'react-native';

export const StyledView = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props: TagProps) => props.colro};
  padding: 5px 20px;
  border-radius: 20px;
  margin-right: 20px;
`;

export const StyledText = styled(Text)`
  color: #030303;
  font-size: 18px;
`;
