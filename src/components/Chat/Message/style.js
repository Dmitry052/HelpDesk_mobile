import { StyleSheet } from 'react-native';
import { commonMargin } from './../../../style';

const messageTime = {
  paddingBottom: 3,
  paddingHorizontal: 5,
  flexDirection: 'row',
};

export default StyleSheet.create({
  containerChatText: {
    ...commonMargin,
    alignItems: 'flex-start',
  },
  rightText: {
    alignItems: 'flex-end',
  },
  rightColor: {
    backgroundColor: '#416e9c',
  },
  locationChatText: {
    borderRadius: 9,
    backgroundColor: '#20303f',
    maxWidth: '80%',
  },
  messageTimeLeft: {
    ...messageTime,
    justifyContent: 'flex-end',
  },
  messageTimeRight: {
    ...messageTime,
    justifyContent: 'flex-start',
  },
  messageTimeTextRight: {
    color: '#fff',
    fontSize: 10,
  },
  messageTimeTextLeft: {
    fontSize: 10,
    color: '#fff',
  },
  chattext: {
    color: '#fff',
    ...commonMargin,
  },
});
