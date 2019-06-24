import { SET_TEXT_MESSAGE } from "./../constants/chat";

export const setTextMessage = value => dispatch => {
  dispatch({ type: SET_TEXT_MESSAGE, data: value });
};
