export interface InputDataType {
  setPhoto: () => void;
  handleSetMessage: (value: string) => void;
  inputMessage: string;
  sendMessage: () => void;
  userPhoto: Array<string>;
}
