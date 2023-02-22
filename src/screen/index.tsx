import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import CardMenu from '../components/cardMenu';
import Tag from '../components/tagCarousel/index';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

function IndexApp(): JSX.Element {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const ScrollViewRef = useRef<ScrollView>(null);

  const handleTagPress = (index: number) => {
    setSelected(index);
    ScrollViewRef.current?.scrollTo({
      x: index * (Dimensions.get('window').width / 3),
      y: 0,
    });
  };

  const handleNavigationToScreen = () => {
    navigation.navigate('detailPost');
  };

  return (
    <View style={style.container}>
      <View style={style.Carouselcontainer}>
        <ScrollView
          ref={ScrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {tags.map((tag, id) => (
            <Tag
              key={tag.id}
              tag={tag.name}
              selected={id === selected}
              colro={tag.bg_color_hex}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          ))}
        </ScrollView>
      </View>
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

  Carouselcontainer: {
    padding: 8,
    flexDirection: 'row',
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

const tags = [
  {
    id: 6,
    name: 'javascript',
    bg_color_hex: '#f7df1e',
    text_color_hex: '#000000',
  },
  {
    id: 8,
    name: 'webdev',
    bg_color_hex: '#562765',
    text_color_hex: '#ffffff',
  },
  {
    id: 555,
    name: 'beginners',
    bg_color_hex: '#008335',
    text_color_hex: '#FFFFFF',
  },
  {
    id: 33,
    name: 'programming',
    bg_color_hex: '#890606',
    text_color_hex: '#ffffff',
  },
  {
    id: 297,
    name: 'tutorial',
    bg_color_hex: '#FEFFA5',
    text_color_hex: '#b30047',
  },
  {
    id: 125,
    name: 'react',
    bg_color_hex: '#222222',
    text_color_hex: '#61DAF6',
  },
  {
    id: 3371,
    name: 'archlinux',
    bg_color_hex: '#0099bd',
    text_color_hex: '#FFFFFF',
  },
  {
    id: 25,
    name: 'python',
    bg_color_hex: '#1E38BB',
    text_color_hex: '#FFDF5B',
  },
  {
    id: 44,
    name: 'news',
    bg_color_hex: '#111111',
    text_color_hex: '#fff9ac',
  },
  {
    id: 112,
    name: 'productivity',
    bg_color_hex: '#2A0798',
    text_color_hex: '#C8F7C5',
  },
];
