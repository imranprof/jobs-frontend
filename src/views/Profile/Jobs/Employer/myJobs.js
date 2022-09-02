import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

import Job from "../../../Job";
import {getIndividualJobs, setIndividualJobs} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";
import CustomSnackbar from "../../../../lib/customSnackbar";
import EndMessage from "../../../../lib/endMessage";

const MyJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList} = props
  const [hasMore, setHasMore] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [toast, setToast] = useState({show: false, severity: "", text: ""});
  const [isDelete, setIsDelete] = useState(false);
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    dispatch(getIndividualJobs()).then(() => {
      if (jobList.length === 0) {
        setHasData(false)
      }
    })
    setJobs(jobList.slice(0, jobs.length + 8))
    return () => {
      dispatch(setIndividualJobs([]))
    }
  }, [isDelete, hasData])

  if ((jobList.length > jobs.length && hasMore === false) || (jobs.length === 0 && jobList.length > jobs.length)) {
    setJobs(jobList.slice(0, jobs.length + 8))
  }

  const fetchMoreData = () => {
    if (jobs.length === jobList.length && jobs.length !== 0) {
      setHasMore(false)
    } else if (jobList.length !== 0) {
      setTimeout(() => {
        setJobs(jobList.slice(0, jobs.length + 8))
      }, 1000)
    }
  }

  return (
    <>
      <div id="myJobs">
        <InfiniteScroll
          dataLength={jobs.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={(!hasData && jobList.length === 0) ? (<EndMessage title="Yay! You have seen it all"/>) : (
            <CustomLoader/>)}
          endMessage={<EndMessage title="Yay! You have seen it all"/>}
        >
          {jobs?.map((job) => <Job key={job.id} job={job} setToast={setToast} setIsDelete={setIsDelete}
                                   isDelete={isDelete} type={'myJob'}/>)}
        </InfiniteScroll>
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
