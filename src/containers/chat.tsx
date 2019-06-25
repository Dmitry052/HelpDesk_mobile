import { connect } from "react-redux";
import Chat from "./../components/Chat";
import { setTextMessage, sendMessage } from "./../actions/chat";
import { ReducersType } from "./../types/reducers";

const mapStateToProps = ({ chat }: ReducersType) => ({
  dataChat: chat.dataChat,
  inputMessage: chat.inputMessage
});

export default connect(
  mapStateToProps,
  { setTextMessage, sendMessage }
)(Chat);
