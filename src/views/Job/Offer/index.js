import React from 'react';
import {Paper} from "@material-ui/core";

const JobOffer = ({offer}) => {
  return (
    <Paper style={{padding: 20, marginBottom: 5, width: "60%"}}>
      <h3>{offer.related_job_title}</h3>
    </Paper>
  );
};

export default JobOffer;