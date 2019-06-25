import {
  SET_TEXT_MESSAGE,
  SET_CHOSEN_PHOTO,
  DELETE_CHOSEN_PHOTO
} from "./../constants/chat";
import { InitialStateType } from "./../components/Chat/types";

const initialState: InitialStateType = {
  inputMessage: "",
  userPhoto: [],
  dataChat: [
    {
      id: 1,
      type: "input",
      timestamp: new Date(),
      message: "output message text 4"
    },
    {
      id: 2,
      type: "output",
      timestamp: new Date(),
      message: "input message text 3"
    },
    {
      id: 3,
      type: "input",
      timestamp: new Date(),
      message: "output message text 2"
    },
    {
      id: 4,
      type: "output",
      timestamp: new Date(),
      message: "input message text 1"
    }
  ]
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
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
      return { ...state };
  }
}
