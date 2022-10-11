import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";

import {NoSsr} from "@material-ui/core";

import withLayout from "../../../../views/Layout";
import JobSeekerHireForm from "../../../../views/JobSeeker/HireForm";
import {getJobApplication} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";


const HireJobSeeker = (props) => {
  const dispatch = useDispatch()

  const {initialLoader, applicationDetails} = props
  const router = useRouter()
  const {id} = router.query;
  useEffect(() => {
    id && dispatch(getJobApplication(id));
  }, [id])

  return (
    <NoSsr>
      {initialLoader ? <CustomLoader/> :
        <>
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
