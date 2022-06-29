import {useState} from "react";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import EditButton from "../../../../lib/editButton";
import RemoveButton from "../../../../lib/removeButton";
import MuiCustomModal from "../../../../lib/profile/muiCustomModal";
import ResumeEdit from "../../EditComponents/resume/components/resumeEdit";
import {ResumeStyle} from "../style";

const ContentItem = ({cardType, cardContent}) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const [openModal, setOpenModal] = useState(false);

  const title = (cardType === "education") ? cardContent.institution : cardContent.title;
  const subTitle = `${cardContent.startDate} - ${cardContent.endDate}`;
  const description = cardContent.description;

  const modalClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Grid item container className={`${resumeWrapper}__nav-content__row__column__content__item`}>
        <div className={`${resumeWrapper}__nav-content__row__column__content__item__action-buttons`}>
        <span onClick={() => setOpenModal(true)}>
          <EditButton />
        </span>
          <RemoveButton />
        </div>
        <div className={`${resumeWrapper}__nav-content__row__column__content__item__inner`}>
          <Grid className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading`}>
            <div className={`${resumeWrapper}__nav-content__row__column__content__item__inner__heading__title`}>
              <h4>{title}</h4>
              <span>{subTitle}</span>
            </div>
          </Grid>
          <Grid className={`${resumeWrapper}__nav-content__row__column__content__item__inner__description`}>
            <p>{description}</p>
          </Grid>
        </div>
      </Grid>

      <MuiCustomModal handleClose={modalClose} open={openModal}>
        <ResumeEdit
          cardType={cardType}
          title={title}
          description={description}
          handleClose={modalClose}
          cardId={cardContent.id}
        />
      </MuiCustomModal>
    </>
  );
}

export default ContentItem;
