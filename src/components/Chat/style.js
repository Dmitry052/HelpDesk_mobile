import { StyleSheet } from "react-native";
import { commonMargin, commonBorder, commonBorderColor } from "./../../style";

export default StyleSheet.create({
  main: {
    flex: 1
  },
  messages: {
    flex: 10,
    ...commonMargin
  },
  // *****************************
  inputBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    borderTopWidth: 1,
    borderColor: commonBorderColor
  },
  inputMessage: { flexBasis: "80%", paddingLeft: 5 },
  btnContainer: {
    flexBasis: "20%",
    margin: 0,
    padding: 0
  },
  btn: {
    height: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});
