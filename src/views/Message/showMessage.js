import React from 'react';

const ShowMessage = (props) => {
  const {body,logged_in_user_id, sender_id} = props.data


  return (
    <>
      {sender_id === logged_in_user_id ? (
          <div style={{display: "flex", justifyContent: "flex-end", marginTop: "5px"}}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "70%",
              minWidth:"10%",
              marginBottom: "5px",
              padding: "10px",
              marginRight:"10px",
              backgroundColor:"#0084FF",
              color: "#F9F9FD",
              borderRadius:"20px"
            }}>
              <span style={{whiteSpace: "pre-wrap", margin: 0}}>{body}</span>
            </div>
          </div>
        ) :
        (
          <div style={{display: "flex", justifyContent: "flex-start", marginTop: "5px"}}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "70%",
              minWidth:"10%",
              marginBottom: "5px",
              padding: "10px",
              backgroundColor: "#3E4042",
              color: "#F9F9FD",
              marginLeft: "10px",
              borderRadius:"20px"}}>
              <span style={{whiteSpace: "pre-wrap", margin: 0}}>{body}</span>
            </div>
          </div>
        )

      }
    </>
  );
};

export default ShowMessage;
