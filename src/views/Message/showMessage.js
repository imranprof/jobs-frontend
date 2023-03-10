import React from 'react';
import {useTheme} from "@material-ui/core/styles";
import {ShowMessageStyle} from "./showMessageStyle";
import moment from "moment";
import {Avatar, Icon, Tooltip} from "@material-ui/core";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";

const ShowMessage = (props) => {
  const theme = useTheme();
  const classes = ShowMessageStyle(theme)
  const {body, logged_in_user_id, sender_id, date_time, has_read, recipient_avatar} = props.data
  const {last} = props

  const messageTime = moment(date_time).fromNow();


  return (
    <>
      {sender_id === logged_in_user_id ? (
          <div>
            <div className={`${classes.showMessageWrapper}__send-message-wrapper`}>
              <div className={`${classes.showMessageWrapper}__send-message-body`}>
                <span className={`${classes.showMessageWrapper}__message-time`}>{messageTime}</span>
                <span className={`${classes.showMessageWrapper}__body-text`}>{body}</span>
              </div>
            </div>
            {last && (has_read ? <span className={`${classes.showMessageWrapper}__message-status`}>
                <Tooltip title="Seen" placement="top-end">
                  <Avatar
                    className={`${classes.showMessageWrapper}__seen-message-avatar`}
                    src={recipient_avatar}
                  />
                </Tooltip>
              </span> :
              <span className={`${classes.showMessageWrapper}__message-status`}>
                <Tooltip title="Delivered" placement="top-end">
                  <Icon className={`${classes.showMessageWrapper}__delivered-icon ${FontAwesomeIcons.selected}`}/>
                </Tooltip>
              </span>)}
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
