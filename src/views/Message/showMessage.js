import React from 'react';
import {useTheme} from "@material-ui/core/styles";
import {ShowMessageStyle} from "./showMessageStyle";
import moment from "moment";

const ShowMessage = (props) => {
  const theme = useTheme();
  const classes = ShowMessageStyle(theme)
  const {body, logged_in_user_id, sender_id, date_time} = props.data

  const messageTime = moment(date_time).fromNow();


  return (
    <>
      {sender_id === logged_in_user_id ? (
          <div className={`${classes.showMessageWrapper}__send-message-wrapper`}>
            <div className={`${classes.showMessageWrapper}__send-message-body`}>
              <span className={`${classes.showMessageWrapper}__message-time`}>{messageTime}</span>
              <span className={`${classes.showMessageWrapper}__body-text`}>{body}</span>
            </div>
          </div>
        ) :
        (
          <div className={`${classes.showMessageWrapper}__received-message-wrapper`}>
            <div className={`${classes.showMessageWrapper}__received-message-body`}>
              <span className={`${classes.showMessageWrapper}__message-time`}>{messageTime}</span>
              <span className={`${classes.showMessageWrapper}__body-text`}>
                {body}</span>
            </div>
          </div>
        )

      }
    </>
  );
};

export default ShowMessage;
