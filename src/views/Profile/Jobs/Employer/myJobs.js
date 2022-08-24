import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

import Job from "../../../Job";
import {getIndividualJobs} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";

const MyJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList, initialLoader} = props

  useEffect(()=> {
    dispatch(getIndividualJobs())
  },[])

  return (
    <div>
      {initialLoader && <CustomLoader/>}
      {jobList.map((job) => <Job key={job.id} job={job}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(MyJobs);
