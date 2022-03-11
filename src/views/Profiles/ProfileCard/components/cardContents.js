import React from 'react';
import {CardContent, Divider, Typography} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const CardContents = ({ classes, profileInfo }) => {
  const {name, designation, hourlyRate, ratings, totalJob} = profileInfo;

  return (
    <>
      <CardContent>
        <div className={`${classes}__info`}>
          <Typography gutterBottom variant="h5" component="h2" className={`${classes}__info__name`}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={`${classes}__info__designation`}>
            {designation}
          </Typography>
        </div>
      </CardContent>
      <Divider />
      <CardContent>
        <div className={`${classes}__rate-info`}>
          <Typography variant="h5" component="h4" className={`${classes}__rate-info__hourly`}>
            ${hourlyRate}/hr
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={`${classes}__rate-info__ratings`}>
            <StarIcon />
            <span className={`${classes}__rate-info__rate`}>{`${ratings.toFixed(1)}/5`}</span><span>{`(${totalJob} jobs)`}</span>
          </Typography>
        </div>
      </CardContent>
    </>
  );
};

export default CardContents;
