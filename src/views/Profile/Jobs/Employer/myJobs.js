import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

import Job from "../../../Job";
import {getIndividualJobs} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";
import CustomSnackbar from "../../../../lib/customSnackbar";

const MyJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList, initialLoader} = props
  const [toast, setToast] = useState({show: false, severity: "", text: ""});

  useEffect(()=> {
    dispatch(getIndividualJobs())
  },[])

  return (
    <>
      <div>
        {initialLoader && <CustomLoader/>}
        {jobList?.map((job) => <Job key={job.id} job={job} setToast={setToast}/>)}
      </div>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>

  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(MyJobs);
