import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { SET_USER_TOKEN, SET_USER_ID } from './../constants/chat';
import config from './../../config';

export const setUserToken = (token: string) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: SET_USER_TOKEN, data: token });
};

export const setLocalUserId = (userId: string) => (
  dispatch: Dispatch<Action>,
) => {
  dispatch({ type: SET_USER_ID, data: userId });
};

export const registerUserToken = (userId: string, userToken: string) => {
  axios({
    method: 'post',
    url: `${config.serverUrl}/auth/register`,
    data: {
      userId,
      userToken,
    },
  })
    .then(response => {
      console.log('** Register Token **', response.data);
    })
    .catch(err => {
      console.log('** Register Token ERROR **', err);
    });
};
