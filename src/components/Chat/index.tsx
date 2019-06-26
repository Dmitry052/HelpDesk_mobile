import React from "react";
import {
  View,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  ImageBackground,
  ListRenderItemInfo,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import { sendMessageToFRrAPI } from "./../../actions/chat";
import Message from "./Message";
import { getFbListeners } from "./../../network/fbMessaging";
import { PropsType, ItemChatDataType } from "./types";
import style from "./style";

const backgroundImg = require("./../../../img/background_chat.jpg");

class Chat extends React.Component<PropsType> {
  state = {
    onTokenRefreshListener: () => {},
    messageListener: () => {}
  };

  async componentDidMount() {
    const { setUserToken, userToken, sendMessage } = this.props;
    const listeners = await getFbListeners(
      setUserToken,
      userToken,
      sendMessage
    );

    if (listeners) {
      const { onTokenRefreshListener, messageListener } = listeners;
      this.setState({
        onTokenRefreshListener,
        messageListener
      });
    }
  }

  componentWillUnmount() {
    this.state.onTokenRefreshListener();
    this.state.messageListener();
  }

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
    const { inputMessage } = this.props;

    sendMessageToFRrAPI(inputMessage);
  };

  setPhoto = () => {
    const { setChosenPhoto } = this.props;

    const options = {
      title: "Select photo",
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = `data:image/jpeg;base64,${response.data}`;

        setChosenPhoto(source);
      }
    });
  };

  render() {
    const { dataChat, inputMessage, userPhoto } = this.props;

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
            <TouchableWithoutFeedback onPress={this.setPhoto}>
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

          <View style={style.previewImgContainer}>
            {userPhoto.map(item => (
              <Image source={{ uri: item }} style={style.previewImg} />
            ))}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Chat;
