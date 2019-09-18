import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ListRenderItemInfo,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import uuidv4 from 'uuid/v4';
import { setUserId, getUserId } from './../../managers/AuthManager';
import { sendMessageToFRrAPI } from './../../actions/chat';
import Message from './Message';
import InputData from './InputData';
import { getFbListeners } from './../../network/fbMessaging';
import { PropsType, ItemChatDataType } from './types';
import style, { backgroundImg } from './style';

class Chat extends React.Component<PropsType> {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'transparent',
    },
  };

  state = {
    onTokenRefreshListener: () => {},
    messageListener: () => {},
  };

  async componentDidMount() {
    const userId = await this.getUserId();
    const { setUserToken, setLocalUserId, userToken, sendMessage } = this.props;
    const listeners = await getFbListeners(
      setUserToken,
      userToken,
      sendMessage,
      userId,
    );

    if (listeners) {
      const { onTokenRefreshListener, messageListener } = listeners;
      this.setState({
        onTokenRefreshListener,
        messageListener,
      });
    }

    setLocalUserId(userId);
  }

  componentWillUnmount() {
    // Turn off listeners
    this.state.onTokenRefreshListener();
    this.state.messageListener();
  }

  // Get user id and set to storage
  getUserId = async () => {
    let userId: string = (await getUserId()) || '';
 
    if (!userId) {
      // *** For local tests use uuidv4 ***
      userId = uuidv4();
      setUserId(userId);
    }

    return userId;
  };

  // Listen change input
  handleSetMessage = (value: string) => {
    const { setTextMessage } = this.props;
    setTextMessage(value);
  };

  // Custom key for FlatList
  keyExtractor = (item: ItemChatDataType) => `id-${item._id || item.id}`;

  // Render message buble
  handleRenderItem = ({ item }: ListRenderItemInfo<ItemChatDataType>) => (
    <Message item={item} />
  );

  // Send message to FB server
  // If the request is successful the server will be send message and call messageListener
  // else input field will not be cleared
  sendMessage = () => {
    const { inputMessage, userId } = this.props;
    sendMessageToFRrAPI(inputMessage, userId);
  };

  // Get image from library or create new photo
  setPhoto = () => {
    const { setChosenPhoto } = this.props;
    const options = {
      title: 'Select photo',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = `data:image/jpeg;base64,${response.data}`;
        setChosenPhoto(source);
      }
    });
  };

  render() {
    const { dataChat, inputMessage, userPhoto } = this.props;

    return (
      <SafeAreaView style={style.container}>
        <ImageBackground source={backgroundImg} style={style.main}>
          <View style={style.messages}>
            <FlatList
              inverted
              data={dataChat}
              keyExtractor={this.keyExtractor}
              onScrollEndDrag={() => console.log('end onScrollEndDrag')}
              onScrollBeginDrag={() => console.log('start onScrollBeginDrag')}
              onScroll={() => console.log('end onScroll')}
              renderItem={this.handleRenderItem}
            />
          </View>

          <InputData
            setPhoto={this.setPhoto}
            handleSetMessage={this.handleSetMessage}
            inputMessage={inputMessage}
            sendMessage={this.sendMessage}
            userPhoto={userPhoto}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Chat;
