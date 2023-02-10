import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import CardMenu from '../components/cardMenu';

function IndexApp(): JSX.Element {
  return (
    <View style={style.container}>
      <ScrollView style={style.scrollView}>
        {dataDummy.map(val => {
          return (
            <TouchableOpacity>
              <CardMenu
                title={val.title}
                time={val.readable_publish_date}
                user={[val.user]}
                chidren={val.children}
                tags={[val.flare_tag]}
                tag_list={val.tag_list}
                cover_image={val.cover_image}
                comments_count={val.comments_count}
                positive_reactions_count={val.positive_reactions_count}
                public_reactions_count={val.public_reactions_count}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f7f7f7',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  scrollView: {
    marginHorizontal: 10,
  },
});

export default IndexApp;

const dataDummy = [
  {
    title: 'Streamlining Constructors in Functional React Components',
    children: 'this is children for free ',
    time: '10:30',
    flare_tag: {
      name: 'discuss',
      bg_color_hex: '#1ad643',
      text_color_hex: '#FFFFFF',
    },
    user: {
      name: 'Erin Bensinger',
      username: 'erinposting',
      twitter_username: 'erinposting',
      github_username: 'erinb223',
      user_id: 494502,
      website_url: null,
      profile_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--6nTNzTEG--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/494502/2d4eb07b-a07a-46f9-91cd-1b98d862a13c.png',
      profile_image_90:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--VG4G50pa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/494502/2d4eb07b-a07a-46f9-91cd-1b98d862a13c.png',
    },
    readable_publish_date: 'Feb 6',
    tag_list: ['devdiscuss', 'career', 'beginners'],
    cover_image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--oj6lVp0W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7brex760nh4niita1b8j.jpg',
    organization: {
      name: 'Codédex',
      username: 'codedex',
      slug: 'codedex',
      profile_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--UZ1cWjjV--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/5909/a4f43064-b4f0-498d-ad0f-eb0c998efe35.png',
      profile_image_90:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--jMVWcKoA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/5909/a4f43064-b4f0-498d-ad0f-eb0c998efe35.png',
    },
    positive_reactions_count: 1,
    comments_count: 0,
    public_reactions_count: 1,
  },
];
