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
    minHeight: 50,
    maxHeight: 100,
    alignItems: "flex-end",
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#282a30",
    borderTopWidth: 1,
    borderColor: commonBorderColor,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  inputMessage: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 15,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  clipContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 5
  },
  sendContainer: {
    flexBasis: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 5
  },
  btn: { borderRadius: 20, width: 40 }
});
