import React from 'react';
import { Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import {HiredStyle} from "./style";

const Hired = ({applicantName}) => {
  const theme = useTheme()
  const classes = HiredStyle(theme);

  return (
    <Paper elevation={3} className={classes.hiredWrapper}>
      <div className={`${classes.hiredWrapper}__content-wrapper`}>
          <img
            className={`${classes.hiredWrapper}__image`}
            src="/hire-email.gif"
            alt="hire image"
          />
        <h2 className={`${classes.hiredWrapper}__text`}>Offer sent to {applicantName}</h2>
        <h3 className={`${classes.hiredWrapper}__text`}>We'll notify you when {applicantName} responds to your Offer</h3>
      </div>
    </Paper>
  );
};

export default Hired;