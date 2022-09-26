import {useTheme} from "@material-ui/core/styles";

import {JobApplicationStyle} from "./style";

const CoverLetterWrapper = ({applicationData}) => {
  const theme = useTheme();
  const classes = JobApplicationStyle(theme);

  return (
    <div>
      <div className={`${classes.jobApplicationWrapper}__wrapper`}>
        <h2>Proposal Details</h2>
        <div className={`${classes.jobApplicationWrapper}__wrapper-bid`}>
          <p className={`${classes.jobApplicationWrapper}__wrapper-bid-rate`}>
            {`$${applicationData.bid_rate}${applicationData.jobPayType === 'Pay by the hour' ? '/hr' : ''}`}
          </p>
          <span>Proposed bid</span>
        </div>
      </div>

      <h4>Cover letter</h4>
      <p className={`${classes.jobApplicationWrapper}__cover-letter`}>{applicationData.cover_letter}</p>
    </div>
  );
};

export default CoverLetterWrapper;
