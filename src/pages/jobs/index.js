import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import SectionHeader from "../../lib/sectionHeader";
import withLayout from "../../views/Layout";
import {getJobs} from "../../store/actions/jobsActions";
import CustomLoader from "../../lib/customLoader";
import Job from "../../views/Job";
import {JobsStyle} from "./style";

const Jobs = (props) => {
  const theme = useTheme();
  const classes = JobsStyle(theme);
  const dispatch = useDispatch()
  const {jobList, initialLoader} = props

  useEffect(() => {
    dispatch(getJobs())
  }, [])

  return (
    <div>
      <SectionHeader title="find the best jobs on SeekRightJobs"/>
      {initialLoader && <CustomLoader/>}

      <div className={classes.jobsWrapper}>
        {jobList.map((job) => <Job key={job.id} job={job}/>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.jobs,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(Jobs, ''));
