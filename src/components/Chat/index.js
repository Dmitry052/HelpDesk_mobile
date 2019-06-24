// @flow
import React from "react";
import { View, Text, TextInput, Image, FlatList } from "react-native";
import Message from "./Message";
import { Button } from "react-native-elements";
import type { PropsChatComponentType, ItemChatDataType } from "./types";
import style from "./style";

class Chat extends React.Component<PropsChatComponentType> {
  handleSetMessage = (value: string) => {
    const { setTextMessage } = this.props;

    setTextMessage(value);
  };

  // Custom key for FlatList
  keyExtractor = (item: ItemChatDataType) => `id${item.id}`;

  handleRenderItem = ({ item }: any) => <Message item={item} />;

  render() {
    const { dataChat, inputMessage } = this.props;

    return (
      <View style={style.main}>
        <View style={style.messages}>
          <FlatList
            inverted
            data={dataChat}
            keyExtractor={this.keyExtractor}
            onScrollEndDrag={() => console.log("end")}
            onScrollBeginDrag={() => console.log("start")}
            onScroll={() => console.log("end")}
            renderItem={this.handleRenderItem}
          />
        </View>

        <View style={style.inputBlock}>
          <TextInput
            multiline
            style={style.inputMessage}
            placeholder="input your message"
            onChangeText={this.handleSetMessage}
            value={inputMessage}
          />

          <Button
            title=""
            buttonStyle={style.btn}
            containerStyle={style.btnContainer}
            icon={{ name: "paper-plane", type: "font-awesome" }}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default Chat;
