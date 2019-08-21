import {
  InitialStateChatType,
  InitialStateAuthType,
} from './../components/Chat/types';

export interface ReducersType {
  chat: InitialStateChatType;
  auth: InitialStateAuthType;
}
