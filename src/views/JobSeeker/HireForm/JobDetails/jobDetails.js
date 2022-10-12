import React from 'react';
import {Divider, Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {JobDetailsStyle} from "./style";

const JobDetails = ({details}) => {
  const theme = useTheme()
  const classes = JobDetailsStyle(theme);
  const {title, description} = details

  return (
    <>
      <Paper elevation={3} className={classes.jobDetailsWrapper}>
        <h1 className={`${classes.jobDetailsWrapper}__heading`}>Job Description</h1>
        <Divider/>
        <div className={`${classes.jobDetailsWrapper}__title-description-wrapper`}>
          <h3>Job Title</h3>
          <h4>{title}</h4>
          <h3>Job Details</h3>
          <pre className={`${classes.jobDetailsWrapper}__description`}>
            {description}
          </pre>
          <Divider/>
        </div>
      </Paper>
    </>
  );
};

export default JobDetails;