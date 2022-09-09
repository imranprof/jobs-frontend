import React from 'react';
import {Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {MessageStyle} from "./style";

const Message = (props) => {
  const theme = useTheme();
  const classes = MessageStyle(theme)


  const {data} = props

  const {id, sender_name, recipient_name, body, sender_id, logged_in_user_id} = data


  return (
    <>
      <Paper className={classes.messageWrapper}>
        {logged_in_user_id === sender_id ? (
            <h3>{recipient_name}</h3>
          )
          : (
            <h3>{sender_name}</h3>
          )
        }
        <p>{body}</p>
      </Paper>
    </>
  );
};


export default Message;
