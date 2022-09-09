import React from 'react';
import {Avatar, Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {MessageStyle} from "./style";

const Message = (props) => {
  const theme = useTheme();
  const classes = MessageStyle(theme)


  const {data} = props

  const {id, sender_name, recipient_name, body, sender_id, logged_in_user_id, sender_avatar, recipient_avatar} = data

  return (
    <>
      <Paper className={classes.messageWrapper}>
        {logged_in_user_id === sender_id ? (
          <div className={`${classes.messageWrapper}__avatar-name-Wrapper`}>
              <Avatar
                className={`${classes.messageWrapper}__avatar`}
                src={recipient_avatar}
                alt="recipient avatar"
              />
            <span className={`${classes.messageWrapper}__name`}>{recipient_name}</span>
          </div>
          )
          : (
            <div className={`${classes.messageWrapper}__avatar-name-Wrapper`}>
                <Avatar
                  className={`${classes.messageWrapper}__avatar`}
                  src={sender_avatar}
                  alt="sender avatar"
                />
              <span className={`${classes.messageWrapper}__name`}>{sender_name}</span>
            </div>
          )
        }
        <span className={`${classes.messageWrapper}__message-body`}>{body}</span>
      </Paper>
    </>
  );
};

export default Message;
