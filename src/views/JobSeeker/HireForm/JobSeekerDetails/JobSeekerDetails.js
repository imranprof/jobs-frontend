import React, {useEffect} from 'react';
import {Avatar, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {connect, useDispatch} from "react-redux";
import {useTheme} from "@material-ui/core/styles";
import {JobSeekerDetailsStyle} from "./style";

const JobSeekerDetails = (props) => {
  const {avatar, name, email} = props
  const theme = useTheme();
  const classes = JobSeekerDetailsStyle(theme);

  return (
    <>
      <h1 className={`${classes.jobSeekerDetailsWrapper}__title`}>Hire</h1>
      <Paper>
        <div className={`${classes.jobSeekerDetailsWrapper}__avatar-name-wrapper`}>
          <Avatar
            src={avatar}
            className={`${classes.jobSeekerDetailsWrapper}__avatar`}
          />
          <h3 className={`${classes.jobSeekerDetailsWrapper}__name`}>{name}</h3>
        </div>
      </Paper>
    </>
  );
};


export default JobSeekerDetails;