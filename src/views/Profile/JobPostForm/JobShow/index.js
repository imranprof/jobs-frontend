import {useState} from "react";
import Link from "next/link";
import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";
import moment from "moment";

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
import {
  employeeSelectionAction,
  getIndividualJobs,
  jobApplyAction,
  sendMailJobSeekerAction,
  setApplicationDetails
} from "../../../../store/actions/jobAction";
import {getRole} from "../../../../auth/operations";
import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons"
import ErrorMessage from "../../../../lib/errorMessage";
import JobTooltip from "./jobTooltip";
import {getAllParentMessage} from "../../../../store/actions/messageAction";

const JobShow = (props) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);
  const {data, handleClose, jobList, setJobs, allParentMessage} = props
  const {title, description, location, skills, id, pay_type, created_at, total_applied, budget, bid_rate} = data
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const dispatch = useDispatch()
  const role = getRole()
  const [checked, setChecked] = useState(false);
  const [showField, setShowField] = useState(false);

  const payTypeText = pay_type === 'Pay by the hour' ? 'Hourly' : 'Fixed-price'
  const jobPostedTime = moment(created_at).fromNow();
  const budgetRange = pay_type === 'Pay by the hour' ? `$${budget[0]}-$${budget[1]}` : `$${budget[0]}`

  let btnTitle = 'Apply', isId, isDisabled = false;

  const formik = useFormik({
    initialValues: {
      coverLetter: "",
      bidRate: ""
    },
    validate: values => {
      let errors = {}
      if (!values.coverLetter || !values.coverLetter.trim()) {
        errors.coverLetter = "A cover letter is required!"
      }
      if (values.coverLetter.length >= 800) {
        errors.coverLetter = "Cover letter must have within 800 characters!"
      }
      if (!values.bidRate) {
        errors.bidRate = "Bid rate can't be blank"
      }
      return errors;
    },
    onSubmit: async (values) => {
      const response = await dispatch(jobApplyAction(id, values.bidRate, values.coverLetter.trim()));
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

  const sendMailToJobSeeker = async (id, applicantId) => {
    await dispatch(getAllParentMessage()).then(
      () => {
        let found = allParentMessage.find(msg => msg.recipient_id === applicantId)
        if (found) {
          dispatch(sendMailJobSeekerAction(id))
        } else {
          dispatch(sendMailJobSeekerAction(id, applicantId))
        }
      }
    )
  }
  return (
    <>
      <div className={classes.jobShowWrapper}>
        <div className={`${classes.jobShowWrapper}__close-button`}>
            <span onClick={handleClose}>
              <IconButton><CloseIcon/></IconButton>
            </span>
        </div>

        <h1 className={`${classes.jobShowWrapper}__title`}>
          {title}
        </h1>
        <span className={`${classes.jobShowWrapper}__pay-type`}>{`Posted ${jobPostedTime}`}</span>

        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <pre className={`${classes.jobShowWrapper}__description`}>
        {description}
      </pre>

        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <div className={`${classes.jobShowWrapper}__budgetWrapper`}>
          <i className={`${classes.jobShowWrapper}__pay-type-icon ${payTypeText === 'Hourly' ? 'fa-regular fa-clock' : 'fa-solid fa-money-check-dollar'}`}/>
          <span className={`${classes.jobShowWrapper}__budget`}>{budgetRange}</span>
        </div>
        <span className={`${classes.jobShowWrapper}__pay-type__text`}>{payTypeText}</span>

        {(role === 'employee' && bid_rate) && (
          <>
            <Divider className={`${classes.jobShowWrapper}__divider`}/>
            <h3 className={`${classes.jobShowWrapper}__bidding-text`}>{pay_type === 'Pay by the hour' ? 'Your hourly rate' : 'Your bidding rate'}</h3>
            <span className={`${classes.jobShowWrapper}__bidding-subtext`}>Total amount the employer will see on your proposal</span>
            <div className={`${classes.jobShowWrapper}__bidding-wrapper`}>
              <i className={`${classes.jobShowWrapper}__pay-type-icon ${payTypeText === 'Hourly' ? 'fa-regular fa-clock' : 'fa-solid fa-money-check-dollar'}`}/>
              <h4>{`$${bid_rate}${pay_type === 'Pay by the hour' ? '/hr' : ''}`}</h4>
            </div>
          </>
        )}

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

        <Divider className={`${classes.jobShowWrapper}__divider`}/>
        <p className={`${classes.jobShowWrapper}__total-applied`}>{`Total applied: ${total_applied}`}</p>
      </div>

      {role === 'employee' ? (
        <div className={`${classes.jobShowWrapper}__fieldsWrapper`}>
          {(!showField && !isDisabled) && (
            <>
              <Divider className={`${classes.jobShowWrapper}__divider`}/>
              <h4 className={`${classes.jobShowWrapper}__bid-rate__title`}>What is the full amount you'd like to bid for this job?</h4>
              <div className={`${classes.jobShowWrapper}__bid-rate`}>
                <span className={`${classes.jobShowWrapper}__bid-rate__text`}>
                  {pay_type === 'Pay by the hour' ? 'Hourly Rate:' : 'Bid:'}
                </span>
                <TextField
                  type="number"
                  size="small"
                  variant="outlined"
                  label="$"
                  name="bidRate"
                  value={formik.values.bidRate}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.bidRate ? <ErrorMessage error={formik.errors.bidRate}/> : null}

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
                    <span className={`${classes.jobShowWrapper}__applicant-list__table-header__title`}>Application</span>
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
                            arrow
                            title={<JobTooltip coverLetter={applicant.cover_letter} bidRate={applicant.bid_rate} payType={pay_type} />}
                            placement="top"
                            classes={{tooltip: `${classes.jobShowWrapper}__tooltip`}}
                          >
                            <span className={`${classes.jobShowWrapper}__applicant-list__name`}>
                              {fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1)} {fullName[1]}
                            </span>
                          </Tooltip>
                          {applicant.hire_confirmation && <span className={`${classes.jobShowWrapper}__hired-icon`}>
                            <Tooltip title={"Hired"} placement="top" arrow>
                                <i className={`${FontAwesomeIcons.achievement}`} />
                            </Tooltip>
                            </span>}
                        </div>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell`}>
                        <Link href={`${applicant.profile_slug}`}><a target="_blank">More</a></Link>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell`}>
                        <Link href={`/job-application/${applicant.application_id}/details`} >
                          <a target={"_blank"}
                            className={`${classes.jobShowWrapper}__applicant-list__details-link`}
                          >
                            Details
                          </a>
                        </Link>
                      </TableCell>
                      <TableCell className={`${classes.jobShowWrapper}__applicant-list__table-cell__shortlist`}>
                        <div className={`${classes.jobShowWrapper}__applicant-list__table-cell__checkbox-wrapper`}>
                          <Checkbox
                            name={applicant.profile_slug}
                            checked={applicant.short_list}
                            className={`${classes.jobShowWrapper}__applicant-list__table-cell__checkbox`}
                            onChange={handleSelection}
                            value={applicant.application_id}
                          />
                          <span className={`${classes.jobShowWrapper}__applicant-list__table-cell__checkbox-label`}>
                          {applicant.short_list ? "Selected" : "Select"}
                        </span>
                        </div>

                        {applicant.short_list &&
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => sendMailToJobSeeker(applicant.application_id, applicant.applicant_id)}
                        >
                          Send message
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
    allParentMessage: state.messageList.parentMessageList
  }
}

export default connect(mapStateToProps)(JobShow);
