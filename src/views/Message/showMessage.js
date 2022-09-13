import React from 'react';
import {Paper} from "@material-ui/core";

const ShowMessage = (props) => {
  const {body,logged_in_user_id, sender_id} = props.data


  return (
    <>
      {sender_id === logged_in_user_id ? (
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Paper style={{maxWidth: "70%", minWidth:"30%", marginBottom: "10px", padding: "10px", marginRight:"10px", backgroundColor:"#0084FF", borderRadius:"20px"}}>
              <span style={{whiteSpace: "pre-wrap", margin: 0}}>{body}</span>
            </Paper>
          </div>
        ) :
        (
          <div style={{display: "flex", justifyContent: "flex-start"}}>
            <Paper style={{maxWidth: "70%", marginBottom: "10px", padding: "10px", marginLeft: "10px", borderRadius:"20px"}}>
              <span style={{whiteSpace: "pre-wrap", margin: 0}}>{body}</span>
            </Paper>
          </div>
        )

      }
    </>
  );
};

export default ShowMessage;
