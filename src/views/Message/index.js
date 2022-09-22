import React, {useState} from 'react';
import {Avatar, Badge, Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {MessageStyle} from "./style";
import {getPrivateConversations, setSendMessageData} from "../../store/actions/messageAction";
import {useDispatch} from "react-redux";

const Message = (props) => {
  const theme = useTheme();
  const classes = MessageStyle(theme)
  const dispatch = useDispatch()

  const {data, openChat, setOpenChat} = props

  const {
    id,
    sender_name,
    recipient_name,
    body,
    sender_id,
    logged_in_user_id,
    sender_avatar,
    recipient_avatar,
    recipient_id,
    unread_count
  } = data

  const handleOpenChat = () => {
    dispatch(getPrivateConversations(id)).then(setOpenChat(true))

    if (logged_in_user_id === sender_id) {
      dispatch(setSendMessageData({parent_id: id, recipient_id: recipient_id}))
    } else {
      dispatch(setSendMessageData({parent_id: id, recipient_id: sender_id}))
    }
  }


  return (
    <>
      <Paper onClick={handleOpenChat} className={classes.messageWrapper}>
        {logged_in_user_id === sender_id ? (

            <div className={`${classes.messageWrapper}__avatar-name-Wrapper`}>
              <Avatar
                className={`${classes.messageWrapper}__avatar`}
                src={recipient_avatar}
                alt="recipient avatar"
              />
              <div className={`${classes.messageWrapper}__name-badge-wrapper`}>
                <span className={`${classes.messageWrapper}__name`}>{recipient_name}</span>
                <Badge badgeContent={unread_count} color="primary"/>
              </div>
            </div>
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
                <Badge badgeContent={unread_count} color="primary"/>
              </div>
            </div>
          )
        }
        <span className={`${classes.messageWrapper}__message-body`}>{body}</span>
      </Paper>

    </>
  );
};

export default Message;
