import React from "react";
import { View, Text } from "react-native";
import { MessagePropsType } from "./../types";
import style from "./style";

const Message = ({ item }: MessagePropsType) => {
  return (
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
        <Text style={style.chattext}>{`${item.message}`}</Text>

        {/* Time */}
        <View
          style={
            item.type === "input"
              ? style.messageTimeLeft
              : style.messageTimeRight
          }
        >
          <Text
            style={
              item.type === "input"
                ? style.messageTimeTextLeft
                : style.messageTimeTextRight
            }
            // TODO:
          >{`${item.timestamp.toLocaleString("en-EN")}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
