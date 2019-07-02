import firebase from "react-native-firebase";
import { registerUserToken } from "./../actions/auth";
import { ItemChatDataType } from "./../components/Chat/types";

type CB = (token: string) => void;
type CBsendMessage = (value: Array<ItemChatDataType>) => void;

export const getFbListeners = async (
  cbToken: CB,
  userToken: string,
  sendMessage: CBsendMessage,
  userId: string
) => {
  const enabled = await firebase.messaging().hasPermission();

  if (enabled) {
    const fcmToken = await firebase.messaging().getToken();
    const onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(fcmToken => {
        // Process your token as required
        cbToken(fcmToken);

        registerUserToken(userId, fcmToken);
      });

    if (!userToken) {
      cbToken(fcmToken);
      registerUserToken(userId, fcmToken);
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
