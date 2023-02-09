import React from 'react';
import {View, Text, Image} from 'react-native';
import {ParsingProps} from './cardMeu.type';
import {Style} from './CardStyle';

function CardMenu({
  title,
  time,
  tags,
  user,
  tag_list,
}: ParsingProps): JSX.Element {
  console.log(typeof tags, 'type data');

  const newArray: {name: string}[] = tag_list.map(val => ({
    name: val,
  }));

  return (
    <View style={Style.container}>
      <View style={Style.profilePost}>
        {/* <Image
          style={Style.pict}
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
        />
        <Text style={Style.user}>{user}</Text> */}
        {user.map(val => {
          return (
            <>
              <Image style={Style.pict} source={{uri: val.profile_image_90}} />
              <Text style={Style.user}>{val.name}</Text>
            </>
          );
        })}
      </View>

      <Text style={Style.readable_publish_date}>{time}</Text>
      <Text style={Style.title}>{title}</Text>
      <View style={Style.TagContainer}>
        {newArray.map(vale => {
          return <Text style={Style.tagText}>#{vale.name}</Text>;
        })}
      </View>

      <View style={Style.commentContainer}>
        <Text style={Style.tagText}>Comment</Text>

        <Text style={Style.tagText}>Like</Text>
      </View>
    </View>
  );
}

export default CardMenu;
