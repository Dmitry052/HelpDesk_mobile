import {
  SET_TEXT_MESSAGE,
  SET_CHOSEN_PHOTO,
  SET_CHAT_MESSAGES,
  DELETE_CHOSEN_PHOTO
} from "./../constants/chat";
import { InitialStateChatType } from "./../components/Chat/types";

const initialState: InitialStateChatType = {
  inputMessage: "",
  userPhoto: [],
  dataChat: []
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SET_CHAT_MESSAGES: {
      return { ...state, dataChat: action.data };
    }
    case SET_TEXT_MESSAGE: {
      return { ...state, inputMessage: action.data };
    }
    case SET_CHOSEN_PHOTO: {
      return { ...state, userPhoto: [...state.userPhoto, action.data] };
    }
    case DELETE_CHOSEN_PHOTO: {
      return { ...state, userPhoto: [] };
    }
    default:
      return state;
  }
}
