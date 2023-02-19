import React from 'react';
import {Image} from 'react-native';

export const renderIcon = (icon: string, width: number, height: number) => (
  <Image source={require('../assets/icons/' + icon)} style={{width, height}} />
);
