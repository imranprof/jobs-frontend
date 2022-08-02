import {useState} from "react";
import {connect} from "react-redux";
import Moment from "moment";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import EditButton from "../../../../lib/editButton";
import RemoveButton from "../../../../lib/removeButton";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import ResumeEdit from "../../EditComponents/resume/components/resumeEdit";
import {ResumeStyle} from "../style";

const ContentItem = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {cardType, cardContent, resumeItemRemoveHandler, editPermission, profileSlug} = props;
  const [openModal, setOpenModal] = useState(false);
  const title = (cardType === "educations") ? cardContent.institution : cardContent.company_name;
  const subTitle = `${Moment(cardContent.start_date).format('MMM, YYYY')}` +
    ` - ${Moment(cardContent.end_date).format('MMM, YYYY')}`;
  const description = cardContent.description;

  const modalClose = () => {
    setOpenModal(false)
  }

  const getPermission = () => {
    return !!(profileSlug && editPermission);
  }

  return (
    <>
      <Grid item container className={`${resumeWrapper}__nav-content__row__column__content__item`}>
        {getPermission() &&
        <div className={`${resumeWrapper}__nav-content__row__column__content__item__action-buttons`}>
          <span onClick={() => setOpenModal(true)}>
            <EditButton/>
          </span>
          <span onClick={() => resumeItemRemoveHandler(cardContent)}>
            <RemoveButton/>
          </span>
        </div>
        }
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

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <ResumeEdit
          cardType={cardType}
          cardContent={cardContent}
          title={title}
          description={description}
          handleClose={modalClose}
          setToast={props.setToast}
        />
      </EditCustomModal>
    </>
  );
}

const mapStateToProps = (state) => ({
  profileSlug: state.auth.profileSlug,
  editPermission: state.auth.editPermission
})

export default connect(mapStateToProps)(ContentItem);
