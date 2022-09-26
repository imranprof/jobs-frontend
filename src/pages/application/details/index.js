import {capitalize, NoSsr, Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";

import withLayout from "../../../views/Layout";
import {DetailsStyle} from "./style";
import DetailsHeader from "../../../views/Profile/Jobs/Application/detailsHeader";
import CoverLetterWrapper from "../../../views/Profile/Jobs/Application/coverLetterWrapper";
import {getApplicationDetails} from "../../../store/actions/jobAction";

const Details = () => {
  const theme = useTheme();
  const classes = DetailsStyle(theme);

  let applicationData = getApplicationDetails()
  if (applicationData) {
    applicationData = JSON.parse(applicationData)
  }

  const firstName = applicationData?.profile_slug.split("-")[0]

  return (
    <NoSsr>
      <Paper elevation={3} className={classes.detailsWrapper}>
        {typeof applicationData === 'object' && (
          <>
            <DetailsHeader applicationData={applicationData} />
            <Divider className={`${classes.detailsWrapper}__divider`} />

            <div>
              <h4 className={`${classes.detailsWrapper}__applicant-header`}>Applicant</h4>
              <p className={`${classes.detailsWrapper}__applicant`}>
                <em>{capitalize(firstName)}</em> has applied to or been invited to your or your company's job <span className={`${classes.detailsWrapper}__applicant-title`}>{applicationData.jobTitle}</span>
              </p>
            </div>

            <Divider className={`${classes.detailsWrapper}__divider`} />
            <CoverLetterWrapper applicationData={applicationData} />
          </>
        )}
      </Paper>
    </NoSsr>
  );
};

export default withLayout(Details, '');
