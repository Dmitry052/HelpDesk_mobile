// @flow
export type ItemChatDataType = {
  id: number,
  type: string,
  timestamp: string,
  message: string
};

export type InitialStateType = {
  inputMessage: string,
  dataChat: Array<ItemChatDataType>
};

export type MapStateToPropsType = { chat: InitialStateType } & InitialStateType;

export type MapDispatchToPropsType = {
  setTextMessage: (value: string) => any
};

export type PropsChatComponentType = MapStateToPropsType &
  MapDispatchToPropsType;
