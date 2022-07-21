import moment from "moment";

import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "../style";

const RowHeading = ({cardType, cardData}) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const isSkillCard = cardType === "skills";

  let startDate = 6000, endDate = -1;
  if (!isSkillCard) {
    for (let i = 0; i < cardData.length; i++) {
      let tempSDate = parseInt(moment(cardData[i].start_date).format('YYYY'), 10);
      let tempEDate = parseInt(moment(cardData[i].end_date).format('YYYY'), 10);

      if (startDate > tempSDate) {
        startDate = tempSDate;
      }
      if (endDate < tempEDate) {
        endDate = tempEDate;
      }

    }
  }

  return (
    <div className={`${resumeWrapper}__nav-content__row__heading`}>
      {!isSkillCard && <span>{startDate} - {endDate}</span>}
      <h4>{cardType}</h4>
    </div>
  );
}

export default RowHeading;
