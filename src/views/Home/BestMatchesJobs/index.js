import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {BestMatchesJobsStyle} from "./style";
import {getBestMatchesJobs, getIndividualJobs, getMostRecentJobs} from "../../../store/actions/jobAction";
import SectionHeader from "../../../lib/sectionHeader";
import Job from "../../Job";
import {setPage} from "../../../store/actions/jobAction";
import CustomLoader from "../../../lib/customLoader";
import EndMessage from "../../../lib/endMessage";
import MostRecentJobs from "./mostRecentJobs";

const BestMatchesJobs = (props) => {
  const theme = useTheme();
  const classes = BestMatchesJobsStyle(theme);
  const dispatch = useDispatch()
  const {bestMatchesJobsList, mostRecentJobsList, role, page, initialLoader, set} = props
  const [cardType, setCardType] = useState('best-matches')
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (role === "employee") {
      dispatch(getIndividualJobs());
      dispatch(getBestMatchesJobs());
      dispatch(setPage(0));
      dispatch(getMostRecentJobs(mostRecentJobsList, page));
    }
  }, [])

  const handleCardType = (type) => {
    setCardType(type)
  }

  const fetchJobs = () => {
    if (mostRecentJobsList.length % 2 > 0) {
      setHasMore(false);
    } else {
      dispatch(getMostRecentJobs(mostRecentJobsList, page));
      setHasMore(true);
    }
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

      {initialLoader && <CustomLoader/>}

      {cardType === 'most-recent' ?
          (<InfiniteScroll
            dataLength={mostRecentJobsList.length}
            next={fetchJobs}
            loader={((mostRecentJobsList.length % 2 !== 0) || (mostRecentJobsList.length === 0) || (page > 1 && mostRecentJobsList.length % 2 === 0) || !set) ?
              <EndMessage title="Yay! You have seen it all"/> : (<CustomLoader/>)}
            hasMore={hasMore}
            endMessage={<EndMessage title="Yay! You have seen it all"/>}
          >
            <MostRecentJobs mostRecentJobsList={mostRecentJobsList} />
          </InfiniteScroll>) :
          bestMatchesJobsList.map((job) => <Job key={job.id} job={job} role={role}/>)
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bestMatchesJobsList: state.allJobs.bestMatchesJobs,
    mostRecentJobsList: state.allJobs.mostRecentJobs,
    page: state.allJobs.page,
    initialLoader: state.allJobs.initialLoader,
    set: state.allJobs.set
  }
}

export default connect(mapStateToProps)(BestMatchesJobs);
