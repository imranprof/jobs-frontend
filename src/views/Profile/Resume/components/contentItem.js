import {useState} from "react";
import {connect} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import EditButton from "../../../../lib/editButton";
import RemoveButton from "../../../../lib/removeButton";
import MuiCustomModal from "../../../../lib/profile/muiCustomModal";
import ResumeEdit from "../../EditComponents/resume/components/resumeEdit";
import {ResumeStyle} from "../style";
import {resumeItemRemove} from "../../../../store/actions/resumeActions";

const ContentItem = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {cardType, cardContent} = props;
  const [openModal, setOpenModal] = useState(false);
  const title = (cardType === "education") ? cardContent.institution : cardContent.title;
  const subTitle = `${cardContent.startDate} - ${cardContent.endDate}`;
  const description = cardContent.description;

  const modalClose = () => {
    setOpenModal(false)
  }

  const resumeItemRemoveHandler = (item) => {
    if (props.resume[cardType].length > 1) {
      props.resume[cardType] = props.resume[cardType].filter(content => content.id !== item.id)

      props.setResumeItemRemove({...props.resume})
    } else {
      alert(`You must have at least one ${cardType}!`)
    }
  }

  return (
    <>
      <Grid item container className={`${resumeWrapper}__nav-content__row__column__content__item`}>
        <div className={`${resumeWrapper}__nav-content__row__column__content__item__action-buttons`}>
          <span onClick={() => setOpenModal(true)}>
            <EditButton/>
          </span>
          <span onClick={() => resumeItemRemoveHandler(cardContent)}>
            <RemoveButton/>
          </span>
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
          cardContent={cardContent}
          title={title}
          description={description}
          handleClose={modalClose}
        />
      </MuiCustomModal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    resume: state.editResume.resume
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResumeItemRemove: (values) => dispatch(resumeItemRemove(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentItem);
