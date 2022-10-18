import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {BestMatchesJobsStyle} from "./style";
import {getBestMatchesJobs, getIndividualJobs, getMostRecentJobs} from "../../../store/actions/jobAction";
import SectionHeader from "../../../lib/sectionHeader";
import Job from "../../Job";

const BestMatchesJobs = (props) => {
  const theme = useTheme();
  const classes = BestMatchesJobsStyle(theme);
  const dispatch = useDispatch()
  const {bestMatchesJobsList, mostRecentJobsList, role} = props
  const [cardType, setCardType] = useState('best-matches')

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
    <>
      <SectionHeader title={'Jobs you might like'}/>
      <div>
        <div className={classes.bestMatchesJobsWrapper}>
          <div className={`${classes.bestMatchesJobsWrapper}__best-matches-header-wrapper`}>
            <span
              onClick={() => handleCardType('best-matches')}
              className={`${classes.bestMatchesJobsWrapper}__title-wrapper`}
            >
              <h3 className={cardType === 'best-matches' ? `${classes.bestMatchesJobsWrapper}__selected-title` : `${classes.bestMatchesJobsWrapper}__title`}>
                Best Matches
              </h3>
            </span>
            {cardType === 'best-matches' && <hr className={`${classes.bestMatchesJobsWrapper}__select-line`}/>}
          </div>
          <div>
            <span
              onClick={() => handleCardType('most-recent')}
              className={`${classes.bestMatchesJobsWrapper}__title-wrapper`}
            >
              <h3 className={cardType === 'most-recent' ? `${classes.bestMatchesJobsWrapper}__selected-title` : `${classes.bestMatchesJobsWrapper}__title`}>
                Most Recent
              </h3>
            </span>
            {cardType === 'most-recent' && <hr className={`${classes.bestMatchesJobsWrapper}__select-line`}/>}
          </div>
        </div>
        <Divider className={`${classes.bestMatchesJobsWrapper}__mui-divider`}/>
      </div>
      {cardType === 'most-recent' ?
        mostRecentJobsList.map((job) => <Job key={job.id} job={job} role={role}/>) :
        bestMatchesJobsList.map((job) => <Job key={job.id} job={job} role={role}/>)
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bestMatchesJobsList: state.allJobs.bestMatchesJobs,
    mostRecentJobsList: state.allJobs.mostRecentJobs,
  }
}

export default connect(mapStateToProps)(BestMatchesJobs);
