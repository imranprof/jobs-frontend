import React from 'react';
import {Paper} from "@material-ui/core";
import Link from "next/link"
import {useTheme} from "@material-ui/core/styles";
import {JobOfferStyle} from "./style";

const JobOffer = ({offer}) => {
  const theme = useTheme();
  const classes = JobOfferStyle(theme);

  return (
    <Paper className={classes.jobOfferWrapper}>
      <Link href={`/job/offer/${offer.id}`}>
        <h3 className={`${classes.jobOfferWrapper}__title`}>{offer.related_job_title}</h3>
      </Link>
    </Paper>
  );
};

export default JobOffer;