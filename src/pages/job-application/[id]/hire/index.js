import React, {useEffect, useState} from 'react';
import Link from "next/link";

import withLayout from "../../../../views/Layout";
import JobSeekerHireForm from "../../../../views/JobSeeker/HireForm";
import JobDetails from "../../../../views/JobSeeker/HireForm/jobDetails";
import {NoSsr, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import JobSeekerDetails from "../../../../views/JobSeeker/HireForm/JobSeekerDetails";
import {Checkbox} from "@material-ui/core";
import {getJobApplication} from "../../../../store/actions/jobAction";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import CustomLoader from "../../../../lib/customLoader";
import {useTheme} from "@material-ui/styles";
import {HireStyle} from "./style";


const HireJobSeeker = (props) => {
  const theme = useTheme()
  const classes = HireStyle(theme);
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()

  const {initialLoader, applicationDetails} = props
  const {applicant_details} = applicationDetails
  const {related_job} = applicationDetails

  const router = useRouter()
  const {id} = router.query;
  useEffect(() => {
    id && dispatch(getJobApplication(id));
  }, [id])

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <NoSsr>
      {initialLoader ? <CustomLoader/> :
        <>
          <JobSeekerDetails avatar={applicant_details.avatar} name={applicant_details.name}/>
          <JobSeekerHireForm applicationDetails={applicationDetails}/>
          <JobDetails details={related_job}/>
          <Paper>
            <div className={`${classes.hireWrapper}__checkbox-title-wrapper`}>
              <span>
                <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                  className={`${classes.hireWrapper}__checkbox`}
                />
              </span>
              <h4>Yes, I understand and agree</h4>
            </div>

            <div className={`${classes.hireWrapper}__buttons-wrapper`}>
              <span className={`${classes.hireWrapper}__confirm-button-wrapper`}>
                <Button
                  variant="contained"
                  className={`${classes.hireWrapper}__button`}
                  disabled={!checked}
                >
                  Confirm
                </Button>
              </span>
              <Link href={`/job-application/${applicationDetails.id}/details`}>
                <Button
                  variant="contained"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </Paper>
        </>}
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    applicationDetails: state.allJobs.jobApplication,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(HireJobSeeker));
