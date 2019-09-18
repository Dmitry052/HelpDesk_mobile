import React from 'react';
import { View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import style from './style';
import { InputDataType } from './types';

const InputData = ({
  setPhoto,
  handleSetMessage,
  inputMessage,
  sendMessage,
  userPhoto,
}: InputDataType) => (
  <View>
    <View style={style.inputBlock}>
      <TouchableWithoutFeedback onPress={setPhoto}>
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
        onChangeText={handleSetMessage}
        value={inputMessage}
      />

      <TouchableWithoutFeedback onPress={sendMessage}>
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
  </View>
);

export default InputData;
