import firebase from "react-native-firebase";
import { registerUserToken } from "./../actions/auth";
import { ItemChatDataType } from "./../components/Chat/types";

type CB = (value: string) => void;
type CBsendMessage = (value: Array<ItemChatDataType>) => void;

export const getFbListeners = async (
  cbToken: CB,
  userToken: string,
  sendMessage: CBsendMessage
) => {
  const enabled = await firebase.messaging().hasPermission();

  if (enabled) {
    const uuidv4 = require("uuid/v4");
    const fcmToken = await firebase.messaging().getToken();
    const onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(fcmToken => {
        // Process your token as required
        cbToken(fcmToken);

        registerUserToken(uuidv4(), fcmToken);
      });

    if (!userToken) {
      cbToken(fcmToken);
      registerUserToken(uuidv4(), fcmToken);
    }

    const messageListener = firebase.messaging().onMessage((message: any) => {
      // Process your message as required
      sendMessage(JSON.parse(message._data.messages));
    });

    return { onTokenRefreshListener, messageListener };
  } else {
    console.log("** Permission provided **");

    try {
      await firebase.messaging().requestPermission();
      console.log(" ** User has authorised  ** ");
    } catch (error) {
      console.log(" ** Provide permission error  ** ");
    }
  }
};
