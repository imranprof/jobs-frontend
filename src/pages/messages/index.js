import React, {useEffect, useState} from 'react';
import {useDispatch, connect} from "react-redux";
import {useFormik} from "formik";

import Divider from '@material-ui/core/Divider';
import {useTheme} from "@material-ui/core/styles";
import {Avatar, Badge, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Message from "../../views/Message";

import withLayout from "../../views/Layout";
import {getAllParentMessage, getPrivateConversations, sendMessageAction} from "../../store/actions/messageAction";
import {getProfileAction} from "../../store/actions/topSectionActions";
import CustomLoader from "../../lib/customLoader";
import ShowMessage from "../../views/Message/showMessage";
import {MessagesStyle} from "./style";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const MessageList = (props) => {
  const theme = useTheme();
  const classes = MessagesStyle(theme)
  const dispatch = useDispatch();
  const {
    allMessage,
    initialLoader,
    conversations,
    sendMessageData,
    isAuthenticated,
    avatar,
    firstName,
    lastName,
    notificationCount
  } = props
  const {parent_id, recipient_id} = sendMessageData
  const [openChat, setOpenChat] = useState(false)

  useEffect(() => {
    isAuthenticated && dispatch(getAllParentMessage())
    isAuthenticated && dispatch(getProfileAction())
  }, [])

  let consumer;
  const liveMessageUrl = process.env.NEXT_PUBLIC_WEB_SOCKET_URL
  const createSubscriptions = async () => {
    const {createConsumer} = await import('@rails/actioncable')
    consumer = createConsumer(liveMessageUrl)
    consumer.subscriptions.create(
      {
        channel: 'PrivatechatChannel'
      },
      {
        received: message => {
          if (parent_id === message.parent_message_id) {
            dispatch(getPrivateConversations(parent_id))
          }
        }
      }
    )
  }


  useEffect(() => {
    createSubscriptions()
    return () => {
      consumer?.disconnect()
    }
  }, [parent_id])

  const sendMessageHandler = (values) => {
    dispatch(sendMessageAction({body: values.body, recipient_id: recipient_id, parent_message_id: parent_id}))
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {body: ''},
    validateOnChange: false,
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
        <div className={`${classes.messagesWrapper}__header-receiver-wrapper__title`}>
          <i className={`${FontAwesomeIcons.message} fa-2x`}/>
          <h2>All messages</h2>
        </div>

        <div className={`${classes.messagesWrapper}__header-receiver-wrapper__right`}>
          <Badge badgeContent={notificationCount} color="secondary">
            <i className={`${FontAwesomeIcons.bell} fa-2x`}/>
          </Badge>

          <Avatar
            className={`${classes.messagesWrapper}__current-user-avatar`}
            src={avatar}
            alt={`${firstName} ${lastName}`}
          />
        </div>
      </div>

      {initialLoader && <CustomLoader/>}

      <div className={classes.messagesWrapper}>
        <div className={`${classes.messagesWrapper}__parent-child-message-wrapper`}>
          <div className={`${classes.messagesWrapper}__parent-messages-wrapper`}>
            {allMessage.map((message) => <Message key={message.id} data={message} openChat={openChat}
                                                  setOpenChat={setOpenChat}/>)}
          </div>
          <Divider orientation="vertical" flexItem/>
          <div className={`${classes.messagesWrapper}__chat-box-field-btn-wrapper`}>

            {(select && openChat) &&
            <div className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details`}>
              <Avatar
                className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details__avatar`}
                src={clickedUserAvatar}
                alt="recipient avatar"
              />
              <span className={`${classes.messagesWrapper}__header-receiver-wrapper__receiver-details__name`}>
              {clickedUserName}</span>
            </div>}

            <div className={`${classes.messagesWrapper}__chat-wrapper`}>
              {(openChat) && conversations.map((message, i) => {
                return i === 0 ? <ShowMessage key={message.id} data={message} last={true}/> :
                  <ShowMessage key={message.id} data={message} last={false}/>
              })}
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
    sendMessageData: state.messageList.sendMessageData,
    isAuthenticated: state.auth.isAuthenticated,
    avatar: state.topSection.avatar,
    firstName: state.topSection.firstName,
    lastName: state.topSection.lastName,
    notificationCount: state.messageList.total_notification_count
  }
}

export default connect(mapStateToProps)(withLayout(MessageList, ''));
