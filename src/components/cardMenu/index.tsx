/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ParsingProps} from '../../lib/TypeData/cardMenu.type';
import {Style} from './CardStyle';

function CardMenu({
  title,
  time,
  user,
  tag_list,
  cover_image,
  positive_reactions_count,
  comments_count,
  public_reactions_count,
}: ParsingProps): JSX.Element {
  const newArray: {name: string}[] = tag_list.map(val => ({
    name: val,
  }));

  return (
    <View style={Style.container}>
      <View style={Style.profilePost}>
        {user.map(val => {
          return (
            <>
              <Image style={Style.pict} source={{uri: val.profile_image}} />
              <View>
                <Text style={Style.user}>{val.name}</Text>
                <Text style={Style.readable_publish_date}>{time}</Text>
              </View>
            </>
          );
        })}
      </View>

      <View style={Style.pictureApplication}>
        {cover_image === null ? null : (
          <Image style={Style.imagePost} source={{uri: cover_image}} />
        )}

        <View style={{width: '80%'}}>
          <Text style={Style.title}>{title}</Text>
          <View style={Style.TagContainer}>
            {newArray.map(vale => {
              return <Text style={Style.tagText}>#{vale.name}</Text>;
            })}
          </View>
        </View>
      </View>

      <View style={Style.Divider} />

      <View style={Style.commentContainer}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            padding: 10,
          }}>
          <Text style={Style.tagText}>
            {comments_count}
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../assets/icon/bubble-chat.png')}
            />
          </Text>
          <Text style={Style.tagText}>
            {positive_reactions_count}
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../assets/icon/heart.png')}
            />
          </Text>
        </View>

        <Text style={Style.tagText}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{marginTop: -2}}>{public_reactions_count}</Text>
            <Image
              source={require('../../assets/icon/MR.png')}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </Text>
      </View>
    </View>
  );
}

export default CardMenu;
