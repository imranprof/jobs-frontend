import React from "react";

import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {JobShowStyle} from "./style";

const JobShow = (props) => {
  const theme = useTheme();
  const {title, description, location, skills} = props.data
  const classes = JobShowStyle(theme);

  return (
    <>
      <div className={classes.jobShowWrapper}>
        <h1 className={`${classes.jobShowWrapper}__title`}>
          {title}
        </h1>

        <Divider className={`${classes.jobShowWrapper}__title__divider`}/>
        <pre className={`${classes.jobShowWrapper}__description`}>
        {description}
      </pre>
        <Divider className={`${classes.jobShowWrapper}__description__divider`}/>
        <h3 className={`${classes.jobShowWrapper}__skills-header`}>
          Skills & Expertise
        </h3>
        <div className={`${classes.jobShowWrapper}__skills-wrapper`}>
          {skills.map(skill => <span key={skill} className={`${classes.jobShowWrapper}__skills-wrapper__skill`}>
          {skill}
        </span>)}
        </div>
        <Divider className={`${classes.jobShowWrapper}__skills-wrapper__divider`}/>
        <h3 className={`${classes.jobShowWrapper}__about-header`}>Client location</h3>
        <p className={`${classes.jobShowWrapper}__location`}>{location}</p>
      </div>
      <div>
        <Divider className={`${classes.jobShowWrapper}__location__divider`}/>
        <span>
          <Button
            variant="contained"
            size="large"
            color="secondary"
          >
          Apply
          </Button>
      </span>
      </div>
    </>
  )
}

export default JobShow;
