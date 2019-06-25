import { Action, Dispatch } from "redux";
import { SET_TEXT_MESSAGE } from "./../constants/chat";
import config from "./../../config";

export const setTextMessage = (value: string) => (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: SET_TEXT_MESSAGE, data: value });
};

export const sendMessage = (value: string) => (dispatch: Dispatch<Action>) => {
  console.log(
    "Fetch: ",
    value,
    "to:",
    config.serverUrl,
    " and dispatch to props"
  );

  // Clear text input after succssesfull send
  dispatch({ type: SET_TEXT_MESSAGE, data: "" });
};
