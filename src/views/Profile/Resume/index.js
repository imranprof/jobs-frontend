import {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "./style";
import ResumeCards from "./components/resumeCards";
import NavList from "./components/navList";
import {getResumeAction} from "../../../store/actions/resumeActions";
import AddButton from "../../../lib/addButton";
import EditCustomModal from "../../../lib/profile/editCustomModal";
import CustomSnackbar from "../../../lib/customSnackbar";
import ResumeEdit from "../EditComponents/resume/components/resumeEdit";
import ResumeSkillsAdd from "../AddComponents/resume/components/resumeSkillsAdd";

const Resume = (props) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const {resume, userID} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const [addResumeItem, setAddResumeItem] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    userID && dispatch(getResumeAction({id: userID}))
  }, [])

  let resumeSections = [];
  for (let key in resume) {
    resumeSections.push(key);
  }

  const [selected, setSelected] = useState(0);
  const cardType = resumeSections[selected];
  const cardData = resume[cardType];

  const modalClose = () => {
    setAddResumeItem(false)
  }

  return (
    <>
      <div className={`${resumeWrapper}__addButton-container`}>
        <span onClick={() => setAddResumeItem(true)}>
          <AddButton tooltipTitle={`Add ${cardType}`}/>
        </span>
      </div>

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

      <div className={resumeWrapper} id="resume">
        <div className={`${resumeWrapper}__body`}>
          <NavList
            resumeSections={resumeSections}
            resumeClasses={resumeWrapper}
            selected={selected}
            setSelected={setSelected}
          />
          <ResumeCards cardData={cardData} cardType={cardType}/>
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
    userID: state.auth.userID,
  }
}

export default connect(mapStateToProps)(Resume);
