import moment from "moment";
import {useState} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "../style";
import AddButton from "../../../../lib/addButton";
import EditCustomModal from "../../../../lib/profile/editCustomModal";
import ResumeSkillsAdd from "../../AddComponents/resume/components/resumeSkillsAdd";
import ResumeEdit from "../../EditComponents/resume/components/resumeEdit";
import CustomSnackbar from "../../../../lib/customSnackbar";

const RowHeading = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {profileSlug, editPermission, cardType, cardData} = props;
  const isSkillCard = cardType === "skills";
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const [addResumeItem, setAddResumeItem] = useState(false);

  let startDate = 6000, endDate = -1;
  if (cardData.length === 0) {
    startDate = '0000';
    endDate = '0000';
  }
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

  const modalClose = () => {
    setAddResumeItem(false)
  }

  const getPermission = () => {
    return !!(profileSlug && editPermission);
  }

  return (
    <>
      <div className={`${resumeWrapper}__nav-content__row__heading`}>
        {!isSkillCard && <span>{startDate} - {endDate}</span>}
        <div className={`${resumeWrapper}__nav-content__row__heading__button_container`}>
          <h4>{cardType}</h4>
          {getPermission() &&
          <span onClick={() => setAddResumeItem(true)}>
          <AddButton tooltipTitle={`Add ${cardType}`}/>
        </span>
          }
          {
            addResumeItem &&
            <EditCustomModal handleClose={modalClose} open={addResumeItem}>
              {cardType === "skills" ?
                <ResumeSkillsAdd
                  cardType={cardType}
                  addMode={true}
                  handleClose={setAddResumeItem}
                  setToast={setToast}/> :
                <ResumeEdit
                  cardType={cardType}
                  addMode={true}
                  handleClose={setAddResumeItem}
                  setToast={setToast}
                />
              }
            </EditCustomModal>
          }
        </div>
      </div>
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    resume: state.resumeItems.resume,
    profileSlug: state.auth.profileSlug,
    editPermission: state.auth.editPermission
  }
}

export default connect(mapStateToProps)(RowHeading);
