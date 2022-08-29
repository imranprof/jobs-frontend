import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import withLayout from "../../views/Layout";
import {getIndividualJobs} from "../../store/actions/jobAction";
import Job from "../../views/Job";
import {getRole} from "../../auth/operations";
import {NoSsr} from "@material-ui/core";

const EmployeeJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList} = props
  const role = getRole()

  useEffect(()=>{
    dispatch(getIndividualJobs())
  },[])

  if (role && role === "employee") {
    return (
      <>
        {jobList.map((job) => <Job key={job.id} job={job} />)}
      </>
    )
  } else {
    return (
      <NoSsr><h1>You are not authorized to view this page!</h1></NoSsr>
    )
  }

};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(EmployeeJobs, ''));
