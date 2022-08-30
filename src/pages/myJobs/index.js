import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import withLayout from "../../views/Layout";
import {getIndividualJobs} from "../../store/actions/jobAction";
import Job from "../../views/Job";
import {getRole} from "../../auth/operations";
import {NoSsr} from "@material-ui/core";
import SectionHeader from "../../lib/sectionHeader";

const EmployeeJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList, isAuthenticated} = props
  const role = getRole()
  useEffect(() => {
    if (role === "employee") {
      dispatch(getIndividualJobs());
    }
  }, [])

  const authTitle = 'You are not authorized to view this page!'

  return (
    <NoSsr>
      {(role && role === "employee" && isAuthenticated) ? (
          <div>
            <SectionHeader title="My Jobs"/>
            {jobList.map((job) => <Job key={job.id} job={job}/>)}
          </div>) :
        (
          <div><SectionHeader title={authTitle}/></div>
        )
      }
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
    initialLoader: state.allJobs.initialLoader,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(withLayout(EmployeeJobs, ''));
