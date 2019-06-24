// @flow
import { connect } from "react-redux";
import Chat from "./../components/Chat";
import { setTextMessage } from "./../actions/chat";
import type {
  MapStateToPropsType,
  MapDispatchToPropsType
} from "./../components/Chat/types";

const mapStateToProps = ({ chat }: MapStateToPropsType) => ({
  dataChat: chat.dataChat,
  inputMessage: chat.inputMessage
});

export default connect(
  mapStateToProps,
  { setTextMessage }
)(Chat);
