import React, {useEffect, useState} from 'react';
import withLayout from "../../views/Layout";
import Divider from "@material-ui/core/Divider";
import Message from "../../views/Message";
import {useTheme} from "@material-ui/core/styles";
import {MessagesStyle} from "./style";
import {Grid, TextField} from "@material-ui/core";
import {getAllParentMessage} from "../../store/actions/messageAction";
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
  const {allMessage, initialLoader, conversations} = props
  const [openChat, setOpenChat] = useState(false)

  useEffect(() => {
    dispatch(getAllParentMessage())
  }, [])

  // const initialMessageValues = {
  //   body: '',
  //   recipient_id: '',
  //   parent_message_id: ''
  // }
  // const sendMessageHandler = (values) => {
  //
  // }
  //
  // const formik = useFormik({
  //   initialValues: initialMessageValues,
  //   onSubmit: sendMessageHandler,
  //   validateOnChange: false
  // })

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
            <div style={{height: "80%", overflowY: "auto"}}>
              <h1>Chat Box Here</h1>
              {openChat && conversations.map((message) => <ShowMessage key={message.id} data={message}/>)}
            </div>
            <div style={{height: "20%", marginBottom: "20px"}}>
              <TextField
                multiline
                placeholder={"Type a message..."}
                rows={3}
                style={{width: "100%"}}
                variant="outlined"
                // value={formik.values.body}
                // onChange={formik.handleChange}
              />
              <div style={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}>
                <Button
                  size={"small"}
                  color={"primary"}
                  variant={"contained"}
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
    conversations: state.messageList.privateMessageList
  }
}

export default connect(mapStateToProps)(withLayout(MessageList, ''));
