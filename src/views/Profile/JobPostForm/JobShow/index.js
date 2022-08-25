import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {JobShowStyle} from "./style";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {getIndividualJobs, jobApplyAction} from "../../../../store/actions/jobAction";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose, jobList} = props
  const {title, description, location, skills, id} = data
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(getIndividualJobs())
  }, [])

  let btnTitle = 'Apply', isId, isDisabled=false;
  const handleClick = async () => {
    const response = await dispatch(jobApplyAction(id));
    if (response && response.status === 200) {
      dispatch(getIndividualJobs())
      isDisabled=true
      setToast({show: true, severity: "success", text: "Applied Job successfully!"});
    } else {
      setToast({show: true, severity: "error", text: "You already applied or something wrong!"});
    }
  }

  if (jobList.length !== 0) {
    isId = jobList.find((item) => {
      return item.id === id;
    })
  }
  if (isId) {
    btnTitle = 'Applied'
    isDisabled=true
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
            disabled={isDisabled}
          >
          {btnTitle}
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

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
  }
}

export default connect(mapStateToProps)(JobShow);
