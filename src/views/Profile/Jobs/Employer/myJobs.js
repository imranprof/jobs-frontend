import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

import Job from "../../../Job";
import {getIndividualJobs} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";
import EndMessage from "../../../../lib/endMessage";

const MyJobs = (props) => {
  const dispatch = useDispatch()
  const {jobList, initialLoader} = props
  const [hasMore, setHasMore] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobList.slice(0, jobs.length + 8))
    dispatch(getIndividualJobs())
  }, [])

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
    <div>
      {initialLoader && <CustomLoader/>}
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={jobList.length===0 ? (<EndMessage title="Yay! You have seen it all"/> ) : (<CustomLoader/>)}
        endMessage={<EndMessage title="Yay! You have seen it all"/>}
      >
        {jobs.map((job) => <Job key={job.id} job={job} />)}
      </InfiniteScroll>
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
