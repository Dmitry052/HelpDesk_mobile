import { StyleSheet } from 'react-native';
import defaultStyle from './../../style';

export const backgroundImg = require('./../../../img/background_chat.jpg');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  messages: {
    flex: 1,
    ...defaultStyle.commonMargin,
  },
});
