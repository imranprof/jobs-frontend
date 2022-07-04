import {useState} from "react";

import {useTheme} from "@material-ui/core/styles";

import EditButton from "../../../../lib/editButton";
import RemoveButton from "../../../../lib/removeButton";
import MuiCustomModal from "../../../../lib/profile/muiCustomModal";
import ResumeSkillsEdit from "../../EditComponents/resume/components/resumeSkillsEdit";
import {ResumeStyle} from "../style";

const SkillsItem = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {cardType, cardContent, resumeItemRemoveHandler} = props;
  const [openModal, setOpenModal] = useState(false);
  const [width, setWidth] = useState("");

  setTimeout(() => {
    setWidth(`${cardContent.rating}%`)
  }, 10);

  const modalClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <div className={`${resumeWrapper}__nav-content__row__column__skills__wrapper`}>
        <div className={`${resumeWrapper}__nav-content__row__column__content__item__action-buttons`}>
          <span onClick={() => setOpenModal(true)}>
            <EditButton/>
          </span>
          <span onClick={() => resumeItemRemoveHandler(cardContent)}>
            <RemoveButton/>
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

      <MuiCustomModal handleClose={modalClose} open={openModal}>
        <ResumeSkillsEdit cardType={cardType} cardContent={cardContent} handleClose={modalClose} />
      </MuiCustomModal>
    </>
  );
}

export default SkillsItem;
