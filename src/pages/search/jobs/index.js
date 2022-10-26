import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";
import {Hidden, IconButton, NoSsr} from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

import withLayout from "../../../views/Layout";
import Job from "../../../views/Job";
import {getSearchJobs, getSearchValue} from "../../../store/actions/searchAction";
import {JobsStyle} from "../../jobs/style";
import CustomLoader from "../../../lib/customLoader";
import Filters from "../filters";
import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";

const JobSearch = (props) => {
  const theme = useTheme();
  const classes = JobsStyle(theme);
  const {searchJobList, initialLoader} = props
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    getSearchValue() && dispatch(getSearchJobs({
      job: {
        search_value: getSearchValue()
      }
    }))
  }, [])

  const openDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  return (
    <NoSsr>
      <div className={`${classes.jobsWrapper}__job-filters-wrapper`}>
        <Hidden smDown>
          <Filters />
        </Hidden>

        <div className={`${classes.jobsWrapper}__jobs`}>
          <div className={`${classes.jobsWrapper}__jobs-header`}>
            <h3 className={`${classes.jobsWrapper}__job-search-title`}>
              Results for "{getSearchValue()}"
            </h3>

            <Hidden mdUp>
              <Button
                size="small"
                variant="outlined"
                startIcon={<i className={FontAwesomeIcons.filter}/>}
                onClick={openDrawer}
              >
                Filters
              </Button>
            </Hidden>

            <SwipeableDrawer
              open={open}
              anchor="left"
              onOpen={openDrawer}
              onClose={closeDrawer}
            >
              <div className={`${classes.jobsWrapper}__filters-sidebar`}>
                <div className={`${classes.jobsWrapper}__filters-sidebar__wrapper`}>
                  <IconButton
                    className={`${classes.jobsWrapper}__filters-sidebar__wrapper__close-icon`}
                    onClick={closeDrawer}
                  >
                    <CloseIcon/>
                  </IconButton>
                </div>
                <Filters/>
              </div>
            </SwipeableDrawer>
          </div>

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

export default connect(mapStateToProps)(withLayout(JobSearch, ''));
