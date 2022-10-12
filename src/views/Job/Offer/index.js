import React from 'react';
import {Paper} from "@material-ui/core";
import Link from "next/link"

const JobOffer = ({offer}) => {
  return (
    <Paper style={{padding: 10, marginBottom: 5, width: "60%"}}>
      <Link href={`/job/offer/${offer.id}`}>
        <h3 style={{cursor: "pointer", color: "#2264C4"}}>{offer.related_job_title}</h3>
      </Link>
    </Paper>
  );
};

export default JobOffer;