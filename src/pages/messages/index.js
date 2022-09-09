import React, {useEffect} from 'react';
import withLayout from "../../views/Layout";
import Divider from "@material-ui/core/Divider";
import Message from "../../views/Message";
import {useTheme} from "@material-ui/core/styles";
import {MessagesStyle} from "./style";
import {Grid} from "@material-ui/core";
import {getAllParentMessage} from "../../store/actions/messageAction";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import CustomLoader from "../../lib/customLoader";

const MessageList = (props) => {
  const theme = useTheme();
  const classes = MessagesStyle(theme)
  const dispatch = useDispatch();
  const {allMessage, initialLoader} = props

  useEffect(()=> {
    dispatch(getAllParentMessage())
  },[])

  return (
    <>
      <h1>Messages</h1>
      <Divider />
      {initialLoader && <CustomLoader/>}

      <Grid container className={classes.messagesWrapper}>
        <div className={`${classes.messagesWrapper}__parent-child-message-wrapper`}>
          <Grid item className={`${classes.messagesWrapper}__parent-messages-wrapper`}>
            {allMessage.map((message) => <Message key={message.id} data={message}/>)}
          </Grid>
          <Divider orientation="vertical" className={`${classes.messagesWrapper}__divider`} />
          <Grid item>
            <p>Chat Box Here</p>
          </Grid>
        </div>

      </Grid>
      </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialLoader: state.messageList.initialLoader,
    allMessage: state.messageList.parentMessageList
  }
}

export default  connect(mapStateToProps)(withLayout(MessageList, ''));
