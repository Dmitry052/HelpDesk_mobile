import { Action, Dispatch } from "redux";
import axios from "axios";
import {
  SET_TEXT_MESSAGE,
  SET_CHOSEN_PHOTO,
  SET_CHAT_MESSAGES,
  DELETE_CHOSEN_PHOTO
} from "./../constants/chat";
import { ItemChatDataType } from "./../components/Chat/types";
import config from "./../../config";

const sortMessages = (a: ItemChatDataType, b: ItemChatDataType) => {
  return Number(new Date(b.date)) - Number(new Date(a.date));
};

export const setTextMessage = (value: string) => (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SET_TEXT_MESSAGE, data: value });
};

export const setChosenPhoto = (value: string) => (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SET_CHOSEN_PHOTO, data: value });
};

export const sendMessage = (data: Array<ItemChatDataType>) => (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SET_CHAT_MESSAGES, data: data.sort(sortMessages) });
  // Clear text input after succssesfull send
  dispatch({ type: SET_TEXT_MESSAGE, data: "" });
  dispatch({ type: DELETE_CHOSEN_PHOTO });
};

export const sendMessageToFRrAPI = (value: string, userId: string) => {
  const data = {
    userId,
    message: value,
    type: "mobile",
    date: new Date()
  };

  axios({
    method: "post",
    url: `${config.serverUrl}/chat/sendMessage`,
    data
  })
    .then(response => console.log("** sendMessageToFRrAPI **", response.data))
    .catch(err => {
      console.log("** sendMessageToFRrAPI **", err);
    });
};
