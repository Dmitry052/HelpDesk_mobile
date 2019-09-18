import { StyleSheet } from 'react-native';
import defaultStyle from './../../../style';

export default StyleSheet.create({
  inputBlock: {
    minHeight: 50,
    maxHeight: 100,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#282a30',
    borderTopWidth: 1,
    borderColor: defaultStyle.commonBorderColor,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputMessage: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  clipContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  sendContainer: {
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
  },
  btn: { borderRadius: 20, width: 40 },
  previewImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#282a30',
  },
  previewImg: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    flexWrap: 'wrap',
  },
});
