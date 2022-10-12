import {useDispatch, connect} from "react-redux";

import {Avatar, Badge, Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {MessageStyle} from "./style";
import {getPrivateConversations, setSendMessageData, updateMessageStatus} from "../../store/actions/messageAction";

const Message = (props) => {
  const theme = useTheme();
  const classes = MessageStyle(theme)
  const dispatch = useDispatch()

  const {data, setOpenChat, sendMessageData} = props
  const {parent_id} = sendMessageData

  const {
    id,
    sender_name,
    recipient_name,
    sender_id,
    logged_in_user_id,
    sender_avatar,
    recipient_avatar,
    recipient_id,
    unread_count,
    last_message_body
  } = data

  const handleOpenChat = () => {
    dispatch(getPrivateConversations(id)).then(setOpenChat(true))
    dispatch(updateMessageStatus(id))

    if (logged_in_user_id === sender_id) {
      dispatch(setSendMessageData({parent_id: id, recipient_id: recipient_id}))
    } else {
      dispatch(setSendMessageData({parent_id: id, recipient_id: sender_id}))
    }
  }

  const activeHandleStyle = () => {
    if(parent_id && id === parent_id) {
      return "selected-border"
    } else {
      return ""
    }
  }

  return (
    <>
      <Paper onClick={handleOpenChat} className={`${classes.messageWrapper}`}>
        <div className={`${classes.messageWrapper}__full`}>

          <div className={activeHandleStyle()}/>

          <div>
            {logged_in_user_id === sender_id ? (
                <>
                  <div className={`${classes.messageWrapper}__avatar-name-Wrapper`}>
                    <Avatar
                      className={`${classes.messageWrapper}__avatar`}
                      src={recipient_avatar}
                      alt="recipient avatar"
                    />
                    <div className={`${classes.messageWrapper}__name-badge-wrapper`}>
                      <span className={`${classes.messageWrapper}__name`}>{recipient_name}</span>
                      <Badge badgeContent={unread_count} color="secondary"/>
                    </div>
                  </div>
                </>
              )
              : (
                <div className={`${classes.messageWrapper}__avatar-name-Wrapper`}>
                  <Avatar
                    className={`${classes.messageWrapper}__avatar`}
                    src={sender_avatar}
                    alt="sender avatar"
                  />
                  <div className={`${classes.messageWrapper}__name-badge-wrapper`}>
                    <span className={`${classes.messageWrapper}__name`}>{sender_name}</span>
                    <Badge badgeContent={unread_count} color="secondary"/>
                  </div>
                </div>
              )
            }
            <span className={`${classes.messageWrapper}__message-body`}>{last_message_body}</span>
          </div>
        </div>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    sendMessageData: state.messageList.sendMessageData,
  }
}

export default connect(mapStateToProps)(Message);
