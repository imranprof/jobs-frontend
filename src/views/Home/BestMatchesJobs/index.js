import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {BestMatchesJobsStyle} from "./style";
import {getRole} from "../../../auth/operations";
import {getBestMatchesJobs, getIndividualJobs, getMostRecentJobs} from "../../../store/actions/jobAction";
import SectionHeader from "../../../lib/sectionHeader";
import Job from "../../Job";
import {NoSsr} from "@material-ui/core";

const BestMatchesJobs = (props) => {
  const theme = useTheme();
  const classes = BestMatchesJobsStyle(theme);
  const dispatch = useDispatch()
  const {bestMatchesJobsList, mostRecentJobsList, isAuthenticated} = props
  const [cardType, setCardType] = useState('best-matches')
  const role = getRole()

  useEffect(() => {
    if (role === "employee") {
      dispatch(getIndividualJobs());
      dispatch(getBestMatchesJobs());
      dispatch(getMostRecentJobs());
    }
  }, [])

  const handleCardType = (type) => {
    setCardType(type)
  }

  return (
    <NoSsr>
      {(role && role === "employee" && isAuthenticated) && (
          <>
            <SectionHeader title={'Jobs you might like'}/>
            <div>
              <div className={classes.bestMatchesJobsWrapper}>
                <div className={`${classes.bestMatchesJobsWrapper}__best-matches-header-wrapper`}>
                <span onClick={() => handleCardType('best-matches')}
                      className={`${classes.bestMatchesJobsWrapper}__title-wrapper`}><h3
                  className={cardType === 'best-matches' ? `${classes.bestMatchesJobsWrapper}__selected-title` : `${classes.bestMatchesJobsWrapper}__title`}>Best Matches</h3></span>
                  {cardType === 'best-matches' && <hr className={`${classes.bestMatchesJobsWrapper}__select-line`}/>}
                </div>
                <div>
                <span onClick={() => handleCardType('most-recent')}
                      className={`${classes.bestMatchesJobsWrapper}__title-wrapper`}><h3
                  className={cardType === 'most-recent' ? `${classes.bestMatchesJobsWrapper}__selected-title` : `${classes.bestMatchesJobsWrapper}__title`}>Most Recent</h3></span>
                  {cardType === 'most-recent' && <hr className={`${classes.bestMatchesJobsWrapper}__select-line`}/>}
                </div>
              </div>
              <Divider className={`${classes.bestMatchesJobsWrapper}__mui-divider`}/>
            </div>
            {
              cardType === 'most-recent' ?
                mostRecentJobsList.map((job) => <Job key={job.id} job={job}/>) :
                bestMatchesJobsList.map((job) => <Job key={job.id} job={job}/>)
            }
          </>)
      }
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    bestMatchesJobsList: state.allJobs.bestMatchesJobs,
    mostRecentJobsList: state.allJobs.mostRecentJobs,
  }
}

export default connect(mapStateToProps)(BestMatchesJobs);
