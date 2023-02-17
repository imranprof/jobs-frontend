import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch, connect} from "react-redux";

import withLayout from "../../../../views/Layout";
import SectionHeader from "../../../../lib/sectionHeader";
import {acceptHireAction, getJobOffer} from "../../../../store/actions/jobAction";
import {NoSsr, Paper} from "@material-ui/core";
import CustomLoader from "../../../../lib/customLoader";
import Button from '@material-ui/core/Button';
import {useTheme} from "@material-ui/core/styles";
import {JobOfferShowStyle} from "../../../../views/PagesStyle/job/offer/style";

const JobOfferShow = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query;
  const theme = useTheme();
  const classes = JobOfferShowStyle(theme);

  const {jobOffer, initialLoader} = props
  const {hire_rate, hire_confirmation, title} = jobOffer

  useEffect(() => {
    id && dispatch(getJobOffer(id))
  }, [id])

  const handleAcceptHire = (choice) => {
    dispatch(acceptHireAction(id, choice))
  }

  let status;

  if (hire_confirmation === true) {
    status = 'Accepted'
  } else {
    if (hire_confirmation !== null) {
      status = 'Declined'
    } else {
      status = 'Pending'
    }
  }

  let service_fee = (hire_rate * .05).toFixed(2)
  let receive_fee = (hire_rate - service_fee).toFixed(2)

  let buttonStatus = hire_confirmation !== null;

  return (
    <NoSsr>
      <SectionHeader title={"Show Offer"}/>
      {initialLoader ? <CustomLoader/> :
        <Paper className={classes.jobOfferShowWrapper}>
          <div className={`${classes.jobOfferShowWrapper}__offer-details-wrapper`}>
            <div className={`${classes.jobOfferShowWrapper}__buttons-details-wrapper`}>
              <div>
                <div className={`${classes.jobOfferShowWrapper}__title-description-wrapper`}>
                  <h4 className={`${classes.jobOfferShowWrapper}__title`}>Status: </h4>
                  <h4 className={`${classes.jobOfferShowWrapper}__description`}>{status}</h4>
                </div>
                <div className={`${classes.jobOfferShowWrapper}__title-description-wrapper`}>
                  <h4 className={`${classes.jobOfferShowWrapper}__title`}>Related Job Title: </h4>
                  <h4 className={`${classes.jobOfferShowWrapper}__description`}>{title}</h4>
                </div>
              </div>
              <div>
                <span>
                <Button variant="contained"
                        color="primary"
                        disabled={buttonStatus}
                        className={`${classes.jobOfferShowWrapper}__accept-btn`}
                        onClick={() => handleAcceptHire(true)}
                >Accept</Button>
                </span>
                <span>
                  <Button variant="contained"
                          color="secondary"
                          className={`${classes.jobOfferShowWrapper}__decline-btn`}
                          disabled={buttonStatus}
                          onClick={() => handleAcceptHire(false)}
                  >Decline</Button>
                </span>
              </div>
            </div>
            <hr/>
            <div className={`${classes.jobOfferShowWrapper}__title-description-wrapper`}>
              <h4 className={`${classes.jobOfferShowWrapper}__title`}>Proposed Rate: </h4>
              <h4>${hire_rate}</h4>
            </div>
            <div className={`${classes.jobOfferShowWrapper}__title-description-wrapper`}>
              <h4 className={`${classes.jobOfferShowWrapper}__title`}>Service Fee: </h4>
              <h4>${service_fee}</h4>
            </div>
            <div className={`${classes.jobOfferShowWrapper}__title-description-wrapper`}>
              <h4 className={`${classes.jobOfferShowWrapper}__title`}>You'll Receive: </h4>
              <h4>${receive_fee}</h4>
            </div>
          </div>
        </Paper>
      }
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    jobOffer: state.allJobs.jobOffer,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(JobOfferShow));
