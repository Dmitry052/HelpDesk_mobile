import { StyleSheet } from "react-native";
import { commonMargin } from "./../../../style";

const messageTime = {
  paddingBottom: 3,
  paddingHorizontal: 5,
  flexDirection: "row"
};

export default StyleSheet.create({
  containerChatText: {
    ...commonMargin,
    alignItems: "flex-start"
  },
  rightText: {
    alignItems: "flex-end"
  },
  rightColor: {
    backgroundColor: "#00a3dc"
  },
  locationChatText: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#d2d0d0",
    borderRadius: 9,
    backgroundColor: "#fafafa",
    maxWidth: "80%"
  },
  messageTimeLeft: {
    ...messageTime,
    justifyContent: "flex-end"
  },
  messageTimeRight: {
    ...messageTime,
    justifyContent: "flex-start"
  },
  messageTimeTextRight: {
    fontSize: 10
  },
  messageTimeTextLeft: {
    fontSize: 10,
    color: "#fff"
  },
  chattext: {
    ...commonMargin
  },
  rightChattext: {
    color: "#fff"
  }
});
