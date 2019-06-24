import { StyleSheet } from "react-native";
import { commonMargin, commonBorder, commonBorderColor } from "./../../style";

export default StyleSheet.create({
  main: {
    flex: 1
  },
  messages: {
    flex: 1,
    ...commonMargin
  },
  // *****************************
  inputBlock: {
    height: 50,
    alignItems: "flex-end",
    flexDirection: "row",
    alignItems: "stretch",
    borderTopWidth: 1,
    borderColor: commonBorderColor,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  inputMessage: { flexBasis: "80%", paddingLeft: 5 },
  btnContainer: {
    flexBasis: "20%",
    margin: 0,
    padding: 0
  },
  btn: {}
});
