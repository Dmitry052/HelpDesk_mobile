import { connect } from 'react-redux';
import Chat from './../components/Chat';
import { setUserToken, setLocalUserId } from './../actions/auth';
import { setTextMessage, sendMessage, setChosenPhoto } from './../actions/chat';
import { ReducersType } from './../types/reducers';

const mapStateToProps = ({ chat, auth }: ReducersType) => ({
  userId: auth.userId,
  userToken: auth.userToken,
  dataChat: chat.dataChat,
  inputMessage: chat.inputMessage,
  userPhoto: chat.userPhoto,
});

export default connect(
  mapStateToProps,
  { setTextMessage, sendMessage, setChosenPhoto, setUserToken, setLocalUserId },
)(Chat);
