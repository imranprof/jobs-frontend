import {useTheme} from "@material-ui/core/styles";

import {JobShowStyle} from "./style";

const JobTooltip = ({coverLetter, bidRate, payType}) => {
  const theme = useTheme();
  const classes = JobShowStyle(theme);

  return (
    <div>
      <p className={`${classes.jobShowWrapper}__tooltip-coverLetter`}>{coverLetter}</p>
      <p className={`${classes.jobShowWrapper}__tooltip-bidRate`}>
        {`${payType === 'Pay by the hour' ? 'Hourly Rate:' : 'Bidding Rate:'} $${bidRate}`}
      </p>
    </div>
  );
};

export default JobTooltip;
