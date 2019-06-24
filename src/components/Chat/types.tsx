export interface ItemChatDataType {
  id: number;
  type: string;
  timestamp: Date;
  message: string;
}

export interface InitialStateType {
  inputMessage: string;
  dataChat: Array<ItemChatDataType>;
}

export interface MapDispatchToPropsType {
  setTextMessage: (value: string) => any;
}

export type PropsType = InitialStateType & MapDispatchToPropsType;
