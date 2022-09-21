import React, {useEffect, useState} from 'react';
import withLayout from "../../views/Layout";
import Divider from '@material-ui/core/Divider';
import Message from "../../views/Message";
import {useTheme} from "@material-ui/core/styles";
import {MessagesStyle} from "./style";
import {Avatar, Grid, TextField} from "@material-ui/core";
import {getAllParentMessage, getPrivateConversations, sendMessageAction} from "../../store/actions/messageAction";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import CustomLoader from "../../lib/customLoader";
import Button from "@material-ui/core/Button";
import ShowMessage from "../../views/Message/showMessage";
import {useFormik} from "formik";

const MessageList = (props) => {
  const theme = useTheme();
  const classes = MessagesStyle(theme)
  const dispatch = useDispatch();
  const {allMessage, initialLoader, conversations, sendMessageData} = props
  const {parent_id, recipient_id} = sendMessageData
  const [openChat, setOpenChat] = useState(false)

  useEffect(() => {
    dispatch(getAllParentMessage())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (parent_id) dispatch(getPrivateConversations(parent_id))
    }, 10000);
    return () => clearInterval(interval);
  }, [parent_id])

  const sendMessageHandler = (values) => {
    dispatch(sendMessageAction({body: values.body, recipient_id: recipient_id, parent_message_id: parent_id}))
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {body: ''},
    onSubmit: sendMessageHandler
  });

  let select = false;
  let clickedUserAvatar = '';
  let clickedUserName = '';
  if (conversations.length > 0) {
    select = true;
    let len = conversations.length
    let clickedUser = conversations[len - 1];
    const {logged_in_user_id, recipient_avatar, recipient_name, sender_avatar, sender_id, sender_name} = clickedUser

    if (logged_in_user_id === sender_id) {
      clickedUserName = recipient_name;
      clickedUserAvatar = recipient_avatar;
    } else {
      clickedUserName = sender_name;
      clickedUserAvatar = sender_avatar;
    }
  }
  
  return (
    <div className={classes.messagesWrapper}>
      <div className={`${classes.messagesWrapper}__header-receiver-wrapper`}>
        <h1>Messages</h1>
        {
          (select && openChat) &&
          <div className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details`}>
            <Avatar
              className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details__avatar`}
              src={clickedUserAvatar}
              alt="recipient avatar"
            />
            <span className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details__name`}>
              {clickedUserName}</span>
          </div>
        }
      </div>

      <Divider/>
      {initialLoader && <CustomLoader/>}

      <div className={classes.messagesWrapper}>
        <div className={`${classes.messagesWrapper}__parent-child-message-wrapper`}>
          <div className={`${classes.messagesWrapper}__parent-messages-wrapper`}>
            {allMessage.map((message) => <Message key={message.id} data={message} openChat={openChat}
                                                  setOpenChat={setOpenChat}/>)}
          </div>
          <Divider orientation="vertical" flexItem className={`${classes.messagesWrapper}__divider`}/>
          <div className={`${classes.messagesWrapper}__chat-box-field-btn-wrapper`}>
            <div className={`${classes.messagesWrapper}__chat-wrapper`}>
              {(openChat) && conversations.map((message) => <ShowMessage key={message.id} data={message}/>)}
            </div>
            {openChat && <div className={`${classes.messagesWrapper}__text-field-btn-wrapper`}>
              <TextField
                multiline
                fullWidth
                name="body"
                placeholder={"Type a message..."}
                rows={3}
                variant="outlined"
                value={formik.values.body}
                onChange={formik.handleChange}
              />
              <div className={`${classes.messagesWrapper}__send-btn-wrapper`}>
                <Button
                  size={"small"}
                  color={"primary"}
                  variant={"contained"}
                  onClick={formik.handleSubmit}
                >Send
                </Button>
              </div>
            </div>}
          </div>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialLoader: state.messageList.initialLoader,
    allMessage: state.messageList.parentMessageList,
    conversations: state.messageList.privateMessageList,
    sendMessageData: state.messageList.sendMessageData
  }
}

export default connect(mapStateToProps)(withLayout(MessageList, ''));
