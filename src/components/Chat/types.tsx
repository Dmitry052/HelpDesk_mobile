export interface ItemChatDataType {
  id: number;
  type: string;
  timestamp: Date;
  message: string;
}

export interface MessagePropsType {
  item: ItemChatDataType;
}

export interface InitialStateType {
  inputMessage: string;
  userPhoto: Array<string>;
  dataChat: Array<ItemChatDataType>;
}

export interface MapDispatchToPropsType {
  setTextMessage: (value: string) => any;
  sendMessage: (value: string) => any;
  setChosenPhoto: (value: string) => any;
}

export type PropsType = InitialStateType & MapDispatchToPropsType;
