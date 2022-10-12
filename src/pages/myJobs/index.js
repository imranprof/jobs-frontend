import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import withLayout from "../../views/Layout";
import {getAllJobOffer, getIndividualJobs} from "../../store/actions/jobAction";
import Job from "../../views/Job";
import {getRole} from "../../auth/operations";
import {NoSsr} from "@material-ui/core";
import SectionHeader from "../../lib/sectionHeader";
import JobOffer from "../../views/Job/Offer";

const EmployeeJobs = (props) => {
  const dispatch = useDispatch()
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
            <div style={{display: "flex", marginBottom: 20, width: 210, justifyContent: "space-between"}}>
              <div>
                <span onClick={() => handleCardType('applied')}
                      style={{cursor: "pointer"}}><h3 style={{marginBottom: 5}}>Applied({jobList.length})</h3></span>
                {cardType === 'applied' && <hr style={{border: "2px solid #2264C4", borderRadius: 5}}/>}
              </div>
              <div style={{marginLeft: 20}}>
                <span onClick={() => handleCardType('offer')}
                      style={{cursor: "pointer"}}><h3 style={{marginBottom: 5}}>Offer({jobOfferList.length})</h3></span>
                {cardType === 'offer' && <hr style={{border: "2px solid #2264C4", borderRadius: 5}}/>}
              </div>
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
