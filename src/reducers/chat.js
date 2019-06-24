import { SET_TEXT_MESSAGE } from "./../constants/chat";
import type { InitialStateType } from "./../components/Chat/types";

const initialState: InitialStateType = {
  inputMessage: "",
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
      timestamp: new Date(new Date() - 100000000),
      message: "input message text 3"
    },
    {
      id: 3,
      type: "input",
      timestamp: new Date(new Date() - 200000000),
      message: "output message text 2"
    },
    {
      id: 4,
      type: "output",
      timestamp: new Date(new Date() - 300000000),
      message: "input message text 1"
    }
  ]
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_MESSAGE: {
      return { ...state, inputMessage: action.data };
    }
    default:
      return { ...state };
  }
}
