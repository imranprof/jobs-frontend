import {useEffect} from "react";
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";

import {capitalize, NoSsr, Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../../../../views/Layout";
import {DetailsStyle} from "./style";
import DetailsHeader from "../../../../views/Profile/Jobs/Application/detailsHeader";
import CoverLetterWrapper from "../../../../views/Profile/Jobs/Application/coverLetterWrapper";
import {getJobApplication} from "../../../../store/actions/jobAction";
import CustomLoader from "../../../../lib/customLoader";

const Details = (props) => {
  const theme = useTheme();
  const classes = DetailsStyle(theme);
  const dispatch = useDispatch()
  const {applicationDetails, initialLoader} = props

  const router = useRouter()
  const {id} = router.query;
  useEffect(()=> {
    id && dispatch(getJobApplication(id));
  },[id])

  return (
    <NoSsr>
      {initialLoader ? (<CustomLoader/>) : (
        <Paper elevation={3} className={classes.detailsWrapper}>
        <>
          <DetailsHeader applicationData={applicationDetails} />
          <Divider className={`${classes.detailsWrapper}__divider`} />

          <div>
            <h4 className={`${classes.detailsWrapper}__applicant-header`}>Applicant</h4>
            <p className={`${classes.detailsWrapper}__applicant`}>
              <em>{capitalize(applicationDetails.applicant_details.name)}</em> has applied to or been invited to your or your company's job <span className={`${classes.detailsWrapper}__applicant-title`}>{applicationDetails.related_job.title}</span>
            </p>
          </div>

          <Divider className={`${classes.detailsWrapper}__divider`} />
          <CoverLetterWrapper applicationData={applicationDetails} />
        </>
      </Paper>)}
    </NoSsr>
  );
};

const mapStateToProps = (state) => {
  return {
    applicationDetails: state.allJobs.jobApplication,
    initialLoader: state.allJobs.initialLoader
  }
}

export default connect(mapStateToProps)(withLayout(Details, ''));
