import { Action, Dispatch } from "redux";
import { SET_TEXT_MESSAGE } from "./../constants/chat";

export const setTextMessage = (value: string) => (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SET_TEXT_MESSAGE, data: value });
};
