import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "../style";

const RowHeading = ({cardType}) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;

  return (
    <div className={`${resumeWrapper}__nav-content__row__heading`}>
      <span>{"2007 - 2010"}</span>
      <h4>{cardType} Quality</h4>
    </div>
  );
}

export default RowHeading;
