import {useState} from "react";

import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "../style";
import RemoveButton from "../../../../lib/removeButton";

const SkillsItem = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {cardContent, resumeItemRemoveHandler} = props;
  const [width, setWidth] = useState("");

  setTimeout(() => {
    setWidth(`${cardContent.rating}%`)
  }, 10);

  return (
    <div className={`${resumeWrapper}__nav-content__row__column__skills__wrapper`}>
      <div className={`${resumeWrapper}__nav-content__row__column__skills__wrapper-actionButtons`}>
        <span onClick={() => resumeItemRemoveHandler(cardContent)}>
          <RemoveButton />
        </span>
      </div>

      <h2 className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__title`}>
        {cardContent.name}
      </h2>
      <div className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__bar`}>
        <div
          className={`${resumeWrapper}__nav-content__row__column__skills__wrapper__bar__progress-bar`}
          style={{width: width}}>
          <span>{`${cardContent.rating}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default SkillsItem;
