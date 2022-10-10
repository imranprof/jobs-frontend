import React, {useEffect} from 'react';

import withLayout from "../../../../views/Layout";
import JobSeekerHireForm from "../../../../views/JobSeeker/HireForm";
import {NoSsr} from "@material-ui/core";
import {useRouter} from "next/router";
import JobSeekerDetails from "../../../../views/JobSeeker/HireForm/JobSeekerDetails/JobSeekerDetails";
import {getJobApplication} from "../../../../store/actions/jobAction";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import CustomLoader from "../../../../lib/customLoader";


const HireJobSeeker = (props) => {
  const dispatch = useDispatch()

  const {initialLoader, applicationDetails} = props
  const {applicant_details} = applicationDetails

  const router = useRouter()
  const {id} = router.query;
  useEffect(() => {
    id && dispatch(getJobApplication(id));
  }, [id])

  return (
    <NoSsr>
      {initialLoader ? <CustomLoader/> :
        <>
          <JobSeekerDetails avatar={applicant_details.avatar} name={applicant_details.name} email={applicant_details.email}/>
          <JobSeekerHireForm applicationDetails={applicationDetails}/>
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
