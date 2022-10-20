import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";
import {NoSsr} from "@material-ui/core";

import withLayout from "../../../views/Layout";
import Job from "../../../views/Job";
import {getSearchJobs, getSearchValue} from "../../../store/actions/searchAction";
import {JobsStyle} from "../../jobs/style";
import CustomLoader from "../../../lib/customLoader";
import Filters from "../filters";

const JobSearch = (props) => {
  const theme = useTheme();
  const classes = JobsStyle(theme);
  const {searchJobList, initialLoader} = props
  const dispatch = useDispatch()

  useEffect(()=> {
    getSearchValue() && dispatch(getSearchJobs(getSearchValue()))
  },[])

  return (
    <NoSsr>
      <div className={`${classes.jobsWrapper}__job-filters-wrapper`}>
        <Filters />
        <div>
          <h3 className={`${classes.jobsWrapper}__job-search-title`}>
            Results for "{getSearchValue()}"
          </h3>
          {initialLoader && <CustomLoader/>}
          <div className={classes.jobsWrapper}>
            {searchJobList?.map((job) => <Job key={job.id} job={job} type={'searchJob'}/>)}
          </div>
        </div>
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
