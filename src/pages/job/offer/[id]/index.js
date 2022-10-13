import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch, connect} from "react-redux";

import withLayout from "../../../../views/Layout";
import SectionHeader from "../../../../lib/sectionHeader";
import {acceptHireAction, getJobOffer} from "../../../../store/actions/jobAction";
import {NoSsr, Paper} from "@material-ui/core";
import CustomLoader from "../../../../lib/customLoader";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';

const JobOfferShow = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query;

  const {jobOffer, initialLoader} = props
  const {hire_rate, hire_confirmation, title} = jobOffer

  useEffect(() => {
    id && dispatch(getJobOffer(id))
  }, [id])

  const handleAcceptHire = (choice) => {
    dispatch(acceptHireAction(id, choice)).then(dispatch(getJobOffer(id)))
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
        <Paper style={{display: "flex"}}>
          <div style={{padding: 15, width: "70%"}}>
            <div style={{display: "flex"}}>
              <h4 style={{marginRight: 20}}>Status : </h4>
              <h4>{status}</h4>
            </div>
            <div style={{display: "flex"}}>
              <h4 style={{marginRight: 20}}>Job Title : </h4>
              <h4>{title}</h4>
            </div>
            <hr/>
            <div style={{display: "flex"}}>
              <h4 style={{marginRight: 20}}>Bid Rate : </h4>
              <h4>${hire_rate}</h4>
            </div>
            <div style={{display: "flex"}}>
              <h4 style={{marginRight: 20}}>Service Fee : </h4>
              <h4>${service_fee}</h4>
            </div>
            <div style={{display: "flex"}}>
              <h4 style={{marginRight: 20}}>You'll Receive : </h4>
              <h4>${receive_fee}</h4>
            </div>
          </div>
          <Divider orientation="vertical" flexItem/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "28%",
            marginTop: 20
          }}>
            <span style={{marginBottom: 10}}>
            <Button variant="contained"
                    color="primary"
                    disabled={buttonStatus}
                    onClick={() => handleAcceptHire(true)}
            >Accept Offer</Button>
            </span>
            <Button variant="contained"
                    color="secondary"
                    disabled={buttonStatus}
                    onClick={() => handleAcceptHire(false)}
            >Decline Offer</Button>
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