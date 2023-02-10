import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {useTheme} from "@material-ui/core/styles";

import SectionHeader from "../../lib/sectionHeader";
import withLayout from "../../views/Layout";
import {getJobs} from "../../store/actions/jobsActions";
import CustomLoader from "../../lib/customLoader";
import Job from "../../views/Job";
import {JobsStyle} from "../../views/PagesStyle/jobs/style";
import EndMessage from "../../lib/endMessage";
import {getIndividualJobs} from "../../store/actions/jobAction";

const Jobs = (props) => {
  const theme = useTheme();
  const classes = JobsStyle(theme);
  const dispatch = useDispatch()
  const {jobList, initialLoader, isAuthenticated} = props

  const [hasMore, setHasMore] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobList.slice(0, jobs.length + 8))
    dispatch(getJobs())
    isAuthenticated && dispatch(getIndividualJobs())
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
      <SectionHeader title="find the best jobs on SeekRightJobs"/>
      {initialLoader && <CustomLoader/>}

      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={jobList.length === 0 ? (<EndMessage title="Yay! You have seen it all"/>) : (<CustomLoader/>)}
        endMessage={<EndMessage title="Yay! You have seen it all"/>}
      >
        <div className={classes.jobsWrapper}>
          {jobs?.map((job) => <Job key={job.id} job={job} type={'findJob'}/>)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.jobs,
    initialLoader: state.allJobs.initialLoader,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(withLayout(Jobs, ''));
