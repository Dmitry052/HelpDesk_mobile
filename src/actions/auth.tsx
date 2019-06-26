import { Action, Dispatch } from "redux";
import axios from "axios";
import { SET_USER_TOKEN } from "./../constants/chat";
import config from "./../../config";

export const setUserToken = (value: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: SET_USER_TOKEN, data: value });
};

export const registerUserToken = (userId: string, userToken: string) => {
  axios({
    method: "post",
    url: `${config.serverUrl}/register`,
    data: {
      userId,
      userToken
    }
  })
    .then(response => console.log("** Register Token **", response.data))
    .catch(err => {
      console.log("** Register Token ERROR **", err);
    });
};
