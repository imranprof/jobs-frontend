import React, {useEffect, useState} from 'react';
import withLayout from "../../views/Layout";
import Divider from "@material-ui/core/Divider";
import Message from "../../views/Message";
import {useTheme} from "@material-ui/core/styles";
import {MessagesStyle} from "./style";
import {Grid, TextField} from "@material-ui/core";
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
    }, 5000);
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


  return (
    <>
      <h1>Messages</h1>
      <Divider/>
      {initialLoader && <CustomLoader/>}

      <div className={classes.messagesWrapper}>
        <div className={`${classes.messagesWrapper}__parent-child-message-wrapper`}>
          <div className={`${classes.messagesWrapper}__parent-messages-wrapper`}>
            {allMessage.map((message) => <Message key={message.id} data={message} openChat={openChat}
                                                  setOpenChat={setOpenChat}/>)}
          </div>
          <Divider orientation="vertical" className={`${classes.messagesWrapper}__divider`}/>
          <div style={{width: "70%", minHeight: "700px"}}>
            <div style={{height: "80%", overflowY: "auto", display: "flex", flexDirection:"column-reverse", marginBottom: "15px"}}>
              {(openChat) && conversations.map((message) => <ShowMessage key={message.id} data={message}/>)}
            </div>
            <div style={{height: "20%", marginBottom: "20px"}}>
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
              <div style={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}>
                <Button
                  size={"small"}
                  color={"primary"}
                  variant={"contained"}
                  onClick={formik.handleSubmit}
                >Send
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
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
