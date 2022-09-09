import {useState} from "react";
import Link from "next/link";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";

import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import CloseIcon from "@material-ui/icons/Close";

import {JobShowStyle} from "./style";
import CustomSnackbar from "../../../../lib/customSnackbar";
import {employeeSelectionAction, getIndividualJobs, jobApplyAction, sendMailJobSeekerAction} from "../../../../store/actions/jobAction";
import {getRole} from "../../../../auth/operations";
import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import ErrorMessage from "../../../../lib/errorMessage";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose, jobList, setJobs} = props
  const {title, description, location, skills, id} = data
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const dispatch = useDispatch()
  const role = getRole()
  const [checked, setChecked] = useState(false);
  const [showField, setShowField] = useState(false);

  let btnTitle = 'Apply', isId, isDisabled = false;

  const formik = useFormik({
    initialValues: {
      coverLetter: ""
    },
    validate: values => {
      let errors = {}
      if (!values.coverLetter || !values.coverLetter.trim()) {
        errors.coverLetter = "A cover letter is required!"
      }
      if (values.coverLetter.length >= 800) {
        errors.coverLetter = "Cover letter must have within 800 characters!"
      }
      return errors;
    },
    onSubmit: async (values) => {
      const response = await dispatch(jobApplyAction(id, values.coverLetter));
      if (response && response.status === 200) {
        dispatch(getIndividualJobs())
        isDisabled = true
        setShowField(true)
        setToast({show: true, severity: "success", text: "Applied Job successfully!"});
      } else {
        setToast({show: true, severity: "error", text: "You are not Eligible or something wrong!"});
      }
    }
  })

  const hasApplicantsKey = data.hasOwnProperty('applicants')
  let hasApplicants = false;
  if (hasApplicantsKey) {
    if (data.applicants.length !== 0) {
      hasApplicants = true;
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

  const sendMailToJobSeeker = (id) => {
    dispatch(sendMailJobSeekerAction(id))
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

      {role === 'employee' ? (
        <div>
          {(!showField && !isDisabled) && (
            <>
              <Divider className={`${classes.jobShowWrapper}__divider`}/>
              <div>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={8}
                  variant="outlined"
                  label="Write your cover letter"
                  name="coverLetter"
                  value={formik.values.coverLetter}
                  onChange={formik.handleChange}
                />
                {formik.errors.coverLetter ? <ErrorMessage error={formik.errors.coverLetter}/> : null}
              </div>
            </>
          )}

          <Divider className={`${classes.jobShowWrapper}__divider`}/>
          <div className={`${classes.jobShowWrapper}__btn-icon-wrapper`}>
            <div>
              <Button
                onClick={formik.handleSubmit}
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
            </div>
            {data.short_list &&
            <span className={`${classes.jobShowWrapper}__selected-icon-wrapper`}>
          <i className={FontAwesomeIcons.selected}/><span> Selected</span>
        </span>}
          </div>
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
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>
                    <span className={`${classes.jobShowWrapper}__applicant-list__table-header__title`}>Name</span>
                  </TableCell>
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>
                    <span className={`${classes.jobShowWrapper}__applicant-list__table-header__title`}>Profile</span>
                  </TableCell>
                  <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-header`}>
                    <span className={`${classes.jobShowWrapper}__applicant-list__table-header__title`}>Shortlist</span>
                  </TableCell>
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
                          />
                          <Tooltip
                            title={applicant.cover_letter}
                            placement="top"
                            arrow classes={{tooltip: `${classes.jobShowWrapper}__tooltip`}}
                          >
                            <span className={`${classes.jobShowWrapper}__applicant-list__name`}>
                              {fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1)} {fullName[1]}
                            </span>
                          </Tooltip>
                        </div>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell`}>
                        <Link href={`${applicant.profile_slug}`}><a target="_blank">More</a></Link>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell__shortlist`}>
                        <Checkbox
                          name={applicant.profile_slug}
                          checked={applicant.short_list}
                          className={`${classes.jobShowWrapper}__applicant-list__table-cell__checkbox`}
                          onChange={handleSelection}
                          value={applicant.application_id}
                        />
                        {applicant.short_list ? "Selected" : "Select"}

                        {applicant.short_list &&
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => sendMailToJobSeeker(applicant.application_id)}
                          >
                            Send email
                          </Button>
                        }
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
