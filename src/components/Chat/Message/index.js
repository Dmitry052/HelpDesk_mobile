// @flow
import React from "react";
import { View, Text } from "react-native";
import style from "./style";

const Message = ({ item }: any) => (
  <View
    style={
      item.type === "input"
        ? {
            ...style.containerChatText,
            ...style.rightText
          }
        : style.containerChatText
    }
  >
    <View
      style={
        item.type === "input"
          ? { ...style.locationChatText, ...style.rightColor }
          : style.locationChatText
      }
    >
      <Text
        style={
          item.type === "input"
            ? { ...style.chattext, ...style.rightChattext }
            : style.chattext
        }
      >{`${item.message}`}</Text>

      {/* Time */}
      <View
        style={
          item.type === "input" ? style.messageTimeLeft : style.messageTimeRight
        }
      >
        <Text
          style={
            item.type === "input"
              ? style.messageTimeTextLeft
              : style.messageTimeTextRight
          }
        >{`${item.timestamp.toLocaleString("en-EN")}`}</Text>
      </View>
    </View>
  </View>
);

export default Message;
