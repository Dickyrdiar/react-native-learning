import React from 'react';
import {View, Text, Image} from 'react-native';
import {ParsingProps} from './cardMenu.type';
import {Style} from './CardStyle';
import Icon from 'react-native-vector-icons/Ionicons';

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
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
          }}>
          <Text style={Style.tagText}>Comment</Text>
          <Text style={Style.tagText}>Like</Text>
        </View>

        <Text style={Style.tagText}>
          save
          <Icon name="save" size={14} color="#4F8EF7" />
        </Text>
      </View>
    </View>
  );
}

export default CardMenu;
