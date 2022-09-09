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

const MessageList = (props) => {
  const theme = useTheme();
  const classes = MessagesStyle(theme)
  const dispatch = useDispatch();
  const {allMessage} = props

  useEffect(()=> {
    dispatch(getAllParentMessage())
  },[])

  return (
    <>
      <h1>Messages</h1>
      <Divider />
      <Grid container className={classes.messagesWrapper}>
        <div className={`${classes.messagesWrapper}__parent-child-message-wrapper`}>
          <Grid item className={`${classes.messagesWrapper}__parent-messages-wrapper`}>
            {allMessage.map((message) => <Message key={message.id} data={message}/>)}
          </Grid>
          <Divider orientation="vertical" flexItem style={{ marginRight: "10px"}}/>
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
