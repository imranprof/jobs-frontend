import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {JobShowStyle} from "./style";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {employeeSelectionAction, getIndividualJobs, jobApplyAction} from "../../../../store/actions/jobAction";
import {getRole} from "../../../../auth/operations";
import {
  Avatar, Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Link from "next/link";
import CloseIcon from "@material-ui/icons/Close";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose, jobList, setJobs} = props
  const {title, description, location, skills, id} = data
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const dispatch = useDispatch()
  const role = getRole()
  const [checked, setChecked] = useState(false);

  const hasApplicantsKey = data.hasOwnProperty('applicants')
  let hasApplicants = false;
  if (hasApplicantsKey) {
    if (data.applicants.length !== 0) {
      hasApplicants = true;
    }
  }

  let btnTitle = 'Apply', isId, isDisabled = false;
  const handleClick = async () => {
    const response = await dispatch(jobApplyAction(id));
    if (response && response.status === 200) {
      dispatch(getIndividualJobs())
      isDisabled = true
      setToast({show: true, severity: "success", text: "Applied Job successfully!"});
    } else {
      setToast({show: true, severity: "error", text: "You are not Eligible or something wrong!"});
    }
  }

  if (jobList.length !== 0) {
    isId = jobList.find((item) => {
      return item.id === id;
    })
  }
  if (isId) {
    btnTitle = 'Applied'
    isDisabled = true
  }

  const handleSelection = (e) => {
    const isChecked = e.target.checked
    const id = parseInt(e.target.value)
    dispatch(employeeSelectionAction(id, isChecked)).then(
      setJobs([])
    ).then(getIndividualJobs()).then(async () => {
      await setJobs([])
      await setChecked(!checked)
    })

  }

  return (
    <>
      <div className={classes.jobShowWrapper}>
        {role === 'employer' &&
        (<div className={`${classes.jobShowWrapper}__close-button`}>
            <span onClick={handleClose}>
              <IconButton><CloseIcon/></IconButton>
            </span>
          </div>
        )}
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
      {role === 'employee' ? (<div>
        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <Button
          onClick={handleClick}
          variant="contained"
          size="small"
          color="primary"
          disabled={isDisabled}
        >
          {btnTitle}
        </Button>
        <span onClick={handleClose} className={`${classes.jobShowWrapper}__button`}>
          <Button
            variant="outlined"
            size="small"
            color="default"
          >
          Cancel
          </Button>
      </span>
      </div>) : (
        hasApplicantsKey && hasApplicants && <>
          <Divider className={`${classes.jobShowWrapper}__divider`}/>
          <h3 className={`${classes.jobShowWrapper}__content-header`}>
            Applicant List
          </h3>
          <TableContainer component={Paper}>
            <Table aria-label={"customized table"}>
              <TableHead>
                <TableRow>
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>Name</TableCell>
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>Profile</TableCell>
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>Shortlist</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.applicants.map((applicant) => {
                  const fullName = applicant.profile_slug.split("-")
                  return (
                    <TableRow key={applicant.profile_slug}>
                      <TableCell
                        className={`${classes.jobShowWrapper}__applicant-list__table-cell`}>
                        <div className={`${classes.jobShowWrapper}__applicant-list__name-avatar-wrapper`}>
                          <Avatar
                            className={`${classes.jobShowWrapper}__applicant-list__avatar`}
                            src={applicant.avatar}
                            alt="Employee avatar"
                          />{fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1)} {fullName[1]}
                        </div>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell`}><Link
                        href={`${applicant.profile_slug}`}><a target="_blank">More</a></Link></TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell`}>
                        <Checkbox
                          name={applicant.profile_slug}
                          checked={applicant.short_list}
                          style={{color: "#009432"}}
                          onChange={handleSelection}
                          value={applicant.application_id}
                        />
                      </TableCell>
                    </TableRow>
                  )
                })

                }
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )
      }
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
