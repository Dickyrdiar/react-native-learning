/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {ParsingProps} from './cardMenu.type';
import {Style} from './CardStyle';
const IconSave = require('../../assets/icon/MR.png');

function CardMenu({
  title,
  time,
  tags,
  user,
  tag_list,
  cover_image,
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
        <Image style={Style.imagePost} source={{uri: cover_image}} />

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
            20
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={require('../../assets/icon/bubble-chat.png')}
            />
          </Text>
          <Text style={Style.tagText}>
            45
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
            <Text style={{marginTop: -2}}>30</Text>
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
