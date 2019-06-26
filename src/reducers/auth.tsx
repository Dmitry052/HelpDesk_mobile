import { SET_USER_TOKEN } from "./../constants/chat";

const initialState = {
  userToken: ""
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return { ...state, userToken: action.data };
    }
    default:
      return state;
  }
}
