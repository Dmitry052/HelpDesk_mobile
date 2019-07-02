export interface ItemChatDataType {
  id: number;
  type: string;
  timestamp: Date;
  message: string;
}

export interface MessagePropsType {
  item: ItemChatDataType;
}

export interface InitialStateChatType {
  inputMessage: string;
  userPhoto: Array<string>;
  dataChat: Array<ItemChatDataType>;
}

export interface InitialStateAuthType {
  userToken: string;
  userId: string;
}

export interface MapDispatchToPropsType {
  setTextMessage: (value: string) => any;
  sendMessage: (value: Array<ItemChatDataType>) => any;
  setChosenPhoto: (value: string) => any;
  setUserToken: (token: string) => any;
  setLocalUserId: (userId: string) => any;
}

export type PropsType = InitialStateChatType &
  MapDispatchToPropsType &
  InitialStateAuthType;
