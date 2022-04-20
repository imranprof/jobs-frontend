import {useTheme} from "@material-ui/core/styles";

import RowHeading from "./rowHeading";
import RowContent from "./rowContent";
import {ResumeStyle} from "../style";

const ResumeCards = ({cardData, cardType}) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;

  return (
    <div className={`${resumeWrapper}__nav-content`}>
      <RowHeading cardType={cardType} cardData={cardData}/>
      <RowContent cardType={cardType} cardData={cardData}/>
    </div>
  );
}

export default ResumeCards;
