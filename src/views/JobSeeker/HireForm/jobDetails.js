import React from 'react';
import {Divider, Paper} from "@material-ui/core";

const JobDetails = ({details}) => {
  const {title, description} = details

  return (
    <>
      <Paper>
        <h1 style={{marginLeft: 20, paddingTop: 20}}>Job Description</h1>
        <Divider/>
        <div style={{marginLeft: 20}}>
          <h3>Job Title</h3>
          <h4>{title}</h4>
          <h3>Job Details</h3>
          <pre style={{
            whiteSpace: "pre-wrap",
            marginBottom: 25,
            fontSize: "15px",
            fontFamily: "Helvetica Neue",
            lineHeight: "1.5"
          }}>
            {description}
          </pre>
          <Divider/>
        </div>
      </Paper>
    </>
  );
};

export default JobDetails;