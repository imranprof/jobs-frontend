import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import withLayout from "../../views/Layout";
import {getAllJobOffer, getIndividualJobs} from "../../store/actions/jobAction";
import Job from "../../views/Job";
import {getRole} from "../../auth/operations";
import {NoSsr} from "@material-ui/core";
import SectionHeader from "../../lib/sectionHeader";
import JobOffer from "../../views/Job/Offer";
import {useTheme} from "@material-ui/core/styles";
import {MyJobsStyle} from "../../views/PagesStyle/myJobs/style";
import Divider from "@material-ui/core/Divider";

const EmployeeJobs = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme();
  const classes = MyJobsStyle(theme);
  const {jobList, isAuthenticated, jobOfferList} = props
  const [cardType, setCardType] = useState('applied')
  const role = getRole()
  useEffect(() => {
    if (role === "employee") {
      dispatch(getIndividualJobs());
      dispatch(getAllJobOffer());
    }
  }, [])

  const handleCardType = (type) => {
    setCardType(type)
  }

  const authTitle = 'You are not authorized to view this page!'

  return (
    <NoSsr>
      {(role && role === "employee" && isAuthenticated) ? (
          <>
            <SectionHeader title={'My Jobs'}/>
            <div>
              <div className={`${classes.myJobsWrapper}__applied-offer-wrapper`}>
                <div className={`${classes.myJobsWrapper}__applied-title-wrapper`}>
                <span onClick={() => handleCardType('applied')}
                      className={`${classes.myJobsWrapper}__title-wrapper`}><h3
                  className={cardType === 'applied' ? `${classes.myJobsWrapper}__selected-title` : `${classes.myJobsWrapper}__title`}>Applied({jobList.length})</h3></span>
                  {cardType === 'applied' && <hr className={`${classes.myJobsWrapper}__select-line`}/>}
                </div>
                <div>
                <span onClick={() => handleCardType('offer')}
                      className={`${classes.myJobsWrapper}__title-wrapper`}><h3
                  className={cardType === 'offer' ? `${classes.myJobsWrapper}__selected-title` : `${classes.myJobsWrapper}__title`}>Offer({jobOfferList.length})</h3></span>
                  {cardType === 'offer' && <hr className={`${classes.myJobsWrapper}__select-line`}/>}
                </div>
              </div>
              <Divider className={`${classes.myJobsWrapper}__mui-divider`}/>
            </div>
            {
              cardType === 'offer' ? jobOfferList.map((offer) => <JobOffer key={offer.id} offer={offer}/>)
                :
                jobList.map((job) => <Job key={job.id} job={job}/>)
            }
          </>) :
        (
          <div><SectionHeader title={authTitle}/></div>
        )
      }
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    jobList: state.allJobs.individualJobs,
    initialLoader: state.allJobs.initialLoader,
    isAuthenticated: state.auth.isAuthenticated,
    jobOfferList: state.allJobs.jobOfferList
  }
}

export default connect(mapStateToProps)(withLayout(EmployeeJobs, ''));
