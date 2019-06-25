import React from "react";
import {
  View,
  FlatList,
  TextInput,
  SafeAreaView,
  ImageBackground,
  ListRenderItemInfo,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";

import Message from "./Message";
import { PropsType, ItemChatDataType } from "./types";
import style from "./style";

const backgroundImg = require("./../../../img/background_chat.jpg");

class Chat extends React.Component<PropsType> {
  handleSetMessage = (value: string) => {
    const { setTextMessage } = this.props;

    setTextMessage(value);
  };

  // Custom key for FlatList
  keyExtractor = (item: ItemChatDataType) => `id${item.id}`;

  // Render message buble
  handleRenderItem = ({ item }: ListRenderItemInfo<ItemChatDataType>) => (
    <Message item={item} />
  );

  sendMessage = () => {
    const { inputMessage, sendMessage } = this.props;

    sendMessage(inputMessage);
  };

  render() {
    const { dataChat, inputMessage } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ImageBackground source={backgroundImg} style={style.main}>
          <View style={style.messages}>
            <FlatList
              inverted
              data={dataChat}
              keyExtractor={this.keyExtractor}
              onScrollEndDrag={() => console.log("end onScrollEndDrag")}
              onScrollBeginDrag={() => console.log("start onScrollBeginDrag")}
              onScroll={() => console.log("end onScroll")}
              renderItem={this.handleRenderItem}
            />
          </View>

          <View style={style.inputBlock}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={style.clipContainer}>
                <Icon
                  name="paperclip"
                  type="font-awesome"
                  color="#b0c4d5"
                  size={30}
                />
              </View>
            </TouchableWithoutFeedback>

            <TextInput
              multiline
              style={style.inputMessage}
              placeholder="message"
              placeholderTextColor="#b0c4d5"
              onChangeText={this.handleSetMessage}
              value={inputMessage}
            />

            <TouchableWithoutFeedback onPress={this.sendMessage}>
              <View style={style.sendContainer}>
                <Icon
                  name="arrow-circle-up"
                  type="font-awesome"
                  color="#b0c4d5"
                  size={30}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Chat;
