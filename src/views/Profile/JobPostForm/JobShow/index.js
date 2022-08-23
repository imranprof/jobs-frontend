import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {JobShowStyle} from "./style";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose} = props
  const {title, description, location, skills} = data

  return (
    <>
      <div className={classes.jobShowWrapper}>
        <h1 className={`${classes.jobShowWrapper}__title`}>
          {title}
        </h1>

        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <pre className={`${classes.jobShowWrapper}__description`}>
        {description}
      </pre>
        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <h3 className={`${classes.jobShowWrapper}__content-header`}>
          Skills & Expertise
        </h3>
        <div className={`${classes.jobShowWrapper}__skills-wrapper`}>
          {skills.map(skill => <span key={skill} className={`${classes.jobShowWrapper}__skills-wrapper__skill`}>
          {skill}
        </span>)}
        </div>
        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <h3 className={`${classes.jobShowWrapper}__content-header`}>Client location</h3>
        <p className={`${classes.jobShowWrapper}__location`}>{location}</p>
      </div>
      <div>
        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <span>
          <Button
            variant="contained"
            size="small"
            color="primary"
          >
          Apply
          </Button>
        </span>
        <span onClick={handleClose} className={`${classes.jobShowWrapper}__button`}>
          <Button
            variant="outlined"
            size="small"
            color="default"
          >
          Cancel
          </Button>
      </span>
      </div>
    </>
  )
}

export default JobShow;
