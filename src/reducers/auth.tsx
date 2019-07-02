import { SET_USER_TOKEN, SET_USER_ID } from "./../constants/chat";

const initialState = {
  userId: "",
  userToken: ""
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return {
        ...state,
        userToken: action.data
      };
    }
    case SET_USER_ID: {
      return {
        ...state,
        userId: action.data
      };
    }
    default:
      return state;
  }
}
