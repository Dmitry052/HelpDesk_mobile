import { connect } from "react-redux";
import Chat from "./../components/Chat";
import { setUserToken } from "./../actions/auth";
import { setTextMessage, sendMessage, setChosenPhoto } from "./../actions/chat";
import { ReducersType } from "./../types/reducers";

const mapStateToProps = ({ chat, auth }: ReducersType) => ({
  userToken: auth.userToken,
  dataChat: chat.dataChat,
  inputMessage: chat.inputMessage,
  userPhoto: chat.userPhoto
});

export default connect(
  mapStateToProps,
  { setTextMessage, sendMessage, setChosenPhoto, setUserToken }
)(Chat);
