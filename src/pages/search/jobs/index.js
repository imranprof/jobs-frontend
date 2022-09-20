import React from 'react';
import withLayout from "../../../views/Layout";
import {connect} from "react-redux";
import Job from "../../../views/Job";
import {getSearchValue} from "../../../store/actions/searchAction";
import {JobsStyle} from "../../jobs/style";
import {useTheme} from "@material-ui/core/styles";
import {NoSsr} from "@material-ui/core";

const JobSearch = (props) => {
  const {searchJobList} = props
  const theme = useTheme();
  const classes = JobsStyle(theme);

  return (
    <NoSsr>
      <h2 className={`${classes.jobsWrapper}__job-search-title`}>
        Results for "{getSearchValue()}"
      </h2>
      <div className={classes.jobsWrapper}>
        {searchJobList?.map((job) => <Job key={job.id} job={job} type={'searchJob'}/>)}
      </div>

    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    searchJobList: state.allJobs.searchJobs,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(JobSearch,''));
