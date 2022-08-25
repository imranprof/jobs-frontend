import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {JobShowStyle} from "./style";
import {useDispatch} from "react-redux";
import {jobApplyAction} from "../../../../store/actions/jobAction";
import React, {useState} from "react";
import CustomSnackbar from "../../../../lib/customSnackbar";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose} = props
  const {title, description, location, skills, id} = data
  const [toast,setToast] = useState({show: false, severity: "", text: ""});
  const dispatch = useDispatch()

  const handleClick = async () => {
    const response = await dispatch(jobApplyAction(id));
    if(response && response.status===200){
      setToast({show: true, severity: "success", text: "Applied Job successfully!"});
    }
    else {
      setToast({show: true, severity: "error", text: "You already applied or something wrong!"});
    }
  }

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
        <span onClick={handleClick}>
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
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  )
}

export default JobShow;
