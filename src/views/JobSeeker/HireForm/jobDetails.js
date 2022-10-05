import React from 'react';
import {Divider, Paper} from "@material-ui/core";

const JobDetails = () => {
  return (
    <>
      <Paper>
        <h1 style={{marginLeft: 20, paddingTop: 20}}>Job Description</h1>
        <Divider/>
        <div style={{marginLeft: 20}}>
          <h3>Job Title</h3>
          <h4>Ruby On Rails Developer</h4>
          <h3>Job Details</h3>
          <pre style={{whiteSpace: "pre-wrap", marginBottom: 25}}>
            We are looking for a Senior  Rails Web developer with good communication skills.

Please see below the technical skill set required:
For Front-end:
Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
Strong Proficiency in HTML/CSS and experience with Bootstrap and Font Awesome
Thorough understanding of ReactJS and its core principles
Experience with popular ReactJS workflows (such as Flux and Redux)
Experience with AngularJS
          </pre>
          <Divider/>
        </div>
      </Paper>
    </>
  );
};

export default JobDetails;