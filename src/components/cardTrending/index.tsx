/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {TrendingProps} from '../../lib/TypeData/Trending.type';
import {Style} from './TrendingPost.style';

export function CardTrending({user, time, title}: TrendingProps): JSX.Element {
  return (
    <>
      <View style={Style.container}>
        <View style={Style.profilePost}>
          {user?.map(val => {
            return (
              <>
                <Image style={Style.pict} source={{uri: val.profile_image}} />
                <View>
                  <Text style={Style.user}>{val.name}</Text>
                </View>
              </>
            );
          })}
        </View>

        <View style={Style.pictureApplication}>
          <View style={{width: '80%'}}>
            <Text style={Style.title}>{title}</Text>
          </View>
        </View>
        <Text style={Style.readable_publish_date}>{time}</Text>
      </View>
    </>
  );
}
