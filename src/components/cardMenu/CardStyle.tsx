import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#0000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
    marginVertical: 10,
  },

  profilePost: {
    flexDirection: 'row',
  },

  pict: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },

  time: {
    color: '#636262ab',
    fontSize: 9,
  },

  user: {
    fontSize: 13,
    marginBottom: 10,
    color: 'black',
    marginLeft: 10,
  },

  TagContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: -7,
    marginRight: 44,
    flexDirection: 'row',
  },

  readable_publish_date: {
    fontSize: 10,
    marginTop: -10,
    marginLeft: 35,
  },

  commentContainer: {
    color: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    // flex: 3,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
  },

  tagText: {
    color: 'black',
    fontSize: 12,
    display: 'flex',
    padding: 5,
    marginTop: -7,
  },
});
